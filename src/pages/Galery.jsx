import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';

const Galery =()=>{
  return(
    <>
    <section class="gallery-demo">
      <h1 class="gallery-demo-header">React Image Gallery</h1>
      <h3 class="gallery-demo-header-3">
        Responsive and flexible carousel component with thumbnail support for ReactJS
      </h3>

      <div class="gallery-demo-subheader">
        <a class="github-button"
           href="https://github.com/xiaolin/react-image-gallery"
           data-icon="octicon-star"
           data-size="large"
           data-show-count="true"
           aria-label="Star xiaolin/react-image-gallery on GitHub">Star</a>
      </div>
    </section>

    <div id="root" class="gallery-container"></div>
    </>
  )
}


export default Gallery;
