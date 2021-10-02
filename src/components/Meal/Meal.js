import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Meal = () => {
    const { mealId } = useParams()

    const [meal, setMeal] = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])
    return (
        <div>
            <h2>This is a meal</h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={meal.strMealThumb}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {meal.strInstructions}
                    </Typography>
                </CardContent>
            </Card>

        </div>
    );
};

export default Meal;