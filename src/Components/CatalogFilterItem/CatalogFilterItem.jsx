import Button from "../Button";
import FilterListCard from "../FilterListCard";
import RatingStars from "../Stars";
import sprite from "../../assets/icons/icons-sprite.svg";

import {
  StyledItem,
  StyledImg,
  WrapTitleCard,
  ReviewLocationWrap,
  ReviewWrap,
  ShortDescription,
  PriceWrap,
  StyledLike,
} from "./CatalogFilterItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectorCatalogItems } from "../../redux/selectors";
import { updateFavorites } from "../../redux/operations";

function CatalogFilterItem({ parentId }) {
  const dispatch = useDispatch();
  const items = useSelector(selectorCatalogItems);
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
        <StyledImg src={items[parentId]?.gallery[0]} alt="car" />
      </div>

      <div style={{ width: "520px" }}>
        <WrapTitleCard>
          <h3>{items[parentId]?.name}</h3>

          <PriceWrap>
            <span className="price">€{items[parentId]?.price}</span>

            {/* <div>
              {item?.favorite ? (
                <StyledLike onClick={() => {dispatch(updateFavorites({id: parentId, favorite: false}))}}>
                  <use href={`${sprite}#favorite`} />
                </StyledLike>
              ) : (
                <StyledLike onClick={() => {dispatch(updateFavorites({id: parentId, favorite: true}))}}>
                  <use href={`${sprite}#not-favorite`} />
                </StyledLike>
              )}
            </div> */}
            <div>
              {items[parentId]?.favorite ? (
                <StyledLike
                  onClick={() => {
                    dispatch(
                      updateFavorites({ 'id': parentId, 'favorite': false })
                    );
                  }}
                >
                  <use href={`${sprite}#favorite`} />
                </StyledLike>
              ) : (
                <StyledLike
                  onClick={() => {
                    dispatch(updateFavorites({ 'id': parentId, 'favorite': true }));
                  }}
                >
                  <use href={`${sprite}#not-favorite`} />
                </StyledLike>
              )}
            </div>
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
            <span style={{ textDecoration: "underline" }}>
              {items[parentId]?.rating}({items[parentId]?.reviews.length} Reviews)
            </span>
          </ReviewWrap>
          <div>
            <span>{items[parentId]?.location}</span>
          </div>
        </ReviewLocationWrap>

        <ShortDescription>
          {items[parentId]?.description?.length > 70
            ? `${items[parentId]?.description.slice(0, 70)}...`
            : items[parentId]?.description}
        </ShortDescription>

        <FilterListCard  />
        <Button text="Show more" />
      </div>
    </StyledItem>
  );
}

export default CatalogFilterItem;
