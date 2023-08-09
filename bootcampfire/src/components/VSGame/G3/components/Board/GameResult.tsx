import React from "react";
import Button from "../Button";
import { useGameContext } from "../Game";
import { GameStatus, Tile } from "../interfaces";

import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";


const DATA = {
  WIN: {
    message: "축하해요!",
    buttonText: "다시 할래요",
    containerClass: "gameResultWin",
  },
  GAME_OVER: {
    message: "분발 하세요!",
    buttonText: "Try again",
    containerClass: "gameResultLose",
  },
};

const Result = (props: {
  isWin: boolean;
  onContinue: () => void;
  onRestart: () => void;
  playAfterWin: boolean;
  status: GameStatus;
}) => {
  const { isWin, onContinue, onRestart, playAfterWin } = props;
  const { message, buttonText, containerClass } =
    isWin || playAfterWin ? DATA.WIN : DATA.GAME_OVER;



  return (
    <div className={`gameResult ${containerClass}`}>
      <p>{message}</p>
      <div>
        {isWin && (
          <Button className="continueButton" onClick={() => onContinue()}>
            멈출 수가 없어요
          </Button>
        )}
        <Button onClick={() => onRestart()}>{buttonText}</Button>
      </div>
    </div>
  );
};

const GameResultContainer = (props: { tiles: Tile[] }) => {

  const gameContext = useGameContext();

  if (!gameContext) {
    return null; // 또는 로딩 표시 등의 UI를 반환할 수 있음
  }
  const { gameState, dispatch } = gameContext;

  const { status } = gameState;

  const handleContinue = () => {
    dispatch({ type: "continue" });
  };

  const handleRestart = () => {
    dispatch({ type: "restart" });
  };

  const playAfterWin = props.tiles.some((x) => x.value === 2048);
  return (
    <>
      {status !== "IN_PROGRESS" && status !== "PLAY_AFTER_WIN" && (
        <Result
          isWin={status === "WIN"}
          playAfterWin={playAfterWin}
          onRestart={handleRestart}
          onContinue={handleContinue}
          status={status}
        />
      )}
    </>
  );
};

export default GameResultContainer;
