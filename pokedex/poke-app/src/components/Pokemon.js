import React, { Component } from 'react';
import { Card, Image, Placeholder } from 'semantic-ui-react';

class Pokemon extends Component {

    state = {
        data: [],
        isLoading: true,
    }

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
            <Card className="poke-card" href={data.name}>
                {isLoading ? <Placeholder><Placeholder.Image square /></Placeholder> : <Image src={data.sprites.front_default} wrapped ui={false} />}
                <Card.Content>
                    {isLoading ? <Placeholder.Line /> : <Card.Header>{data.name}</Card.Header>}
                </Card.Content>
            </Card>


        );
    }

}
export default Pokemon;