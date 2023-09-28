import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';
import CardComp from './cards';

function Main () {
    return(
        <>
        <div style={{display:'flex', justifyContent:'space-between'}}>
      {data.map(function(item){
        return(
            <CardComp image={item.image_url} title={item.title} description={item.description} />
        )
      
    }
      
 )
        }
         </div>
      </>

        )
    }   

export default Main;
