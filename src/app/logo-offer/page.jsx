"use client"
import React from "react"
import Script from "next/script"

export default function Page() {
    React.useEffect(() => {
        const loadCss = (url) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        };

        loadCss('/logo-offer-lp/assets/bootstrap.min.css');
        loadCss('/logo-offer-lp/assets/animate.css');
        loadCss('/logo-offer-lp/assets/jquery.fancybox.min.css');
        loadCss('/logo-offer-lp/assets/fancybox.css');
        loadCss('/logo-offer-lp/assets/accordian-jquery-ui.css');
        loadCss('/logo-offer-lp/assets/slick.css');
        loadCss('/logo-offer-lp/assets/slick-theme.css');
        loadCss('/logo-offer-lp/assets/owl.carousel.css');
        loadCss('/logo-offer-lp/assets/swiper-bundle.min.css');
        loadCss('/logo-offer-lp/assets/style.css');
        loadCss('/logo-offer-lp/assets/responsive.css');
        loadCss('/logo-offer-lp/assets/fancybox.css');
        loadCss('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css');
    }, []);
    return (
        <>
            <div className="font-pacifico" dangerouslySetInnerHTML={{
                __html: `<div>
                <meta name="robots" content="noindex">
            <div class="header">
                <div class="container-fluid">
                    <div class="navbar">
                        <a class="navbar__logo" href="index.html">
                            <img loading="lazy" src="https://www.logoverseinc.com/lp/logo-offer/images/logo.webp">
                        </a>
                        <div class="hd-btn">
                            <a href="tel:(332) 282-5383" class="button pac-btns blinking"></iframe> Call Now
                                (332) 282-5383</a>
                            <a class="button pac-btns" href="javascript::"
                                onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                data-cf-modified-e1500570fb71f59d71235d94->Live Chat</a>
                        </div>
                    </div>
                </div>
            </div>
            <section id="main-banner" class="main-bnr">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 p0 main-col-div">
                            <div class="col-sm-6 p0">
                                <div class="bnr-txt">
                                    <h1> Build Your <span>Brand Identity </span><br> By Getting a Custom and Professional Logo.
                                    </h1>
                                    <ul>
                                        <li><i class="fa fa-check"></i> Unique and Custom Logo Concepts</li>
                                        <li><i class="fa fa-check"></i> Multiple Revisions</li>
                                        <li><i class="fa fa-check"></i> 100% Ownership Rights</li>
                                        <li><i class="fa fa-check"></i> 24 Hour Turnaround Time</li>
                                        <li><i class="fa fa-check"></i> 100% Satisfaction</li>
                                    </ul>
                                    <div class="bnr-btn">
                                        <a href="javascript:;" class="gt-strt-btn viewMain" data-service="5640"
                                            name="for $19">Get Started</a>
                                        <a href="javascript:;"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                            class="lv-cht-btn" data-cf-modified-e1500570fb71f59d71235d94->Live Chat</a>
                                    </div>
                                    <div class="banner-img">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/banner-img1.webp"
                                            class="banner-img">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/banner-img2.webp"
                                            class="banner-img">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/banner-img3.webp"
                                            class="banner-img">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 p0">
                                <div class="col-sm-6 p0">
                                    <div class="bnr-side-slider-1 bnr-side-img">
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_1.webp">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_2.webp">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_3.webp">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_4.webp">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_5.webp">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_6.webp">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 p0">
                                    <div class="bnr-side-slider-2 bnr-side-img">
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_7.webp">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_8.webp">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_9.webp">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_10.webp">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_11.webp">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="brn-rside-img">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/logo_12.webp">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img loading="lazy" class="blackfriday_sale"
                        src="https://www.logoverseinc.com/lp/logo-offer/images/blackfriday-sale.webp">
                </div>
            </section>
            <section class="logo-cmpny">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="hd-txt">
                                <h3>Trusted by <span> world's most smart businesses</span> � big and small</h3>
                            </div>
                            <div class="logo-cmp">
                                <img loading="lazy" src="https://www.logoverseinc.com/lp/logo-offer/images/trusted-logo1.webp">
                                <img loading="lazy" src="https://www.logoverseinc.com/lp/logo-offer/images/trusted-logo2.webp">
                                <img loading="lazy" src="https://www.logoverseinc.com/lp/logo-offer/images/trusted-logo3.webp">
                                <img loading="lazy" src="https://www.logoverseinc.com/lp/logo-offer/images/trusted-logo4.webp">
                                <img loading="lazy" src="https://www.logoverseinc.com/lp/logo-offer/images/trusted-logo5.webp">
                                <img loading="lazy" src="https://www.logoverseinc.com/lp/logo-offer/images/trusted-logo6.webp">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="portfolio-logo custom-slider">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="hd-txt">
                                <h2>Some of Our Latest Work</h2>
                                <p>Your Journey towards success starts with a professionally designed and creatively crafted
                                    logo. <br>Get insight into our creative work.
                                </p>
                            </div>
                        </div>
                        <div class="port-logos">
                            <div class="port-slider-1 owl-carousel">
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/13.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/14.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/15.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/16.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/17.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/18.jpg"></div>
                            </div>
                            <div class="port-slider-2 owl-carousel">
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/19.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/20.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/21.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/22.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/23.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/24.jpg"></div>
                            </div>
                            <div class="port-slider-3 owl-carousel">
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/01.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/02.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/03.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/04.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/05.jpg"></div>
                                <div class="item"><img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portfolio/06.jpg"></div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="port_icon_sec">
                                <div class="col-sm-3">
                                    <div class="port_icon_box">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/portsec-icon1.webp">
                                        <p>Live Chat Support</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="port_icon_box">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/portsec-icon2.webp">
                                        <p>100% Customer Approval</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="port_icon_box">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/portsec-icon3.webp">
                                        <p> Next Day Product Collection</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="port_icon_box">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/portsec-icon4.webp">
                                        <p>Product Hunt
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i> 5/5
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cta-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 p0">
                            <div class="col-sm-7">
                                <div class="cta-txt">
                                    <h2>Get professional logo designs at lowest prices</h2>
                                    <p>Start with a quick <span>request</span> form and discuss your project with our logo
                                        consultants
                                    </p>
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="cta-bnt">
                                    <a href="javascript:;" class="gt-strt-btn viewMain" data-service="5640" name="for $19">Get
                                        Started</a>
                                    <a href="javascript:;"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                        class="lv-cht-btn" data-cf-modified-e1500570fb71f59d71235d94->Live Chat</a>
                                    <a href="tel:(332) 282-5383" class="phone">(332) 282-5383</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pricing-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="hd-txt">
                                <h2>Our Most Affordable Custom Packages</h2>
                                <p>We have got you covered with the most affordable pricing plans that are market competitive,
                                    with free features that you will love for your business
                                </p>
                            </div>
                        </div>
                        <div class=" pricing-mdiv pricing_slider11 owl-carousel11">
                            <div class="col-sm-4">
                                <div class="pricing-box">
                                    <h2>Basic Logo <br>Package</h2>
                                    <div class="price-txt">
                                        <h2><sup>$</sup>19</h2>
                                    </div>
                                    <div class="price-list">
                                        <ul>
                                            <li> <i class="fa fa-check"></i>2 Original Logo Concepts</li>
                                            <li> <i class="fa fa-check"></i>1 Dedicated Logo Designer</li>
                                            <li> <i class="fa fa-check"></i>4 Revisions</li>
                                            <li> <i class="fa fa-check"></i>With Grey Scale Format</li>
                                            <li> <i class="fa fa-check"></i>Free Icon Design</li>
                                            <li> <i class="fa fa-check"></i>Formats: JPEG Only</li>
                                            <li> <i class="fa fa-check"></i>24 - 48 Hours Turn Around Time</li>
                                            <li> <i class="fa fa-check"></i>100% Satisfaction</li>
                                            <li> <i class="fa fa-check"></i>100% Ownership Rights</li>
                                            <li> <i class="fa fa-check"></i>Money Back Guarantee</li>
                                            <li> <i class="fa fa-check"></i>Dedicated Account Manager</li>
                                        </ul>
                                        <div class="price-order-btn">
        
                                            <a href="javascript:;" data-formtype="Basic Logo $19"
                                                class="pr-btn-order viewMain pkg-btn">Order Now</a>
                                        </div>
                                        <div class="action-main-pkg actions row">
                                            <div class="col-md-6 col-xs-6">
                                                <a href="tel:(332) 282-5383" class="action-no clearfix ali" tabindex="-1">
                                                    <span><small>Share your idea?</small>(332) 282-5383</span></a>
                                            </div>
                                            <div class="col-md-6 col-xs-6">
                                                <a href="javascript:$zopim.livechat.window.show();"
                                                    onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                                    target="_self" class="action-chat clearfix ali" tabindex="-1"
                                                    data-cf-modified-e1500570fb71f59d71235d94->
                                                    <span><small>Want to discuss?</small> Live Chat Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="pricing-box">
                                    <h2>Startup Logo Package</h2>
                                    <div class="price-txt">
                                        <h2><sup>$</sup>79</h2>
                                    </div>
                                    <div class="price-list">
                                        <ul>
                                            <li> <i class="fa fa-check"></i>9 Custom Logo Design Concepts</li>
                                            <li> <i class="fa fa-check"></i>3 Dedicated Designers</li>
                                            <li> <i class="fa fa-check"></i>UNLIMITED Revisions</li>
                                            <li> <i class="fa fa-check"></i>Vector Files Format</li>
                                            <li> <i class="fa fa-check"></i>Satisfaction Guaranteed</li>
                                            <li> <i class="fa fa-check"></i>Unique Design Guaranteed</li>
                                            <li> <i class="fa fa-check"></i>Money Back Guarantee*</li>
                                        </ul>
                                        <div class="price-order-btn">
        
                                            <a href="javascript:;" data-formtype="Startup Logo $79"
                                                class="pr-btn-order viewMain pkg-btn">Order Now</a>
                                        </div>
                                        <div class="action-main-pkg actions row">
                                            <div class="col-md-6 col-xs-6">
                                                <a href="tel:(332) 282-5383" class="action-no clearfix ali" tabindex="-1">
                                                    <span><small>Share your idea?</small>(332) 282-5383</span></a>
                                            </div>
                                            <div class="col-md-6 col-xs-6">
                                                <a href="javascript:$zopim.livechat.window.show();"
                                                    onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                                    target="_self" class="action-chat clearfix ali" tabindex="-1"
                                                    data-cf-modified-e1500570fb71f59d71235d94->
                                                    <span><small>Want to discuss?</small> Live Chat Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="pricing-box">
                                    <h2>Professional Logo Package</h2>
                                    <div class="price-txt">
                                        <h2><sup>$</sup>159</h2>
                                    </div>
                                    <div class="price-list">
                                        <ul>
                                            <li> <i class="fa fa-check"></i>12 Logo Design Concepts</li>
                                            <li> <i class="fa fa-check"></i>4 Dedicated Designers</li>
                                            <li> <i class="fa fa-check"></i>UNLIMITED Revisions</li>
                                            <li> <i class="fa fa-check"></i>FREE Business Card Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Letterhead Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Envelope Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Icon Design</li>
                                        </ul>
                                        <div class="price-order-btn">
        
                                            <a href="javascript:;" data-formtype="Professional Logo $159"
                                                class="pr-btn-order viewMain pkg-btn">Order Now</a>
                                        </div>
                                        <div class="action-main-pkg actions row">
                                            <div class="col-md-6 col-xs-6">
                                                <a href="tel:(332) 282-5383" class="action-no clearfix ali" tabindex="-1">
                                                    <span><small>Share your idea?</small>(332) 282-5383</span></a>
                                            </div>
                                            <div class="col-md-6 col-xs-6">
                                                <a href="javascript:$zopim.livechat.window.show();"
                                                    onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                                    target="_self" class="action-chat clearfix ali" tabindex="-1"
                                                    data-cf-modified-e1500570fb71f59d71235d94->
                                                    <span><small>Want to discuss?</small> Live Chat Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="pricing-box">
                                    <h6>RECOMMENDED</h6>
                                    <h2>Elite Logo<br> Package</h2>
                                    <div class="price-txt">
                                        <h2><sup>$</sup>229</h2>
                                    </div>
                                    <div class="price-list">
                                        <ul>
                                            <li> <i class="fa fa-check"></i>UNLIMITED Logo Design Concepts</li>
                                            <li> <i class="fa fa-check"></i>6 Creative Designers</li>
                                            <li> <i class="fa fa-check"></i>UNLIMITED Revisions</li>
                                            <li> <i class="fa fa-check"></i>FREE Business Card Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Letterhead Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Envelope Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Icon Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Banner Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Email Signature</li>
                                            <li> <i class="fa fa-check"></i>Vector Formats (AI, PSD, EPS, PNG, GIF, JPG, PDF)
                                            </li>
                                            <li> <i class="fa fa-check"></i>Ownership Rights</li>
                                            <li> <i class="fa fa-check"></i>Satisfaction Guaranteed</li>
                                            <li> <i class="fa fa-check"></i>Unique Design Guaranteed</li>
                                            <li> <i class="fa fa-check"></i>Money Back Guarantee*</li>
                                        </ul>
                                        <div class="price-order-btn">
        
                                            <a href="javascript:;" data-formtype="Elite Logo $229"
                                                class="pr-btn-order viewMain pkg-btn">Order Now</a>
                                        </div>
                                        <div class="action-main-pkg actions row">
                                            <div class="col-md-6 col-xs-6">
                                                <a href="tel:(332) 282-5383" class="action-no clearfix ali" tabindex="-1">
                                                    <span><small>Share your idea?</small>(332) 282-5383</span></a>
                                            </div>
                                            <div class="col-md-6 col-xs-6">
                                                <a href="javascript:$zopim.livechat.window.show();"
                                                    onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                                    target="_self" class="action-chat clearfix ali" tabindex="-1"
                                                    data-cf-modified-e1500570fb71f59d71235d94->
                                                    <span><small>Want to discuss?</small> Live Chat Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="pricing-box">
                                    <h6>BEST SELLER</h6>
                                    <h2>Business Logo Package</h2>
                                    <div class="price-txt">
                                        <h2><sup>$</sup>439</h2>
                                    </div>
                                    <div class="price-list">
                                        <ul>
                                            <li> <i class="fa fa-check"></i>5 Pages Website (Wordpress)</li>
                                            <li> <i class="fa fa-check"></i>UNLIMITED Logo Design Concepts</li>
                                            <li> <i class="fa fa-check"></i>Creative Design Team (8)</li>
                                            <li> <i class="fa fa-check"></i>Dedicated Development Team (2)</li>
                                            <li> <i class="fa fa-check"></i>UNLIMITED Revisions</li>
                                            <li> <i class="fa fa-check"></i>FREE Business Card Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Letterhead Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Envelope Design</li>
                                            <li> <i class="fa fa-check"></i>FREE MS Word Letterhead</li>
                                            <li> <i class="fa fa-check"></i>FREE Icon Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Banner Design</li>
                                            <li> <i class="fa fa-check"></i>FREE Email Signature</li>
                                            <li> <i class="fa fa-check"></i>Vector Formats (AI, PSD, EPS, PNG, GIF, JPG, PDF)
                                            </li>
                                            <li> <i class="fa fa-check"></i>Ownership Rights</li>
                                            <li> <i class="fa fa-check"></i>Satisfaction Guaranteed</li>
                                            <li> <i class="fa fa-check"></i>Unique Design Guaranteed</li>
                                            <li> <i class="fa fa-check"></i>Money Back Guarantee*</li>
                                        </ul>
                                        <div class="price-order-btn">
        
                                            <a href="javascript:;" data-formtype="Business Logo $439"
                                                class="pr-btn-order viewMain pkg-btn">Order Now</a>
                                        </div>
                                        <div class="action-main-pkg actions row">
                                            <div class="col-md-6 col-xs-6">
                                                <a href="tel:(332) 282-5383" class="action-no clearfix ali" tabindex="-1">
                                                    <span><small>Share your idea?</small>(332) 282-5383</span></a>
                                            </div>
                                            <div class="col-md-6 col-xs-6">
                                                <a href="javascript:$zopim.livechat.window.show();"
                                                    onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                                    target="_self" class="action-chat clearfix ali" tabindex="-1"
                                                    data-cf-modified-e1500570fb71f59d71235d94->
                                                    <span><small>Want to discuss?</small> Live Chat Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="pricing-box">
                                    <h2>Logo + Website Package</h2>
                                    <div class="price-txt">
                                        <h2><sup>$</sup>799</h2>
                                    </div>
                                    <div class="price-list">
                                        <ul>
                                            <li> <i class="fa fa-check"></i>Upto 5 Page Customized Website</li>
                                            <li> <i class="fa fa-check"></i>Complete Designing & Deployment</li>
                                            <li> <i class="fa fa-check"></i>Unlimited Logo Design Concepts</li>
                                            <li> <i class="fa fa-check"></i>Unlimited Revisions</li>
                                            <li> <i class="fa fa-check"></i>Complete Stationery Design</li>
                                            <li> <i class="fa fa-check"></i>Social Media Banner Design</li>
                                            <li> <i class="fa fa-check"></i>All File Formats including (AI & EPS)</li>
                                            <li> <i class="fa fa-check"></i>Free Favicon Design</li>
                                            <li> <i class="fa fa-check"></i>� Value Added Services</li>
                                            <li> <i class="fa fa-check"></i>Dedicated Account Manager</li>
                                            <li> <i class="fa fa-check"></i>Fastest Turnaround Time</li>
                                            <li> <i class="fa fa-check"></i>100% Ownership</li>
                                            <li> <i class="fa fa-check"></i>100% Unique Design Guarantee</li>
                                            <li> <i class="fa fa-check"></i>100% Satisfaction Guarantee</li>
                                            <li> <i class="fa fa-check"></i>100% Money Back Guarantee*</li>
                                        </ul>
                                        <div class="price-order-btn">
        
                                            <a href="javascript:;" data-formtype="Logo + Website Package $799"
                                                class="pr-btn-order viewMain pkg-btn">Order Now</a>
                                        </div>
                                        <div class="action-main-pkg actions row">
                                            <div class="col-md-6 col-xs-6">
                                                <a href="tel:(332) 282-5383" class="action-no clearfix ali" tabindex="-1">
                                                    <span><small>Share your idea?</small>(332) 282-5383</span></a>
                                            </div>
                                            <div class="col-md-6 col-xs-6">
                                                <a href="javascript:$zopim.livechat.window.show();"
                                                    onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                                    target="_self" class="action-chat clearfix ali" tabindex="-1"
                                                    data-cf-modified-e1500570fb71f59d71235d94->
                                                    <span><small>Want to discuss?</small> Live Chat Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-sm-offset-3">
                                <div class="pricing-box">
                                    <h2>Logo + Ecommerce Web Package</h2>
                                    <div class="price-txt">
                                        <h2><sup>$</sup>1499</h2>
                                    </div>
                                    <div class="price-list">
                                        <ul>
                                            <li> <i class="fa fa-check"></i>E-Commerce Website Design</li>
                                            <li> <i class="fa fa-check"></i>CMS (Wordpress/Woocommerce)</li>
                                            <li> <i class="fa fa-check"></i>Product Detail Page Design</li>
                                            <li> <i class="fa fa-check"></i>Unlimited Products & Categories</li>
                                            <li> <i class="fa fa-check"></i>Full Shopping Cart Integration</li>
                                            <li> <i class="fa fa-check"></i>Payment Gateway Integration</li>
                                            <li> <i class="fa fa-check"></i>Product Rating & Reviews</li>
                                            <li> <i class="fa fa-check"></i>Unlimited Logo Design Concepts</li>
                                            <li> <i class="fa fa-check"></i>Unlimited Revisions</li>
                                            <li> <i class="fa fa-check"></i>Complete Stationery Design</li>
                                            <li> <i class="fa fa-check"></i>Social Media Banner Design</li>
                                            <li> <i class="fa fa-check"></i>All File Formats including (AI & EPS)</li>
                                            <li> <i class="fa fa-check"></i>Free Favicon Design</li>
                                            <li> <i class="fa fa-check"></i>� Value Added Services</li>
                                            <li> <i class="fa fa-check"></i>Dedicated Account Manager</li>
                                            <li> <i class="fa fa-check"></i>Fastest Turnaround Time</li>
                                            <li> <i class="fa fa-check"></i>100% Ownership</li>
                                            <li> <i class="fa fa-check"></i>100% Unique Design Guarantee</li>
                                            <li> <i class="fa fa-check"></i>100% Satisfaction Guarantee</li>
                                            <li> <i class="fa fa-check"></i>100% Money Back Guarantee*</li>
                                        </ul>
                                        <div class="price-order-btn">
        
                                            <a href="javascript:;" data-formtype="Logo + Ecommerce Web Package $1499"
                                                class="pr-btn-order viewMain pkg-btn">Order Now</a>
                                        </div>
                                        <div class="action-main-pkg actions row">
                                            <div class="col-md-6 col-xs-6">
                                                <a href="tel:(332) 282-5383" class="action-no clearfix ali" tabindex="-1">
                                                    <span><small>Share your idea?</small>(332) 282-5383</span></a>
                                            </div>
                                            <div class="col-md-6 col-xs-6">
                                                <a href="javascript:$zopim.livechat.window.show();"
                                                    onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                                    target="_self" class="action-chat clearfix ali" tabindex="-1"
                                                    data-cf-modified-e1500570fb71f59d71235d94->
                                                    <span><small>Want to discuss?</small> Live Chat Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="combo-new-pack">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="hd-txt">
                                <h2>Spring Sale Promotional Package</h2>
                                <p>For companies that require professional design solutions.</p>
                            </div>
                        </div>
                        <div class="col-sm-12 p0">
                            <div class="col-sm-3">
                                <div class="logo-dsgn-pack">
                                    <h4>Logo Design</h4>
                                    <ul>
                                        <li>5 Custom Logo Design Concepts</li>
                                        <li>By 2 Designers</li>
                                        <li>Unlimited Revisions</li>
                                        <li>Icon Design</li>
                                        <li>File Formats (PSD, PDF, AI, JPEG, PNG)</li>
                                    </ul>
                                </div>
                                <div class="stat-dsgn-pack">
                                    <h4>Stationery</h4>
                                    <ul>
                                        <li>Business Card</li>
                                        <li>Letterhead</li>
                                        <li>Envelope</li>
                                        <li>Invoice</li>
                                    </ul>
                                </div>
                                <div class="social-dsgn-pack">
                                    <ul>
                                        <h4>Social Media</h4>
                                        <li>Facebook Page Design</li>
                                        <li>Twitter Page Design</li>
                                        <li>YouTube Page Design</li>
                                        <li>Google+ Page Design</li>
                                        <li>Instagram Page Design</li>
                                        <li>All Final File Formats</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-4 cmbo-pck-col4">
                                <div class="web-dsgn-pack">
                                    <h4>Website</h4>
                                    <ul>
                                        <li>Custom Made, Interactive, Dynamic &amp; High-End Design</li>
                                        <li>Custom Development</li>
                                        <li>5 Page Website </li>
                                        <li>On-Page Optimisation</li>
                                        <li>Mobile Responsive </li>
                                        <li>On-Page Optimisation </li>
                                        <li>Client Management System</li>
                                        <li>Stock Images</li>
                                        <li>Unlimited Revisions</li>
                                        <li>Special Effects</li>
                                        <li>Contact us Form</li>
                                        <li>Signup Area (For Newsletters, Offers etc.)</li>
                                        <li>Social Media + Blog Integrated </li>
                                        <li>1 Year: Free Domain + Cloud Web Hosting</li>
                                        <li>Live Feeds of Social Networks integration</li>
                                        <li>Free Google Friendly Sitemap</li>
                                        <li>Search Engine Submission</li>
                                        <li>Complete W3C Certified HTML</li>
                                        <li>Industry Specified Team of Expert Designers and Developers</li>
                                        <li>Complete Deployment</li>
                                        <li>Dedicated Accounts Manager</li>
                                    </ul>
                                    <p class="pck-img-st-pr">$750</p>
                                </div>
                                <div class="valadd-dsgn-pack">
                                    <h4>Value Added Services</h4>
                                    <ul>
                                        <li>All Final File Formats</li>
                                        <li>Dedicated Account Manager</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Unique Design Guarantee</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-5 cmbo-side-img-pc">
                                <div class="cmbo-side-img">
                                    <img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/cmbo-new-side-img.webp">
                                    <h4>Share your idea?<br><span>(332) 282-5383</span></h4>
                                </div>
                                <div class="btn-new-cmbo">
                                    <a href="javascript:;" data-service="5644" name="for $750"
                                        class="new-ord-cmb viewMain">Order Now</a>
                                    <a href="javascript::"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                        class="new-cht-cmb" data-cf-modified-e1500570fb71f59d71235d94->Live Chat</a>
                                </div>
                                <p>20% more OFF on Next Order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="types-logo">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="hd-txt">
                                <h2>What Type is Your Logo</h2>
                                <p>Our team of highly creative logo designers provide you with all types of innovative business
                                    logos that assist in generating sales and revenue.
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12 tab-mlogo-div">
                            <div class="tab-logos col-md-2">
                                <ul id="nav-tabs-wrapper" class="nav nav-tabs nav-tabs-horizontal">
                                    <li class="active ">
                                        <a href="#tab1" data-toggle="tab" aria-expanded="false"><img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/logo01.webp">
                                            Monogram Logos </a>
                                    </li>
                                    <li class>
                                        <a href="#tab2" data-toggle="tab" aria-expanded="false"><img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/logo02.webp">Wordmark
                                            Logos</a>
                                    </li>
                                    <li class="tb-txt-st">
                                        <a href="#tab3" data-toggle="tab" aria-expanded="false"><img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/logo03.webp">Pictorial
                                            Marks </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content col-md-8">
                                <div role="tabpanel" class="tab-pane fade in active" id="tab1">
                                    <div class="col-sm-12">
                                        <div class="logo-tab-img">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/tab-img-1.webp">
                                            <div class="logo-tab-img-box">
                                                <h3>Monogram Logos </h3>
                                                <p>Monogram logos or letter marks consist of just letters, usually brand
                                                    initials. Initials of a few famous businesses with rather lengthy names are
                                                    a good example. With 2 or 3 words to remember, many have turned to using
                                                    their initials for brand-identification purposes. So, it makes perfect sense
                                                    to use monograms�sometimes called letter-mark logos�to represent
                                                    organizations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="tab2">
                                    <div class="col-sm-12">
                                        <div class="logo-tab-img">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/tab-img-2.webp">
                                            <div class="logo-tab-img-box">
                                                <h3>Wordmark Logos</h3>
                                                <p>Like a letter mark, a wordmark or logotype is a font-based logo that focuses
                                                    on a business's name alone. Wordmark logos work really well when a company
                                                    has a distinct and succinct name. Google's logo is an excellent example of
                                                    this. The name itself is catchy and memorable, so the logo helps create
                                                    strong brand recognition when combined with impressionable typography.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="tab3">
                                    <div class="col-sm-12">
                                        <div class="logo-tab-img">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/tab-img-3.webp">
                                            <div class="logo-tab-img-box">
                                                <h3>Pictorial Marks </h3>
                                                <p>A pictorial mark (sometimes called a brand mark or logo symbol) is an icon�or
                                                    graphics-based logo. It's probably the image that comes to mind when you
                                                    think "logo": the iconic Apple logo, the Twitter bird, the Target bullseye.
                                                    Each of these companies' logos is emblematic, and each brand established
                                                    that the mark alone becomes instantly recognizable.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="tab4">
                                    <div class="col-sm-12">
                                        <div class="logo-tab-img">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/tab-img-4.webp">
                                            <div class="logo-tab-img-box">
                                                <h3>Abstract Logos</h3>
                                                <p>An abstract mark is a specific type of pictorial logo. Instead of being a
                                                    recognizable image�like an apple or a bird�it's an abstract geometric form
                                                    representing your business. A few famous examples include the BP starburst-y
                                                    logo, the Pepsi divided circle, and the stripy Adidas flower. Abstract marks
                                                    work really well like all logo symbols because they condense your brand into
                                                    a single image. However, instead of being restricted to a picture of
                                                    something recognizable, abstract logos allow you to create something truly
                                                    unique to represent your brand.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="tab5">
                                    <div class="col-sm-12">
                                        <div class="logo-tab-img">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/tab-img-5.webp">
                                            <div class="logo-tab-img-box">
                                                <h3>Mascot Logos</h3>
                                                <p>Mascot logos are logos that involve an illustrated character. Often colorful,
                                                    sometimes cartoonish, and almost always fun, a mascot is simply an
                                                    illustrated character representing your company. Think of them as the
                                                    ambassador for your business. Mascots are great for companies that want to
                                                    create a wholesome atmosphere by appealing to families and children.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="tab6">
                                    <div class="col-sm-12">
                                        <div class="logo-tab-img">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/tab-img-6.webp">
                                            <div class="logo-tab-img-box">
                                                <h3>Combination Logos</h3>
                                                <p>A combination mark is a logo comprised of a combined wordmark or lettermark
                                                    and a pictorial mark, abstract mark, or mascot. The picture and text can be
                                                    laid out side-by-side, stacked on top of each other, or integrated together
                                                    to create an image. Some well-known combination mark logos include Doritos,
                                                    Burger King, and Lacoste.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-logos col-md-2">
                                <ul id="nav-tabs-wrapper" class="nav nav-tabs nav-tabs-horizontal">
                                    <li class>
                                        <a href="#tab4" data-toggle="tab" aria-expanded="false"><img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/logo04.webp">Abstract
                                            Logos</a>
                                    </li>
                                    <li class>
                                        <a href="#tab5" data-toggle="tab" aria-expanded="false"><img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/logo05.webp">Mascot
                                            Logos</a>
                                    </li>
                                    <li class>
                                        <a href="#tab6" data-toggle="tab" aria-expanded="false"><img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/tab/logo06.webp">Combination
                                            Logos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="port_icon_sec">
                            <div class="col-sm-3">
                                <div class="port_icon_box">
                                    <img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portsec-icon1.webp">
                                    <p>Live Chat Support</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="port_icon_box">
                                    <img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portsec-icon2.webp">
                                    <p>100% Customer Approval</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="port_icon_box">
                                    <img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portsec-icon3.webp">
                                    <p> Next Day Product Collection</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="port_icon_box">
                                    <img loading="lazy"
                                        src="https://www.logoverseinc.com/lp/logo-offer/images/portsec-icon4.webp">
                                    <p>Product Hunt
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i> 5/5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cta-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 p0">
                            <div class="col-sm-7">
                                <div class="cta-txt">
                                    <h2>Ready to discuss your professional logo design @ a low-cost price?</h2>
                                    <p>Get 2 unique mock up logos within 24 hours by consulting our experts</p>
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="cta-bnt">
                                    <a href="javascript:;" class="gt-strt-btn viewMain" data-service="5640" name="for $19">Get
                                        Started</a>
                                    <a href="javascript:;"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; setButtonURL();"
                                        class="lv-cht-btn" data-cf-modified-e1500570fb71f59d71235d94->Live Chat</a>
                                    <a href="tel:(332) 282-5383" class="phone">(332) 282-5383</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="process-sec">
                <div class="cotainer-fluid">
                    <div class="row">
                        <div class="col-sm-12 logo-tb-div">
                            <div class="col-sm-6 lft-pro-st">
                                <div class="hd-txt">
                                    <h2>Our Process</h2>
                                </div>
                                <div class="process-for">
                                    <div>
                                        <h3>Consultancy</h3>
                                        <p>We start with discovering your business. We learn everything about the company
                                            culture, your values & how you do business, and then instill that message in the
                                            deliverable.
                                        </p>
                                    </div>
                                    <div>
                                        <h3>Brain Storming</h3>
                                        <p>We study your project requirements, industry, competitors, and everything relevant.
                                            We brainstorm the raw ideas you have and refine them into a close-to-final-version
                                            form.
                                        </p>
                                    </div>
                                    <div>
                                        <h3>Initial Designs</h3>
                                        <p>Here we present the initial draft to you based on our findings and your brief. You
                                            can select any one from the proposed work. We make sure all your demands are met.
                                        </p>
                                    </div>
                                    <div>
                                        <h3>Customer Review</h3>
                                        <p>Considering a wide range of options to choose from, you can select the most preferred
                                            concept that you think compliments your business in all ways possible. We�ll then
                                            refine it further.
                                        </p>
                                    </div>
                                    <div>
                                        <h3>Final Delivery</h3>
                                        <p>Once the design is finalized, we ensure you get the deliverable in desired file
                                            formats. The process is set to be completed on time so that you can have your
                                            delivery within or before the deadline.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="process-nav">
                                    <div>
                                        <div class="process-icon-div pro-ico-1">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/process-icon-1.webp">
                                            <p>Consultancy</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="process-icon-div pro-ico-2">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/process-icon-2.webp">
                                            <p>Brain Storming</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="process-icon-div pro-ico-3">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/process-icon-3.webp">
                                            <p>Initial Designs</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="process-icon-div pro-ico-4">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/process-icon-4.webp">
                                            <p>Customer Review</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="process-icon-div pro-ico-5">
                                            <img loading="lazy"
                                                src="https://www.logoverseinc.com/lp/logo-offer/images/process-icon-5.webp">
                                            <p>Final Delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="testimonial-sec">
                <div class="cotainer-fluid">
                    <div class="row">
                        <div class="container">
                            <div class="col-sm-12">
                                <div class="hd-txt">
                                    <h2>Our Customers Love Us!</h2>
                                    <p>Our team knows how to keep our customers happy. We show them our affection by delivering
                                        quality services and they express their love in the form of positive reviews. Have a
                                        look!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="testi-slider-div">
                                <div class="testi-slider">
                                    <div>
                                        <div class="testi-div">
                                            <p>Logo Verse Inc is helping startups like ours start up the right way. They are
                                                highly capable of designing amazing business logo designs for different
                                                industries.
                                            </p>
                                            <p><strong>Paul Henrie</strong></p>
                                            <div class="testi-icon">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/testi-icon-1.webp">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="testi-div">
                                            <p>Logo Verse Inc�s business logo design services are really impressive and
                                                affordable for startups that are slowly emerging and evolving into successful
                                                companies.
                                            </p>
                                            <p><strong>Rachel John</strong></p>
                                            <div class="testi-icon">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/testi-icon-2.webp">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="testi-div">
                                            <p>For expanding startups like ours, we were pleased to avail the services of Logo
                                                Verse Inc for our business logo design. They have an excellent and hardworking
                                                team that never fails to deliver.
                                            </p>
                                            <p><strong>Leena Mike Juan </strong></p>
                                            <div class="testi-icon">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/testi-icon-3.webp">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="testi-div">
                                            <p>Very patient and helpful. Creating logos with all the bells and whistles to help
                                                establish my company. Mr. Brown was amazing and more than helpful.
                                            </p>
                                            <p><strong>Shaikh Amal</strong></p>
                                            <div class="testi-icon">
                                                <img loading="lazy"
                                                    src="https://www.logoverseinc.com/lp/logo-offer/images/testi-icon-4.webp">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sec_partners">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="hd-txt">
                                <h2>Our Clients</h2>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="partners_inner">
                                <div class="col-md-2">
                                    <div class="partners_boxes">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/partners_icon_1.webp">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="partners_boxes">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/partners_icon_2.webp">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="partners_boxes">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/partners_icon_3.webp">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="partners_boxes">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/partners_icon_4.webp">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="partners_boxes">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/partners_icon_5.webp">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="partners_boxes">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/partners_icon_6.webp">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="partners_boxes">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/partners_icon_7.webp">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="partners_boxes">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/partners_icon_8.webp">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="partners_boxes">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/partners_icon_9.webp">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="partners_boxes">
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/partners_icon_10.webp">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 p0">
                            <div class="col-sm-6">
                                <div class="hd-txt">
                                    <h2>Got some ideas for your project?</h2>
                                    <p>Drop us a line, we'll be glad to hear from you</p>
                                </div>
                                <div class="form-sec">
                                    <form class="clearfix" action="mail" method="POST">
                                        <div class="col-sm-12">
                                            <div class="field">
                                                <input type="text" name="name" maxlength="60" value placeholder="Name"
                                                    class="required alphanumeric iecn" required>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="field">
                                                <input type="text" maxlength="25" minlength="7" name="phone" value
                                                    placeholder="Phone" class="required number" required>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="field phone">
                                                <input type="text" name="email" maxlength="email" value placeholder="Email"
                                                    class="required email " required>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="field">
                                                <textarea name="msg" placeholder="Message" class="required iemsg"
                                                    rows="4"></textarea>
                                            </div>
                                        </div>
                                        <div class="clearfix fieldwrap text-center">
                                            <input type="submit" name="cta" class="btn-validate cntct-btn" value="Submit">
                                            <input type="hidden" class="lead_area_popup leadprice" name="lead_area" value />
                                            <input type="hidden" id="lead_org_price" name="lead_org_price" value />
                                            <input type="hidden" name="send" value>
                                            <input type="hidden" name="lb_source" value>
                                            <input type="hidden" name="lb_source_cat" value>
                                            <input type="hidden" name="lb_source_nam" value>
                                            <input type="hidden" name="lb_source_ema" value>
                                            <input type="hidden" name="lb_source_con" value>
                                            <input type="hidden" name="lb_source_pho" value>
                                            <input type="hidden" name="lb_source_off" value>
                                            <input type="hidden" name="fullpageurl" value>
                                            <input type="hidden" name="pageurl"
                                                value="/logo-offer">
                                            <input type="hidden" name="ip2loc_ip" value>
                                            <input type="hidden" name="ip2loc_isp" value>
                                            <input type="hidden" name="ip2loc_org" value>
                                            <input type="hidden" name="ip2loc_country" value>
                                            <input type="hidden" name="ip2loc_region" value>
                                            <input type="hidden" name="ip2loc_city" value>
                                            <input type="hidden" name="service_id" value class>
                                            <input type="hidden" name="loc" value>
                                            <input type="hidden" name="postal" value>
                                            <input type="hidden" name="timezone" value>
                                            <input type="hidden" name="service_id" value class>
                                            <input type="hidden" name="isp" value>
                                            <input type="hidden" name="org" value>
                                            <input type="hidden" name="country" value>
                                            <input type="hidden" name="region" value>
                                            <input type="hidden" name="city" value>
                                            <input type="hidden" name="formtype" value="footer-form">
                                        </div>
                                        <div class="customalert"
                                            style="background: rgb(255, 255, 255); color: red; text-align: center; font-size: 16px; width: 100%; margin: 10px 0px 0px; padding: 10px; float: left; display: none">
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-sm-offset-1 col-sm-5 cntct-dt-div">
                                <div class="hd-txt">
                                    <h2>&nbsp;</h2>
                                    <p>&nbsp;</p>
                                </div>
                                <div class="form-r-div">
                                    <div class="cntct-dt">
                                        <p>Call us at</p>
                                        <a href="tel:(332) 282-5383">(332) 282-5383</a>
                                    </div>
                                    <div class="cntct-dt">
                                        <p>By email</p>
                                        <a href="javascript:;"><span
                                                class="__cf_email__" data-cfemail><span class="__cf_email__"
                                                    data-cfemail="493a28252c3a0925262e263f2c3b3a2c20272a672a2624">[email&#160;protected]</span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 p0">
                            <div class="col-sm-4">
                                <div class="ftr-ul">
                                    <li><a href="javascript:;">Terms & Conditions</a></li>
                                    <li><a href="javascript:;">Privacy Policy</a></li>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="ftr-ul">
                                    <div class="col-sm-6">
                                        <p>We Accept Following Global Payments</p>
                                        <img loading="lazy"
                                            src="https://www.logoverseinc.com/lp/logo-offer/images/payment-img.webp">
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="social_media_sec">
                                            <div class="social_icons">
                                                <p>Social Media</p>
                                                <ul>
                                                    <li>
                                                        <a target="blank" href="javascript:;"
                                                            target="_blank"> <i class="fa fa-facebook" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 Copyright-txt">
                            <p>
                                Copyright � Logo Verse Inc LTD�. All Rights Reserved
                            </p>
                        </div>
                        <div class="col-sm-12 disclaim-txt">
                            <p> <span>Disclaimer:</span> The logo, name, and graphics of Logo Verse Inc and its products and
                                services are Logo Verse Inc's trademarks. All other company names, brand names, trademarks, and
                                logos mentioned on this website are the property of their respective owners. They do not
                                constitute or imply endorsement, sponsorship, or recommendation thereof by Logo Verse Inc and do
                                not constitute or imply endorsement, sponsorship, or advice of Branded Web-Studios by the
                                respective trademark owner.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div style="display: inline-block;" class="balti_popup" id="balti_popup">
                    <h2>We are here to help!</h2>
                    <p>Sign up Now To Avail 50% Discount on Your Logo Design</p>
                    <form action="mail" method="post" class="validate-balti_popup">
                        <div class="row">
                            <div class="col-md-12">
                                <ul>
                                    <li>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                        <input type="text" class="required" placeholder="Full Name *" name="n"
                                            required="required">
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 pd-right-0">
                                <ul>
                                    <li>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <input type="email" class="required email" placeholder="Email Address *" name="e"
                                            required="required">
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul>
                                    <li>
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <input type="number" class="required number" minlength="10" placeholder="Phone No. *"
                                            name="p" required="required">
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-12">
                                <ul>
                                    <li>
                                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                        <textarea name="m" class="required" required="required"
                                            placeholder="To help us understand better enter a brief description of your project."></textarea>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-12">
                                <ul>
                                    <li>
                                        <input type="submit" name="cta" value="Submit">
                                        <input type="hidden" name="pageurl" value="/logo-offer">
                                        <input type="hidden" name="ip2loc_ip" value>
                                        <input type="hidden" name="ip2loc_isp" value>
                                        <input type="hidden" name="ip2loc_org" value>
                                        <input type="hidden" name="ip2loc_country" value>
                                        <input type="hidden" name="ip2loc_region" value>
                                        <input type="hidden" name="ip2loc_city" value>
                                        <input type="hidden" name="Form_name" value>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                    <button data-fancybox-close class="fancybox-close-small close"></button>
                </div>
            </div></div>`}} />
            <Script src="/logo-offer-lp/assets/jquery-1.10.2.min.js" id="script-1"></Script>
            <Script src="/logo-offer-lp/assets/jquery.simple.timer.js" id="script-2"></Script>
            <Script src="/logo-offer-lp/assets/bootstrap.min.js" id="script-3"></Script>
            <Script src="/logo-offer-lp/assets/jquery-ui.js" id="script-4"></Script>
            <Script src="/logo-offer-lp/assets/swiper-bundle.min.js" id="script-5"></Script>
            <Script src="/logo-offer-lp/assets/wow.min.js" id="script-6"></Script>
            <Script src="/logo-offer-lp/assets/fancybox.js" id="script-7"></Script>
            <Script src="/logo-offer-lp/assets/slick.js" id="script-8"></Script>
            <Script src="/logo-offer-lp/assets/owl.carousel.min.js" id="script-9"></Script>
            <Script src="/logo-offer-lp/assets/horwheel.js" id="script-10"></Script>
            <Script src="/logo-offer-lp/assets/TweenMax.min.js" id="script-11"></Script>
            <Script src="/logo-offer-lp/assets/paddle.js" id="script-12"></Script>
            <Script src="/logo-offer-lp/assets/ScrollMagic.min.js" id="script-13"></Script>
            <Script src="/logo-offer-lp/assets/animation.gsap.js" id="script-14"></Script>
            <Script src="/logo-offer-lp/assets/ScrollToPlugin.min.js" id="script-15"></Script>
            <Script src="/logo-offer-lp/assets/debug.addIndicators.min.js" id="script-16"></Script>
            <Script src="/logo-offer-lp/assets/lazyload.min.js" id="script-17"></Script>
            <Script src="/logo-offer-lp/assets/custom-slider.min.js" id="script-18"></Script>
            <Script src="/logo-offer-lp/assets/custom.js" id="script-19"></Script>
            <Script id="script-20">
                {`setTimeout(() => {
    window.$zopim || function (a, d) {
        var b = $zopim = function (a) {
            b._.push(a)
        },
        c = b.s = a.createElement(d);
        a = a.getElementsByTagName(d)[0];
        b.set = function (a) {
            b.set._.push(a)
        };
        b._ = [];
        b.set._ = [];
        c.async = !0;
        c.setAttribute("charset", "utf-8");
        c.src = "";
        b.t = +new Date;
        c.type = "text/javascript";
        a.parentNode.insertBefore(c, a)
    }
    (document, "script");

    $zopim(function () {
        function a(a) {
            1 <= a && $zopim.livechat.window.show()
        }
        $zopim.livechat.setOnUnreadMsgs(a)
    });

    function setButtonURL() {
        $zopim.livechat.window.show()
    }

    function toggleChat() {
        $zopim.livechat.window.show()
    };

    $(".close").click(function () {
        $(".modal").hide()
    });
    $(".popup-btn").click(function () {
        $(".modal").show()
    });
    $(".logoCreateBtn").click(function () {
        $(".modal").show()
    });
    $(".dispopup").click(function () {
        $(".modal").show()
    });
    $(".viewMain").click(function () {
        $(".modal").show()
    });
    $(".viewMain").click(function () {
        $(".modal").show()
    });
    $(".btn-yellow.mobileCall").click(function () {
        $(".modal").show()
    });

    setTimeout(function () {
        $(".modal").show()
    }, 2000);

    window._mfq = window._mfq || [];
    (function () {
        var mf = document.createElement("script");
        mf.type = "text/javascript"; 
        mf.defer = true;
        mf.src = "//cdn.mouseflow.com/projects/de092dbe-a264-41cd-8c10-55524ee29372.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
    })();

    $('.pkg-btn').click(function () {
        var pkg_name = $(this).parent().find('.pkg-btn').attr('data-formtype');
        $('#balti_popup input[name="pkg_name"]').val(pkg_name);
    });
}, 5000);`}
            </Script>
        </>
    )
}