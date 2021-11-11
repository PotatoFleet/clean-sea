function Bubble(props) {
  return (
    <div
      className="bubble"
      style={{
        width: props.width,
        height: props.width,
        left: props.x,
        top: props.y,
      }}
    ></div>
  );
}

export default Bubble;
