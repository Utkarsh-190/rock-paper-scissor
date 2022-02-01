import { useState } from "react";
import classes from "./Game.module.css";
import rockImg from "../assets/rock.png";
import ArticleIcon from "@mui/icons-material/Article";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { Button } from "@mui/material";

function Game() {
  let data = <div>hellow</div>;
  const [score, setScore] = useState(0);
  const [choosing, setChoosing] = useState(true);
  const [uservalue, setUserValue] = useState("");
  const [opponentValue, setOpponentValue] = useState("");
  const [status, setStatus] = useState("");
  const [result, setResult] = useState(null);
  const incrementScore = () => {
    setScore(score + 1);
  };
  const decrementScore = () => {
    setScore(score - 1);
  };
  const onChoose = (value) => {
    // let output;
    // if (value === "rock") {
    //   output = <img src={rockImg} alt="rock icon" />;
    // } else if (value === "paper") {
    //   output = <ArticleIcon />;
    // } else {
    //   output = <ContentCutIcon />;
    // }

    let computerValue = Math.floor(Math.random() * 3 + 1);
    if (computerValue === 1) {
      computerValue = "rock";
      // output += `<img src=${rockImg} alt="rock icon" />`;
    } else if (computerValue === 2) {
      computerValue = "paper";
      // output += `<ArticleIcon />`;
    } else {
      computerValue = "scissor";
      // output += `<ContentCutIcon />`;
    }

    // output = `<div className=${classes.choosing}>${output}</div>`;

    if (
      (value === "rock" && computerValue === "scissor") ||
      (value === "paper" && computerValue === "rock") ||
      (value === "scissor" && computerValue === "paper")
    ) {
      // output += `<div className=${classes.status}>You won</div>`;
      setScore(score + 1);
      setStatus("You won");
    } else if (
      (value === "rock" && computerValue === "paper") ||
      (value === "paper" && computerValue === "scissor") ||
      (value === "scissor" && computerValue === "rock")
    ) {
      // output += `<div className=${classes.status}>You lose</div>`;
      setScore(score - 1);
      setStatus("You lose");
    } else {
      setStatus("Draw");
    }

    // setResult(output);
    setUserValue(value);
    console.log(computerValue);
    setOpponentValue(computerValue);
    setChoosing(false);
  };

  return (
    <div className={classes.game}>
      <div className={classes.title}>Rock Paper Scissor Game</div>
      <div className={classes.score}>Score: {score}</div>
      <Button
        variant="contained"
        style={{ background: "#3b27ae" }}
        onClick={() => {
          setScore(0);
        }}
      >
        New Game
      </Button>
      {choosing ? (
        <div className={classes.choosing}>
          <img
            src={rockImg}
            alt="rock icon"
            onClick={() => {
              onChoose("rock");
            }}
          />
          <ArticleIcon
            style={{ fontSize: 100 }}
            onClick={() => {
              onChoose("paper");
            }}
          />
          <ContentCutIcon
            style={{ fontSize: 100 }}
            onClick={() => {
              onChoose("scissor");
            }}
          />
        </div>
      ) : (
        <>
          <div className={classes.choosing}>
            <div className={classes.choice}>
              {uservalue === "rock" && <img src={rockImg} alt="rock icon" />}
              {uservalue === "paper" && (
                <ArticleIcon style={{ fontSize: 100 }} />
              )}
              {uservalue === "scissor" && (
                <ContentCutIcon style={{ fontSize: 100 }} />
              )}
              YOU
            </div>
            <div className={classes.choice}>
              {opponentValue === "rock" && (
                <img src={rockImg} alt="rock icon" />
              )}
              {opponentValue === "paper" && (
                <ArticleIcon style={{ fontSize: 100 }} />
              )}
              {opponentValue === "scissor" && (
                <ContentCutIcon style={{ fontSize: 100 }} />
              )}
              OPPONENT
            </div>
          </div>
          <div className={classes.status}>{status}</div>

          <Button
            variant="contained"
            style={{ background: "#3b27ae" }}
            onClick={() => {
              setChoosing(true);
            }}
          >
            Play Again
          </Button>
        </>
      )}
    </div>
  );
}

export default Game;
