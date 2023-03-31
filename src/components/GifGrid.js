import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const apiKey = 'PZK2gYzhvd6eerXCx3mm3v1UdmLi5qSo'; 

    const [images, setimages] = useState([]);

    useEffect(()=>{
        getGifs(category).then( imgs => setimages(imgs));
    },[])



    


    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map( gif => {
                        <GifGridItem 
                            key= {gif.id}   
                            {...gif}
                        />;    
                    })
                }
            </div>
        </>
       
    )
}
