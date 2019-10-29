import React, { Component } from 'react';
import LoaderDiv from './LoaderDiv';
import Filtre from './Filtre';
import { Card, Icon } from 'semantic-ui-react';



class Pokemon extends Component{
    render(){
        return ( 
        <div className="pokemon">
            <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />  
        </div>
        );
    }
}
export default Pokemon;