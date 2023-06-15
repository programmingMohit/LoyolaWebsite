import React from 'react'
import StaffCard from './StaffCard'

const CommerceStaff = ({data}) => {
 

        console.log('data is '+data);
        return (
        <>
        
        {/* <div className='text-2xl text-center text-navbar-theme my-2'>COMMERCE STAFF</div> */}
        
        <div className='grid grid-cols-2 gap-x-16 gap-y-6 place-content-center justify-evenly mt-8 mx-8'>
          
          {data.map((data) => {
            return <StaffCard key={data.id} profileimage={data.profileimage} name={data.name} designation={data.designation} education={data.education} description={data.description} />
          })}
        </div>
        </>
      )
}

export default CommerceStaff