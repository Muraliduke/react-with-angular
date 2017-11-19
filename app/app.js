

var app = angular.module( 'angularMFRP', ['react'] );

app.controller( 'mainCtrl', function( $scope ) {
	$scope.person = { fname: 'Clark', lname: 'Kent' };
	$scope.todos = [
    {text:'murali', done:false},
		{text:'build an angular app', done:false}];
		

} );

var Hello = React.createClass( {
  propTypes: {
    fname: React.PropTypes.string.isRequired,
    lname: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.DOM.span( null,
      'Hello ' + this.props.fname + ' ' + this.props.lname
    );
  }
} );

app.value( "Hello", Hello );

app.directive( 'hello', function( reactDirective ) {
  return reactDirective( Hello );
} );

app.directive('hllo', function(){
	return{
	restrict:'E',
					scope:{
									name:'='
			},
					link:function(scope, el, attrs){
							scope.$watch('name', function(newValue, oldValue){
									var MyComponent = React.createFactory(HelloWorld);
									ReactDOM.render(
													MyComponent({name1:newValue}),
													el[0]
									);
					})
	}
	}
})

