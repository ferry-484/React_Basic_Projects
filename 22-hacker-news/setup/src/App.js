import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons';

// API - http://hn.algolia.com/api/v1/items/:id
//Search - http://hn.algolia.com/api/v1/search?query=...

function App() {
  return(
    <>
    <SearchForm />
    <Buttons />
    <Stories />
    </>
  );
}

export default App
  