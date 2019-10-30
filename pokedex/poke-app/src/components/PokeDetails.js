import React from 'react';
import { Image } from 'semantic-ui-react';

const PokeDetails = ({ nom, image, type, statut }) => {
    return (
        <div className="App-header">
            <Image size='medium' src={image} wrapped ui={false} />
            <h1> Bulbasaur {nom}</h1>
            <span>Type</span>
            <div>
                <div>Poids</div>
                <div>Taille</div>
                <div>Stats</div>

                <ul>
                    <li>Les</li>
                    <li>3 premières</li>
                    <li>capacités</li>
                </ul>
            </div>
        </div>
    );
}
export default PokeDetails;