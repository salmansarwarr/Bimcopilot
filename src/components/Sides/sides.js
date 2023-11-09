"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRelieved, basketball } from '@fortawesome/pro-solid-svg-icons'
import styles from './sides.module.css'
import React, { Component } from 'react';
import Link from 'next/link'
import 'antd/dist/reset.css';
import Image from "next/image";
import pfbdImage from './_pfbd_.svg';
import dlpfbdImage from './_dlpfbd_.svg';

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
                                        <Link id={styles.PFBD_LINK} href= "/" target="_blank">
                                            <div id={styles._PFBD_}>
                                                <Image id={styles.CENTER}
                                                       src={pfbdImage}   
                                                       style={{objectFit: "contain"}} 
                                                       quality={100}
                                                  />                     
                                            </div> 
                                        </Link>
                                    </div>

                                    <div id={styles.DESIGN_LAB_ICON} class={styles.icon}>
                                        <Link id={styles.PFBD_LINK} href= "/" target="_blank">
                                            <div id={styles._PFBD_}>
                                                <Image id={styles.CENTER}
                                                       src={dlpfbdImage}   
                                                       style={{objectFit: "contain"}} 
                                                       quality={100}
                                                  />                     
                                            </div> 
                                        </Link>
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
                                <p class={styles.side_text}>Welcome   to   bimcopilot.com</p>
                            </div>
                        </div>
    
                        <div id={styles.PAGE_NAVIGATION}>
                            <div class="bg-zinc-500 ..." id={styles.LINE_1}>
                            </div>

                            <div id={styles.NAV_LINK}>
                               
                                <Link id={styles.ANCHOR_1} href= "/">
                                </Link>

                                <Link id={styles.ANCHOR_2} href= "/">
                                </Link>

                                <Link id={styles.ANCHOR_3} href= "/">
                                </Link>

                                <Link id={styles.ANCHOR_4} href= "/">
                                </Link>
                                                              
                                <Link id={styles.ANCHOR_5} href= "/">
                                </Link>
                                                                
                            </div>

                            <div class="bg-zinc-500 ..." id={styles.LINE_2}>
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
