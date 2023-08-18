import React, { useState, ChangeEvent, FormEvent } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 여기에서 검색 기능을 구현하거나 검색 결과를 처리합니다.
    // console.log('Search term:', searchTerm);
    // 예를 들면, 검색 결과를 표시하는 함수를 호출하거나 검색 API를 호출할 수 있습니다.
    // 이 부분을 원하는 검색 기능으로 대체하시면 됩니다.
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        border: 3,
        borderColor: '#FF603D',
        borderRadius: 10,
      }}
      onSubmit={handleSearchSubmit}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="검색하세요"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
