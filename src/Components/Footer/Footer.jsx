import { v4 as uuid } from "uuid";
import { FooterContent, FooterLink } from "./Footer.styled";
import sprite from "../../assets/camper.svg";

function Footer() {
  return (
    <FooterContent>
      {/* <div> */}
        <svg width={100} height={85} >
          <use href={`${sprite}#camper`} />
        </svg>

        <nav>
            <ul>
              <li key={uuid()}>
                <FooterLink to={"/"}>Home</FooterLink>
              </li>
              <li key={uuid()}>
                <FooterLink to={"/catalog"}>Catalog</FooterLink>
              </li>
              <li key={uuid()}>
                <FooterLink to={"/favorites"}>Favorites</FooterLink>
              </li>
            </ul>
          </nav>
      {/* </div> */}
    </FooterContent>
  );
}

export default Footer;
