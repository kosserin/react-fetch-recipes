import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Recipe({recipe}) {
    
    return(
        <a href={recipe.url} className='Recipe'>
            <div className="text-container">
            <h1>{recipe.label}</h1>
            <p>{Math.floor(recipe.calories)} cal per portion</p>
            </div>
            <div className="image-container">
            <img src={recipe.image} alt="" />
            </div>
        </a>
    )
}

export default Recipe;