import React from 'react';


const SearchBar = ({searchfield, searchChange}) => {
    return (
        < div class='pa2'>
            <input 
                className='pa3 ba b--transparent outline-transparent-ns bg-light-gray'
                type='text'
                placeholder='search recipes'
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBar


// outline-transparent-ns 