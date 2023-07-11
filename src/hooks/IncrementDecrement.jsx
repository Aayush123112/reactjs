import React,{useState} from 'react'

const IncrementDecrement = () => {
   const [num, setNum] = useState(1)

  //  const increase=()=>{
  //   setNum(num+1)
  //  }
  //  const decrease=()=>{
  //   setNum(num-1)
  //  }
  //  const multiply=()=>{
  //   setNum(num*2)
  //  }
  //  const divide=()=>{
  //   setNum(num/2)
  //  }
  return (
    <>
      <h1 className="text-success">{num}</h1>
      {num < 1000 && (
        <button className="btn btn-primary" onClick={() => setNum(num + 1)}>
          Increment
        </button>
      )}
      {num > 1 && (
        <button className="btn btn-danger" onClick={() => setNum(num - 1)}>
          Decrement
        </button>
      )}
      {num > 1 && (
        <button className="btn btn-info" onClick={() => setNum(num * 2)}>
          Multiply by 2
        </button>
      )}
      {num > 1 && (
        <button className="btn btn-info" onClick={() => setNum(num / 2)}>
          Divide by 2
        </button>
      )}
    </>
  );
}

export default IncrementDecrement