"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faYoutube, faDribbble, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'
import React, { Component } from 'react';
// import 'antd/dist/reset.css';
import Link from 'next/link';
import Image from 'next/image';

import logoMobile from './Bim-copilot-logo_Mobile_3.png';

export default class Footer extends Component {

  render() {
    return (
      <> 
      <section id={styles.FOOTER_SECTION} class={styles.center_holder}>     
            <div class={styles.footer_holder}>
                <footer id={styles.FOOTER}>
                    <div id={styles.IPHONE} class={styles.container}> 

                        <div id={styles.BIM_TITLE}>
                            <div id={styles.IMAGE_HOLDER}>
                              <Image
                              id={styles.IMAGE_1}
                              src={logoMobile}                    
                              style={{objectFit: "contain"}}
                      	      quality={100}
                              //object-fit="cover"                      
                              alt=""/>
                            </div>                           
                        </div>

                        <div id={styles.FOOTER_MAIN}>
                            <div id={styles.TAGLINE}>
                                <h1 class="text-4xl ...">Exploring new frontiers in Architecture, Design and Technology.</h1>
                            </div>
                            <div id={styles.WEBSITE}>
                                <h4>Website by designlab.pfbd. Made with love, with a gun to our head.</h4>
                            </div>
                            <div id={styles.COMPANY}>
                                <h4>bimcopilot.com _ a subsidiary of Plastic Free By Design Ltd</h4>
                            </div>
                            <div id={styles.ARC_ICONS}>
                                <div class=" rounded-md ... bg-slate-100 ..." id={styles.ARB}>
                                    <Link href= "/">
                                    </Link>
                                </div>
                                <div class=" rounded-md ... bg-slate-100 ..." id={styles.RIBA}>
                                    <Link href= "/">
                                    </Link>
                                </div>                               
                            </div>
                            <div class="rounded-md ... bg-slate-100 ..." id={styles.TC}>
                            </div>
                        </div> 

                    </div>
                    <div id={styles.OTHER} class={styles.container}>
                        <div class=" rounded-md ... bg-gray-700 ..."  id={styles.ROCKETSHIP_HOLDER}>                           
                        </div>

                        <div id={styles.SOCIAL}>
                            <div id={styles.MEDIUM_ICON} class={styles.icon}>
                                <a id={styles.PFBD_LINK} href="https://github.com/OzJasonGit" target="_blank">
                                         <FontAwesomeIcon id={styles.CENTER} icon={faMedium} size="2xs" />
                                </a>
                            </div>  
                            <div id={styles.LINKEDIN_ICON} class={styles.icon}>
                                <a id={styles.PFBD_LINK} href="https://github.com/OzJasonGit" target="_blank">
                                         <FontAwesomeIcon id={styles.CENTER} icon={faLinkedin} size="2xs" />
                                </a>
                            </div>   
                            <div id={styles.YOUTUBE_ICON} class={styles.icon}>
                                <a id={styles.PFBD_LINK} href="https://github.com/OzJasonGit" target="_blank">
                                         <FontAwesomeIcon id={styles.CENTER} icon={faYoutube} size="2xs" />
                                </a>
                            </div>   
                            <div id={styles.DRIBBLE_ICON} class={styles.icon}>
                                <a id={styles.PFBD_LINK} href="https://github.com/OzJasonGit" target="_blank">
                                         <FontAwesomeIcon id={styles.CENTER} icon={faDribbble} size="2xs" />
                                </a>
                            </div>   
                            <div id={styles.GITHUB_ICON} class={styles.icon}>
                                <a id={styles.PFBD_LINK} href="https://github.com/OzJasonGit" target="_blank">
                                         <FontAwesomeIcon id={styles.CENTER} icon={faGithub} size="2xs" />
                                </a>
                            </div>                     
                        </div>
                    </div>
                </footer>
            </div>        
        </section>
      </>       
    )
               
  }
      
}
