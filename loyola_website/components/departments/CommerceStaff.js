import React from 'react'
import StaffCard from './StaffCard'

const CommerceStaff = () => {
  const staff = [
    {
      id: 1,
      profileimage: '/staff-photos/placeholder.png',
      name: 'MS DORITA MARIA SALDANHA ',
      designation: 'Lecturer, Department of Commerce',
      education: 'M Com',
      description: 'Three years of teaching experience.  NSS Programme Officer.  Has attended various training programmes and efficiently organized 4 NSS Camps.  Incharge of archives and EC/CC Co-ordinator.'
    },
    {
        id: 2,
        profileimage: '/staff-photos/placeholder.png',
        name: 'MS Swetha Wenona Suvarna ',
        designation: 'Assistant Professor, HOD Commerce ',
        education: 'MCom, KSET ',
        description: 'Four years of teaching experience.  Educator at Unacademy for one year.  Has participated in national seminars and presented papers with special reference to Bombay Stock Exchange.  Interested in music and plays on the violin and keyboard.'
      },
      {
        id: 3,
        profileimage: '/staff-photos/placeholder.png',
        name: 'MS MARIA THEJESWINI B',
        designation: 'Lecturer, Department of Commerce',
        education: 'M Com, B Ed',
        description: 'Three years of teaching experience.  Sports committee member interested in singing and dancing'
      },
      {
        id: 4,
        profileimage: '/staff-photos/placeholder.png',
        name: 'MS TANUJA S',
        designation: 'Lecturer, Department of Commerce',
        education: 'M Com',
        description: 'Four years of teaching experience.  Headed discipline committee and Commerce Association.'
      },
      {
        id: 5,
        profileimage: '/staff-photos/placeholder.png',
        name: 'DR RAJESH M V',
        designation: 'Assistant Professor and Dean, Department of Commerce',
        education: 'MBA, PGDIB, Ph D',
        description: 'Sixteen years of teaching experience and a Tax consultant.  Research:  Co-Operative Financial Institution.  '
      },
      {
        id: 6,
        profileimage: '/staff-photos/placeholder.png',
        name: 'Mr D Joshua ',
        designation: 'Lecturer, Department of Commerce',
        education: 'M COM,  Pursuing Ph D',
        description: 'Two years of teaching experience and Two years of Industry experience. Published & presented research papers in national conferences and won number of awards. Completed certification programme specialized in Investment Management from University of Geneva.  Heads Department of Training and Placement.'
      },
      {
        id: 7,
        profileimage: '/staff-photos/placeholder.png',
        name: 'Vinay Alex ',
        designation: 'Lecturer, Department of Commerce',
        education: 'M Com',
        description: 'Fifteen years of teaching experience.  Director Centre for Social Concern. Presented several papers and authored two books. Member of Text-book committee, Bangalore University.'
      }

    
    
  ]

    
        return (
        <>
        
        {/* <div className='text-2xl text-center text-navbar-theme my-2'>COMMERCE STAFF</div> */}
        
        <div className='grid grid-cols-2 gap-x-16 gap-y-6 place-content-center justify-evenly mt-8 mx-8'>
          
          {staff.map((staff) => {
            return <StaffCard key={staff.id} profileimage={staff.profileimage} name={staff.name} designation={staff.designation} education={staff.education} description={staff.description} />
          })}
        </div>
        </>
      )
}

export default CommerceStaff