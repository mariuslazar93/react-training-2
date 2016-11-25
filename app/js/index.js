import React from 'react';
import ReactDOM from 'react-dom';

var userData = {
    name: "Marius Lazar",
    username: "mariuslazar93",
    image: "http://placehold.it/300x300/"
};

var ProfilePic = React.createClass({
    render: function(){
        return (
            <img src={this.props.imageUrl} />
        );
    }
});

var ProfileLink = React.createClass({
    render: function(){
        return (
            <a href={'https://www.github.com/' + this.props.username}>
                {this.props.username}
            </a>
        );
    }
});

var ProfileName = React.createClass({
    render: function(){
        return (
            <h1>{this.props.name}</h1>
        );
    }
});

var Avatar = React.createClass({
    render: function(){
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        );
    }
});

ReactDOM.render(<Avatar user={userData} />, document.getElementById('app'));
