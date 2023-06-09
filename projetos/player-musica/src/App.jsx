import { useState } from "react";
import { Bigger } from "./components/PlayerLayout/Bigger";
import { Medium } from "./components/PlayerLayout/Medium";
import { Smaller } from "./components/PlayerLayout/Smaller";
import { SwitchButton } from "./components/SwitchButton";

function App() {
  const [player, setPlayer] = useState(0);

  const changePlayer = (newPlayer) => {
    setPlayer(newPlayer);
  }

  return (
    <div className="app__container">
      <SwitchButton player={player} changePlayer={changePlayer} />

      {
        player === 0 ? 
        <Bigger /> : player === 1 ? <Medium /> : <Smaller />
      }

    </div>
  )
}

export default App
