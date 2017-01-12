var React = require('react');

var StarRater = require('./star-rater');

var actions = require('../actions/index');

var Repository = React.createClass({
    changeRating: function(rating) {
        this.props.dispatch(
            actions.rateRepository(this.props.repository.name, rating)
        );
    },
    render: function() {
        return (
            <div className="repository">
                {this.props.repository.name}
                &nbsp;
                <StarRater rating={this.props.repository.rating}
                           onChange={this.changeRating} />
            </div>
        );
    }
});

module.exports = Repository;