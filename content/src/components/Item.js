import React from 'react'
import Banner from './Banner'
import Paragraph from './Paragraph'
import {paragraph,banner} from "./../resources/defaults"
const Item = ({data}) => {
  let normalizedData = {...data};
  let {type,content} = normalizedData;
  let {title, image, text} = content;
  console.log((normalizedData?.test?.placeholder ?? "nothing found" : normalizedData.test.placeholder));
  //normalizing paragraph 
  if (type === "Paragraph") {    
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
  normalizedData = {...normalizedData, "content": {title, image, text}};
  
  
  let component = type === "Paragraph" ? (<Paragraph data={normalizedData}  />) :
                  type === "Banner" ? (<Banner data={data} />) : "";    
  return (
    <>
      {component}                
    </>
  )
}

export default Item
