import React from 'react';
import { BiLike, BiShareAlt } from 'react-icons/bi';
import { GoComment } from 'react-icons/go'

export default function Trandingnews() {
    return (

        <li className="newsullist">
            <article class="newsbucket">
                <div className="newsimage">
                <img src="https://i.insider.com/612daf5b12b9cc0019637316?width=1200&format=jpeg" className="img-fluid" alt="s"/>
                </div>
                <div className="newsheadlinesentry">
                    <p className="news-headline pt-0 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="d-flex justify-content-between">
                        <span className="category blue-color">Technology</span>
                        <span className="timenews">5hr ago</span>
                    </div>
                    

                </div>
                <div className="w-100 d-flex justify-content-between pt-2 border-top mt-2">
                        <p className="mb-0"><span className="likesconty font-18"><BiLike /> 200</span> &nbsp;<span className="comment font-18"><GoComment /> 50</span></p>

                        <a href="/share" className="font-18 blue-color"><BiShareAlt /></a>
                    </div>
            </article>
        </li>




    )
}
