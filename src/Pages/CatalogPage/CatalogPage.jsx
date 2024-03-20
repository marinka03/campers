import Button from "../../Components/Button/Button";
import FilterListCard from "../../Components/FilterListCard";
import RatingStars from "../../Components/Stars/Stars";
import {
  StyledSideBar,
  StyledContentWrap,
  StyledItem,
  ItemTextWrap,
  WrapTitleCard,
  ReviewLocationWrap,
  ReviewWrap,
  ShortDescription,
  PriceWrap,
} from "./CatalogPage.styled";

function CatalogPage() {
  return (
    <>
      <StyledContentWrap>
        <StyledSideBar />
        <ul>
          <StyledItem>
            <div
              style={{
                width: "290px",
                height: "310px",
                border: "1px solid",
                borderRadius: "10px",
              }}
            >
              <img src="#" alt="car" width={290} height={310} />
            </div>

            <ItemTextWrap>
              <WrapTitleCard>
                <h2>Kuga Camper</h2>

                <PriceWrap>
                  <span className="price">€8000</span>
                  <span>ico</span>
                </PriceWrap>
              </WrapTitleCard>

              <ReviewLocationWrap>
                <ReviewWrap>
                  <RatingStars
                    stars_count={1}
                    rating={1}
                    spacing={4}
                    classNames={"star-rewiew"}
                  />
                  <span>4.4(2 Reviews)</span>
                </ReviewWrap>
                <div>
                  <span>Kyiv, Ukraine</span>
                </div>
              </ReviewLocationWrap>

              <ShortDescription>
                The pictures shown here are example vehicles of the respective.
              </ShortDescription>
              <FilterListCard />
              <Button text="Show more" />
            </ItemTextWrap>
          </StyledItem>
        </ul>
      </StyledContentWrap>
    </>
  );
}

export default CatalogPage;
