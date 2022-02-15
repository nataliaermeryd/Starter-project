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

  return (
    <>
    <div className='navbar'>
      <Header />
      <Search search={search}/>
      <SearchResult searchResult={emojis} />
    </div>
    </>

  );
}

export default App;