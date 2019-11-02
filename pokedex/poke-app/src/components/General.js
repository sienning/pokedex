import React, { Component } from 'react';
import LoaderDiv from './LoaderDiv';
import Filtre from './Filtre';
import { Container, Button } from 'semantic-ui-react';
import ListePokemon from './ListePokemon';
import PokeDetails from './PokeDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class General extends Component {
    state = {
        data: [],
        isLoading: true,
        value: '',
    }

    async componentDidMount() {
        this.setState({ isLoading: true })
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=964.`);
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
        let filtrePokemon = [];
        if (!isLoading) {

            filtrePokemon = data.results.filter(pokemon =>
                pokemon.name.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase())
            );

        }
        return (
            <Container>
                <Router>
                    <Button basic color="yellow" icon='arrow up' onclick="topFunction()" id="myBtn" title="Go to top" />

                    <h1>Pokédex</h1>
                    <p>Tout ce que vous voulez savoir sur les Pokémons !</p>
                    <Filtre handleSubmit={this.handleSubmit} value={this.state.value}></Filtre>
                    <div>
                        {isLoading ? <LoaderDiv></LoaderDiv> : <ListePokemon pokemons={filtrePokemon} fluid raised></ListePokemon>}
                    </div>


                    <Switch>
                        <Route path="/pokemon">
                            <PokeDetails></PokeDetails>
                        </Route>
                    </Switch>

                </Router>


            </Container>
        );
    }
}

export default General;