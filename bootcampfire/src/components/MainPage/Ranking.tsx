import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "constant/constant";
import { StrongBtn, Bold18px, Normal13px } from "components/Board/styled";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { loadGameRank } from 'store/vsSlice';
import { RootState } from "store";
import { useEffect } from "react";

export default function Ranking() {

  const dispatch = useDispatch();
  const { GameRank10 } = useSelector((state: RootState) => state.vs);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/games`)
      .then((response) => dispatch(loadGameRank(response.data.data)));
  }, []); 

  return (
    <Sample>
      <Sample2>
        <Bold18px>VS 랭킹</Bold18px>
        <table style={{width: "100%", marginTop: "5px"}}>
          <tbody style={{width: "100%"}}>
            {GameRank10.map((row) => (
              <StyledTr key={row.rank}>
                <StyledTd className="rank">{row.rank}</StyledTd>
                <StyledTd className="name">{row.userNickname}</StyledTd>
                <StyledTd className="record">{row.score}</StyledTd>
              </StyledTr>
            ))}
          </tbody>
        </table>
      </Sample2>
      <Link to="/VsPage/G2048" state={1} style={{display: "inline-block", margin: "25px auto"}}>
        <StrongBtn type="first" >게임 하러 가기</StrongBtn>
      </Link>
    </Sample>
  );
}



const VSBtn = styled(Link)`
  margin-right: 20px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #ff603d;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
`;

const Sample = styled.div`
  /* position: absolute;
  top: 120px;
  right: 20px;
  display: "flex";
  flex-direction: "column";
  box-shadow: "none";
  margin-left: 80; */
  margin-left: 25px;
  display: flex;
  margin-top: 140px;
  flex-direction: column;
  justify-content: start;

  @media (max-width: 950px) {
    display: none;
  }
`;
const Sample2 = styled.div`
  background-color: ${colors.BACKGROUND_MID};
  box-shadow: "none";
  margin-right: "20px";
  border-radius: 15px;
  padding: 20px 25px;
  width: 290px;
`;

const StyledTd = styled(Normal13px)`
  color: ${colors.TEXT_NORMAL} !important;
  text-align: center;
  `
const StyledTr = styled.tr`
  margin-top: 15px;
  display: flex;
  column-gap: 20px;
  width: 100%;
  row-gap: 25px;
  .rank {
    flex-grow: 1;
  }

  .name {
    flex-grow: 3;
    width: 71px;
  }

  .bootcamp {
    flex-grow: 3;
  }

  .record {
    flex-grow: 3;
  }
`
