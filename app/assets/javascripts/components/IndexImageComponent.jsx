//var IndexImageComponent = React.createClass({
//
//    render: function () {
//        var imageUrl = [];
//        for (var i = 0; i < 10; i++) {
//            debugger;
//            imageUrl.push(this.props.data[i].urls.url[2])
//        }
//        return (<IndexImage data={imageUrl}/> );
//    }
//
//});
//
//var IndexImage = React.createClass({
//
//    render: function () {
//        var images = [];
//        for (var i = 0; i < 10; i++) {
//            images.push(<img src={this.props.data[i]} alt="Smiley face"/>);
//        }
//        return (<div>
//                {images}
//            </div>
//        )
//    }
//
//});


var IndexImageComponent = React.createClass({
    render: function () {
        var i = 0;
        var image = Object.keys(this.props.data).map(function (item, index) {
            if (i >= 10) {
                return <div>{image}</div>
            }
            i++;
            return <IndexImage data={this.props.data[item].urls}/>;
        }, this);
        return <div>{image}</div>
    }
});

var IndexImage = React.createClass({
    render: function () {
        return <div>
            <img className="col-xs-6 col-lg-3 smallPicture" src={this.props.data.url[0]}/>
            <img className="col-xs-6 col-lg-4 mediumPicture" src={this.props.data.url[1]}/>
            <img className="col-xs-12 col-lg-6 largePicture" src={this.props.data.url[2]}/>
        </div>
    }
});

