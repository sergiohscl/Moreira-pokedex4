import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {primaryColor, secundaryColor} from '../../constant/colors.js';
import { useNavigate } from "react-router-dom";


const PokeCard = ({thisPokemon}) => {
    const navigate = useNavigate();
    const [onePokemon, setOnePokemon] = useState({
        name:"",
        sprites: {
            front_default: ""
        }
    })
    
    const getPokemon = (url) => {
        axios
            .get(url)
            .then((response) => {
                /* console.log(response) */
                setOnePokemon(response.data)
            })
            .catch((error) => {
                /* console.log(error) */
            })
    }

    useEffect(() => {
        getPokemon(thisPokemon.url)
    }, [])

    const clickCard = () => {
        navigate(`/${onePokemon.name}`)
    }

    return (
        <div>
            <Card onClick={() => {clickCard()}} sx={{ maxWidth: 345, margin: '10px', border: '2px solid yellow'}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={onePokemon.sprites.front_default}
                    alt="Pokemon Icon"
                    sx={{objectFit: 'cover', fontFamily: "'Roboto', sans-serif"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        {onePokemon.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small" sx={{color: `${primaryColor}`, outline: `2px solid ${primaryColor}` , marginBottom: '10%'}}>{'Adicionar na Pokedex'}</Button>
                </CardActions>    
            </Card>
        </div>
    )
}

export default PokeCard;
