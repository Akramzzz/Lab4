import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';
import CardComp from './cards';
import { useState } from 'react';
import './main.css';


function Main () {
    let [items,setItems] = useState(data)

    function Submit(event){
       event.preventDefault()
        let searchValue = event.target.Search.value

        let filteredItems = data.filter(function(item){return item.title.toLowerCase().includes(searchValue.toLowerCase())})
        setItems(filteredItems)
    }
    return(
      <>
      
        <form onSubmit={Submit} id="myForm">
        <input type="text"  name="Search"/>
        <Button type='submit'>Search</Button>
        </form>
       
        <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'space-between',gap:'25px', marginTop:'3%'}}>
      {items.map(function(item){
        return(
            <CardComp image={item.image_url} title={item.title} description={item.description} category={item.category} />
        )
      
    }
      
 )
        }
         </div>
      </>

        )
    }   

export default Main;
