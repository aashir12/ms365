import React from 'react'
import '../App.css'

const Products = () => {
  return (
    <>
        <div className='cover w-full  bg-[#FFF4ED]'>
         <div className='boxes w-[80%] flex justify-center gap-2 m-auto'>

         {/* {Top 3 Boxes} */}


   <div className='box w-[60%] h-10 p-8 bg-white rounded-t-lg mt-8 flex justify-center items-center text-[#D83B01] text-lg font-semibold'>For Home</div>
   <div className='box w-[60%] h-10 p-8 bg-[#F9DBD0] rounded-t-lg mt-8 flex justify-center items-center text-[#792000] text-lg font-semibold '>For Organisations</div>
   <div className='box w-[60%] h-10 p-8 bg-[#F9DBD0] rounded-t-lg mt-8 flex justify-center items-center text-[#792000] text-lg font-semibold '>For Educators</div>
         </div>

       
          {/* Pics Cover */}
         
         <div className='singleBoxCover w-[100%] pb-20 rounded-b-lg
         '>
          {/* { First Pic} */}
          <div className='singleBox w-[80%] bg-white  m-auto'>
            <div className='insideBox text-center py-14'>
              <h1 className='text-2xl  font-bold text-[#242424]'>Free or Premium :</h1>
              <h1 className='text-2xl  font-bold pb-6 text-[#242424]'>Microsft 365 has uor Covered</h1>
              <p className='w-[70%] m-auto text-[#242424] lg:w-[35%]'>Everyone gets cloud storage and essential Microsoft 365 apps on the web, free of charge</p>
              <img src='https://res.cdn.office.net/officehub/images/content/images/unauth-refresh/value-consumer-mreb-28681bb486.png'/>
            </div>
          </div>
          {/* Second pic */}
          <div className='singleBox w-[80%] bg-white  m-auto'>
            <div className='insideBox py-14 flex'>
           <div className='lft ml-24 mt-36'>
           <h1 className='text-4xl font-black text-white bg-[#D83B01] 
            w-[50px] h-[50px]  rounded-full text-center'>+</h1>
              <h1 className='text-4xl  font-bold text-[#242424] py-3'>Create something inspiring</h1>
              <p className='w-[70%]  text-[#242424] text-lg lg:w-[70%] py-3'>Quickly design anything for you and your family—birthday cards, school flyers, budgets, social posts, videos, and more—no graphic design experience needed.</p>
              <p className='text-[#D83B01] py-3'>Explore more at the Microsft Create ></p>
           </div>
              <img src='https://res.cdn.office.net/officehub/images/content/images/unauth-refresh/highlight-consumer-1-2889dd4e93.png' className='w-[50%] mr-24'/>
            </div>
          </div>

          {/* Third pic */}
          <div className='singleBox w-[80%]  m-auto bg-white rounded-b-3xl'>
            <div className='insideBox py-14 flex'>
            <img src='https://res.cdn.office.net/officehub/images/content/images/unauth-refresh/highlight-consumer-2-c4ec327b9e.png' className='w-[50%] ml-24'/>
           <div className='lft ml-36 mt-36'>
            <i class="fa-solid fa-cloud text-4xl font-blac text-[#D83B01] 
            w-[50px] h-[50px]  rounded-full text-center text-3xl"></i>
              <h1 className='text-4xl  font-bold text-[#242424] py-3'>Store with confidence</h1>
              <p className='w-[70%]  text-[#242424] text-lg lg:w-[70%] py-3'>Your files and memories stay safe and secure in the cloud, with 5 GB for free and 1 TB+ if you go premium</p>
              <p className='text-[#D83B01] py-3'>Explore more at the Microsft Create ></p>
           </div>
            </div>
          </div>
         </div>

         {/* QR Code page */}
         <div className='qr h-full product-bg'>
          <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className='text-3xl font-bold'>Get the free Microsoft 365 mobile app</h1>

            <img src='https://res.cdn.office.net/officehub/images/content/images/unauth-refresh/store-buttons-747d2c674f.png' className='w-72'/>
            <img src='https://res.cdn.office.net/officehub/images/content/images/unauth-refresh/qr-code-2be9b68eed.png' />
          </div>
          <div className='flow flex gap-10 ml-24 h-24 mt-20'>
            <h3 className='text-4xl'>Fow Microsoft 365</h3>
            <i class="fa-brands fa-linkedin-in text-3xl"></i>
            <i class="fa-brands fa-facebook-f text-3xl"></i>
            <i class="fa-brands fa-twitter text-3xl"></i>
            <i class="fa-brands fa-instagram text-3xl"></i>
          </div>
         </div>
        </div>
    </>
  )
}

export default Products