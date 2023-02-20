import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Filter from './Components/Filter/Filter'
import Card from './Components/Card/Card'
import './app.css'
import Pagination from './Components/Pagination/Pagination'
import Search from './Components/Search/Search'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Location from './Pages/Location'
import Episodes from './Pages/Episodes'
import CardDetails from './Components/Card/CardDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </Router>
  )
}
export const Context = React.createContext()

const Home = () => {
  const [pageNubmer, setPageNumber] = useState(1)
  const [fetchedData, setFetchedData] = useState([])
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  let { info, results } = fetchedData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNubmer}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setFetchedData(data)
    })()
  }, [api])
  return (
    <Context.Provider
      value={{ setGender, setPageNumber, setStatus, setSpecies }}
    >
      <div>
        <Search setPageNumber={setPageNumber} setSearch={setSearch} />
        <div className="container">
          <div className="row">
            <Filter />
            <div className="col-8">
              <div className="row">
                <Card page="/" results={results} />
              </div>
            </div>
          </div>
        </div>
        <Pagination setPageNumber={setPageNumber} pageNubmer={pageNubmer} />
      </div>
    </Context.Provider>
  )
}

export default App
