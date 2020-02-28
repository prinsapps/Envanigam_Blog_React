import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';
import { kMaxLength } from 'buffer';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <Card>
        <div className="profileImageContainer" style={{ padding:'1px 0'}}>
                    <img src="https://s3-eu-west-2.amazonaws.com/envanigam.co.uk/wp-content/uploads/2020/02/28161622/Envanigam_blacklogo.png" alt="" />
            <Logo />
            </div>
            <Navbar />
        </Card>
    </div>
   )

 }

export default Hero