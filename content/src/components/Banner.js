import React from 'react'
import ParagraphListConfig from './ParagraphListConfig';

const Banner = ({data}) => {
  let {content,id} = data;
  let {image, title} = content;
  return (
    <div className="banner">   
      <ParagraphListConfig id={id} />   
      <img src={image} className="img-fluid" title={title} />     
    </div>
  )
}

export default Banner
