import React from 'react';

import SearchBar from "material-ui-search-bar";
import CourseCard from './coursecard'
import useState from 'react'


export default function Search(){

    return (
        <div>
        <h1>search iteam</h1>
        
      
        <SearchBar
      //   onChange={(e) => 
          
      //     setSearchTerm(e.target.value)
        
        
      //   }


      //   onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 1000
      }}
      // cancelOnEscape
    />
    </div> 
    )
}
