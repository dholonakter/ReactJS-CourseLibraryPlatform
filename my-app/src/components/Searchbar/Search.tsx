import React from 'react';

import SearchBar from "material-ui-search-bar";


export default function Course(){

    return (
        <div>
        <h1>search iteam</h1>
    

        <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 900
      }}
      cancelOnEscape
    />
    </div>
    )
}
