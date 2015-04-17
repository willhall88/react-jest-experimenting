var Numbers = React.createClass({displayName: "Numbers",
  sum: function(number1, number2){
    return number1 + number2;
  }
  // render: function() {

  // }
});
module.exports = sum;


React.render(
  React.createElement(CheckboxWithLabel, null),
  document.getElementById('content')
);