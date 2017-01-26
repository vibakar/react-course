var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients=[{'id':1,'text':'hi'},{'id':2,'text':'hello'},{'id':3,'text':'Hi There'}];

var List=React.createClass({
  render:function(){
      var ListItems=ingredients.map(function(item){
        return <ListItem key={item.id} ingredient={item.text} />;
      });
      return (<ul>{ListItems}</ul>);
  }
});

module.exports = List;
