import React from "react";
import Spinner from 'react-loader-spinner';

export default function Loader() {
    return (
        <div className="loader">
            <Spinner type="Puff" color="#038E9F" height={100} width={100} />
        </div>
    )
}