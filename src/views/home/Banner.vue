<template>
    <div id="carouselExampleControls" class="carousel slide mt-3" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 img-banner" src="https://www.bing.com/th?id=OIP.ghpuhDKX_09F2nRrRcxQOwHaDF&pid=Api&rs=1" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Book now</h5>
                    <p>reserve</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 img-banner" src="https://www.nti-audio.com/portals/0/pics/en/Teaser-Cinema-1200-500.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Book now</h5>
                    <p>reserve</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 img-banner" src="http://images.says.com/uploads/story_source/source_image/572316/e015.jpg" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Book now</h5>
                    <p>reserve</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
    .img-banner{
        height: 300px;
    }

</style>
