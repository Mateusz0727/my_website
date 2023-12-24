import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClock, faArrowsSpin, faRocket } from '@fortawesome/free-solid-svg-icons'
export default class DashBoard extends Component {
    render() {
    return (
        <div >

       
        <div className="dashboard">
            <div>
                <div style={{margin:"0px"}}>
                    <h1>
                Keep track of your business using a live dashboard</h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe optio ipsa nostrum quisquam, beatae voluptate labore culpa expedita earum ab velit et tempore quam eveniet, dicta fugit. Officiis, tempore totam.
                
                </div>
                <button className="dark_button">Try for free
                </button>
            </div>
            
            <div className="home-page-photo">
            <img  src="logo512.png" alt="" />
            </div>
          
        </div>
        <div className='feature-section'>
            <center>
            <h1>Main Features</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus accusantium excepturi officiis! Ullam assumenda, veritatis maxime, atque iste quaerat vero error fuga totam eum adipisci possimus necessitatibus! Dolore, soluta!
            </div>
            </center>
            <div className="features">
                <div className='feature'>
                    <div className='fa-layers fa-fw'>
                    <FontAwesomeIcon icon={faClock}  />
                    <FontAwesomeIcon icon={faArrowsSpin} fontSize={50}/>
                    
                    </div>
                    <div>
                   <h4> Monitoring 24/7</h4>
                    </div>
              <div className='feature_description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati rem hic ipsa autem suscipit tenetur corrupti</div>
                </div>
              
                <div className='feature'>
                    
                  
                    <FontAwesomeIcon icon={faRocket} fontSize={50}/>
                    
                    
                    <div>
                   <h4>Best Performence</h4>
                    </div>
              <div className='feature_description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati rem hic ipsa autem suscipit tenetur corrupti</div>
                </div>

                <div className='feature'>
                 <img src="widget.png" alt="" />
                  
                    
                    <div>
                   <h4>Widget System</h4>
                    </div>
              <div className='feature_description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati rem hic ipsa autem suscipit tenetur corrupti</div>
                </div>
            </div>
           </div>
        </div>
    )
}}
