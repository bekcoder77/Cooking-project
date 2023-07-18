import React, { useState } from 'react'
import UseFetch from '../hooks/UseFetch';
import {AiTwotoneDelete} from "react-icons/ai"
import { Link } from 'react-router-dom';

function Home() {
    const [api, setApi] = useState(" http://localhost:3000/recipes")
    const { data, isPending, error} = UseFetch(api)
    console.log(data);
  return (
    <div className='home'>
          <div className="home_boxs">
          {data && data.map((item)=>{
                return (
                    <div key={item.id} className="home_box">
                        <div className="card">
                            <div className="title">
                            <h1>{item.title}</h1>
                            <div className="icon">
                            <AiTwotoneDelete/>
                            </div>
                            </div>
                            <p >{item.ingredients.map((item,idx) => {
								return <span key={idx}>{item} {''}</span>
							})}</p>
                            	<p>{item.method.substr(0, 100)}...</p>
                              
                        </div>
                    </div>
                )
            })}
      
          </div>
    </div>
  )
}

export default Home