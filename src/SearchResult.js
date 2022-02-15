import './SearchResult.css'

const SearchResult = ({searchResult}) => {
    if (!searchResult || !searchResult.length) {
        return (
            <div className="searchresult">
                <p>
                    No search results 😦
                </p>
            </div>
        )
    }

    return (
        <div className="searchresult">
            <ul>
                {searchResult.map((emoji) => {
                return (
                    <li>
                        {emoji.title} {emoji.symbol}
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default SearchResult