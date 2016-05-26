var IndexImageComponent = React.createClass({

    render: function () {
        var imageUrl = [];
        for (var i = 0; i < 10; i++) {
            imageUrl.push(this.props.data[i].urls.url[2])
        }
        return (<IndexImage data={imageUrl}/> );
    }

});

var IndexImage = React.createClass({

    render: function () {
        var images = [];
        for (var i = 0; i < 10; i++) {
            images.push(<img src={this.props.data[i]} alt="Smiley face"/>);
        }
        return (<div>
                {images}
            </div>
        )
    }

});