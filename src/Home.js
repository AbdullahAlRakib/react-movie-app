import React,{useContext} from 'react'
import { AppContext } from './context'

const Home = () => {
  const name= useContext(AppContext);
  return (
    <div>
         {name}
    </div>
  )
}

export default Home