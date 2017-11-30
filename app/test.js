"use strict";

var React = require('react');

var About = React.createClass({

 
getInitialState: function(){
        return {
            name: '',
    Id: ''
        };
            
    
    },
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            console.log(transition);
            console.log(callback)
            if(confirm("Do you want to visit this page")){
                callback();
            }
            // if(confirm("Do you want to visit this page")){
            //     transition.abort();
            // }
            // else{
            //     callback();
            // }

        },
        willTransitionFrom: function(transition, component){
            console.log(transition);
            console.log(component)
            if(!confirm("Do you want to leave this page")){
                transition.abort();
            }
            // if(confirm("Do you want to visit this page")){
            //     transition.about();
            // }
            // else{
            //     callback();
            // }

        }

    },
    submitForm(event){
        event.preventDefault();
        
        var nameVal=document.getElementById('name').value;
         var IDVal=document.getElementById('ID').value;
       
        var QuerySubmission={
            name : nameVal,
            id : IDVal
        };
         console.log(QuerySubmission);
         if(nameVal != '' && IDVal != ''){
            alert("Submitted successfully");
         document.getElementById('name').value = '';
         document.getElementById('ID').value = '';
         }
         
    },
    render: function() {
        return (
            <form className="demoForm col-md-6" onSubmit={this.submitForm.bind(this)}>
       <h2>Sign up</h2>
       <div className="form-group">
         <label htmlFor="Name">DistributionName</label>
         <input type="text" id='name'  className="form-control"
          />
       </div>
        <div className="form-group">
         <label htmlFor="Id">Distribution Id</label>
         <input type="text" id='ID' className="form-control"
         />
       </div>
      
      
       <button type="submit" className="btn btn-primary">
          Sign up
       </button>
     </form>
        

        );
    }
});

module.exports = About;
