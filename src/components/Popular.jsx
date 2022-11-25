import { useState } from "react";
import { useEffect } from "react";
import styled from  "styled-components";
import {Splide , SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from "react-router-dom";

function Popular() {
    

    const[popular , setPopular] = useState([]);

    useEffect(()=>{
     getPopular();
    },[]);

    const getPopular  = async () =>{

        const check = localStorage.getItem("popular");

        if(check)
        {
            setPopular(JSON.parse(check).recipes);
        }
        else
        {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=6aa6ed5449044f7baf545cc4b72a9845&number=9`);
        const data = await api.json();
        localStorage.setItem("popular",JSON.stringify(data));
        setPopular(data.recipes);
        }
    };
  return (
    <div>
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage:4,
                arrows:false,
                pagination:false,
                drag:"free",
                gap:"5 rem"
            }}>
        {popular.map((recipe) =>{
            return(
                <SplideSlide>
                <Link to={"/recipe/"+recipe.id}>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                
                  </Card>
               </Link>
               </SplideSlide>
            );
        })}
        </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
margin : 10px 0px;

h3{
    color:black;
}
`;

const Card = styled.div`

border-radius:2rem;
margin:5px;
position:relative;
img{
    border-radius: 2rem;
    height:150px; 
}
p{
    position:absolute;
    z-index:10;
    left:10%;
    right:10%;
    bottom:0%;
    color:white;
    align-items:center;
    justify-content:center;
    display:flex;
    width:90%;
    font-weight:800;
    font-size:10px;
}
`;
export default Popular;