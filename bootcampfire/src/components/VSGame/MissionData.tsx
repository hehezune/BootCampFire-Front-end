import axios from "axios";
import { LightBtn } from "components/Board/styled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import Alert from "@mui/material/Alert";
import React from "react";
interface missionData {
  id: number;
  num: number;
  link: string;
  title: string;
  description: string;
  date: string;
}

// interface missionResult {
//   algorithmId: number;
//   result: boolean;
//   userId: number;
// }

const MissionData = () => {
  const userId = useSelector((state: RootState) => state.auth.userId);
  const [algorithm, setAlgorithm] = useState<missionData>(Object);
  // const [result, setResult] = useState<missionResult>(Object);
  const accessToken = localStorage.getItem("Authorization");
  const [isErrorTrue, setError] = useState("none");
  const [isSuccessTrue, setSuccess] = useState("none");

  const isSolved = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/algorithms/${algorithm.num}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.data.result) {
          setSuccess("");
        } else setError("");
      });
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/algorithms`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setAlgorithm(res.data.data);
      });
  }, []);
  useEffect(() => {
    const time = 2000;
    const timer = setInterval(() => {
      setError("none");
      setSuccess("none");
    }, 2000 + time);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{algorithm.title}</td>
          </tr>
          <tr>
            <td>{algorithm.description}</td>
          </tr>
          <tr>
            <td>{algorithm.date}</td>
          </tr>
        </tbody>
      </table>
      <span>
        <a href={algorithm.link}>
          <LightBtn
            type="first"
            style={{
              marginTop: "20px",
              justifyContent: "right",
              marginRight: "auto",
            }}
          >
            알고리즘 풀러가기
          </LightBtn>
        </a>
      </span>
      <span>
        <LightBtn
          type=""
          style={{
            marginTop: "20px",
            justifyContent: "right",
            marginRight: "auto",
          }}
          onClick={isSolved}
        >
          알고리즘 풀었습니다!
        </LightBtn>
      </span>

      <Alert severity="error" sx={{ display: isErrorTrue }}>
        알고리즘을 풀지 않으셨어요
      </Alert>
      <Alert severity="success" sx={{ display: isSuccessTrue }}>
        참여해주셔서 감사합니다
      </Alert>
    </div>
  );
};

export default MissionData;
