var CameraModelsMenuBar = React.createClass({
    render: function() {

        var make = Object.keys(this.props.data).map(function (item, index) {
            debugger;
            return <Model key={index} data={this.props.data[item][index].exif.model} />;
        }, this);
        return <div>{make}</div>
        //return <ul>{make}</ul>;
    }
});

var Model = React.createClass({
    render: function(){
        debugger;
        return <a href={window.location.origin + "/model/" + this.props.data}>{this.props.data}</a>
    }
});

