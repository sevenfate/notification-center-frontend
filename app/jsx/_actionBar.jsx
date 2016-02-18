var MessageNotificationActionBar = React.createClass({

    componentWillMount: function () {
        emitter.on('unread.count', function (count) {
            console.info('unread.count: ', count);
            this.setState({countUnreaded: count, active: count > 0});
        }.bind(this));
    },

    getInitialState: function () {
        return {countUnreaded: 0, active: false};
    },

    requestAll: function () {
        dispatcher.dispatch({type: 'request.all'});
    },

    render: function () {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <form className="navbar-form navbar-left" role="search">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go</button>
                </span>
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li className={this.state.active ? 'active': ''} title={'['+this.state.countUnreaded + '] Unreaded messages'}><a onClick={this.requestAll}
                                                                            className="navbar-brand"
                                                                            href="#">{this.state.countUnreaded}</a></li>
                        <li className={this.state.active ? 'active': ''}title="Reload" ><a onClick={this.requestAll}
                                                                            className="navbar-brand" href="#"><span
                            className="glyphicon glyphicon-retweet img-responsive avatar" aria-hidden="true"></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
});