import React from 'react';



function Card({ name, icon, category }) {
    return (
        <div class='tc dib br3 bg-black-20 pa3 white ma2 grow bw2 shadow-5'>
            <img src={ icon } alt={ name }  />
                <div>
                    <h2>{ name }</h2>
                    <p>{ category }</p>
                </div>
        </div>
    );
}


export default Card;