import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import { Logo } from '../components/logo/Logo';
import ErrorBoundary from '../components/ErrorBoundary';
import { recipes } from '../recipes';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({ recipes: recipes })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render () {
        const { recipes, searchfield } = this.state
        const filterRecipes = recipes.filter(recipe =>{
            return recipe.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // the 3 lines below are for the JSON request file
        // return !recipes.length ? 
        //  <h1>Loading</h1> :
        // remove return below, keep (
        return (
            
            <div class='tc'>
                <Logo />
                <h1 class='f1'>Racacoonie Cookbook</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList recipes={filterRecipes}/>  
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;