import { StyledBtnWhite } from "./BtnWhite.styled";

function BtnWhite({ text, onClick }) {
  return <StyledBtnWhite onClick={onClick}>{text}</StyledBtnWhite>;
}

export default BtnWhite;
