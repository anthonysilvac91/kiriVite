import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating = 0 }) => {
  const validRating = Math.min(Math.max(rating, 0), 5);
  const fullStars = Math.floor(validRating);
  const halfStar = validRating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
      ))}
      {halfStar === 1 && <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon key={i + fullStars + 1} icon={faStarEmpty} className="text-yellow-500" />
      ))}
      <span className="ml-2 text-sm text-gray-600">({validRating})</span>
    </div>
  );
};

export default StarRating;

