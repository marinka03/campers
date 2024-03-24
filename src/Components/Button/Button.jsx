import { StyledButton } from "./Button.styled.js";

function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default Button;
