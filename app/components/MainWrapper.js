import React from 'react';

function MainWrapper(props){
    return (
        <div className="jumbotron col-sm-12 center-block text-center">
            {props.children}
        </div>
    );
}

module.exports = MainWrapper
