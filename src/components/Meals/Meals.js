import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';

const Meals = (props) => {
    const history = useHistory();
    // const { title, description, urlToImage } = props.meal
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal
    console.log(props.meal)

    const handleLearnMore = () => {
        history.push(`/meal/${idMeal}`)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={strMealThumb}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {strMeal}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {strInstructions}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button onClick={handleLearnMore} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Meals;