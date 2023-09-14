import React from 'react'

const SearchList = ({result}) => {
  return (
    <div>
        {result.map((item, recipes_id) => {
            return <div key={recipes_id}>{item.recipes_title}</div>
        })}
    </div>
  )
}

export default SearchList