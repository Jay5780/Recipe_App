import React, { useEffect, useState } from 'react';
import styled  from 'styled-components';
import {motion} from "framer-motion";
import {Link , useParams} from "react-router-dom";


//useParams : to pull out keywords from url..
//params returns an object 
//motion:for animation

function Cuisine() {
    
    let params = useParams();

    useEffect(()=>{
       getCuisine(params.type);
       console.log(cuisine);
    },[params.type]);                                  // call useEffect every time params.type -{chinese,thai,italina,...}  changes

    const [ cuisine,setCuisine] = useState([]);

  const getCuisine = async (type) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6aa6ed5449044f7baf545cc4b72a9845&cuisine=${type}`);
      const recipes = await data.json();
      setCuisine(recipes.results);
  }


  return (
    <Grid>
        { cuisine.map((item)=>{
            return(
                <Link to={"/recipe/"+item.id}>
                <Card key={item.id}>
                    <img src={item.image} alt=""/>
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

 h4{
    text-align:left;
    padding:1rem;
    text-decoration:none;
 }
`;
export default Cuisine;