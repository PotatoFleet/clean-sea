function MainMenuButton(props) {
  return (
    <div className="main-menu__button" onClick={() => props.callback()}>
      {props.value}
    </div>
  );
}

export default MainMenuButton;
