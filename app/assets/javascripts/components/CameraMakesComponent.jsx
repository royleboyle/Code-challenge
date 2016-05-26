var CameraMakesComponent= React.createClass({
    render: function () {
        return (
            <div>
                <CameraMake data={this.props.data}/>
            </div>
        )
    }
});

var CameraMake = React.createClass({
    render: function() {
        var make = Object.keys(this.props.data).map(function (item, index) {

            return <Image data={this.props.data[item]} />;

        }, this);
        return <div>{make}</div>;
    }
});

var CameraModel = React.createClass({
    render: function() {
        var model = Object.keys(this.props.data).map(function (item, index) {

            return <Image data={this.props.data[item]} />;

        }, this);
        return <div>{model}</div>;
    }
});

var Image = React.createClass({
    render: function() {

        var works = this.props.data.map(function (item, index) {
            return (
                <div key={index}>
                    <h4>{item.filename}</h4>
                    <img src={item.urls.url[0]} alt="Smiley face" height="42" width="42" />
                </div>
            )
        });
        return <div>{works}</div>
    }
});