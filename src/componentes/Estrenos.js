import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const urlbaseImage = 'https://image.tmdb.org/t/p/w154'

const Contenedor = styled.div`
    >ul{
      background:rgba(66,165,245,1);
      padding-left:0;
      overflow:scroll;
      display:flex;
      margin:0;
      align-items:strech;
    }
`
const ItemPelicula = styled(Link)`
    list-style:none;
    display:inline-block;
    background:url(${props=>urlbaseImage+props.pelicula.poster_path}) no-repeat;
    background-size:cover;
    min-width:200px;
    margin:5px;
    height:300px;
    font-family:'Amatic SC', cursiva;
    color:yellow;
    font-size:22px;
    font-weight:bold;
    >span{
        display:none;
        background:rgba(38,50,56,0.5);
    }
    &:hover{
        >span{
            display:block;
        }
    }

`

export default ({peliculas})=>(
    <Contenedor>
        <ul>
        {
            peliculas.map(pelicula=>(
            
                <ItemPelicula key={pelicula.id} to={`/detalles/${pelicula.id}`} pelicula={pelicula}>
                    <span>{pelicula.title}</span>

                </ItemPelicula>
            ))
        }
        </ul>
    </Contenedor>
)