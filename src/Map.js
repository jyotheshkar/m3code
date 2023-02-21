
import React from 'react'

const Map = () => {
  return (
    <div>

<section class="text-gray-400 bg-gray-900 body-font relative">
  <div class="absolute inset-0 bg-gray-900">
    <iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" 
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7611.92829584627!2d78.364931!3d17.46143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9320a46d043d%3A0xe80e85296ccd0b36!2sSri%20rama%20nilayam!5e0!3m2!1sen!2sus!4v1676897360938!5m2!1sen!2sus" ></iframe>
  
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 class="text-white text-lg mb-1 font-medium title-font">Prakash Palace</h2>
      <p class="leading-relaxed mb-5">House No.2-41/13/A, 
Prashanth Nagar Colony, Kondapur, Telangana 500084</p>
      <p> +91 88868 79525 </p>
      {/* <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
      <p class="text-lg text-gray-400 text-opacity-90 mt-3">Info@m3sensation.com</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Map