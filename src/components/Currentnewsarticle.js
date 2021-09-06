import React, { useState, useEffect } from 'react';
import Currentnews from '../components/Currentnews.js';

const Currentnewsarticle = () => {
    const [article,setArticle] = useState([]);
    const getData = () => {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1a7ecab8770946dc844c3b5ab0308159";
        let data =  fetch(url);
        let parseData =  data.json();
        setArticle(parseData);
        console.log(parseData);
    }
    useEffect(() => {
        getData();
    },[])

        return (
            <div>
                           <div className="d-flex justify-content-between align-items-center pt-2 pb-2">
                <h4 className="mb-0">Current news</h4>
                <a href="/" className="viewall" >View all</a>
            </div>

            <ul className="card-news-view">
                <Currentnews articles={article} cnewscat="" />

            </ul> 
            </div>
        );
    }


export default Currentnewsarticle;