import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Search from "./components/Search";
import ShowAll from "./components/ShowAll";
import Loading from "./components/Loading";
import { createContext } from "react";

export const data = createContext();

function App() {
  let [phones, setPhones] = useState([]);
  let [search, setSearch] = useState([]);
  let [shown, setShown] = useState(5);

  const searchHandler = ()=> {
    console.log(search);
    setPhones([]);
    let url = 'https://openapi.programming-hero.com/api/phones?search='+search;
    fetch(url)
    .then((res) => res.json())
    .then(data => {
      setPhones(data.data);
      if(data.data.length < 6) {
        setShown(10);
      } else {
        setShown(5);
      }
      
    });
  }
  // Fetching the phone list
  useEffect(()=> {
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then((res) => res.json())
    .then(data => {
      setPhones(data.data);
      if(data.data.length < 5) {
        setShown(10);
      } else {
        setShown(5);
      }
    });
    console.log('loaded');
  }, [])

  return <div className="md:w-3/4 mx-auto space-y-4">
    <data.Provider value={{phones, setPhones, searchHandler, search, setSearch, shown, setShown}}>
      <Search/>
      {phones.length > 0 ? <Cards/> : <Loading/>}
      {shown <= 5 && <ShowAll/>}
    </data.Provider>
  </div>
}

export default App;
