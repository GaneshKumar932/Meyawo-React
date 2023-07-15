import React from 'react'
import { Link } from 'react-router-dom/dist';

const Header = () => {
  
    // document.addEventListener("DOMContentLoaded", function() {
    //     var navbar = document.querySelector(".navbar");
    //     navbar.addEventListener('click', function(event) {
    //         if (this.hash !== "") {
    //             event.preventDefault();
    //             var hash = this.hash;
    //             var targetElement = document.querySelector(hash);
    //             var targetOffsetTop = targetElement.offsetTop;
    
    //             window.scrollTo({
    //                 top: targetOffsetTop,
    //                 behavior: 'smooth'
    //             });
    
    //             window.location.hash = hash;
    //         }
    //     });
    
    //     var navToggle = document.getElementById("nav-toggle");
    //     navToggle.addEventListener('click', function() {
    //         this.classList.toggle('is-active');
    //         var navList = document.querySelector('ul.nav');
    //         navList.classList.toggle('show');
    //         console.log("hi");
    //     });
    // });
    
  return (
    <div>
 <nav className="custom-navbar affix affix-top"  data-spy="affix" data-offset-top="20">
    <div className="container">
        <a className="logo" href="#">Meyawo</a>         
        <ul className="nav">
            <li className="item">
                <Link className="link" to='/'>Home</Link>
            </li>
            <li className="item">
                <Link className="link" to='/about'>About</Link>    
            </li>
            <li className="item">
                <Link className="link" to='/portfolio'>Portfolio</Link>
            </li>
            <li className="item">
                <Link className="link" to='/testimonial'>Testmonial</Link>
            </li>
            <li className="item">
                <Link className="link" to='/blog'>Blog</Link>
            </li>
            <li className="item">
                <Link className="link" to='/contact'>Contact</Link>
            </li>
            <li className="item ml-md-3">
                <Link className="btn btn-primary" to='/'>Components</Link>
            </li>
        </ul>
        <a href="javascript:void(0)" id="nav-toggle" className="hamburger hamburger--elastic">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
        </a>
    </div>          
</nav>
</div>
  )
}

export default Header;