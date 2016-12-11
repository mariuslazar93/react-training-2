var React = require('react');

function Prompt(props){
    return (
        <div className='jumbotron col-sm-6 center-block text-center'>
            <h1 className="spacer-bottom">{props.header}</h1>
            <form onSubmit={props.onSubmitUser}>
                <div className="form-group col-sm-8 center-block">
                    <input type="text" className="form-control" placeholder="Github Username"
                        onChange={props.onUpdateUser}
                        value={props.username} />
                </div>
                <div className="form-group col-sm-4 center-block">
                    <button type="submit" className="btn btn-success">Continue</button>
                </div>
            </form>
        </div>
    );
}

Prompt.propTypes = {
    header: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    onUpdateUser: React.PropTypes.func.isRequired,
    onSubmitUser: React.PropTypes.func.isRequired
}

module.exports = Prompt;
