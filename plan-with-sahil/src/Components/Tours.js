import React from 'react'

const Tours = (tours) => {
  return (
    <>
    <div>
          <h1>Plan-With-Sahil</h1>
    </div>

    <div>
        {
            tours.map((tour)=>{
                return  <Card {...tour}></Card>
                
            }
            )
        }

    </div>
    </>
    
  )
}

export default Tours
