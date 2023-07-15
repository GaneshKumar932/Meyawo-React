import React from 'react'
import folio1 from '../images/folio-1.jpg'
import folio2 from '../images/folio-2.jpg'
import folio3 from '../images/folio-3.jpg'
import scooter from '../images/scooter.svg'
import shipped from '../images/shipped.svg'
import startup from '../images/startup.svg'

const Portfolio = () => {
  return (
    <div>{/* <!-- portfolio section --> */}
    <section className="section" id="portfolio">
        <div className="container text-center">
            <p className="section-subtitle">What I Did ?</p>
            <h6 className="section-title mb-6">Portfolio</h6>
            {/* <!-- row --> */}
            <div className="row">
                <div className="col-md-4">
                    <a href="#" className="portfolio-card">
                        <img src={folio1} className="portfolio-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>Web Designing</h4>
                                <p className="font-weight-normal">Category: Web Templates</p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="#" className="portfolio-card">
                        <img className="portfolio-card-img img-responsive rounded" src={folio2} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>Web Designing</h4>
                                <p className="font-weight-normal">Category: Web Templates</p>
                            </span>                         
                        </span>                         
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="#" className="portfolio-card">
                        <img className="portfolio-card-img img-responsive rounded" src={folio3} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>Web Designing</h4>
                                <p className="font-weight-normal">Category: Web Templates</p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
            </div>
            {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
    </section>
     {/* <!-- end of portfolio section --> */}

    {/* <!-- pricing section --> */}
    <section className="section" id="pricing">
        <div className="container text-center">
            <p className="section-subtitle">How Much I Charge ?</p>
            <h6 className="section-title mb-6">My Pricing</h6>
            {/* <!-- row --> */}
            <div className="pricing-wrapper">
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={scooter} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">Free</h6>
                        <div className="pricing-card-list">
                            <p>accusamus reprehenderit</p>
                            <p>provident dolorem </p>
                            <p>quos neque</p>
                            <p>fugiat quibusdam</p>
                            <p><i className="ti-close"></i></p>
                            <p><i className="ti-close"></i></p>
                        </div>
                    </div>
                    <div className="pricing-card-footer">
                        <span>$</span>
                        <span>0.00/Month</span>
                    </div>
                    <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={shipped} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">Basic</h6>
                        <div className="pricing-card-list">
                            <p>accusamus reprehenderit</p>
                            <p>provident dolorem </p>
                            <p>quos neque</p>
                            <p>fugiat quibusdam</p>
                            <p>accusamus laboriosam</p>
                            <p><i className="ti-close"></i></p>
                        </div>
                    </div>
                    <div className="pricing-card-footer">
                        <span>$</span>
                        <span>9.99/Month</span>
                    </div>
                    <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <img className="pricing-card-icon" src={startup} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                    </div>
                    <div className="pricing-card-body">
                        <h6 className="pricing-card-title">Premium</h6>
                        <div className="pricing-card-list">
                            <p>accusamus reprehenderit</p>
                            <p>provident dolorem </p>
                            <p>quos neque</p>
                            <p>fugiat quibusdam</p>
                            <p>accusamus laboriosam</p>
                            <p>inventore omnis</p>
                        </div>
                    </div>
                    <div className="pricing-card-footer">
                        <span>$</span>
                        <span>99.9/Month</span>
                    </div>
                    <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
                </div>

            </div>
            {/* <!-- end of pricing wrapper --> */}
        </div> 
        {/* <!-- end of container --> */}
    </section>
    {/* <!-- end of pricing section --> */}

    {/* <!-- section --> */}
    <section className="section-sm bg-primary">
        {/* <!-- container --> */}
        <div className="container text-center text-sm-left">
            {/* <!-- row --> */}
            <div className="row align-items-center">
                <div className="col-sm offset-md-1 mb-4 mb-md-0">
                    <h6 className="title text-light">Want to work with me?</h6>
                    <p className="m-0 text-light">Always feel Free to Contact & Hire me</p>
                </div>
                <div className="col-sm offset-sm-2 offset-md-3">
                    <button className="btn btn-lg my-font btn-light rounded">Hire Me</button>
                </div>
            </div>
             {/* <!-- end of row --> */}
        </div>
         {/* <!-- end of container --> */}
    </section>
     {/* <!-- end of section --> */}</div>
  )
}

export default Portfolio