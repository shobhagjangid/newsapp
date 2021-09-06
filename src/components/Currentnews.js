import React from 'react';
import { BiLike, BiShareAlt } from 'react-icons/bi';
import { GoComment } from 'react-icons/go';



export default function Currentnews(props) {
    return (
        
                <li>
                    <div className="card-news">
                        {/* <img src={props.article.urlToImage} className="img-fluid mb-2" alt="" /> */}
                        <div className="d-flex justify-content-between">
                            <span>Portal news</span>
                            <span className="blue-color">{props.cnewscat}</span>
                        </div>
                        <p className="news-headline mb-0">{props.article.articles.title}</p>

                        <p className="mb-0"><small>3 hr</small></p>

                        <div className="d-flex justify-content-between pt-2 border-top mt-2">
                            <p className="mb-0"><span className="likesconty font-18"><BiLike /> 200</span> &nbsp;<span className="comment font-18"><GoComment /> 50</span></p>

                            <a href="/share" className="font-18 blue-color"><BiShareAlt /></a>
                        </div>


                    </div>

                </li>

               
           
    )
}
