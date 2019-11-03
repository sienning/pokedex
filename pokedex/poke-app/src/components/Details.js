import React from 'react';
import { Image, List, Divider } from 'semantic-ui-react';
import '../Details.css';

const Details = ({ name, types, urlImage, weight, height, speed, specialDefense, specialAttack, defense, attack, hp, abilities }) => {
    return (
        <div className="App-header" >
            <Image size='medium' src={urlImage} wrapped ui={false} />
            <h1>{name.toUpperCase()}</h1>
            <div>

                <Divider horizontal inverted>Type</Divider>
                <div>
                    {
                        types.map((i, index) =>
                            <div key={'i' + index} className={i.type.name}></div>
                        )
                    }
                </div>
                <Divider horizontal inverted>Poids</Divider>
                <p>{weight} kg</p>
                <Divider horizontal inverted>Taille</Divider>
                <p>{height} m</p>
                <div>
                    <Divider horizontal inverted>Stats</Divider>
                    <List>
                        <List.Item><b>HP</b> : {hp}</List.Item>
                        <List.Item><b>Vitesse</b> : {speed}</List.Item>
                        <List.Item><b>Attaque</b> : {attack}</List.Item>
                        <List.Item><b>Défense</b> : {defense}</List.Item>
                        <List.Item><b>Défense Spéciale</b> : {specialDefense}</List.Item>
                        <List.Item><b>Attaque Spéciale</b> : {specialAttack}</List.Item>
                    </List>
                </div>
                <div>
                    <Divider horizontal inverted>Capacités</Divider>
                    <List>
                        {
                            abilities.map((i, index) =>
                                <List.Item key={'i' + index}>{i.ability.name}</List.Item>
                            )
                        }
                    </List>

                </div>

            </div>
        </div>
    );
}
export default Details;