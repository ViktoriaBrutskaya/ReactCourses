import React from 'react';
import './MyButtonClass.css'

class MyButtonClass extends React.Component{
    render(){
        return(<button className="MyButtonClass">
        {this.props.children}
         </button>)
    }
}
export default MyButtonClass;