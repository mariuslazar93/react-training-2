var React = require('react');
var PropTypes = React.PropTypes;
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelper');

var ResultsContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount: function(){
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(function(scores){
                this.setState({
                    isLoading: false,
                    scores: scores
                })
            }.bind(this));
    },
    render: function(){
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores} />
        );
    }
});

module.exports = ResultsContainer
