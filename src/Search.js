import './Search.css'

const Search = ({search}) => {

    return (
        <input className='search' onChange={search}/>
    )
}

export default Search