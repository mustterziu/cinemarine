<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6 col-sm-12 col-md-12">
                    <h3 class="text-primary font-weight-medium mb-2">MultiCRM - All in One.</h3>
                    <h4 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a title="" target="_blank" href="https://twitter.com/laravel_bap" class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip" data-original-title="Follow us on Twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a title="" target="_blank" href="https://www.facebook.com/laravelbap/" class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip" data-original-title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a title="" target="_blank" href="https://www.instagram.com/naruto/" class="btn btn-neutral btn-icon-only btn-instagram btn-lg btn-round" data-toggle="tooltip" data-original-title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a title="" target="_blank" href="https://github.com/laravelbap" class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip" data-original-title="Star us on Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-lg-5 col-sm-12 col-md-12">
                    <div class="copyright font-weight-bold">
                        © 2020
                        <a href="https://laravel-bap.com" target="_blank">Laravel BAP</a>

                        |

                        <a target="_blank" href="https://www.freepik.com">Vectors by Freepik</a>
                    </div>
                </div>
                <div class="col-lg-7 col-sm-12 col-md-12">
                    <ul class="nav nav-footer font-weight-bold justify-content-end">
                        <li class="nav-item">
                            <a href="https://saas.laravel-bap.com/info/about-us" class="nav-link">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://saas.laravel-bap.com/info/terms" class="nav-link">Terms of Service</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://saas.laravel-bap.com/info/policy" class="nav-link">Privacy Policy</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://saas.laravel-bap.com/info/pricing" class="nav-link">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://saas.laravel-bap.com/info/contact" class="nav-link">Contact Us</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row row-grid text-center mt-5">
                <div class="col-lg-12">

                    <ul class="list-inline payments">
                        <li>
                            <i class="pw pw-stripe"></i>
                        </li>
                        <li>
                            <i class="pw pw-paypal-new"></i>
                        </li>
                        <li>
                            <i class="pw pw-visa"></i>
                        </li>
                        <li>
                            <i class="pw pw-mastercard"></i>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>
    .footer-img{
        width: 15rem;
    }
</style>
