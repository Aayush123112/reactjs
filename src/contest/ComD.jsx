import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const ComD = () => {
    const js=useContext(GlobalContext)
  return (
    <>
    <h2 className='text-center text-muted'>
        The name of the student is {js.name}
    </h2>
    <h2 className='text-center text-muted'>
        Age:{js.age}
    </h2>
    <h2 className='text-center text-muted'>
        Address:{js.address}
    </h2>
    </>
  )
}

export default ComD