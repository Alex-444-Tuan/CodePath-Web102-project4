import { useState } from "react";
import MainCard from "./components/mainCard";
import NavbarHistoryList from "./components/navbarHistoryList";
import NavbarbanList from "./components/navbarbanList";
import "./App.css";
const API_KEY = 'live_VDrPpNEkzRh22NX7f9IXtOHHiupq2JBXDS82925JDxk1nxcOBs9GOJiJCOoNCKTy';


function App() {

  // id: '',
  // url: '',
  // width: 0,
  // height: 0,
  // breeds: [{
  //   "weight":{},
  //   "id":"",
  //   "name":"",
  //   "temperament":"",
  //   "origin":"",
  //   "country_codes":"",
  //   "country_code":"",
  //   "life_span":"",

  const[cat, setCat] = useState(null);
  const [history, setHistory] = useState([]);
  const [ban, setBan] = useState([]);

  const callAPI = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`);
    const data = await response.json();

    if (!data.length || !data[0].breeds.length) {
      callAPI();
      return;
    }

    let catData = data[0].breeds[0];

    if(
      ban.includes(catData.origin) ||
      ban.includes(catData.weight.metric) ||
      ban.includes(catData.life_span)
    ) {
      callAPI();
      return;
    }

    const newCat = {
      id: data[0].breeds[0].id,
      name: data[0].breeds[0].name,
      image: data[0].url,
      origin: data[0].breeds[0].origin,
      life_span: data[0].breeds[0].life_span,
      weight: data[0].breeds[0].weight.metric,
    }

    setCat(newCat);
    setHistory([...history, newCat]);
  }

  const addToBan = (attribute) => {
    setBan([...ban, attribute]);
  }

  const removeFromBan = (attribute) => {
    const newBan = ban.filter((item) => item !== attribute);
    setBan(newBan);
  }

  return (
    <div className="container">
      <NavbarHistoryList history={history} />
      {cat === null ?(
        <div>
          <button onClick = {callAPI}>Discover!</button>
        </div>) : 
      (<MainCard cat = {cat} onClick={callAPI} onBan={addToBan}/> 
      )}
      <NavbarbanList ban={ban} onUnban={removeFromBan} />
    </div>
  )
}

export default App
