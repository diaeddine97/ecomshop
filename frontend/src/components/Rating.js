import React from 'react';

const Rating = ({ value, text, color }) => {
  var spans = [];
  for (var i = 0; i < 5; i++) {
    spans.push(
      <span>
        <i
          style={{ color }}
          className={
            value >= i + 1
              ? 'fas fa-star'
              : value >= i + 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
    );
  }
  return (
    <div className='rating'>
      {spans && spans}
      <span className="pl-2">{text && text}</span>
    </div>
  );
};

Rating.defaultProps={
    color: 'gold'
}

export default Rating;
