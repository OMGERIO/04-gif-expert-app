import React, { useState, useEffect } from 'react'

export const GifGrid = ({category}) => {

    // const apiKey = 'PZK2gYzhvd6eerXCx3mm3v1UdmLi5qSo'; 

    const [count, setCount] = useState(0);
    useEffect(()=>{
        getGifs();
    },[])



    const getGifs = async () =>{
        const query = 'Goku'

        const url = 'https://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=PZK2gYzhvd6eerXCx3mm3v1UdmLi5qSo'
        const resp = await fetch(url);
        const data = await resp.json();
        
        const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    } 


    return (
        <div>
            <h3>{category}</h3>
            
        </div>
    )
}
