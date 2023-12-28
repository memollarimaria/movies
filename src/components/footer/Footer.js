import React from 'react'
import './Footer.css'
import {FaFacebookF, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer>
        <div className='container'>
            <div className='box'>
                <ul className='flex'>
                    <li>Terms of Use</li>
                    <li>Privacy-Policy</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Watch list</li>
                </ul>
                <p>Copyright © 2023 WatchNow. All Rights Reserved.All videos and shows on this platform are
                    trademarks of, and all related images and content are the property of, WatchNow.
                    Dublication and copy of this is strictly prohibited. All rights reserved. </p>
            </div>
            <div className='box'>
                <h3>Follow Us</h3>
                <div className='links'>
                <a href='https://www.facebook.com/' target='_blank'><FaFacebookF className='icons' size={25}/></a>
                <a href='http://www.twitter.com/' target='_blank'><FaTwitter className='icons' size={25}/></a>
                <a href='https://www.youtube.com/' target='_blank'><FaYoutube className='icons' size={25}/></a>
                <a href='https://www.instagram.com/' target='_blank'><FaInstagram className='icons' size={25}/></a>
                </div>
            </div>
            <div className='box'>
                <h3>WatchNow App</h3>
                <div className=' img flexSB'>
                    <a href='https://www.apple.com/app-store/' target='_blank'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png?20201023145313' alt=''/>
                    <span>App Store</span></a>
                    <a href='https://play.google.com/' target='_blank'><img src='https://helios-i.mashable.com/imagery/articles/04EZglaVzAW19V6FIiDD3TA/images-1.fit_lim.size_376x.png' alt=''/>
                    <span>Play Store</span></a>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
