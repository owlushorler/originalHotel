 import React from 'react';
 import image1 from './pool1.jpg';

const FacilityCard = (facility) => {
  const {image1,title, description} = facility;
  const facilities = [
    {
         image: {image1},
        title: 'Swimming Pool',
        description: 'Relax by our luxurious swimming pool.',
        
      },
      {
         icon: 'image',
        title: 'Spa & Wellness',
        description: 'Indulge in our rejuvenating spa treatments.',
        
      },
      {
         icon: 'image',
        title: 'Spa & Wellness',
        description: 'Indulge in our rejuvenating spa treatments.',
        
      },
      {
         icon: 'image',
        title: 'Spa & Wellness',
        description: 'Indulge in our rejuvenating spa treatments.',
        
      },
      {
         icon: 'image',
        title: 'Spa & Wellness',
        description: 'Indulge in our rejuvenating spa treatments.',
        
      },
 ];
  return (
    <>
       
    <h1 className='text' >Our Services</h1>
       <h5 className='text'>Hotel Facilities</h5>
    <div className=''>
 {facilities.map((facility)=>{
   return(
   <div className=' '>
    <img src={facility.image1} alt='' />
     <div className="">
       <p>{facility.title}</p>
        <p>{facility.description}</p>
     </div>
   </div>
);
 })};
 </div>
</>
  )
}
    

export default FacilityCard
