import React from 'react';
import "../styles/notfound.scss"


const NotFound = () => {
    return (
        <section className='Loader' >

        <div class="spinner-box">
        <div class="circle-border">
          <div class="circle-core"></div>
        </div>  
        </div>
        <div className="text">
            <h1> Cargando </h1>
        </div>
      </section>
    );
}

export default NotFound;
