import React from 'react'
import {useDispatch,useSelector} from 'react-redux'

const ParagraphListConfig = ({id}) => {
  
  let store = useSelector(state => state.containerReducer);
  let order = store.findIndex(x => x.id === id);
  let dispatch = useDispatch();  

  const arraymove = (arr, fromIndex, toIndex) => {
    let element = arr[fromIndex];
    arr.splice(fromIndex, 1);    
    arr.splice(toIndex, 0, element);
  }

  const moveItem = (order,updatedOrder) => async dispatch => {  
    var updatedStore = [...store];
    arraymove(updatedStore,order,updatedOrder);  
    dispatch({type: "UPDATE_LIST", payload: updatedStore});
  } 
  const deleteItem = v => async dispatch => {
    var updatedStore = [...store].filter(o=>o.id!==v);
    dispatch({type: "UPDATE_LIST", payload: updatedStore});
  }

  

  return (
    <div className="config--list">
        <button type="button" onClick={()=>dispatch(moveItem(order,order-1))}><i className={order !== 0 ? "ion-md-arrow-dropup": "hidden"}></i></button>
        <button type="button" onClick={()=>dispatch(moveItem(order,order+1))}><i className={order !== store.length -1 ? "ion-md-arrow-dropdown" : "hidden" }></i></button> 
        <button type="button" onClick={()=>dispatch(deleteItem(id))}><i className="delete ion-md-close"></i></button>        
    </div> 
  )
}

export default ParagraphListConfig
