 var HelloWorld = React.createClass({
            displayName:'Hello World',
            render:function(){
                return React.DOM.div(null, "Hello, ",this.props.name1);
            }
        });