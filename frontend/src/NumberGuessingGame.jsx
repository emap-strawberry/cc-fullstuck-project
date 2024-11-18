import React, { useState, useEffect } from "react";
import axios from "axios";
import ResetGame from "./ResetGame";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function NumberGuessingGame() {
  const [answer] = useState(generateAnswer());
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState([]);
  const [attemptCount, setAttemptCount] = useState(0);
  const [validationMessage, setValidationMessage] = useState("");
  const [message, setMessage] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (guess === "") return;

    const fetchTodos = async () => {
      try {
        const res = await axios.post(`${baseUrl}/guess_records`, {
          guess: guess,
        });
        setValidationMessage("");
        console.log("Inserted record:", res.data);
      } catch (error) {
        setValidationMessage("");
        console.error("Error:", error.message);
      }
    };
    fetchTodos();
  }, [guess]);

  //ランダムな3桁の数字を生成
  function generateAnswer() {
    while (true) {
      const number = Math.floor(Math.random() * (987 - 102 + 1)) + 102;
      const numStr = number.toString();
      const numSet = new Set(numStr);
      if (numSet.size === numStr.length) {
        return numStr;
      }
    }
  }

  // EAT/BITE を判定
  function calculateEatBite(guessNum) {
    let eat = 0;
    let bite = 0;

    for (let i = 0; i < guessNum.length; i++) {
      if (guessNum[i] === answer[i]) {
        eat++;
      } else if (answer.includes(guessNum[i])) {
        bite++;
      }
    }

    return { eat, bite };
  }

  // ユーザーの入力を判定
  function handleGuess(e) {
    e.preventDefault();

    if (guess.length !== 3 || isNaN(guess)) {
      setValidationMessage("3桁の数字を入力してください");
      return;
    } else {
      setValidationMessage("");
    }

    setAttemptCount(attemptCount + 1);

    const { eat, bite } = calculateEatBite(guess);
    const newHistory = [...history, { guess, eat, bite }];
    setHistory(newHistory);

    if (eat === 3) {
      setMessage(
        `正解です！答えは ${answer} でした。${
          attemptCount + 1
        } 回目で正解しました！`
      );
      setIsGameOver(true);
    } else {
      setMessage(`EAT: ${eat}, BITE: ${bite}`);
    }

    setGuess("");
  }

  // リロードで初期化
  const resetGame = () => {
    window.location.reload();
  };

  return (
    <>
      <h1 className="header">Number Guessing Game</h1>
      <label htmlFor="item">{validationMessage}</label>
      {!isGameOver && (
        <div>
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            maxLength={3}
            disabled={isGameOver}
            placeholder="例: 123"
          />
          <button onClick={handleGuess}>判定</button>
        </div>
      )}
      {isGameOver && <ResetGame resetGame={resetGame} />}

      <label htmlFor="item">{message}</label>
      <h2>Results</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th className="history-header">No.</th>
            <th className="history-header">入力値</th>
            <th className="history-header">EAT</th>
            <th className="history-header">BITE</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index} className="history-row">
              <td className="history-cell">{index + 1}</td>
              <td className="history-cell">{entry.guess}</td>
              <td className="history-cell">{entry.eat}</td>
              <td className="history-cell">{entry.bite}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
