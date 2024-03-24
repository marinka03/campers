import { v4 as uuid } from "uuid";
// import { theme } from "../../vars";

const BLOATED_STAR_CONFIG = {
  path: `M12.7068 0.996094L16.422 8.64029L24.8252 9.88469L18.8103 15.8401L20.2255 24.2842L12.7068 20.2843L5.18813 24.2842L6.60342 15.8401L0.5 9.88469L8.90326 8.64029L12.7068 0.996094Z`,
  viewBox: "0 0 25 25",
};

const RatingStars = ({ stars_count, rating, spacing, classNames }) => {
  const size = "16px";
  const activeStarColor = "#FFC531";
  const emptiStarColor = 'gray';
  const maskId = uuid();
  const letterSpacing = { marginRight: `${spacing}px` };
  const [whole, fraction] = parseFloat(rating).toFixed(1).split(".");
  const wholeStarsCount = +whole;
  const fractionNumber = +fraction;

  const emptyStarsCount = fractionNumber
    ? stars_count - (wholeStarsCount + 1)
    : stars_count - wholeStarsCount;

  const fullStars = wholeStarsCount
    ? Array(wholeStarsCount)
        .fill(null)
        .map((_, i) => (
          <svg
            key={`full-star-${i}`}
            height={size}
            viewBox={BLOATED_STAR_CONFIG.viewBox}
            style={letterSpacing}
          >
            <path d={BLOATED_STAR_CONFIG.path} fill={activeStarColor} />
          </svg>
        ))
    : [];

  const fractionStar = fractionNumber ? (
    <svg key="fractionStar" height={size} viewBox={BLOATED_STAR_CONFIG.viewBox}>
      <clipPath id={maskId}>
        <rect
          x={`${fractionNumber}0%`}
          y="0"
          width="100%"
          height="100%"
          fill="none"
        />
      </clipPath>
      <g>
        <path fill={activeStarColor} d={BLOATED_STAR_CONFIG.path} />
        <path
          fill={emptiStarColor}
          d={BLOATED_STAR_CONFIG.path}
          clipPath={`url(#${maskId})`}
        />
      </g>
    </svg>
  ) : null;

  const emptyStars =
    emptyStarsCount > 0
      ? Array(emptyStarsCount)
          .fill(null)
          .map((_, i) => (
            <svg
              key={`empty-star-${i}`}
              height={size}
              viewBox={BLOATED_STAR_CONFIG.viewBox}
              style={letterSpacing}
            >
              <path fill={emptiStarColor} d={BLOATED_STAR_CONFIG.path} />
            </svg>
          ))
      : [];

  return (
    <div className={classNames}>
      {[...fullStars, fractionStar, ...emptyStars]}
    </div>
  );
};

// RatingStars.propTypes = {
//   rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   size: PropTypes.number,
//   spacing: PropTypes.number,
//   starType: PropTypes.string,
//   color: PropTypes.string,
//   activeColor: PropTypes.string,
//   classNames: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]),
// }

// RatingStars.defaultProps = {
//   size: 12,
//   spacing: 0,
//   rating: '5.0',
//   starType: 'bloated',
//   color: '#a6a6a6',
//   activeColor: '',
//   classNames: '',
// }

export default RatingStars;
