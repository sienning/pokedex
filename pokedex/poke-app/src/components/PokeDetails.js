import React, { Component } from 'react';
import LoaderDiv from './LoaderDiv';
import Details from './Details';
// import Normal from '../images/type-normal.png';
// import Poison from '../images/type-poison.png';
// import Psychic from '../images/type-psychic.png';
// import Grass from '../images/type-grass.png';
// import Ground from '../images/type-ground.png';
// import Ice from '../images/type-ice.png';
// import Fire from '../images/type-fire.png';
// import Rock from '../images/type-rock.png';
// import Dragon from '../images/type-dragon.png';
// import Water from '../images/type-water.png';
// import Bug from '../images/type-bug.png';
// import Dark from '../images/type-dark.png';
// import Fighting from '../images/type-fighting.png';
// import Gosht from '../images/type-ghost.png';
// import Steel from '../images/type-steel.png';
// import Flying from '../images/type-flying.png';
// import Electric from '../images/type-electric.png';
// import Fairy from '../images/type-fairy.png';

class PokeDetails extends Component {
    state = {
        data: [],
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

    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        try {
            // console.log(this.props.match.params.PokemonName);
            const name = this.props.match.params.PokemonName;
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
            const pokedata = await res.json();
            console.log(pokedata.stats[0])
            this.setState({
                data: pokedata,
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
            data,
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
        } = this.state;

        return (
            <div className="App-header" >
                {isLoading ? <LoaderDiv /> : console.log(speed)}
                {isLoading ? <LoaderDiv /> : console.log(data)}
                {isLoading ? <LoaderDiv /> : <Details name={name} urlImage={urlImage} height={height / 10} weight={weight * 0.1} hp={hp} speed={speed} attack={attack} defense={defense} specialAttack={speAttack} specialDefense={speDefense} />}

            </div>
        );
    }
}
export default PokeDetails;