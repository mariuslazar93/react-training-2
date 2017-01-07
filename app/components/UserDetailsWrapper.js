import React from 'react';

function UserDetailsWrapper(props){
    return (
        <div className='col-sm-6'>
            <h2>{props.header}</h2>
            {props.children}
        </div>
    );
}

module.exports = UserDetailsWrapper
