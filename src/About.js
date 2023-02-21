import React from 'react'

const About = () => {
  return (
    <div name="about">
       <h1 className="text-white bg-gray-900 font-bold text-2xl text-center">ABOUT US</h1>
        <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex justify-evenly -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
      <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
         <img  src="https://www.m3sensation.com/images/1256650.png"/>
        </div>
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">92</h2>
        <p class="leading-relaxed">Happy Clients</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
         <img  src="https://www.m3sensation.com/images/1086768.png"/>
        </div>
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">37</h2>
        <p class="leading-relaxed">Amount Disbursed (in Cr)</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
         <img  src="https://www.m3sensation.com/images/5919524.png"/>
        </div>
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">35</h2>
        <p class="leading-relaxed">Collaborated companies</p>
      </div>
  
    </div>
  </div>
</section>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex justify-evenly -m-4 text-center">
    <div class="p-4 sm:w-1/4 w-1/2">
      <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
         <img  src="https://www.m3sensation.com/images/2821739.png"/>
        </div>
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">25</h2>
        <p class="leading-relaxed">Files Disbursed</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
         <img  src="https://www.m3sensation.com/images/854878.png"/>
        </div>
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">25</h2>
        <p class="leading-relaxed">Locations</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
         <img  src="https://www.m3sensation.com/images/9504802.png"/>
        </div>
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">25</h2>
        <p class="leading-relaxed">Financial Experts</p>
      </div>
      {/* <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">4</h2>
        <p class="leading-relaxed">Products</p>
      </div> */}
    </div>
  </div>
</section>
    </div>
  )
}

export default About