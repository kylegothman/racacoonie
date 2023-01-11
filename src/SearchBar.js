import React from 'react';


const SearchBar = ({searchfield, searchChange}) => {
    return (
        < div class='pa2'>
            <input 
                className='pa3 ba b--black-20 bg-light-gray'
                type='text'
                placeholder='search recipes'
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBar
