"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRelieved, basketball } from '@fortawesome/pro-solid-svg-icons'
import styles from './sides.module.css'
import React, { Component } from 'react';
import 'antd/dist/reset.css';
//import fonts from "../fonts.module.css";



export default class Sides extends Component {

  render() {
    return (
      


          
    <div class={styles.wrapper_2}>
        <div class={styles.fixed_center}>
            <div class={styles.grid_0_fixed}>
    
                <div id={styles.LEFT_FIXED}>
                    <div id={styles.LEFT_FIXED_STICKY}>
                        <div id={styles.ICON_SIDE_1}>
                            <div id={styles.ICON_SIDE_2}>
                                <div id={styles.ICON_GRID} class={styles.container}>

                                    <div id={styles.PFBD_ICON} class={styles.icon}>
                                        <a id={styles.PFBD_LINK} href="https://github.com/OzJasonGit" target="_blank">
                                         <FontAwesomeIcon id={styles.CENTER} icon={faFaceRelieved} />
                                        </a>
                                    </div>

                                    <div id={styles.DESIGN_LAB_ICON} class={styles.icon}>
                                        <a id={styles.DESIGN_LAB_LINK}  href="https://github.com/OzJasonGit" target="_blank">
                                        <FontAwesomeIcon id={styles.CENTER} icon={faFaceRelieved} />
                                        </a>
                                    </div>

                                    <div id={styles.BIM_COPILOT_ICON} class={styles.icon}>
                                        <a id={styles.BIM_COPILOT_LINK}  href="https://github.com/OzJasonGit" target="_blank">
                                        <FontAwesomeIcon id={styles.CENTER} icon={faFaceRelieved} />
                                        </a>
                                    </div>
                                </div>                            
                            </div>
    
                        
                        </div>
                    </div>
                </div>
    
    
                <div id={styles.RIGHT_FIXED}>
                    <div id={styles.RIGHT_FIXED_STICKY}>
                        <div id={styles.PFBD_LINKS}>
                            <div id={styles.ICON_PLACEHOLDER} class={styles.container}>
                                <p class={styles.side_text}>“If you want to find the secrets of the universe, think in terms
                                    of energy, frequency and vibration.”
                                    <br>
                                    </br>
                                     Nikola Tesla
                                </p>
                            </div>
                        </div>
    
                        <div id={styles.PAGE_NAVIGATION}>
                            <div id={styles.VERTICAL_NAVIGATION} class={styles.container}>
                                <div id={styles.NAV_1}>
                                    <div class={styles.nav_button}></div>
                                </div>
                                <div id={styles.NAV_2}>
                                    <div class={styles.nav_button}></div>
                                </div>
                                <div id={styles.NAV_3}>
                                    <div class={styles.nav_button}></div>
                                </div>
                                <div id={styles.NAV_4}>
                                    <div class={styles.navbutton}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            </div>
            </div>
       
    
      
           
    )
               
  }
      

}
