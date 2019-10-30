import React from 'react';
import { Input } from 'semantic-ui-react';



const Filtre = ({ value, handleSubmit }) => {
    return (
        <div className='ui right aligned category search item'>
            <form onSubmit={handleSubmit}>
                <div className='ui transparent icon input'>
                    <input
                        className='prompt'
                        placeholder='Trouver un pokémon ...'
                        id="filter"
                        type="text"
                        name="search"
                    />
                    <Input icon='search' className='search link icon' type="submit" placeholder='Search...' value='Chercher' />
                </div>
            </form>

            <h3>{value}</h3>
        </div>
    );
};

export default Filtre;