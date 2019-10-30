import React from 'react';
import Pokemon from './Pokemon';
import { Container, Card } from 'semantic-ui-react';



const ListeAppart = ({ pokemons }) => {
    return (
        <div>
            {
                pokemons.map((i, index) =>
                    <Card.Group centered key={'i' + index}><Pokemon nom={i.nom} url={i.url}></Pokemon></Card.Group>
                )}
        </div>
    );
};

export default ListeAppart;
