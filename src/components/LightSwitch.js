import React from 'react';

const LightSwitch = () => {
    return (
        <button
            type="button"
            onClick={() => console.log('Verander de waarde!')}
        >
            Switch
        </button>
    );
}

export default LightSwitch;