import React from 'react';

function Button({buttonName, func,disabled}) {
    return (
        <div>
           <button onClick={disabled?()=>{}:func} disabled={disabled}>{buttonName}</button>
        </div>
    );
}

export default Button;