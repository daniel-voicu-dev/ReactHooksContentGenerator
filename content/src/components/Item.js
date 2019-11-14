import React from 'react'
import Banner from './Banner'
import Paragraph from './Paragraph'
import {paragraph,banner} from "./../resources/defaults"
const Item = ({data}) => {
  let {type, content, id, config} = data;
  let {title, image, text} = content;
  
  //normalizing paragraph 
  if (type === "Paragraph") {
    //console.log(title, image, text)
    if(title === "") {
      title = paragraph.title;
    }
    if(image === "") {   
      image = paragraph.image;
    }
    if(text === "") {
      text= paragraph.text;
    }
    //console.log({type,id,content: {title, image, text}, config})
  }  
  
  
  let component = type === "Paragraph" ? (<Paragraph data={{id,type, content:{title, image, text}, config}}  />) :
                  type === "Banner" ? (<Banner data={data} />) : "";    
  return (
    <>
      {component}                
    </>
  )
}

export default Item
