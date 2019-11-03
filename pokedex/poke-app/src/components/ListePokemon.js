import React from 'react';
import Pokemon from './Pokemon';
import { Card } from 'semantic-ui-react';



const ListePokemon = ({ pokemons }) => {
    return (
        <Card.Group doubling itemsPerRow={3} stackable >
                
            {console.log(pokemons)}
            {
                pokemons.map((i, index) =>
                    <Pokemon center key={'i' + index} nom={i.nom} url={i.url}>}</Pokemon>
                )
            }
        </Card.Group>
    );
};

export default ListePokemon;
