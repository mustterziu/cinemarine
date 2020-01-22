<template>
    <div>
        <div class="row col-md-12">
            <div class="col-md-4">
                <img class="header-img" src="\img\netflix.png" alt="">
            </div>
            <div class="col-md-3 d-flex offset-5 header-search">
                <button type="button" class="btn mb-2">
                    <i class="fas fa-search"></i>
                </button>
                <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                       aria-label="Search">

            </div>
        </div>
    </div>
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
