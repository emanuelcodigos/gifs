import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ({value = 'GifExpertApp'}) =>{

   const [categories, setcategories] = useState(['Rick And Morty']);
   
    return (
     <div className="container">
     <h2 className="txtPrincipal">{value}</h2>
     <hr></hr>
     <AddCategory setcategories={setcategories} />
     
         {
            
             categories.map( category => (

                <GifGrid 
                   key={category}
                   category={category}
                 />
             ))
         }
     
     </div>
    
    );

}