"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRelieved, basketball } from '@fortawesome/pro-solid-svg-icons'
import styles from './Header.module.css'
import React, { Component } from 'react';

import Script from 'next/script'

// import 'antd/dist/reset.css';
import Link from 'next/link';
import Date from '../Header/Date';





export default class Header extends Component {

  render() {
    return (
      <> 
        <section id={styles.SHADOW_SECTION} class={styles.center_holder}>   

          <div class={styles.HEADER_HOLDER}>
             <div id={styles.header}>   
                

            <header id={styles.FIXED_HEADER}> 



                

                 <div id={styles.BUTTON_HOLDER_RIGHT} class={styles.container}>
                    <div id={styles.HEADER_MENU_2}>   
                        <div id={styles.BURGER_HOLDER} class={styles.container_right}>
                            <a id={styles.BURGER} href="#" onClick={this.showDrawer}>
                                <i id={styles.BURGER_2}>Menu</i>
                            </a>
                        </div>   
                    </div>
                 </div> 


                 <div class="content-center ..." id={styles.NAV_MENU}>  
                    <Link class="content-center ..." id={styles.HOME_ICON} href="/dashboard"> 
                      <h3 id={styles.H_3} class="text-center ...  text-slate-50 ">Home</h3>
                    </Link>

                    <div class="bg-zinc-500 ..." id={styles.B1}>                      
                    </div>

                    <Link id={styles.ABOUT_ICON} href="/dashboard"> 
                      <h3 id={styles.H_3} class="text-center ...  text-slate-50">About</h3>
                    </Link>

                    <div class="bg-zinc-500 ..." id={styles.B2}>                      
                    </div>

                    <Link id={styles.SERVICES_ICON} href="/dashboard"> 
                      <h3 id={styles.H_3} class="text-center ...  text-slate-50">Services</h3>
                    </Link>

                    <div class="bg-zinc-500 ..." id={styles.B3}>                      
                    </div>

                    <Link id={styles.CONTACT_ICON} href="/dashboard"> 
                      <h3 id={styles.H_3} class="text-center ...  text-slate-50">Contact</h3>
                    </Link>             
                 </div>

                 <div class="content-center ..." id={styles.TIME}>
                    <Date/>

                    <div id={styles.CLOCK_ICON}> 
                      <Script id="SHOW_CLOCK">

                      </Script>
                      <h3  class="text-center ...  text-slate-50" id={styles.H_3}>Clock</h3>
                    </div>  
                 </div>

                 <div id={styles.LOGO_ICON} class={styles.container}>
                     <Link id={styles.LOGO_LINK} href="/dashboard">
                        <div class="bg-slate-100 ... "  id={styles.LOGO}>

                        </div>
                     </Link>      
                 </div>   

            </header>
    
           
          </div>           
        </div>
         
        </section> 
      </>
        )
    }
}