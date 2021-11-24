import "../css/App.css";
import MainMenuButton from "./MainMenuButton";
import Bubble from "./Bubble";
import Tower from "./Tower";
import Grass from "./Grass";
import coin from "../img/coin.png";
import heart from "../img/heart.png";

const mainMenuBubbles = 10;

const towers = {
  1: {
    name: "First Tower",
  },
  2: {
    name: "Second Tower",
  },
};

const grasses = {
  1: {
    x: 60,
    y: 70,
  },
  2: {
    x: 300,
    y: 30,
  },
  3: {
    x: 525,
    y: 60,
  },
  4: {
    x: 600,
    y: 200,
  },
};

function App() {
  let bubbleComponents = [];
  let towerComponents = [];
  let grassComponents = [];

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  for (let i = 0; i < mainMenuBubbles; i++) {
    let width = (30 + Math.floor(Math.random() * 15)) * 2;
    let x = Math.floor(Math.random() * 100).toString() + "%";
    let y = Math.floor(Math.random() * 100).toString() + "%";
    bubbleComponents.push(<Bubble key={i} x={x} y={y} width={width} />);
  }

  for (const tower in towers) {
    let towerComponent = <Tower key={tower} name={towers[tower].name} />;
    towerComponents.push(towerComponent);
  }

  for (const grass in grasses) {
    let grassComponent = <Grass x={grasses[grass].x} y={grasses[grass].y} />;
    grassComponents.push(grassComponent);
  }

  const path = "M -10 -5 c 10 100 25 -50 50 20";

  return (
    <div id="game">
      <div id="main-menu">
        <div className="main-menu__bubbles">{bubbleComponents}</div>
        <div className="main-menu__title">
          <div className="main-menu__title__clean">Clean</div>
          <div className="main-menu__title__sea">Sea</div>
        </div>
        <div className="main-menu__buttons">
          <MainMenuButton callback={() => startGame()} value="New Game" />
        </div>
      </div>
      <div id="main">
        <div id="map">
          <svg className="path" viewBox="0 0 100 100">
            <path d={path} stroke="blue" stroke-width="10" fill="none"></path>
          </svg>
          <svg className="sea" viewBox="0 0 100 100">
            <path
              d="M 130 -20 q -25 25 0 50 q 50 75 0 110"
              stroke="blue"
              stroke-width="80"
            ></path>
          </svg>
          <div className="grasses">{grassComponents}</div>
        </div>
        <div id="panel">
          <div id="info">
            <div id="coins-container">
              <img id="coin-image" src={coin} alt="coin" width="40px" />
              <span id="coins">0</span>
            </div>
            <div id="health-container">
              <img src={heart} alt="heart" id="heart-image" width="40px" />
              <div id="health">100</div>
            </div>
          </div>
          <div id="towers">{towerComponents}</div>
        </div>
      </div>
    </div>
  );
}

function startGame() {
  document.getElementById("main-menu").classList.add("slide-down");
  document.getElementById("main").classList.add("slide-down");
}

export default App;
