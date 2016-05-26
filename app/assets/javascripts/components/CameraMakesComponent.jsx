var CameraMakesComponent = React.createClass({
    render: function () {
        return (
            <div>
                <CameraMake data={this.props.data}/>
            </div>
        )
    }
});


var CameraMake = React.createClass({
    render: function () {
        var make = Object.keys(this.props.data).map(function (item, index) {

            return <Image data={this.props.data[item]}/>;

        }, this);
        return <div>{make}</div>;
    }
});


var Image = React.createClass({
    render: function () {

        var works = this.props.data.map(function (item, index) {
            return (
                <div key={index}>
                    <img src={item.urls.url[2]}/>
                </div>
            )
        });
        return <div>{works}</div>
    }
});


var CameraModel = React.createClass({
    render: function () {
        var model = Object.keys(this.props.data).map(function (item, index) {
            debugger;

            return <Image data={this.props.data[item]}/>;

        }, this);
        return <div>{model}</div>;
    }
});


var CameraMakeImages = React.createClass({
    render: function () {
        var i = 0;

        var makeImages = Object.keys(this.props.data).map(function (item, index) {
            if (i >= 10) {
                return <div> {makeImages} </div>
            }
            return <Image key={index} data={this.props.data[item]}/>

        }, this);

        return (
            <div>{makeImages}</div>
        )
    }
});






