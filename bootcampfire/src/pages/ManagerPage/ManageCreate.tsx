import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import { Bold15px, Bold18px, LightBtn, StrongBtn,} from "components/Board/styled";
import { ChangeEvent, useState } from "react";
import ManageRadioBtn from "components/Manager/ManageRadioBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "constant/constant";
import { useEffect } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import axios from "axios";
import { Language } from "@mui/icons-material";

const API_KEY = 'http://localhost:8080/bootcamps/';
const accessToken = localStorage.getItem("Authorization");

const ManageCreate = () => {
  const [selectedStacks, setSelectedStacks] = useState<{id:number, name:string}[]>([]);
  const [selectedTracks, setSelectedTracks] = useState<{id:number, name:string}[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<{id:number, name:string}[]>([]);
  const [selectOnOff, setSelectOnOff] = useState("");
  const [selectSupport, setSelectSupport] = useState("");
  const [selectCard, setSelectCard] = useState("");
  const [place, setPlace] = useState("");
  const [stack, setStack] = useState("");
  const [track, setTrack] = useState("");
  const [bootcampName, setBootcampName] = useState("");
  const [bootcampUrl, setBootcampUrl] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();
  const [tracks, setTracks] = useState([]);
  const [places, setPlaces] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [process, setProcess] = useState("");
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    Promise.all([
      axios.get(API_KEY + "regions"),
      axios.get(API_KEY + "tracks"),
      axios.get(API_KEY + "languages"),
    ]).then(([regionsRes, tracksRes, languagesRes]) => {
      setTracks(tracksRes.data.data);
      setPlaces(regionsRes.data.data);
      setStacks(languagesRes.data.data);
    })
  },[])


  const handleSelectStack = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    // if (!selectedStacks.includes(value)) {
      const id = Number(value.substring(0, 1));
      const name = value.substring(1);
      setSelectedStacks([...selectedStacks, {id, name}]);
      setStack(value);
    // }
  };
  const handleSelectTrack = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    // if (!selectedTracks.includes(value)) {
      const id = Number(value.substring(0, 1));
      const name = value.substring(1);
      setSelectedTracks([...selectedTracks, {id, name}]);
      setTrack(value);
    // }
  };
  const handleSelectPlace = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    // if (!selectedPlaces.includes(value)) {
      const id = Number(value.substring(0, 1));
      const name = value.substring(1);
      setSelectedPlaces([...selectedPlaces, {id, name}]);
      setStack(value);
    // }
  };
  const handleDeletePlace = (idx: number) => {
    const newPlaces = [...selectedPlaces];
    newPlaces.splice(idx, 1);
    setSelectedPlaces(newPlaces);
  }
  const handleDeleteStack = (idx: number) => {
    const newStacks = [...selectedStacks]
    newStacks.splice(idx, 1);
    setSelectedStacks(newStacks);
  }
  const handleDeleteTrack = (idx: number) => {
    const newTracks = [...selectedTracks]
    newTracks.splice(idx, 1);
    setSelectedTracks(newTracks);
  }
  const handleStringInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
                setFunction: React.Dispatch<React.SetStateAction<string>>) => {
    setFunction(event.target.value);
  }
  
  const addFile = () => {
    
  };

  const onCreateBootcamp = () => {
    const request = {
      name: bootcampName,
      siteUrl: bootcampUrl,
      process,
      schedule,
      description,
      cost,
      card:selectCard[selectCard.length - 1] === "O" ? true : false,
      support:selectSupport[selectSupport. length - 1] === "O" ? true : false,
      hasCodingtest:true,
      onOff:selectOnOff,
      startDate,
      endDate,
      imgUrl :"이미지 주소 어쩌구 저쩌구",
      track : tracks,
      languages : stacks,
      regions : places
    }

    axios.post(API_KEY, request, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
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
        <TextField size="small" id="bootcamp" label="bootcamp" variant="outlined"
            value={bootcampName} onChange={(event: ChangeEvent<HTMLInputElement>) => handleStringInput(event, setBootcampName)}/>
      </div>
      <Line />
      <div style={{ display: "flex" }}>
        <StyledSpan>
          <InputCategory as="span">URL</InputCategory>
          <TextField size="small" id="URL" label="URL" variant="outlined"
            value={bootcampUrl} onChange={(event: ChangeEvent<HTMLInputElement>) => handleStringInput(event, setBootcampUrl)} />
        </StyledSpan>
        <StyledSpan>
          <InputCategory as="span">로고</InputCategory>
          <button onClick={addFile}>파일첨부</button>
          </StyledSpan>
        </div>
      <Line />
        <div style={{ display: "flex" }}>
          <StyledSpan>
          <InputCategory as="span">모집시작일</InputCategory>
          <StyledShedule type="date" onChange={(event: ChangeEvent<HTMLInputElement>) => handleStringInput(event, setStartDate)}/>
          </StyledSpan>
          <StyledSpan>
          <InputCategory as="span">모집마감일</InputCategory>
          <StyledShedule type="date" onChange={(event: ChangeEvent<HTMLInputElement>) => handleStringInput(event, setEndDate)}/>
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
            size="small"
          >
            {stacks.map((element: {id: number, name: string}) => (
              <MenuItem value={element.id + element.name}>{element.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div style={{display: "flex"}}>
          {selectedTracks.map((row, idx) => (
            <LightBtn type={""} style={{margin: "auto 0 auto 10px"}}>{row.name}
              <CloseOutlinedIcon 
                onClick={() => handleDeleteTrack(idx)}
                sx={{fontSize: "18px", color: colors.TEXT_LIGHT}}/>            
            </LightBtn>
          ))}
        </div>
      </div>
      <Line />
      <div style={{display: "flex"}}>
        <InputCategory>사용언어</InputCategory>
        <FormControl sx={{width: "200px"}}>
          <InputLabel id="demo-simple-select-label">Stack</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Bootcamp"
            onChange={handleSelectStack}
            value={stack}
            size="small"
          >
            {stacks.map((element: {id: number, name: string}) => (
              <MenuItem value={element.id + element.name}>{element.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>
          {selectedStacks.map((row, idx) => (
            <LightBtn type={""} style={{margin: "auto 0 auto 10px"}}>{row.name} 
              <CloseOutlinedIcon onClick={() => handleDeleteStack(idx)} sx={{fontSize: "18px", color: colors.TEXT_LIGHT}}/>
            </LightBtn>
          ))}
        </div>
      </div>
      <Line />
      <div style={{ display: "flex" }}>
        <InputCategory>일정 및 장소</InputCategory>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StyledDiv>
            <StyledBold15px>교육기간</StyledBold15px>
            <TextField size="small" id="learning" label="교육기간" variant="outlined"
             value={schedule} onChange={(event: ChangeEvent<HTMLInputElement>) => handleStringInput(event, setSchedule)}/>
          </StyledDiv>
          <StyledDiv>
            <StyledBold15px>온/오프라인</StyledBold15px>
            <ManageRadioBtn list={["온라인", "오프라인", "온/오프라인"]} setBtn={setSelectOnOff} selectData={selectOnOff}/>
          </StyledDiv>
          <StyledDiv>
            <StyledBold15px>장소</StyledBold15px>
            <FormControl sx={{width: "160px"}}>
              <InputLabel id="demo-simple-select-label">Place</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="place"
                onChange={handleSelectPlace}
                value={place}
                size="small"
              >
              {stacks.map((element: {id: number, name: string}) => (
                <MenuItem value={element.id + element.name}>{element.name}</MenuItem>
              ))}
              </Select>
            </FormControl>
            <div>
              {selectedPlaces.map((row, idx) => (
                <LightBtn type={""} style={{margin: "auto 0 auto 10px"}}>{row.name}
                  <CloseOutlinedIcon onClick={() => handleDeletePlace(idx)}/>
                </LightBtn>
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
          <TextField size="small"  id="calender" label="수강료" variant="outlined" value={cost}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleStringInput(event, setCost)}
          />
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
        <TextField size="small"  id="learning" label="모집절차" variant="outlined" sx={{width: "800px"}}
          value={process} onChange={(event: ChangeEvent<HTMLInputElement>) => handleStringInput(event, setProcess)}/>
      </div>
      <Line />
      <div style={{ display: "flex" }}>
        <InputCategory>설명</InputCategory>
        <TextField size="small"  id="learning" label="설명" variant="outlined" sx={{width: "800px"}}
          value={description} onChange={(event: ChangeEvent<HTMLInputElement>) => handleStringInput(event, setDescription)}/>
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
  margin-bottom: 10px;
`

const StyledBold15px = styled(Bold15px)`
  margin: auto 0 auto 10px;
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
  margin: auto 0 auto 10px;
  width: 150px;
`

const StyledSpan = styled.span`
  width: 50%;
  display: flex;
  align-items: center;
`

const StyledShedule = styled.input`
  height: 23px;
  width: 195px;
  padding: 6.9px 12.4px;
  border-radius: 5px;
  border-color: ${colors.BORDER_LIGHT};
  appearance: none;
  outline: none;
  box-shadow: inset 0px 0px 0px 0px red;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  &::-webkit-calendar-picker-indicator {
  appearance: none;
  outline: none;
  box-shadow: none;
  }
`
export default ManageCreate;
