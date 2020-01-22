<template>
    <header class="header-global">
        <nav id="navbar-main" class="navbar  fixed-top  navbar-main navbar-expand-lg navbar-white bg-white">
            <div class="container">
                <a class="navbar-brand mr-lg-5" href="https://saas.laravel-bap.com">
                    <img src="https://saas.laravel-bap.com/storage/settings/September2018/Mx1DLC7xoK61GHPdvlgz.png">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbar_global">
                    <div class="navbar-collapse-header">
                        <div class="row">
                            <div class="col-6 collapse-brand">
                                <a href="https://saas.laravel-bap.com">
                                    <img src="https://saas.laravel-bap.com/storage/settings/September2018/Mx1DLC7xoK61GHPdvlgz.png">
                                </a>
                            </div>
                            <div class="col-6 collapse-close">
                                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                        <li class="nav-item">
                            <a href="https://saas.laravel-bap.com/info/features" class="nav-link" role="button">
                                <i class="ni ni-ui-04 d-lg-none"></i>
                                <span class="nav-link-inner--text font-weight-bold">Features</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="https://saas.laravel-bap.com/info/pricing" class="nav-link" role="button">
                                <i class="ni ni-ui-04 d-lg-none"></i>
                                <span class="nav-link-inner--text font-weight-bold">Pricing</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="https://saas.laravel-bap.com/blog" class="nav-link" role="button">
                                <i class="ni ni-ui-04 d-lg-none"></i>
                                <span class="nav-link-inner--text font-weight-bold">Blog</span>
                            </a>
                        </li>

                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                                <i class="ni ni-collection d-lg-none"></i>
                                <span class="nav-link-inner--text font-weight-bold">Explore</span>
                            </a>
                            <div class="dropdown-menu">
                                <span class="dropdown-item dropdown-item-header">Resources</span>
                                <a href="https://saas.laravel-bap.com/info/case-studies" class="dropdown-item">Case Studies</a>
                                <a href="https://saas.laravel-bap.com/info/faq" class="dropdown-item">FAQ</a>

                                <span class="dropdown-item dropdown-item-header">Company</span>
                                <a href="https://saas.laravel-bap.com/info/about-us" class="dropdown-item">About Us</a>
                                <a href="https://saas.laravel-bap.com/info/testimonials" class="dropdown-item">Testimonials</a>
                                <a href="https://saas.laravel-bap.com/info/careers" class="dropdown-item">Careers</a>
                                <a href="https://saas.laravel-bap.com/info/contact" class="dropdown-item">Contact Us</a>
                            </div>
                        </li>
                    </ul>
                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                        <li class="nav-item">
                            <a title="" class="nav-link nav-link-icon" href="https://www.facebook.com/laravelbap/" target="_blank" data-toggle="tooltip" data-original-title="Like us on Facebook">
                                <i class="fa fa-facebook-square"></i>
                                <span class="nav-link-inner--text d-lg-none">Facebook</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a title="" class="nav-link nav-link-icon" href="https://www.instagram.com/naruto/" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Instagram">
                                <i class="fa fa-instagram"></i>
                                <span class="nav-link-inner--text d-lg-none">Instagram</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a title="" class="nav-link nav-link-icon" href="https://twitter.com/laravel_bap" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Twitter">
                                <i class="fa fa-twitter-square"></i>
                                <span class="nav-link-inner--text d-lg-none">Twitter</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a title="" class="nav-link nav-link-icon" href="https://github.com/laravelbap" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Twitter">
                                <i class="fa fa-github"></i>
                                <span class="nav-link-inner--text d-lg-none">Github</span>
                            </a>
                        </li>

                        <li class="nav-item  d-lg-block ml-lg-4">


                            <a title="Login" href="https://multicrm.laravel-bap.com/login" class="btn btn-link btn-sm">
                                <span class="nav-link-inner--text">Login</span>
                            </a>
                            <a title="Sign Up" href="https://multicrm.laravel-bap.com/register" class="btn btn-md btn-success">
                                <span class="nav-link-inner--text">Sign Up</span>
                            </a>
                        </li>



                        <li class="nav-item dropdown">

                            <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                                <span class="nav-link-inner--text font-weight-bold"><img title="en" src="https://saas.laravel-bap.com/flags/png/en.png"> </span>
                            </a>
                            <div class="dropdown-menu">

                                <a class="dropdown-item" href="https://saas.laravel-bap.com/lang/en">
                                    <img title="English" src="https://saas.laravel-bap.com/flags/png/en.png">
                                    English
                                </a>


                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style>
    .header-img{
        width: 15rem;
    }
    .header-search{
        margin-top: auto;
    }
</style>

<script>
    export default {
        data(){
            return {
                search: String
            }
        }
    }
</script>
