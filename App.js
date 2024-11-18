// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import News from './News';
import { useState } from 'react';

function App() {

  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("india");

  useEffect(()=>{

    fetch("https://newsapi.org/v2/everything?q=${category}&apiKey=9cd624beaea04ac39d87ecf4f1ba052c")
    
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err)
    })

  },[category])


  return (

    <div className="App">
      
      
      
    <header className='header'>
        <h1><i>DAILY NEWS</i></h1>
        
        <input type='text' onChange={(event)=>{
          if(event.target.value!=="")
          {
            setCategory(event.target.value);
          }
          else
          {
            setCategory("india")
          }
        }} placeholder='Search News'/>

      </header>
      {/* <div className='headline'>
        <div className='galaery'>

        </div>

      </div> */}
    <section className='news-articles'>

      {

        articles.length!==0?

        articles.map((article)=>{
          return(
            <News article = {article}/>

          )
        })
        :
        <h3>No News Found</h3>
      }
      

      
      </section>
      
    </div>
    
  );
}

export default App;
