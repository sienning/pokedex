import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Pokemon = ({ nom, image, type, statut }) => { 
    return ( 
        <div className="pokemon">
            <Card href='#card-example-link-card'>
                <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{nom}</Card.Header>
                    <Card.Meta extra>
                        <span>Type</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='user'/>
                        22 Friends
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
}
export default Pokemon;