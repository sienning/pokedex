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
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        try {
            // console.log(this.props.match.params.PokemonName);
            const name = this.props.match.params.PokemonName;
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
            const pokedata = await res.json();
            this.setState({ data: pokedata, isLoading: false });
        } catch (err) {
            this.setState({ isLoading: true });
            console.log(err.msg);
            throw err;
        }
    }

    chooseType(type){
        if(type === "normal"){
            
        }
    }

    render() {
        const { isLoading, data } = this.state;

        return (
            <div className="App-header" >
                {isLoading ? <LoaderDiv /> : console.log(data)}
                {isLoading ? <LoaderDiv /> : <Details name={data.name} urlImage={data.sprites.front_default} height={data.height/10} weight={data.weight*0.1} />}
                
            </div>
        );
    }
}
export default PokeDetails;