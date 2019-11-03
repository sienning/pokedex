import React, { Component } from 'react';
import LoaderDiv from './LoaderDiv';
import Details from './Details';

class PokeDetails extends Component {
    state = {
        isLoading: true,
        name: '',
        urlImage: '',
        height: 0,
        weight: 0,
        hp: 0,
        speed: 0,
        attack: 0,
        defense: 0,
        speAttack: 0,
        speDefense: 0,
        types: [],
        abilities: [],
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        try {
            const name = this.props.match.params.PokemonName;
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
            const pokedata = await res.json();
            console.log(pokedata)
            this.setState({
                isLoading: false,
                name: pokedata.name,
                urlImage: pokedata.sprites.front_default,
                height: pokedata.height,
                weight: pokedata.weight,
                speed: pokedata.stats[0].base_stat,
                speDefense: pokedata.stats[1].base_stat,
                speAttack: pokedata.stats[2].base_stat,
                defense: pokedata.stats[3].base_stat,
                attack: pokedata.stats[4].base_stat,
                hp: pokedata.stats[5].base_stat,
                types: pokedata.types,
                abilities: pokedata.abilities.slice(0, 3),
            });
        } catch (err) {
            this.setState({ isLoading: true });
            console.log(err.msg);
            throw err;
        }
    }

    chooseType(type) {
        if (type === "normal") {

        }
    }

    render() {
        const {
            isLoading,
            name,
            urlImage,
            height,
            weight,
            hp,
            speed,
            attack,
            defense,
            speAttack,
            speDefense,
            types,
            abilities,
        } = this.state;

        return (
            <div className="App-header" >
                {isLoading ? <LoaderDiv /> : <Details name={name} urlImage={urlImage} height={height / 10} weight={weight * 0.1} hp={hp} speed={speed} attack={attack} defense={defense} specialAttack={speAttack} specialDefense={speDefense} types={types} abilities={abilities} />}

            </div>
        );
    }
}
export default PokeDetails;