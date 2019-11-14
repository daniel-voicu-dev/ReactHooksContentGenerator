import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import ParagraphConfig from './ParagraphConfig'
import ParagraphListConfig from './ParagraphListConfig';

const Paragraph = ({data}) => {    
  let {id, content, config} = data;
  let {image, text, title} = content;  
  let {classList} = config;

  let store = useSelector(state => state.containerReducer);  
  let dispatch = useDispatch();
 
  let DisplayTitle = !classList.includes("no-title");
  let DisplayImage = !classList.includes("no-image");
  let DisplayContent = !classList.includes("no-content");  

  const resetParagraphAction = val => async dispatch => {      
    let paragraph = store.filter(o=>o.id===val)[0]
    let newClassList = ["image-on-left"]; 
    let newStore = [...store].reduce((r,v,k)=> v.id === val ? [...r,{...paragraph,config: {...config,classList: newClassList}}] : [...r,v],[]);    
    dispatch({type: "UPDATE_LIST", payload: newStore})    
  }

  let titleEl = title !== "" && DisplayTitle ? <h2 className="title">{title}</h2> : "";
  let imageEl = image !== "" && DisplayImage ? <div className="image"><img src={image} className="img-fluid" title={title} /></div> : "";
  let contentEl = content !== "" && DisplayContent ?  <div className="content" dangerouslySetInnerHTML={{ __html: text }}></div> : "";
  let errorEl = !DisplayImage && !DisplayTitle && !DisplayContent ? <div className="error-message"><span>Error customizing the paragraph</span><button type="button" onClick={()=>dispatch(resetParagraphAction(id))}><i className="ion-md-refresh"></i> Reset</button></div> : "";

  return (        
    <article className={"paragraph " + classList.join(" ")}>   
      <ParagraphListConfig id={id} />   
      <ParagraphConfig data={data}/>

      {titleEl}      
      {imageEl}
      {contentEl}
      {errorEl}

    </article>    
  )
}

export default Paragraph
