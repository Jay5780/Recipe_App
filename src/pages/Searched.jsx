import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Searched() {

    const [searchedRecipe,setSearchedRecipe ]= useState([]);

    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6aa6ed5449044f7baf545cc4b72a9845&query=cookie`);
        const recipes = await data.json();
        setSearchedRecipe(recipes.results);
        console.log(recipes.results);
    }
  
    useEffect(()=>{
     getSearched(params.search);
    },[params.search]);
  return (
    <Grid>
        {searchedRecipe.map((item)=>{
           return(
            <Link to={"/recipe/"+item.id}>
            <Card key={item.id}>
             <img src={item.image} alt="item.id"/>
             <h4>{item.title}</h4>
            </Card>
            </Link>
           )
        })}
    </Grid>
  )
}


const Grid  = styled.div`
 display:grid;
 grid-template-columns: 200px 200px 200px;
 grid-template-rows: 150px 150px 150px; 
 grid-gap : 3rem;
 row-gap: 7rem;
`;

const Card = styled.div`
 img{
    height:150px;
    width:100%;
    border-radius:2rem;
 }
 a{
    text-decoration:none;
 }
 h4{
    text-align:left;
    padding:1rem;
 }
`;

export default Searched;