var CameraMakesMenuBar = React.createClass({
    render: function() {

        var make = Object.keys(this.props.data).map(function (item, index) {
            return <Make data={item} />;
        }, this);
        return <ul>{make}</ul>;
    }


});

var Make = React.createClass({

    render: function(){
        return <li><a href="http://www.google.com.au"> {this.props.data} </a></li>
    }

});