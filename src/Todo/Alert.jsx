import React, {useEffect} from 'react';

export default function Alert({type, msg, removeAlert, todo}) {

    useEffect(() => {
        const timeOut = setTimeout(() => {
            removeAlert();
        }, 3000)
        return () => clearTimeout(timeOut);
    }, [todo]);

    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    )
}
