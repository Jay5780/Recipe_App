import {FaPizzaSlice , FaHamburger } from "react-icons/fa";
import {GiNoodles , GiChopsticks} from "react-icons/gi";
import styled  from "styled-components";
import React from 'react';
import {NavLink} from "react-router-dom";

function Category() {
  return (
    <List>
        <Slink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={'/cuisine/Chinese'}>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </Slink>
    </List>
  )
}


const List   = styled.div`

display:flex;
justify-content:center;
margin:1rem 0;
`
;


const Slink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
margin-top:0.2rem;
text-decoration:none;
background:linear-gradient(35deg ,#494949,#313131 );
width:4rem;
height:4rem;
cursor:pointer;
transform:scale(0.8);

h4{
    color:white;
    font-size:0.5rem;
    font-weight:100;
    padding:0.5rem;
}
svg{
    color:white;
    font-size:1.5rem;
}

&.active {
    background: linear-gradient(to right , #f27121,#e94057);
}
`;
export default Category;
