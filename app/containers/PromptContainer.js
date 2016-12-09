var React = require('react');

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            username: ''
        }
    },
    onUpdateUser: function(e){
        this.setState({
            username: e.target.value
        });
    },
    onSubmitUser: function(e){
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });
        if(this.props.routeParams.playerOne){
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: username
                }
            });
        }
        else{
            this.context.router.push('/playerTwo/' + username);
        }
    },
    render: function(){
        return (
                <div className='jumbotron col-sm-6 center-block text-center'>
                    <h1 className="spacer-bottom">{this.props.route.header}</h1>
                    <form onSubmit={this.onSubmitUser}>
                        <div className="form-group col-sm-8 center-block">
                            <input type="text" className="form-control" placeholder="Github Username"
                                onChange={this.onUpdateUser}
                                value={this.state.username} />
                        </div>
                        <div className="form-group col-sm-4 center-block">
                            <button type="submit" className="btn btn-success">Continue</button>
                        </div>
                    </form>
                </div>
        );
    }
});

module.exports = PromptContainer;
