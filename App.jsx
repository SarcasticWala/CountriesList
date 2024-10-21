
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'
import './App.css'
import { useState } from "react"
const App=()=> {
  const [query,setQuery]=useState('')

  return (
    <>
  <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}/>
          <SelectMenu />
        </div>

        {query === 'unmount' ? '' : <CountriesList query={query}/>}
      </main>
    </>
  )
}
export default App