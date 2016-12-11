var React = require('react');

function ConfirmBattle(props){
    if(props.isLoading)
        return (
            <p>LOADING</p>
        );
    else {
        return (
            <p>CONFIRM</p>
        );
    }
}

module.exports = ConfirmBattle;
