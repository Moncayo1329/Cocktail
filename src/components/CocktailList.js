import React from 'react'
import { useGlobalContext } from '../context';
import Loading from './Loading'


const  CocktailList = () => {
const {cocktails,loading} = useGlobalContext();


if(loading) {

    return <Loading />
}

if (cocktails.length < 1 ) {

return  (<h2 className="section-title"> not macht asf
</h2>
)
}




    return (
<div>

<h2>CocktailList jehdjuehd</h2>

</div>
    );
  }
  
  export default CocktailList;
  