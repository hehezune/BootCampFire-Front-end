import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { Bold15px, Bold18px, LightBtn } from 'components/Board/styled';
import { bootcamp } from 'constant/constant';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const ManageCreate = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const handleSelectItem = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    if (!selectedItems.includes(value)) {
      setSelectedItems([...selectedItems, value]);
    }
    console.log(selectedItems);
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off">
      <Bold18px style={{ marginTop: '20px', marginBottom: '15px' }}>부트캠프 등록하기</Bold18px>
      <div style={{ borderBottom: 'solid', color: '#cccccc', marginBottom: '15px' }}></div>
      <Bold15px></Bold15px>
      <div style={{ display: 'flex' }}>
        <Bold15px style={{ marginRight: '50px' }}>부트캠프 명</Bold15px>
        <TextField id="bootcamp" label="bootcamp" variant="outlined" />
      </div>
      <div style={{ borderBottom: 'solid', color: '#cccccc', marginTop: '20px', marginBottom: '15px' }}></div>
      <div style={{ display: 'flex' }}>
        <Bold15px style={{ marginRight: '50px' }}>로고</Bold15px>
        <button>파일첨부</button>
      </div>
      <div style={{ borderBottom: 'solid', color: '#cccccc', marginTop: '20px', marginBottom: '15px' }}></div>
      <div style={{ display: 'flex' }}>
        <Bold15px style={{ marginRight: '50px' }}>URL</Bold15px>
        <TextField id="URL" label="URL" variant="outlined" />
      </div>
      <div style={{ borderBottom: 'solid', color: '#cccccc', marginTop: '20px', marginBottom: '15px' }}></div>
      <div style={{ display: 'flex' }}>
        <Bold15px style={{ marginRight: '50px' }}>사용언어</Bold15px>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Bootcamp</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Bootcamp"
            onChange={handleSelectItem}>
            <MenuItem value="JAVA">JAVA</MenuItem>
            <MenuItem value="C++">C++</MenuItem>
            <MenuItem value="Spring">Spring</MenuItem>
            <MenuItem value="React">React</MenuItem>
            <MenuItem value="JavaScript">JavaScript</MenuItem>
            <MenuItem value="Cloud">Cloud</MenuItem>
          </Select>
        </FormControl>
        <div>
          {selectedItems.map((row) => (
            <LightBtn type={''}>{row}</LightBtn>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ManageCreate;
