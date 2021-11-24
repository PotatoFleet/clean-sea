import grass from "../img/grass.png";

function Grass(props) {
  return (
    <div className="grass" style={{ left: props.x, top: props.y }}>
      <img src={grass} alt="Grass" width="60px" />
    </div>
  );
}

export default Grass;
