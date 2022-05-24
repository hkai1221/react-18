import React from 'react'

const Tab1 = () => {
  return (
    <>
    {
      Array.from({length: 10000}, (v, i) => {
        return(<>
            <div>{i}</div>
          </>)
      })
    }
  </>
  )
}

export default Tab1