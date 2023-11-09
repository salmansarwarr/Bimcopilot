"use client";

import "@vidstack/react/player/styles/base.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { CaretRightFilled } from "@ant-design/icons";
import { Collapse, Carousel, Typography } from "antd";

import styles from "./main.module.css";
import React from "react";
import "antd/dist/reset.css";
import Image from "next/image";
import logoImage from "./Bim-copilot-logo_2.png";
import logoMobile from "./Bim-copilot-logo_Mobile_3.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Link from "next/link";

import axios from "axios";

const panel_1 = () => (
    <span style={{ color: "white", fontSize: 20 }}> This is Panel 1</span>
);

const panel_2 = () => (
    <span style={{ color: "white", fontSize: 20 }}> This is Panel 2</span>
);

const panel_3 = () => (
    <span style={{ color: "white", fontSize: 20 }}> This is Panel 3</span>
);

const panel_4 = () => (
    <span style={{ color: "white", fontSize: 20 }}> This is Panel 4</span>
);

const Main = ({ stories }) => {
    return (
        <>
            <div id={styles.main}></div>

            <Header />

            <section id={styles.SHADOW_SECTION} class={styles.center_holder}>
                <div class={styles.grid_0}>
                    <div class="rounded-2xl ..." id={styles.VID_BACKGROUND}>
                        <div></div>
                    </div>
                    <div class={styles.head}>
                        <Link
                            class="rounded-md ... drop-shadow-2xl ..."
                            id={styles.LINK_HOLDER}
                            href="/"
                        >
                            <div id={styles.IMAGE_POST}>
                                <img src={stories[0].image} />
                            </div>

                            <div id={styles.BC_MOBILE_HOLDER}>
                                <div id={styles.BC_MOBILE_HOLDER_2}>
                                    <div id={styles.BC_MOBILE}>
                                        <Image
                                            id={styles.IMAGE_1}
                                            src={logoMobile}
                                            style={{ objectFit: "contain" }}
                                            quality={100}
                                            //object-fit="cover"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div id={styles.BC}>
                            <Image
                                id={styles.IMAGE_1}
                                src={logoImage}
                                style={{ objectFit: "contain" }}
                                quality={100}
                                //object-fit="cover"
                                alt=""
                            />
                        </div>

                        <div id={styles.IMAGE_POST_TITLE}>
                            <div>
                                <h1 class="text-6xl ... text-slate-50">
                                    This is the main article title.
                                </h1>
                            </div>

                            <div>
                                <h3 class="text-xl ... text-slate-50 drop-shadow-xl">
                                    This is the subtitle
                                </h3>
                            </div>
                        </div>

                        <div id={styles.NEWS}>
                            <div styles={styles.h3}>
                                <h2 class="text-4xl ... text-slate-50 drop-shadow-xl">
                                    Latest Stories
                                </h2>
                            </div>

                            {/* <div id={styles.ARTICLES_MOBILE}> 
                        <div class={styles.container} id={styles.B1_MOBILE}>
                          <div id={styles.BLOG_SMALL_1_MOBILE}>
                            <div class="rounded-full ... drop-shadow-2xl ..." id={styles.BLOG_NUMBER_MOBILE}>
                            </div>
                            <div id={styles.BLOG_TEXT_MOBILE}>
                              <h3 class="text-xl ... text-slate-50 drop-shadow-xl">This is the blog title, I'm writing a bit just to to sound like a title
                              </h3>
                            </div>
                            <div id={styles.BLOG_AUTHOR_MOBILE}>
                              <h3>Oz Nwachukwu                               
                              </h3>
                            </div>
                            <div id={styles.TIMESTAMP_MOBILE}>
                              <h3>Timestamp                               
                              </h3>
                            </div>
                            <div class="rounded-sm ... drop-shadow-2xl ..." id={styles.BLOG_IMAGE_MOBILE}>
                            </div>
                            <div class="border-b border-zinc-400 ..." id={styles.BORDER_MOBILE}>
                            </div>
                          </div>
                        </div>                    
                      </div>  */}

                            <div id={styles.ARTICLES}>
                                {stories.map((story, index) => (
                                    <div
                                        key={story._id}
                                        class={styles.container}
                                        style={{ gridArea: index + 1 }}
                                    >
                                        <div id={styles.BLOG_SMALL_1}>
                                            <div
                                                class="rounded-full ... drop-shadow-2xl ..."
                                                id={styles.BLOG_NUMBER}
                                            >
                                                <div class="content-center ...">
                                                    <h5 class="text-center">
                                                        {story.no}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div id={styles.BLOG_TEXT}>
                                                <h3 class="text-lg ... text-slate-50 drop-shadow-xl">
                                                    {story.text}
                                                </h3>
                                            </div>
                                            <div id={styles.BLOG_AUTHOR}>
                                                <h4 class="text-right ... text-slate-50 drop-shadow-xl">
                                                    {story.author}
                                                </h4>
                                            </div>
                                            <div id={styles.TIMESTAMP}>
                                                <h4 class="text-right ... text-slate-50 drop-shadow-xl">
                                                    {story.timestamp}
                                                </h4>
                                            </div>
                                            <div
                                                class="rounded-sm ... drop-shadow-2xl ... text-slate-50 drop-shadow-x"
                                                id={styles.BLOG_IMAGE}
                                            >
                                                <img src={story.image} />
                                            </div>
                                            <div
                                                class="border-b border-neutral-600"
                                                id={styles.BORDER}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.SHADOW_SECTION} class={styles.center_holder}>
                <div class={styles.grid_0_image_left}>
                    <div
                        class="rounded-2xl ... drop-shadow-2xl ... border-solid border-2 border-slate-200..."
                        id={styles.ASTRONAUT_IMAGE_1}
                    >
                        <Image
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>

            <section id={styles.SHADOW_SECTION} class={styles.center_holder}>
                <div class={styles.grid_0}>
                    <div class={styles.main}>
                        <div id={styles.INTRO_HOLDER}>
                            <div id={styles.INTRO}>
                                <h2 class="text-4xl ... text-slate-50 drop-shadow-xl">
                                    We support architects with knowledge,
                                    <br></br> and technology so they win.
                                </h2>
                            </div>
                            <div id={styles.INTRO_SUBTITLE}>
                                <h3 class="text-xl ... text-slate-50 drop-shadow-xl">
                                    This is the intro subtitle
                                </h3>
                            </div>
                            <div class="rounded-lg ..." id={styles.IMAGE}>
                                <Image
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>

                        <div id={styles.ABOUT_HOLDER}>
                            <div
                                class="rounded-lg ... bg-gray-100  ... "
                                id={styles.ABOUT_CONTAINER}
                            >
                                <div class="rounded-2xl ... " id={styles.ABOUT}>
                                    <div id={styles.ABOUT_TITLE_HOLDER}>
                                        <h2 class="text-left ... text-4xl ... text-gray-900 drop-shadow-xl">
                                            About
                                        </h2>
                                    </div>
                                    <div id={styles.ABOUT_TEXT_HOLDER}>
                                        <p class="text-left ... text-xl ... text-gray-900 drop-shadow-xl">
                                            {" "}
                                            It is a long established fact that a
                                            reader will be distracted by the
                                            readable content of a page when
                                            looking at its layout. The point of
                                            using Lorem Ipsum is that it has a
                                            more-or-less normal distribution of
                                            letters, as opposed to using
                                            'Content here, content here', making
                                            it look like readable English. Many
                                            desktop publishing packages and web
                                            page editors now use Lorem Ipsum as
                                            their default model text, and a
                                            search for 'lorem ipsum' will
                                            uncover many web sites still in
                                            their infancy. Various versions have
                                            evolved over the years, sometimes by
                                            accident, sometimes on purpose
                                            (injected humour and the like).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id={styles.WHO_WE_WORK_WITH_HOLDER}>
                            <div>
                                <h2 class="text-right ... text-4xl ... text-slate-50 drop-shadow-xl">
                                    Who We Work With
                                </h2>
                            </div>
                            <div id={styles.CAROUSEL_HOLDER}>
                                <div id={styles.CAROUSEL}>
                                    <Carousel
                                        autoplay={true}
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    >
                                        <div class={styles.SLIDE}>
                                            <h1
                                                style={{ color: "#f1f1f1" }}
                                                class="text-center ..."
                                            >
                                                Slide_1
                                            </h1>
                                        </div>
                                        <div class={styles.SLIDE}>
                                            <h1
                                                style={{ color: "#f1f1f1" }}
                                                class="text-center ..."
                                            >
                                                Slide_2
                                            </h1>
                                        </div>
                                        <div class={styles.SLIDE}>
                                            <h1
                                                style={{ color: "#f1f1f1" }}
                                                class="text-center ..."
                                            >
                                                Slide_3
                                            </h1>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>

                        <div id={styles.TESTIMONIALS}>
                            <div>
                                <h2 class="text-right ... text-4xl ... text-slate-50 drop-shadow-xl">
                                    Testimonials
                                </h2>
                            </div>
                            <div id={styles.TESTIMONIAL_AREA}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.SHADOW_SECTION} class={styles.center_holder}>
                <div class={styles.grid_0_main}>
                    <div
                        class="rounded-2xl ..."
                        id={styles.PROCESS_GRAPHIC_HOLDER}
                    >
                        <div
                            class="rounded-2xl ..."
                            id={styles.PROCESS_GRAPHIC}
                        ></div>
                        <div id={styles.PROCESS_VIDEO_HOLDER}>
                            <div id={styles.PROCESS_VIDEO_TITLE}>
                                <h3 class="text-xl ... text-slate-50 drop-shadow-xl">
                                    This Is The Video Subtitle
                                </h3>
                            </div>
                            <div id={styles.PROCESS_VIDEO}>
                                <Collapse
                                    style={{ display: "grid", rowGap: 25 }}
                                    accordion={false}
                                    expandIcon={({ isActive }) => {
                                        return (
                                            <CaretRightFilled
                                                style={{ color: "#f1f1f1" }}
                                                rotate={isActive ? 90 : 0}
                                            />
                                        );
                                    }}
                                    expandIconPosition="start"
                                    defaultActiveKey={["1"]}
                                    bordered={false}
                                    ghost={true}
                                >
                                    <Collapse.Panel
                                        key={"1"}
                                        header={panel_1()}
                                    >
                                        <video
                                        className="rounded"
                                            autoPlay
                                            loop
                                            muted
                                        >
                                            <source
                                                src={stories[0].video}
                                                type="video/mp4"
                                            />
                                        </video>
                                    </Collapse.Panel>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.SHADOW_SECTION} class={styles.center_holder}>
                <div class={styles.grid_0_main}>
                    <div class={styles.video_section}>
                        <div id={styles.VIDEO_LATEST_HOLDER}>
                            <div class="rounded ...">
                                <video
                                    className="rounded"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source
                                        src={stories[0].video}
                                        type="video/mp4"
                                    />
                                </video>
                            </div>

                            <div
                                id={styles.VIDEO_TEXT_HOLDER}
                                class="rounded ..."
                            >
                                <div id={styles.V_TITLE_HOLDER}>
                                    <h2 class="text-4xl ... text-slate-50 drop-shadow-xl">
                                        This Is The Video Title
                                    </h2>
                                </div>
                                <div id={styles.V_SUBTITLE_HOLDER}>
                                    <h3 class="text-xl ... text-slate-50 drop-shadow-xl">
                                        This Is The Video Subtitle
                                    </h3>
                                </div>
                                <div
                                    class="rounded ..."
                                    id={styles.SHARE}
                                ></div>
                            </div>
                        </div>

                        <div class="rounded-2xl ... " id={styles.GRAPHIC}></div>

                        <div id={styles.SERVICES_HOLDER}>
                            <div id={styles.SERVICES}>
                                <div id={styles.SERVICES_TITLE}>
                                    <h2 class="text-4xl ... text-slate-50 drop-shadow-xl">
                                        Services
                                    </h2>
                                </div>

                                <div
                                    class="rounded-md ..."
                                    id={styles.SERVICES_COLLAPSE_HOLDER}
                                >
                                    <Collapse
                                        style={{
                                            display: "grid",
                                            rowGap: 25,
                                        }}
                                        accordion={true}
                                        expandIcon={({ isActive }) => {
                                            return (
                                                <CaretRightFilled
                                                    style={{
                                                        color: "#f1f1f1",
                                                    }}
                                                    rotate={isActive ? 90 : 0}
                                                />
                                            );
                                        }}
                                        expandIconPosition="start"
                                        defaultActiveKey={["1"]}
                                        bordered={false}
                                        ghost={true}
                                    >
                                        <Collapse.Panel
                                            key={"1"}
                                            header={panel_1()}
                                        >
                                            <Typography.Text
                                                style={{ color: "#f1f1f1" }}
                                            >
                                                A dog is a type of domesticated
                                                animal. Known for its loyalty
                                                and faithfulness, it can be
                                                found as a welcome guest in many
                                                households across the world.
                                            </Typography.Text>
                                        </Collapse.Panel>

                                        <Collapse.Panel
                                            style={{ color: "#f1f1f1" }}
                                            key={"2"}
                                            header={panel_2()}
                                        >
                                            <Typography.Text
                                                style={{ color: "#f1f1f1" }}
                                            >
                                                {" "}
                                                A dog is a type of domesticated
                                                animal. Known for its loyalty
                                                and faithfulness, it can be
                                                found as a welcome guest in many
                                                households across the world.
                                            </Typography.Text>
                                        </Collapse.Panel>

                                        <Collapse.Panel
                                            key={"3"}
                                            header={panel_3()}
                                        >
                                            <Typography.Text
                                                style={{ color: "#f1f1f1" }}
                                            >
                                                A dog is a type of domesticated
                                                animal. Known for its loyalty
                                                and faithfulness, it can be
                                                found as a welcome guest in many
                                                households across the world.
                                            </Typography.Text>
                                        </Collapse.Panel>

                                        <Collapse.Panel
                                            key={"4"}
                                            header={panel_4()}
                                        >
                                            <Typography.Text
                                                style={{ color: "#f1f1f1" }}
                                            >
                                                A dog is a type of domesticated
                                                animal. Known for its loyalty
                                                and faithfulness, it can be
                                                found as a welcome guest in many
                                                households across the world.
                                            </Typography.Text>
                                        </Collapse.Panel>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.SHADOW_SECTION} class={styles.center_holder}>
                <div class={styles.grid_0_main}>
                    <div id={styles.TAG_HOLDER}>
                        <div id={styles.TAG}>
                            <h1 class="text-6xl ... text-slate-50">
                                {" "}
                                You're the pilot... We are your copilot.
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.SHADOW_SECTION} class={styles.center_holder}>
                <div class={styles.grid_0_image_right}>
                    <div
                        class="rounded-2xl ... drop-shadow-2xl ... border-solid border-2 border-slate-200..."
                        id={styles.ASTRONAUT_IMAGE_2}
                    ></div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Main;
