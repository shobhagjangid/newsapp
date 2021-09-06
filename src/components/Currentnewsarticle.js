import React, { useState, useEffect } from 'react';
import Currentnews from '../components/Currentnews.js';

const Currentnewsarticle = () => {
    const [article,setArticle] = useState([]);
    
    const getData = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 
              'Content-Type':  'application/x-www-form-urlencoded;charset=UTF-8',
            },
            // body: formBody
          }
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1a7ecab8770946dc844c3b5ab0308159";
        fetch(url,requestOptions).then(response => response.json()).then(response => {
                console.log("DATA IS", response.articles);
                setArticle(response.articles);
        }).catch(error => {
            console.log("Error is",error)
        })
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
                {article.map((data)=> {
                    console.log("ALL DATA",data)
                    return(
                        <Currentnews articles={data} cnewscat="" />
                    )
                })}

            </ul> 
            </div>
        );
    }


export default Currentnewsarticle;