import React,{useEffect} from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import Item from "./Item"
import AddItem from "./AddItem"
const Container = () => {
  let state = useSelector(state => state.containerReducer); 
  let dispatch = useDispatch();

  const getItems = () => async dispatch => {  
    axios.get("resources/paragraphList.json").then(({data})=>{
      dispatch({type: "UPDATE_LIST", payload: data})
    });     
  } 
  useEffect(()=>{
    dispatch(getItems());
  },[]) 
  return (
    <>
      {state.map((o,i)=> (<Item key={i} data={o} />))}
      <AddItem />
    </>
    
  )
}

export default Container
