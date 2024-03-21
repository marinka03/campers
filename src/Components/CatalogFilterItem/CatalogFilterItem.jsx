import { v4 as uuid } from "uuid";
import Button from "../Button";
import FilterListCard from "../FilterListCard";
import RatingStars from "../Stars";

import {
  StyledItem,
  WrapTitleCard,
  ReviewLocationWrap,
  ReviewWrap,
  ShortDescription,
  PriceWrap,
} from "./CatalogFilterItem.styled";

function CatalogFilterItem({ item }) {
  return (
    <StyledItem key={uuid()}>
      <div
        style={{
          border: "1px solid",
          borderRadius: "10px",
          overflow: "hidden",
          width: "290px",
          height: "310px"
        }}
      >
        <img src={item.gallery[0]} alt="car"/>
      </div>

      <div>
        <WrapTitleCard>
          <h2>{item.name}</h2>

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
            <span>
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
        <FilterListCard />
        <Button text="Show more" />
      </div>
    </StyledItem>
  );
}

export default CatalogFilterItem;
