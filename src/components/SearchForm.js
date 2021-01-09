import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { searchTerm } = useGlobalContext()
    return (
        <div>
            <h1>SearchForm component</h1>
        </div>
    )
}

export default SearchForm
