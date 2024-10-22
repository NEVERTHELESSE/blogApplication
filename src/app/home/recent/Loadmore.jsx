'use client'

function Loadmore({limit}){
  const increase =()=>{
    limit = limit +5
    console.log(limit)
  }

  return(
    <div>
      <button onClick={increase}>Load More {limit}</button>
    </div>
  )
}

export default Loadmore
