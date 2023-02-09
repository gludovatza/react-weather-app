import React, { useEffect, useState } from 'react'

const SearchBar = () => {
    const [query, setQuery] = useState("");
    useEffect(() => {
        const debounce = setTimeout(() => {
            console.log(query);
          }, 450)
      
          return () => clearTimeout(debounce)      
    }, [query])
    
    return (
        <input type="text" onChange={(e) => setQuery(e.target.value)} className={'w-80 mx-auto h-10 text-xl text-black rounded-xl searchbar'} />
    )
}

export default SearchBar