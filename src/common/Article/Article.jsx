import React, {useState} from 'react'
import './Article.css'
import {FaRegStar, FaStar} from "react-icons/fa"

const Article = ({ data, click}) => {
  
  return (
    <article>
        <img src={data.image} alt={data.title} className='article-img' />
        
    <div className='article-header'>
        <p>{data.date}</p>
       
    </div>
    
        <h2>{data.title}</h2>
        <p>{data.intro}</p>
        
       
    </article>
  )
}

export default Article