import { TextField } from '@mui/material';
import React from 'react';
import './Restaurent.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Meals from '../Meals/Meals';

const Restaurent = () => {
    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearchField = event => {
        const searchTextvalue = event.target.value
        setSearchText(searchTextvalue)
    }
    return (
        <div>
            <h3>This is restaurent</h3>
            <TextField onChange={handleSearchField} id="outlined-basic" label="Search Your Meal" variant="outlined" />
            <div className='meals-container'>
                {
                    meals.map(meal => <Meals
                        key={meal.idMeal}
                        meal={meal}></Meals>)
                }

            </div>
        </div >
    );
};

export default Restaurent;