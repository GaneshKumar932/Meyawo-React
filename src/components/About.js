import React from 'react'
import man from '../images/man.png'
import pensil from '../images/pencil-case.svg'
import responsive from '../images/responsive.svg'
import toolbox from '../images/toolbox.svg'
import analytics from '../images/analytics.svg'

const About = () => {
  return (
    <div> {/* <!-- about section --> */}
    <section className="section pt-0" style={{marginTop:"100px"}} id="about">
        {/* <!-- container --> */}
        <div className="container text-center">
            {/* <!-- about wrapper --> */}
            <div className="about">
                <div className="about-img-holder">
                    <img src={man} className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                </div>
                <div className="about-caption">
                    <p className="section-subtitle">Who Am I ?</p>
                    <h2 className="section-title mb-3">About Me</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste 
                        <br></br>culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!              
                    </p>
                    <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
                </div>              
            </div>
            {/* <!-- end of about wrapper --> */}
        </div>
        {/* <!-- end of container --> */}
    </section>
     {/* <!-- end of about section --> */}

    {/* <!-- service section --> */}
    <section className="section" id="service">
        <div className="container text-center">
            <p className="section-subtitle">What I Do ?</p>
            <h6 className="section-title mb-6">Service</h6>
            {/* <!-- row --> */}
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={pensil} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Adipisicing</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={responsive} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Sapiente</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={toolbox} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Placeat</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={analytics} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Iusto</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end of row --> */}
        </div>
    </section>
    {/* <!-- end of service section --> */}
</div>
  )
}

export default About