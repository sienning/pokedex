import React, { Component } from 'react';
import { Card, Image, Placeholder } from 'semantic-ui-react';
import LoaderDiv from './LoaderDiv';

class Pokemon extends Component {

    state = {
        data: [],
        isLoading: true,
    }

    // const Pokemon = ({ nom, url }) => {

    async componentDidMount() {
        this.setState({ isLoading: true })

        try {
            const res = await fetch(this.props.url);
            const pokedata = await res.json();
            this.setState({ data: pokedata, isLoading: false });

        } catch (err) {
            this.setState({ isLoading: true });
            console.log(err.msg);
            throw err;
        }
    }

    render() {
        const { isLoading, data } = this.state;
        return (
            <Card href="">
                {isLoading ? <Placeholder><Placeholder.Image square /></Placeholder> : <Image src={data.sprites.front_default} wrapped ui={false} />}
                <Card.Content>
                    {isLoading ? <LoaderDiv></LoaderDiv> : <Card.Header>{data.name}</Card.Header>}
                </Card.Content>
            </Card>
        );
    }

}
export default Pokemon;