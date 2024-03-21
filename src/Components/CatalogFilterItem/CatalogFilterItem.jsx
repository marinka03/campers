import { v4 as uuid } from "uuid";
import Button from "../Button";
import FilterListCard from "../FilterListCard";
import RatingStars from "../Stars";

import {
  StyledItem,
  ItemTextWrap,
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
          width: "290px",
          height: "310px",
          border: "1px solid",
          borderRadius: "10px",
        }}
      >
        <img src={item.gallery[0]} alt="car" width={290} height={310} />
      </div>

      <ItemTextWrap>
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
      </ItemTextWrap>
    </StyledItem>
  );
}

export default CatalogFilterItem;
