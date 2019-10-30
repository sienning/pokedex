import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
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
            <div className="pokemon">
                <Card href="">
                    {isLoading ? <LoaderDiv></LoaderDiv> : <Image src={data.sprites.front_default} wrapped ui={false} />}
                    <Card.Content>
                        {isLoading ? <LoaderDiv></LoaderDiv> : <Card.Header>{data.name}</Card.Header>}
                    </Card.Content>
                </Card>
            </div>
        );
    }

}
export default Pokemon;