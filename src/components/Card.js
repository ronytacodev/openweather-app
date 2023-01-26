import React from 'react';
import Spinner from './Spinner';

const Card = ({loadingData, showData, weather, forecast}) => {

    if(loadingData) {
        return <Spinner/>;
    }

    return (
        <div className="mt-5">
            {/* me quede en el min 51:57 */}
        </div>
    );
}

export default Card;