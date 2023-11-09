'use client'

import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

import styles from './articles_home.module.css';
import React, { Component } from 'react';
import 'antd/dist/reset.css';
import Image from "next/image";


import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Link from 'next/link'


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const item_1 = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
];


const item_2 = [
  {
    key: '2',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
];


const item_3 = [
  {
    key: '3',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
];

const App = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  }
};







export default class Articles_Main extends Component {






  render() {
    return (
      <> 
        <div id={styles.main}>       
        </div>

        <Header/>  

          <section id={styles.SHADOW_SECTION_ARTICLES} class={styles.center_holder}>
            <div class={styles.grid_0_blogtop}>            
            </div>
          </section> 

          <section id={styles.SHADOW_SECTION} class={styles.center_holder}>
            <div class={styles.grid_0_main}>   
              <div id={styles.ARTICLE_TITLE_HOLDER}>

                

                <div id={styles.ARTICLE_IMAGE}> 
                  <Link  id={styles.LINK_HOLDER} href= "/">
                        <div class="rounded ... drop-shadow-2xl ... bg-slate-200" id={styles.IMAGE_POST}>
                          <Image                        
                          id={styles.IMAGE_1}/>                     
                        </div>  
                  </Link>                               
                </div>

                <div id={styles.ARTICLE_ALT_TEXT}>
                  <h5>This is the image alt text</h5>
                </div>

              </div>         
            </div>
          </section>  

             
        

          <section id={styles.SHADOW_SECTION_ASTRONAUT} class={styles.center_holder_astronaut}>
            <div class={styles.grid_0_astronaut}>     
              <div id={styles.ASTRONAUT_FOOTER_HOLDER}>
                <div id={styles.ASTRONAUT_3}>
                </div>
              </div>                   
            </div>
          </section>  

        <Footer/>
      </>       
    )              
  }
}
