// CheckboxWithLabel.js

var React = require('react/addons');
var CheckboxWithLabel = React.createClass({displayName: "CheckboxWithLabel",
  getInitialState: function() {
    return { isChecked: false };
  },
  onChange: function() {
    this.setState({isChecked: !this.state.isChecked});
  },
  render: function() {
    return (
      React.createElement("label", null, 
        React.createElement("input", {
          type: "checkbox", 
          checked: this.state.isChecked, 
          onChange: this.onChange}
        ), 
        this.state.isChecked ? this.props.labelOn : this.props.labelOff
      )
    );
  }
});
module.exports = CheckboxWithLabel;

React.render(
  React.createElement(CheckboxWithLabel, null),
  document.getElementById('content')
);