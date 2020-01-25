<template>
    <header class="header-global">
        <nav id="navbar-main" class="navbar  fixed-top  navbar-main navbar-expand-lg navbar-white bg-white">
            <div class="container">
                <router-link to="/#" class="navbar-brand mr-lg-5">
                    <img src="img/logo.png">
                </router-link>
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
                            <router-link to="/#" class="nav-link" role="button">
                                <i class="ni ni-ui-04 d-lg-none"></i>
                                <span class="nav-link-inner--text font-weight-bold">Kryefaqja</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/programi" class="nav-link" role="button">
                                <i class="ni ni-ui-04 d-lg-none"></i>
                                <span class="nav-link-inner--text font-weight-bold">Programi</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/rrethnesh" class="nav-link" role="button">
                                <i class="ni ni-ui-04 d-lg-none"></i>
                                <span class="nav-link-inner--text font-weight-bold">Rreth Nesh</span>
                            </router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                        <li class="nav-item">
                            <a title="" class="nav-link nav-link-icon"  target="_blank" data-toggle="tooltip" data-original-title="Follow us on Instagram">
                                <font-awesome-icon icon="user-secret" />
                                <span class="nav-link-inner--text d-lg-none">Instagram</span>
                            </a>
                        </li>

                        <li class="nav-item  d-lg-block ml-lg-4">


                            <a title="Login" class="btn btn-link btn-sm">
                                <span class="nav-link-inner--text">Login</span>
                            </a>
                            <a title="Sign Up" class="btn btn-md btn-success">
                                <span class="nav-link-inner--text">Sign Up</span>
                            </a>
                        </li>



                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style>

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
