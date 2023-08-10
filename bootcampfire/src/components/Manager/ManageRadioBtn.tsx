import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Paper,
} from "@mui/material";

const ManageRadioBtn = ({list, setBtn, selectData}: {
    list: string[], 
    setBtn: React.Dispatch<React.SetStateAction<string>>,
    selectData: string}) => {
  // 선택된 값을 상태로 관리합니다.

  // 라디오 버튼 값이 변경되었을 때 처리하는 함수
  const handleRadioChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBtn(event.target.value);
  };

  return (
    <Paper
      elevation={3}
      style={{
        width: "fit-content",
        display: "flex",
        flexDirection: "row",
        boxShadow: "none",
      }}
    >
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="radio-group"
          name="radio-group"
          value={selectData}
          onChange={handleRadioChange}
          sx={{flexDirection: "row"}}
        >
        {list.map((element) => (
          <FormControlLabel value={element} control={<Radio />} label={element}/>
        ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default ManageRadioBtn;
