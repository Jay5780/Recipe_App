import {useEffect,useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";



function Recipe() {
 
  let params = useParams();
  
  const [details,setDetails ] = useState({});

  const [activeTab , setActiveTab] = useState("instructions");

  const fetchDetails  = async (id) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6aa6ed5449044f7baf545cc4b72a9845`)
    const details = await data.json();
    setDetails(details);
  }  

  useEffect (()=>{
    fetchDetails(params.id);
    console.log(details);
  },[params.id]);


  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} />
        </div>
        <Info>
        <Buttonsdiv>
        <Button
        className={activeTab==="instructions"?"active":" "} 
        onClick={()=>setActiveTab("instructions")}> 
        Instructions
        </Button>
        <Button 
        className={activeTab==="ingredients"?"active":" "} 
        onClick={()=>setActiveTab("ingredients")}> 
        Ingredients
        </Button>
        </Buttonsdiv>
        { activeTab === "instructions" && (
                  <div>
                  
                  <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>

              </div>

        )}
        
        { activeTab === "ingredients" && (
                <ul>
                    {details.extendedIngredients.map((item)=>(
                        <li>{item.original}</li>
                        ))}
                 </ul>
        )

        }

       

        </Info>

    </DetailWrapper>
  )
}



const DetailWrapper = styled.div`
margin-top:3rem;
margin-bottom:5rem;
display:flex;

.active{
    background: linear-gradient(35deg,#494949,#313131);
    color:white;
}
img{
    
    width:30rem;
    border-radius:2rem;
}
h2{
    margin-left:5rem;
    margin-bottom:1rem;
}
li{
    font-size:1.2rem;
    line-height:2.5rem;
}

ul{
    margin-top:2rem;
    color:black;
}
h3{
    color:black;
}

`;

const Buttonsdiv = styled.div`
display:flex;
color:black;
`

const Button = styled.button`
 padding: 1rem 2rem;
 color:#313131;
 background:white;
 border:2px solid black;
 margin-right: 2rem;
 font-weight: 600;
 cursor:pointer;
`;

const Info =  styled.div`
 margin-left:5rem;
 color:black;
 
`; 


export default Recipe;