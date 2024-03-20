import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
// import { useRouter } from 'next/router'

// import getActiveColor from './getActiveColor'

const STARS_COUNT = 5
const PLAIN_STAR_CONFIG = {
  path: 'M54,5 86,105 1,43H107L22,105',
  viewBox: '0 0 104 104',
}
const BLOATED_STAR_CONFIG = {
  path: `M12.7068 0.996094L16.422 8.64029L24.8252 9.88469L18.8103 15.8401L20.2255 24.2842L12.7068 20.2843L5.18813 24.2842L6.60342 15.8401L0.5 9.88469L8.90326 8.64029L12.7068 0.996094Z`,
  viewBox: '0 0 25 25',
}

const RatingStars = ({ rating, size, spacing, starType, color, activeColor, classNames }) => {
  // const router = useRouter()
  // const { partner, vertical } = router.query
  // const themeColor = getActiveColor(partner) || getActiveColor(vertical)
  
  const activeStarColor = '#FFC531'
  const maskId = uuid()
  const letterSpacing = { marginRight: `${spacing}px` }
  const [whole, fraction] = parseFloat(rating).toFixed(1).split('.')
  const wholeStarsCount = +whole
  const fractionNumber = +fraction
  const { path, viewBox } = starType === 'plain' ? PLAIN_STAR_CONFIG : BLOATED_STAR_CONFIG
  const emptyStarsCount = fractionNumber
    ? STARS_COUNT - (wholeStarsCount + 1)
    : STARS_COUNT - wholeStarsCount

  const fullStars = wholeStarsCount
    ? Array(wholeStarsCount)
        .fill(null)
        .map((_, i) => (
          <svg key={`full-star-${i}`} height={size} viewBox={viewBox} style={letterSpacing}>
            <path d={path} fill={activeStarColor} />
          </svg>
        ))
    : []

  const fractionStar = fractionNumber ? (
    <svg key="fractionStar" height={size} viewBox={viewBox}>
      <clipPath id={maskId}>
        <rect x={`${fractionNumber}0%`} y="0" width="100%" height="100%" fill="none" />
      </clipPath>
      <g>
        <path fill={activeStarColor} d={path} />
        <path fill={color} d={path} clipPath={`url(#${maskId})`} />
      </g>
    </svg>
  ) : null

  const emptyStars =
    emptyStarsCount > 0
      ? Array(emptyStarsCount)
          .fill(null)
          .map((_, i) => (
            <svg key={`empty-star-${i}`} height={size} viewBox={viewBox} style={letterSpacing}>
              <path fill={color} d={path} />
            </svg>
          ))
      : []

  return <div className={classNames}>{[...fullStars, fractionStar, ...emptyStars]}</div>
}

RatingStars.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.number,
  spacing: PropTypes.number,
  starType: PropTypes.string,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  classNames: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]),
}

RatingStars.defaultProps = {
  size: 12,
  spacing: 0,
  rating: '5.0',
  starType: 'bloated',
  color: '#a6a6a6',
  activeColor: '',
  classNames: '',
}

export default RatingStars
