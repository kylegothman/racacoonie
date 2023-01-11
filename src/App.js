import React, { Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import { recipes } from './recipes';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            recipes: recipes,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render () {
        const filterRecipes = this.state.recipes.filter(recipe =>{
            return recipe.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            
            <div class='tc'>
                <h1 class='f1'>Racacoonie Cookbook</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <CardList recipes={filterRecipes}/>  
            </div>
        );
    }
}

export default App;