import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const apiKey = 'PZK2gYzhvd6eerXCx3mm3v1UdmLi5qSo'; 

    const {data:images, loading} = useFetchGifs(category);
    
  

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p>Loading</p>}
            <div className='card-grid'>
                {
                    images.map( gif => (
                        <GifGridItem 
                        key={gif} 
                        {...gif}
                    /> 
                    ))
                }
            </div>
        </>
       
    )
}
