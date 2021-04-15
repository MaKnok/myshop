import React, { Component } from 'react';
class Home extends Component {
    state = {  
        sectionName:this.props.sectionName

    };

    handleSectionName = () => {
        this.setState({sectionName:'Home'});
    }

    render() { 
        return ( 
            <h1>Olá, essas são as novidades!</h1>
         );
    }
}
 
export default Home;