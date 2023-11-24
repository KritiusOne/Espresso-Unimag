import React from 'react';

export function Button({ clickHandler, title = "", Icon, ...props }) {
  return (
    <button
      onClick={clickHandler}
      className="btn btn-primary" // Use Bootstrap button styling
      {...props}
    >
      <span className='button__title'>
        {title}
      </span>
      {Icon && <Icon />}
    </button>
  );
}
