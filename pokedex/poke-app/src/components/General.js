import React, { Component } from 'react';
import LoaderDiv from './LoaderDiv';
import Filtre from './Filtre';
import { Menu, Container, Card } from 'semantic-ui-react';
import Pokemon from './Pokemon';

class General extends Component{
    state = {
        data: [],
        isLoading : false,
        value: ''
        }
        
    handleSubmit = this.handleSubmit.bind(this);
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({value: event.currentTarget.filtre.value});
        event.currentTarget.reset(); 
        console.log("Hello");
    }

    async componentDidMount(){
        this.setState({ isLoading : true })
        try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1/`);
        const data = await res.json();
        this.setState({ data: data, isLoading: false });

        console.log(data);

        } catch (err){
        this.setState({ isLoading: true });
        console.log(err.msg);
        throw err;
        }
    }


    render(){
        const { isLoading, data } = this.state;
        return ( 
        <div>
            <Filtre></Filtre>
                <Container text>
                    <h1>Pokédex</h1>
                    {isLoading ? <LoaderDiv /> : <p>{data.name}</p>}
                    <Card.Group centered>
                        <Pokemon nom={data.name} fluid raised></Pokemon>
                    </Card.Group>
                </Container>
            
        </div>
        );
    }
}

export default General;