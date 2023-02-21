import React from 'react'
import { Link as LinkRoll } from 'react-scroll';

const Scrollalpha = () => {
  return (
    <div>
        <section class="text-gray-400 bg-gray-900 body-font items-center">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" class="object-cover object-center h-full w-full" src="https://imageio.forbes.com/specials-images/imageserve/612cd9b4f42bed4cf122c801/Serious--thoughtful-man-looking-at-his-computer/960x0.jpg?format=jpg&width=960" />
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        
        <div class="flex-grow mt-[180px]">
          <h2 class="text-white text-2xl title-font font-bold mb-3">Why 
M3 Sensation ?</h2>
          <p class="leading-relaxed text-base">    ​We are a CONGLOMERATE in Fin-Tech , enhancing the Loan Service Type to be an efficient aggregator platform with the blend of financial analysis with technology.</p>
          <a class="mt-3 text-gray-100 inline-flex items-center"> <LinkRoll to="scrollbeta">Read more  </LinkRoll> 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div class="flex flex-col mb-10 lg:items-start items-center">
        
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Scrollalpha