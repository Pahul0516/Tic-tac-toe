import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Logs from "./components/Logs.jsx";

function App() {

    const [activePlayer, setActivePlayer] = useState('X')

    function handelSelectSquare(){
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? "O" : "X")
        console.log(activePlayer)
    }

    return (
       <main>
           <div id = "game-container">
                <ol id = "players" className="highlight-player">
                    <Player initialName="Player 1" symbol = "X" isActive={activePlayer === 'X'}/>
                    <Player initialName="Player 2" symbol = "O" isActive={activePlayer === 'O'}/>
                </ol>

               <GameBoard
                onSelectSquare={ handelSelectSquare }
                activePlayerSymbol={activePlayer}
               />
           </div>
           Logs

           <Logs />
       </main>
  )
}

export default App
