import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  Bold15px,
  Bold18px,
  LightBtn,
  StrongBtn,
} from "components/Board/styled";
import { bootcamp } from "constant/constant";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import ManageRadioBtn from "components/Manager/ManageRadioBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "constant/constant";


const ManageCreate = () => {
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [selectOnOff, setSelectOnOff] = useState("");
  const [selectSupport, setSelectSupport] = useState("");
  const [selectCard, setSelectCard] = useState("");
  const [place, setPlace] = useState("");
  const [stack, setStack] = useState("");
  const [track, setTrack] = useState("");
  const navigate = useNavigate();

  const handleSelectStack = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    if (!selectedStacks.includes(value)) {
      setSelectedStacks([...selectedStacks, value]);
      setStack(value);
    }
    console.log(selectedStacks);
  };
  const handleSelectTrack = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    if (!selectedTracks.includes(value)) {
      setSelectedTracks([...selectedTracks, value]);
      setTrack(value);
    }
    console.log(selectedTracks);
  };
  const handleSelectPlace = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    if (!selectedPlaces.includes(value)) {
      setSelectedPlaces([...selectedPlaces, value]);
      setPlace(place);
    }
    console.log(selectedPlaces);
  };

  const addFile = () => {};

  const onCreateBootcamp = () => {
    const request = {
      name:"새 부트캠프",
      siteUrl:"aaaa",
      process:"aaaa",
      schedule:"2023년 3월 12일 ~ 9월 10일",
      description:"aaaa",
      cost:"3.5",
      card:true,
      support:true,
      hasCodingtest:true,
      onOff:"온라인",
      startDate:"1999-12-31T23:59:59.999",
      endDate:"1999-12-31T23:59:59.999",
      imgUrl :"이미지 주소 어쩌구 저쩌구",
      track : [
          {
              "id" : 8,
              "name" :"풀스택"
          },
          {
              "id": 4,
              "name" : "앱"
          }
      ],
      languages : [
          {
              "id" : 3,
              "name" :"PYTHON"
          }
      ],
      regions : [
          {
              "id" : 1,
              "name" :"서울"
          },
          {
              "id": 4,
              "name" : "경기도"
          }
      ]
  
    }
    navigate("/ManagerPage/Management");
  };


  return (
    <Box
      component="form"
      sx={{"& > :not(style)": { m: 1, width: "100%" }}}
      noValidate
      autoComplete="off"
    >
      <Bold18px style={{ marginTop: "20px", marginBottom: "15px" }}>
        부트캠프 등록하기
      </Bold18px>
      <Line/>
      <div style={{ display: "flex"}}>
        <InputCategory>부트캠프 명</InputCategory>
        <TextField size="small" id="bootcamp" label="bootcamp" variant="outlined" />
      </div>
      <Line />
      <div style={{ display: "flex" }}>
        <StyledSpan>
          <InputCategory as="span">URL</InputCategory>
          <TextField size="small" id="URL" label="URL" variant="outlined" />
        </StyledSpan>
        <StyledSpan>
          <InputCategory as="span">로고</InputCategory>
          <button onClick={addFile}>파일첨부</button>
          </StyledSpan>
        </div>
      <Line />
        <div>
          <StyledSpan>

          <InputCategory as="span">모집시작일</InputCategory>
          <input type="date" />
          </StyledSpan>
          <StyledSpan>

          <InputCategory as="span">모집마감일</InputCategory>
          <input type="date" />
          </StyledSpan>
        </div>
      <Line />
      <div style={{ display: "flex" }}>
        <InputCategory>트랙추가</InputCategory>
        <FormControl sx={{width: "200px"}}>
          <InputLabel id="demo-simple-select-label">Track</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Bootcamp"
            onChange={handleSelectTrack}
            value={track}
          >
            <MenuItem value="Back-end">Back-end</MenuItem>
            <MenuItem value="Front-end">Front-end</MenuItem>
            <MenuItem value="Cloud">Cloud</MenuItem>
            <MenuItem value="DBA">DBA</MenuItem>
            <MenuItem value="AI">AI</MenuItem>
            <MenuItem value="K8S">K8S</MenuItem>
          </Select>
        </FormControl>
        <div>
          {selectedTracks.map((row) => (
            <LightBtn type={""}>{row}</LightBtn>
          ))}
        </div>
      </div>
      <Line />
      <div style={{ display: "flex" }}>
        <InputCategory>사용언어</InputCategory>
        <FormControl sx={{width: "200px"}}>
          <InputLabel id="demo-simple-select-label">Stack</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Bootcamp"
            onChange={handleSelectStack}
            value={stack}
          >
            <MenuItem value="JAVA">JAVA</MenuItem>
            <MenuItem value="C++">C++</MenuItem>
            <MenuItem value="Spring">Spring</MenuItem>
            <MenuItem value="React">React</MenuItem>
            <MenuItem value="JavaScript">JavaScript</MenuItem>
            <MenuItem value="Cloud">Cloud</MenuItem>
          </Select>
        </FormControl>
        <div>
          {selectedStacks.map((row) => (
            <LightBtn type={""}>{row}</LightBtn>
          ))}
        </div>
      </div>
      <Line />
      <div style={{ display: "flex" }}>
        <InputCategory>일정 및 장소</InputCategory>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StyledDiv>
            <StyledBold15px>교육기간</StyledBold15px>
            <TextField size="small" id="learning" label="learning" variant="outlined" />
          </StyledDiv>
          <StyledDiv>
            <StyledBold15px>모집기간</StyledBold15px>
            <TextField size="small"  id="calender" label="calender" variant="outlined" />
          </StyledDiv>
          <StyledDiv>
            <StyledBold15px>온/오프라인</StyledBold15px>
            <ManageRadioBtn list={["온라인", "오프라인", "온/오프라인"]} setBtn={setSelectOnOff} selectData={selectOnOff}/>
          </StyledDiv>
          <StyledDiv>
            <StyledBold15px>장소</StyledBold15px>
            <FormControl size="small" sx={{width: "160px"}}>
              <InputLabel id="demo-simple-select-label">Place</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="place"
                onChange={handleSelectPlace}
                value={place}
              >
                <MenuItem value="서울">서울</MenuItem>
                <MenuItem value="경기도">경기도</MenuItem>
                <MenuItem value="충청도">충청도</MenuItem>
                <MenuItem value="부산">부산</MenuItem>
                <MenuItem value="대구">대구</MenuItem>
                <MenuItem value="강원도">강원도</MenuItem>
              </Select>
            </FormControl>
            <div>
              {selectedPlaces.map((row) => (
                <LightBtn type={""}>{row}</LightBtn>
              ))}
            </div>
          </StyledDiv>
        </div>
      </div>
      <Line />
      <div style={{ display: "flex" }}>
        <InputCategory>지원금 및 수강료</InputCategory>
        <div>
          <StyledDiv>
          <StyledBold15px>수강료</StyledBold15px>
          <TextField size="small"  id="calender" label="calender" variant="outlined" />
          </StyledDiv>
          <StyledDiv>
          <StyledBold15px>지원금</StyledBold15px>
          <ManageRadioBtn list={["지원금 O", "지원금 X"]} setBtn={setSelectSupport} selectData={selectSupport}/>
          </StyledDiv>
          <StyledDiv>
          <StyledBold15px>내일배움카드</StyledBold15px>
          <ManageRadioBtn  list={["카드 등록 필수 O", "카드 등록 필수 X"]} setBtn={setSelectCard} selectData={selectCard}/>
          </StyledDiv>
        </div>
      </div>
      <Line />
      <div style={{ display: "flex" }}>
        <InputCategory>모집절차</InputCategory>
        <TextField size="small"  id="learning" label="learning" variant="outlined" />
      </div>
      <Line />
      <div style={{ display: "flex" }}>
        <InputCategory>설명</InputCategory>
        <TextField size="small"  id="learning" label="learning" variant="outlined" />
      </div>
      <Line />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "20px",
          justifyContent: "right",
        }}
      >
        <StrongBtn type={"first"} onClick={onCreateBootcamp}>
          {"등록"}
        </StrongBtn>
      </div>
    </Box>
  );
};


const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

const StyledBold15px = styled(Bold15px)`
  margin-right: 10px;
  color: ${colors.TEXT_LIGHT};
  width: 150px;
`

const Line = styled.div`
  border-bottom: solid;
  color: ${colors.BORDER_LIGHT};
  margin-top: 20px;
  margin-bottom: 15px; 
`

const InputCategory = styled(Bold15px)`
  display: inline-block;
  background-color: gold;
  margin-left: 10px;
  width: 150px;
`

const StyledSpan = styled.span`
  width: 50%;
  display: inline-block;
`
export default ManageCreate;
