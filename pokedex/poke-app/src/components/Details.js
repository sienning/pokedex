import React from 'react';
import { Image } from 'semantic-ui-react';

const Details = ({ name, type, urlImage, weight, height, stats }) => {
    return (
        <div className="App-header" >
            <Image size='medium' src={urlImage} wrapped ui={false} />
            <h1>{name.toUpperCase()}</h1>

            <div>
                <p><b>Poids</b> : {weight} kg</p>
                <p><b>Taille</b> : {height} m</p>
                <p><b>Stats</b> :
                    <ul>
                        <li></li>
                    </ul>
                </p>

                <ul>
                    <li>Les</li>
                    <li>3 premières</li>
                    <li>capacités</li>
                </ul>
            </div>
        </div>
    );
}
export default Details;