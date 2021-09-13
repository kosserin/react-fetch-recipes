import React from "react";

function Footer() {
    
    return(
        <footer>
            <div className="left-side">
            <h1>Koki's kitchen</h1>
            <p>All recipes on one place</p>
            <p>Petra Barbarose 6, 11320</p>
            <p>Bukovac, Srbija</p>
            </div>
            <ul className='center'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Credit</a></li>
            </ul>
            <div className="right">
            <img src="https://via.placeholder.com/150" alt="" />
            </div>
        </footer>
    )
}

export default Footer;