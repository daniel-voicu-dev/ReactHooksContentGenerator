import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {paragraph,banner} from "./../resources/defaults"
import uuid from 'uuid/v4' 



const AddItem = () => {
  let [open,setOpen] = useState(false);     
  let dispatch = useDispatch();  
  
  const addItem = type => async dispatch => {  
      let content = type === "Paragraph" ? {...paragraph, image : paragraph.image.replace("******",Math.floor(Math.random()*16777215).toString(16))} 
                  : type === "Banner" ? {...banner, image : banner.image.replace("******",Math.floor(Math.random()*16777215).toString(16))}
                  : "";     
      if(type === "Paragraph") {
        dispatch({type:"ADD_ITEM", payload: {type,content, id:uuid(),"config":{ "classList":["image-on-left"]}}});
      } else {
        dispatch({type:"ADD_ITEM", payload: {type,content, id:uuid()}});
      }            
      
  }  
   
  
  return (
    <div className="add">      
     
      <div className={open ? "items" : "hidden"}>
        <button type="button" onClick={()=>dispatch(addItem("Paragraph")).then(()=>setOpen(!open))}><i className="ion-md-reorder"></i></button>
        <button type="button" onClick={()=>dispatch(addItem("Banner")).then(()=>setOpen(!open))}><i className="ion-md-image"></i></button>
        <button type="button" onClick={()=>addItem("Video")}><i className="ion-md-play-circle"></i></button>
        <button type="button" onClick={()=>addItem("Gallery")}><i className="ion-md-images"></i></button>
      </div>
      <div className="actions">
        <button type="button" className={!open ? "" : "hidden"} onClick={()=>setOpen(!open)}><i className="ion-md-add"></i></button> 
        {/* <button type="button" className={save ? "confirm" : "hidden"} onClick={()=> saveItem(state)}><i className="ion-md-checkbox"></i></button>
        <button type="button" className={save ? "deny" : "hidden"} onClick={()=> dispatch(deleteItem())}><i className="ion-md-close" ></i></button> */}
      </div> 
      
      
    </div>
  )
}



export default AddItem
