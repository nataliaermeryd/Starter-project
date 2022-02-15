import './App.css';
import Header from './Header'
import Search from './Search'
import SearchResult from './SearchResult';
import emojiList from './emojiList.json'
import { useState } from 'react';



function App() {
  const [emojis, setEmojis] = useState([])
  console.log(emojis)

  const emojiSearch = (searchText, maxCount) => {
    return emojiList.filter(({title, keywords}) => {
      return title.includes(searchText) || keywords.includes(searchText)
    })
    .slice(0, maxCount)
  }

  const search = (event) => {
    const searchResult = emojiSearch(event.target.value, 10)
    setEmojis(searchResult)
  }

  const list = <div><Header /></div>

  return (
    <>
    <div className='navbar'>
      {list}
      <Search search={search}/>
      <SearchResult searchResult={emojis} />
    </div>
    </>

  );
}

export default App;

const react = () => {

  return react.createElement('div', {className: 'navbar'}, 
  react.createElement(Header, null, null),
  react.createElement(Search, {search: search}, null),
  react.createElement(SearchResult, {searchResult: emojis}, null)
  )
}