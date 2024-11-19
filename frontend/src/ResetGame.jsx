export default function ResetGame({ onClick }) {
  // リロードで初期化
  const resetGame = () => {
    window.location.reload();
  };
  return (
    <button onClick={resetGame} className="btn">
      もう一度遊ぶ
    </button>
  );
}
