import Button from "../Button";
import FilterListCard from "../FilterListCard";
import RatingStars from "../Stars";

import {
  StyledItem,
  StyledImg,
  WrapTitleCard,
  ReviewLocationWrap,
  ReviewWrap,
  ShortDescription,
  PriceWrap,
} from "./CatalogFilterItem.styled";

function CatalogFilterItem({ item }) {
  return (
    <StyledItem>
      <div
        style={{
          border: "1px solid",
          borderRadius: "10px",
          overflow: "hidden",
          width: "290px",
          height: "310px",
        }}
      >
        <StyledImg src={item.gallery[0]} alt="car" />
      </div>

      <div style={{ width: "520px" }}>
        <WrapTitleCard>
          <h3>{item.name}</h3>

          <PriceWrap>
            <span className="price">€{item.price}</span>
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
            <span style={{ "textDecoration": "underline" }}>
              {item.rating}({item.reviews.length} Reviews)
            </span>
          </ReviewWrap>
          <div>
            <span>{item.location}</span>
          </div>
        </ReviewLocationWrap>

        <ShortDescription>
          {item.description.length > 70
            ? `${item.description.slice(0, 70)}...`
            : item.description}
        </ShortDescription>

        <FilterListCard details={item.details} />
        <Button text="Show more" />
      </div>
    </StyledItem>
  );
}

export default CatalogFilterItem;
