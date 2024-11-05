import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import './StartPage.css'; 

function StartPage({ onStartGame }) {

  const handleExitGame = () => {
    const confirmExit = window.confirm("Bạn có chắc chắn muốn thoát không?");
    if (confirmExit) {
      window.close(); 
    }
  };

  return (
    <div className="startPage">
      <img src="/img/gamebaucua/logo.png" alt="Game Bầu Cua Logo" className="logo" />
      <div className="buttonContainer">
        <button 
          onClick={onStartGame}
          className="button"
        >
          CHƠI
        </button>
        <button 
          onClick={handleExitGame} 
          className="button"
        >
          <FontAwesomeIcon icon={faDoorOpen} className="icon" /> 
          THOÁT
        </button>
      </div>
      <div className="diceContainer">
        <img src="/img/gamebaucua/bau.png" alt="Dice 1" className="dice" />
        <img src="/img/gamebaucua/ca.png" alt="Dice 2" className="dice" />
        <img src="/img/gamebaucua/cua.png" alt="Dice 3" className="dice" />
        <img src="/img/gamebaucua/ga.png" alt="Dice 4" className="dice" />
        <img src="/img/gamebaucua/nai.png" alt="Dice 5" className="dice" />
        <img src="/img/gamebaucua/tom.png" alt="Dice 6" className="dice" />
      </div>
    </div>
  );
}

export default StartPage;
