import React,{useState} from 'react'
import '../App.css'
import Pics from './pics'
import $ from 'jquery'

const Products = () => {
  var [number,setNumber]=useState(0) 

 //#792000 brown
 //#D83B01 orange
 $('.click').on('click',function(){
  var clickedButton=$(this);
  console.log('clicked')

  $('.click').not(clickedButton).removeClass('active');
  clickedButton.addClass('active')
 })



  return (
    <>
        <div className='cover w-full  bg-[#FFF4ED]'>
         <div className='boxes w-[80%] flex justify-center gap-2 m-auto'>

         {/* {Top 3 Boxes} */}


   <div className='box w-[60%] h-10 p-8 bg-[#F9DBD0] text-[#792000] rounded-t-lg mt-8 flex justify-center items-center text-lg font-semibold cursor-pointer click' onClick={()=>{
    setNumber(0)
   }}>For Home</div>
   <div className='box w-[60%] h-10 p-8 bg-[#F9DBD0] text-[#792000] rounded-t-lg mt-8 flex justify-center items-center text-[#792000] text-lg font-semibold cursor-pointer click' onClick={()=>{
    setNumber(1)
   }}>For Organisations</div>
   <div className='box w-[60%] h-10 p-8 bg-[#F9DBD0] text-[#792000] ounded-t-lg mt-8 flex justify-center items-center  text-lg font-semibold cursor-pointer click' onClick={()=>{
    setNumber(2)
   }}>For Educators</div>
   
         </div>

       
          {/* Pics Cover */}
         
          <Pics a={number}/>

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