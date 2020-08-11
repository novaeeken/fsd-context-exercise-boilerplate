import React from 'react';

const Status = () => {
    // Dit component zal laten zien of het licht aan of uit staat

    return (
        <>
            {/* als lightStatus true is, laat dan dit zien: */}
            <h1>Aan</h1>

            {/* als lightStatus false is, laat dan dit zien: */}
            <h1>Uit</h1>
        </>
    );
}

export default Status;