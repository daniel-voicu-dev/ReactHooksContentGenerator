import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
const ParagraphConfig = ({data}) => {

  let {id,config} = data;
  let {classList} = config;

  let [Configuration,setConfiguration] = useState(false);  
  let store = useSelector(state => state.containerReducer);
  let dispatch = useDispatch();  

  let DisplayTitle=!classList.includes("no-title");
  let DisplayImage=!classList.includes("no-image");
  let DisplayContent=!classList.includes("no-content");
  let ImageOnLeft = classList.includes("image-on-left");
  let ImageOnRight = classList.includes("image-on-right");
  let TitleImageContent = classList.includes("title-image-content");
  let ImageTitleContent = classList.includes("image-title-content");
  let AlignCenter = classList.includes("align-items-center");
  let JustifyCenter = classList.includes("text-align-center");
  
  const updateClassAction = v => async dispatch => {    
    let paragraph = store.filter(o=>o.id===id)[0]
    let newClassList = [...classList].includes(v) ? [...classList].filter(val=>val!==v) : [...classList,v];    
    switch(v){
      case "image-title-content":
        newClassList = newClassList.filter(a=>a!=="title-image-content" && a!=="image-on-left" && a!=="image-on-right")
        break;
      case "title-image-content":
        newClassList = newClassList.filter(a=>a!=="image-title-content" && a!=="image-on-left" && a!=="image-on-right")
        break; 
      case "image-on-left":
        newClassList = newClassList.filter(a=>a!=="image-title-content" && a!=="title-image-content" && a!=="image-on-right")
      break;
      case "image-on-right":
        newClassList = newClassList.filter(a=>a!=="image-title-content" && a!=="title-image-content" && a!=="image-on-left")
        break;  
      default:        
        break;     
    }    
    let newStore = [...store].reduce((r,v,k)=> v.id === id ? [...r,{...paragraph,config: {...config,classList: newClassList}}] : [...r,v],[]);    
    dispatch({type: "UPDATE_LIST", payload: newStore})
  }  

  return (
    <div className="config--item">
      <button type="button" className="config--trigger" onClick={()=>setConfiguration(!Configuration)}><i className="ion-md-switch"></i></button>
      <div className={Configuration ? "display" : "hidden"}>          
        <div className="item">
          <button type="button" onClick={()=>dispatch(updateClassAction("no-title"))} className={DisplayTitle ? "active" : ""}><i className="ion-md-remove"></i></button>          
        </div>
        <div className="item">
          <button type="button" onClick={()=>dispatch(updateClassAction("no-image"))} className={DisplayImage ? "active" : ""}><i className="ion-md-image"></i></button>          
        </div>
        <div className="item">
          <button type="button" onClick={()=>dispatch(updateClassAction("no-content"))} className={DisplayContent ? "active" : ""}><i className="ion-md-reorder"></i></button>         
        </div>
      </div>
      <div className={Configuration ? "align" : "hidden"}>
        <div className={DisplayImage && (DisplayTitle || DisplayContent) ? "item":"hidden"}><button type="button" onClick={()=>dispatch(updateClassAction("title-image-content"))} className={TitleImageContent ? "active title-image-content-trigger" : "title-image-content-trigger"}><span className="icon-group"><i className="ion-md-remove"></i><i className="ion-md-image"></i><i className="ion-md-reorder"></i></span></button></div>
        <div className={DisplayImage && (DisplayTitle || DisplayContent) ? "item":"hidden"}><button type="button" onClick={()=>dispatch(updateClassAction("image-title-content"))} className={ImageTitleContent ? "active image-title-content-trigger" : "image-title-content-trigger"}><span className="icon-group"><i className="ion-md-image"></i><i className="ion-md-remove"></i><i className="ion-md-reorder"></i></span></button></div>
        <div className={DisplayImage && (DisplayTitle || DisplayContent) ? "item":"hidden"}><button type="button" onClick={()=>dispatch(updateClassAction("image-on-left"))} className={ImageOnLeft ? "active" : ""}><i className="ion-md-image"></i><i className="ion-md-reorder ml-1"></i></button></div>
        <div className={DisplayImage && (DisplayTitle || DisplayContent) && (DisplayTitle || DisplayContent) ? "item":"hidden"}><button type="button" onClick={()=>dispatch(updateClassAction("image-on-right"))} className={ImageOnRight ? "active" : ""}><i className="ion-md-reorder"></i><i className="ion-md-image ml-1"></i></button></div>
        <div className={DisplayImage && (DisplayTitle || DisplayContent) && (ImageOnLeft || ImageOnRight) ? "item":"hidden"}><button type="button" onClick={()=>dispatch(updateClassAction("align-items-center"))} className={AlignCenter ? "active" : ""}><i className="ion-md-git-commit"></i></button></div>
        <div className={DisplayTitle || DisplayContent ? "item":"hidden"}><button type="button" onClick={()=>dispatch(updateClassAction("text-align-center"))} className={JustifyCenter ? "active" : ""}><i className="ion-md-funnel"></i></button></div>
      </div>
    </div>
  )
}

export default ParagraphConfig
