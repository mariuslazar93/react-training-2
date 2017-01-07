var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainWrapper = require('./MainWrapper');
var Loading = require('./Loading');

function StartOver(){
    return (
        <div className='col-sm-12 spacer-top'>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
          </Link>
        </div>
    );
}

function Tie() {
    return (
        <MainWrapper>
            <h1>It is a tie!</h1>
            <StartOver />
        </MainWrapper>
    );
}

function Results(props){

    if(props.isLoading){
        return (
            <Loading text="Loading..." />
        );
    }

    if(props.scores[0] === props.scores[1]){
        return (
            <Tie />
        );
    }

    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var loosingIndex = winningIndex === 0 ? 1 : 0;

    return (
        <MainWrapper>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Looser'>
                    <UserDetails score={props.scores[loosingIndex]} info={props.playersInfo[loosingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainWrapper>
    );
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

module.exports = Results
