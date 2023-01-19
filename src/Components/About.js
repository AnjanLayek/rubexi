import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
        <div className='abt-container'>
      <div className='row-1'>
        <p>ABOUT US</p>
        <span>RubixeTM is a global technology company specializing in disruptive technologies - Artificial Inteligence (AI). Machine Learning, Robotic Process 
Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable business to leverage the full potential of disruptive technologies to stay competitive in the market</span>
      </div>
      <div className='row-2'>
        <p>MENUS</p>
       
            <span>Home</span>
            <span>Services</span>
            <span>Products</span>
            <span>Career</span>
        
      </div>
      <div className='row-3'>
        <p>LEARN MORE</p>
        <span>About</span>
        <span>Contact Us</span>
      </div>
      <div className='row-4'>
        <p>ADDRESS</p>
        <span>Novel Tech Park,1st Floor,Hosur Rd,Kudlu gate,Bengaluru,Karnataka 560068</span>
        <span>Phone:0804-717-8999</span>
        <span>Email:hi@rubixe.com</span>
        <p>SOCIAL MEDIA</p>
        <img src='LOGO.jpg' alt=''/>
      </div>
    </div>
    </div>
  )
}

export default About
