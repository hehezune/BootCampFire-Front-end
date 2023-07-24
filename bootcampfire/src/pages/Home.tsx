import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 400px;
  width: 100%;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 여기에서 검색 기능을 구현하거나 검색 결과를 처리합니다.
    console.log("Search term:", searchTerm);
    // 예를 들면, 검색 결과를 표시하는 함수를 호출하거나 검색 API를 호출할 수 있습니다.
  };

  return (
    <HomeContainer>
      <h1>HOME</h1>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="검색어를 입력하세요..."
        />
        <SearchButton type="submit">검색</SearchButton>
      </SearchForm>
    </HomeContainer>
  );
}
