import React from 'react'

const Developers_Placeholder = () => {
    return (
        <div className="row  d-flex justify-content-center mt-5 corzinka_card ">
          {Array(1)
            .fill(0)
            .map((_, index) => (
              <div className="col-8  " key={index}>
                <div>
                    <div className="card" aria-hidden="true">
                  <div className="placeholder-card-image d-flex align-items-center justify-content-center bg-light card-img-top">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-8"></span>
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-10"></span>
                    </p>
                    
                  </div>
                </div>
                </div>
              </div>
            ))}
        </div>
      );
}

export default Developers_Placeholder;