'use client'

import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

import styles from './articles.module.css';
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







export default class Main extends Component {






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
                

                <div id={styles.ARTICLE_TITLE}>

                  <div id={styles.TITLE_TEXT}>
                    <div><h1 class="text-6xl ... text-slate-50">This is the article title. We will write a little more so it looks like a real title</h1>
                    </div>
                    <div><h3 class="text-4xl ... text-slate-50">This is the article subtitle We will write a little more so it looks like a real title.</h3>
                    </div>
                    <div><h3 class="text-slate-50">This is the author description</h3>
                    </div>
                    

                  </div>
                  
 
                  <div id={styles.SHARING_HOLDER}>
                    <div id={styles.DATE}>
                      <h5 class="text-slate-50">this is the date</h5>
                    </div>
                    <div id={styles.COMMENTS}>
                      <h5 class="text-slate-50">these are the commments</h5>
                    </div>
                    <div id={styles.SHARING_ICONS}>
                      <div class="rounded ... drop-shadow-2xl ... bg-slate-200" id={styles.TWITTER}>
                      </div>
                      <div class="rounded ... drop-shadow-2xl ... bg-slate-200" id={styles.LINKEDIN}>
                      </div>
                      <div class="rounded ... drop-shadow-2xl ... bg-slate-200" id={styles.FACEBOOK}>
                      </div>
                      <div class="rounded ... drop-shadow-2xl ... bg-slate-200" id={styles.SHARE}>
                      </div>
                    </div>
                  </div>
                </div>

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

          <section id={styles.SHADOW_SECTION} class={styles.center_holder}>
            <div class={styles.grid_0_main}>   
              <div id={styles.TEXT_HOLDER}>
                <div id={styles.TEXT_STRUCTURE}>
                  <div>
                    <p class="text-left ... text-3xl ... text-slate-50 drop-shadow-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
 is reproduced below for those interested.
                    </p>
                  </div>

                  <div>
                    <p class="text-left ... text-xl ... text-slate-50 drop-shadow-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                  </div>

                  <div>
                    <p class="text-left ... text-xl ... text-slate-50 drop-shadow-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                  </div>

                  <div id={styles.VIDEO_LATEST_HOLDER}>
                    <div class="rounded ...">  
                      <MediaPlayer
                        title="Agent 327: Operation Barbershop"
                        src="https://media-files.vidstack.io/720p.mp4"
                        poster="https://media-files.vidstack.io/poster.png"        
                        controls>
                        <MediaProvider/>
                      </MediaPlayer>                            
                  </div>
                </div>

                <div>
                    <p class="text-left ... text-xl ... text-slate-50 drop-shadow-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>


                <div id={styles.ARTICLE_IMAGE_2}> 
                  <Link  id={styles.LINK_HOLDER} href= "/">
                        <div class="rounded ... drop-shadow-2xl ... bg-slate-200" id={styles.IMAGE_POST}>
                          <Image                        
                          id={styles.IMAGE_1}/>                     
                        </div>  
                  </Link>                               
                </div>


                <div>
                    <p class="text-left ... text-xl ... text-slate-50 drop-shadow-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
                  
                </div>
                <div id={styles.ADVERTS_STRUCTURE}>
                  <div id={styles.ADVERT_1_HOLDER}>  
                    <div id={styles.ADVERT_1}>
                    </div>                  
                  </div>
                  <div id={styles.ADVERT_2_HOLDER}>  
                    <div id={styles.ADVERT_2}>
                    </div>                  
                  </div>
                </div>
              </div>         
            </div>
          </section>  

          <section id={styles.SHADOW_SECTION} class={styles.center_holder_articles}>
            <div class={styles.grid_0_main}>   
              <div id={styles.ARTICLES_FOOTER_HOLDER}>

                <div id={styles.ARTICLES_FOOTER_TEXT}>
                  <div>
                    <p class="text-left ... text-3xl ... text-slate-50 drop-shadow-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
                    </p>
                  </div>

                  <div>
                    <p class="text-left ... text-xl ... text-slate-50 drop-shadow-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text. It has  Latin literature.
                    </p>
                  </div>
                </div>

                <div id={styles.ARTICLES_FOOTER_LINKS}>

                  <div id={styles.F_LINK_1}> 
                    <Link  id={styles.LINK_HOLDER} href= "/">
                        <div class="rounded ... drop-shadow-2xl ... bg-slate-200" id={styles.IMAGE_POST}>
                          <Image                        
                          id={styles.IMAGE_1}/>                     
                        </div>  
                    </Link> 
                  </div>


                  <div id={styles.F_LINK_2}> 
                        <Link  id={styles.LINK_HOLDER} href= "/">
                        <div class="rounded ... drop-shadow-2xl ... bg-slate-200" id={styles.IMAGE_POST}>
                          <Image                        
                          id={styles.IMAGE_1}/>                     
                        </div>  
                      </Link>                               
                  </div>  

                  <div id={styles.F_LINK_3}> 
                      <Link  id={styles.LINK_HOLDER} href= "/">
                        <div class="rounded ... drop-shadow-2xl ... bg-slate-200" id={styles.IMAGE_POST}>
                          <Image                        
                          id={styles.IMAGE_1}/>                     
                        </div>  
                      </Link>                               
                  </div>


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
