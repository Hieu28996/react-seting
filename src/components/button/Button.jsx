import React from 'react';

/**
 * Primary UI component for user interaction
 */
export const Button = (props) => {
    const { type, text, size, isDisabled, color } = props;
    return (
        <button
        type="button"
        className={
            [
            'btn',
            `btn_${color}`,
            `btn_${size}`
            ].join(' ')
        }
        disabled={isDisabled}
        >
        {text}
        </button>
    );
};



// Button.propTypes = {
//   primary: PropTypes.bool,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   label: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
