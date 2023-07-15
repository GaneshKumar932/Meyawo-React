import React from 'react'
import avatar2 from '../images/avatar2.jpg'
import avatar3 from '../images/avatar3.jpg'

const Testimonial = () => {
  return (
    <div>{/* <!-- testimonial section --> */}
    <section className="section" id="testmonial">
        <div className="container text-center">
            <p className="section-subtitle">What Think Client About Me ?</p>
            <h6 className="section-title mb-6">Testmonial</h6>

            {/* <!-- row --> */}
            <div className="row">
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={avatar2} className="testimonial-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>                           
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                            <h6 className="testimonial-card-title">Emily Reb</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src={avatar3} className="testimonial-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>                        
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                            <h6 className="testimonial-card-title">Emily Reb</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        {/* <!-- end of container --> */}
    </section>
     {/* <!-- end of testimonial section --> */}</div>
  )
}

export default Testimonial