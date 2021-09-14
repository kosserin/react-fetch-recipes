import React, {useState,useRef,useEffect} from "react";
import './App.css';
import Recipe from './Recipe';
import Footer from './Footer'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const APP_ID = 'd9cdad36';
  const APP_KEY = 'd66dbfaa89ae30a55ac1ddab3316c64f	';
  const [recipes,setRecipes] = useState([]);
  const inputValueRef = useRef();
  const [focus, setFocus] = useState(false);
  const LOCAL_STORAGE_KEY = './App.todos';
  const [loading, setLoading] = useState(true);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
  }
  const [query,setQuery] = useState('chicken')

  useEffect(() =>{
      setTimeout(() => {
      setLoading(false);
    }, 2000);
    getRecipes();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(query));
  },[query]);

  useEffect(()=>{
    const storedQueries = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  })

  function handleClick(e) {
    e.preventDefault();
    let value = inputValueRef.current.value;
    if(value === ''){
      return;
    } else{
      setQuery(value);
    }

    inputValueRef.current.value = null;

  }

  function submitOnEnter(e) {
    switch(e.key){
      case 'Enter':
        handleClick(e)
        break;
        default: break;
    }
  }

 /* const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    }
  }, []);*/

  return (
    <div className="App">
      <h1 className={window.pageYOffset>50 ? "fixed" : ""}>KOKI'S KITCHEN</h1>
          <div className='form'>
            <p className={ focus ? 'move-up' : ''}>Enter food's name</p>
          <input ref={inputValueRef} type="text" name="search-bar" id="search-bar" onKeyDown={submitOnEnter} onFocus={() => setFocus(true)} />
          <button type='submit' onClick={handleClick}>Search</button>
          </div>
          <h2>Results shown for <span>'{query}'</span></h2>
          <div className="Recipes">
      {recipes.map(recipe => (
        < Recipe recipe={recipe.recipe} key={uuidv4()} />
      ))}
    </div>
    < Footer />
    </div>
  );
}

export default App;
