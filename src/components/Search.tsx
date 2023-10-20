import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SSearachForm = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  color: #2d2d2d;
`;

const SSearchInput = styled.div`
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;

  input {
    width: 280px;
    height: 40px;
    border: none;
    border-bottom: 1.5px solid;
    padding: 0 20px 0 45px;
    font-size: 15px;
  }
  .icon {
    position: fixed;
    padding-left: 10px;
  }
`;

const Search = () => {
  return (
    <SSearachForm>
      <SSearchInput>
        <SearchIcon className="icon" />
        <input placeholder="검색" />
      </SSearchInput>
    </SSearachForm>
  );
};

export default Search;
