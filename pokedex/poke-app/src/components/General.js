import React, { Component } from 'react';
import LoaderDiv from './LoaderDiv';
import Filtre from './Filtre';
import { Container, Card } from 'semantic-ui-react';
// import Pokemon from './Pokemon';
import ListePokemon from './ListePokemon';
import PokeDetails from './PokeDetails';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class General extends Component {
    state = {
        data: [],
        isLoading: true,
        value: '',
    }


    async componentDidMount() {
        this.setState({ isLoading: true })
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
            const pokedata = await res.json();
            this.setState({ data: pokedata, isLoading: false });

        } catch (err) {
            this.setState({ isLoading: true });
            console.log(err.msg);
            throw err;
        }
    }

    handleSubmit = this.handleSubmit.bind(this);

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ value: event.currentTarget.search.value });
        event.currentTarget.reset();
    }



    render() {
        const { isLoading, data } = this.state;
        return (
            <div>
                <Router>
                    <h1>Pokédex</h1>
                    <p>Tout ce que vous voulez savoir sur les Pokémons !</p>
                    <Filtre handleSubmit={this.handleSubmit} value={this.state.value}></Filtre>

                        <Container text>


                            {isLoading ? <LoaderDiv></LoaderDiv> : <ListePokemon pokemons={data.results} fluid raised></ListePokemon>}
                        </Container>

                
                    <Switch>
                        <Route path="/pokemon">
                            <PokeDetails></PokeDetails>
                        </Route>
                    </Switch>

                </Router>


            </div>
        );
    }
}

export default General;