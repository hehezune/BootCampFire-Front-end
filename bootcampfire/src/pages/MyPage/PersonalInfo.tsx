import styled from 'styled-components';
import { LightBtn, Bold15px, StrongBtn, Normal15px } from 'components/Board/styled';
import { colors } from 'constant/constant';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useState, useRef } from 'react';
import type { RootState } from 'store';
import { useSelector } from 'react-redux';
import { bootcamp as bootcampList } from 'constant/constant';
import axios from 'axios';
import useCheckFileSize from 'constant/useCheckFileSize';
import useCheckImageExtension from 'constant/useCheckImageExtension';
import AWS from 'aws-sdk';
import { useDispatch } from 'react-redux';
import { login } from 'store/authSlice';

const duplicateMsg = ['중복 검사가 필요합니다.', '사용 가능한 닉네임입니다.', '이미 사용중인 닉네임입니다.'];
const accessToken = localStorage.getItem("Authorization");
AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

function PersonalInfo() {
  const isRightFileSize = useCheckFileSize;
  const isRightCheckImageExtension = useCheckImageExtension;
  const { nickname, bootcampId, email, bojId, userId, bootcampName} = useSelector((state: RootState) => state.auth);
  const [enteredNickName, setEneteredNickName] = useState(nickname ?? '');
  const [duplicateState, setDuplicateState] = useState(0);
  const [enteredBojId, setEnteredBojId] = useState(bojId);
  const [isSendCertify, setIsSendCertify] = useState(true);
  const [fileName, setFileName] = useState<string | undefined>();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch()

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fullName = event.target.value.split('\\').pop() ?? "";

    if (inputFileRef.current && inputFileRef.current.files && inputFileRef.current.files.length > 0) {
      const imageFile = inputFileRef.current?.files[0];
      if (!isRightCheckImageExtension(imageFile.name.split('.').pop())) {
        alert("이미지 파일을 업로드해주세요.");
        inputFileRef.current.files = null;
        setFileName("");
        return ;
      }
      if (!isRightFileSize(imageFile.size)) {
        alert("5MB 이하의 사진을 업로드해주세요.");
        inputFileRef.current.files = null;
        setFileName("");
        return ;
      }
      setFileName(fullName);
      if (fullName?.length > 0) {
        setIsSendCertify(false);
      }
    }
  }

  const handlerNickNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEneteredNickName(event.target.value);
  };

  // 중복 인증 axios 요청하기, enteredNickName 사용
  const handlerDuplicateNickname = () => {
    if (enteredNickName.length === 0) {
      setDuplicateState(0);
      return ;
    }

    if (enteredNickName === nickname) {
      setDuplicateState(1);
      return ;
    }

    axios.post(`${process.env.REACT_APP_API_URL}/users/duplication`, { nickname: enteredNickName }).then((res) => {
      if (res.data.message.split(' ')[0] === '이미') {
        setDuplicateState(2);
      } else {
        setDuplicateState(1);
      }
    });
  };

  const handelrCertifyCamp = () => {
    // 소속 인증 요청, 로그인 완료 후 뭔가 작업해야 하는듣ㅅ?
    axios.post(`${process.env.REACT_APP_API_URL}/users/confirm`)
    .then((res) => setIsSendCertify(true))
    .catch((err) => {setIsSendCertify(false);})
  };

  const handlerSubmitInfo = async () => {
    let url = "";
    let fileNameToUpload = "";

    if (enteredNickName !== nickname && duplicateState !== 1) {
      // 닉네임을 입력하였으나 적합 판정을 받지 못한 경우
      window.alert('적합한 nickname을 입력해주세요.');
      return ;
    }

    const numberOfFile = inputFileRef.current?.files?.length ?? 0;

    if (inputFileRef.current?.files !== null && numberOfFile > 0) {
      // 파일 업로드 진행
      if (!isSendCertify) {
        window.alert("인증 요청을 눌러주세요!");
        return ;
      }
      const now = new Date();
      fileNameToUpload = userId + now.toUTCString();
      await uploadImg(inputFileRef.current?.files, fileNameToUpload);
    }

    const request = {
      nickname: enteredNickName,
      bojId: enteredBojId,
      imgUrl: fileNameToUpload,
    }

    await axios.put(`${process.env.REACT_APP_API_URL}/users`, request, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        withCredentials: true,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    try {
      const newUserInfo = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });

      dispatch(login({
        userId: newUserInfo.data.data.id,
        nickname: newUserInfo.data.data.nickname,
        email: newUserInfo.data.data.email,
        isAdmin: newUserInfo.data.data.role === 'USER' ? false : true,
        bootcampName: newUserInfo.data.data.bootcampName,
        bootcampId: newUserInfo.data.data.bootcampId,
        bojId: newUserInfo.data.data.bojId,
      }))
      window.location.reload();

    } catch (err) {console.log(err)}
    
  };

  const handlerBojIdInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredBojId(event.target.value);
  };

  const handlerUploadBtn = () => {
    inputFileRef.current?.click();
    console.log(inputFileRef.current?.files);
  };

  return (
    <WarpperStyledPersonalInfo>
      <StyledPersonalInfo>
        <StyledForm>
          <RowDiv>
            <ColomnDiv>
              <InputDiv style={{ position: 'relative' }}>
                <StyledBold15px as="label" htmlFor="nickName">
                  닉네임
                </StyledBold15px>
                <StyledInput type="text" id="nickname" value={enteredNickName} onChange={handlerNickNameInput} />
                <DuplicateCheckMsg type={duplicateState}>{duplicateMsg[duplicateState]}</DuplicateCheckMsg>
              </InputDiv>

              <InputDiv>
                <StyledBold15px as="label" htmlFor="bojId">
                  BOJ ID
                </StyledBold15px>
                <StyledInput type="text" id="bojId" value={enteredBojId} onChange={handlerBojIdInput} />
              </InputDiv>

              <InputDiv>
                <StyledBold15px as="label" htmlFor="camp">
                  소속
                </StyledBold15px>
                <StyledInput type="text" value={bootcampName} id="camp" readOnly />
              </InputDiv>

              <InputDiv>
                <StyledBold15px as="label" htmlFor="file">
                  인증 사진
                </StyledBold15px>
                <StyledInput type="file" id="file" ref={inputFileRef} onChange={handleUploadFile}/>
                <ImgUploadDiv as="div" onClick={handlerUploadBtn}>
                  <FileInputText as="span">{fileName}</FileInputText>
                  <StyledFileUploadOutlinedIcon
                    sx={{ marginRight: 1, color: colors.TEXT_NORMAL }}
                    className="icon"
                  />
                </ImgUploadDiv>
              </InputDiv>

              <InputDiv>
                <StyledBold15px as="label" htmlFor="email">
                  이메일
                </StyledBold15px>
                <StyledInput type="email" value={email} id="email" readOnly />
              </InputDiv>
            </ColomnDiv>
            <ColomnDiv>
              <StyledLightBtn type="first" onClick={handlerDuplicateNickname}>
                중복확인
              </StyledLightBtn>
              <InvisibileLightBtn type="first">fasd</InvisibileLightBtn>
              <InvisibileLightBtn type="first">asfd</InvisibileLightBtn>
              <StyledLightBtn type="first" onClick={handelrCertifyCamp}>
                소속 인증하기
              </StyledLightBtn>
              <InvisibileLightBtn type="first">asfd</InvisibileLightBtn>
            </ColomnDiv>
          </RowDiv>
          <StrongBtn type="first" onClick={handlerSubmitInfo}>
            수정하기
          </StrongBtn>
        </StyledForm>
      </StyledPersonalInfo>
    </WarpperStyledPersonalInfo>
  );
}

const uploadImg = async (files: FileList | undefined, name: string) => {
  if (!files) return;
  const imageFile = files[0];

  const uploadToS3 = new AWS.S3.ManagedUpload({
    params: {
        Bucket: process.env.REACT_APP_AWS_BUCKER || 'default-bucket-name', // 버킷 이름
        Key: `certifyCamp/${name}.png`, 
        Body: imageFile, 
    },
  })

  const result = await uploadToS3.promise();
  try {
    console.log(result);
    return result;
  } catch (err) {
    console.error("Error uploading image:", err);
  }
}


const WarpperStyledPersonalInfo = styled.div`
  height: 800px;
  display: flex;
  align-items: center;

  /* .icon:hover {
    color: gold;
  } */
`;
const DuplicateCheckMsg = styled(Normal15px)<{ type: number }>`
  position: absolute;
  top: 74px;
  left: 130px;
  color: ${(props) => {
    switch (props.type) {
      case 1:
        return `blue`;
      case 2:
        return `red`;
    }
  }};
`;

const StyledFileUploadOutlinedIcon = styled(FileUploadOutlinedIcon)`
  &:hover {
    color: ${colors.SECONDARY};
  }
`
const StyledPersonalInfo = styled.div`
  margin: auto;
  min-width: 800px;
  width: 40%;
  max-width: 900px;
  height: 600px;
  border: 0.5px solid ${colors.TEXT_LIGHT};
  background-color: ${colors.BACKGROUND_LIGHT};
  border-radius: 25px;
`;

const FileInputText = styled(Bold15px)`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 25px;
`;

const StyledBold15px = styled(Bold15px)`
  display: inline-block;
  text-align: center;
  background-color: ${colors.WHITE};
  width: 118px;
  border: 1px solid ${colors.TEXT_LIGHT};
  height: 45px;
  padding: 0 0 0 0;
  line-height: 45px;
`;

const ImgUploadDiv = styled.div`
  background-color: ${colors.WHITE};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 348px;
  height: 45px;
  padding: 0;
  border: 1px solid ${colors.TEXT_LIGHT};
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const ColomnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputDiv = styled.div`
  display: flex;
  height: 85px;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 348px;
  height: 45px;
  padding: 0;
  border: 1px solid ${colors.TEXT_LIGHT};

  &[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

  &:read-only {
    background-color: ${colors.BACKGROUND_LIGHT};
    color: ${colors.TEXT_LIGHT};
    font-family: DM Sans;
    font-style: bold;
    margin: 0px;
  }
`;

const StyledLightBtn = styled(LightBtn)`
  margin: 29.5px 0;

  &:focus {
    color: black !important;
  }
`;

const InvisibileLightBtn = styled(StyledLightBtn)`
  visibility: hidden;
`;
export default PersonalInfo;
