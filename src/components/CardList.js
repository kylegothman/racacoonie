import React from 'react' 
import Card from './Card';


function CardList({ recipes }) {
    return (
        <>
            {
                recipes.map((recipe, i) => {
                    return (
                        <Card 
                        key={recipes[i].id} 
                        id={recipes[i].id} 
                        name={recipes[i].name} 
                        category={recipes[i].category} 
                        icon={recipes[i].icon}  
                        />
                    );
                })
            }
        </> 
    );
}

export default CardList