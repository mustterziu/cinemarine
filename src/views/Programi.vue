<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="hane-tab" data-toggle="tab" href="#hane" role="tab" aria-controls="home" aria-selected="true">E Hane</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="marte-tab" data-toggle="tab" href="#marte" role="tab" aria-controls="marte" aria-selected="false">E Marte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="merkure-tab" data-toggle="tab" href="#merkure" role="tab" aria-controls="marte" aria-selected="false">E Merkure</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="ejte-tab" data-toggle="tab" href="#ejte" role="tab" aria-controls="ejte" aria-selected="false">E Ejte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="premte-tab" data-toggle="tab" href="#premte" role="tab" aria-controls="premte" aria-selected="false">E Premte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="shtune-tab" data-toggle="tab" href="#shtune" role="tab" aria-controls="shtune" aria-selected="false">E Shtune</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="dille-tab" data-toggle="tab" href="#dille" role="tab" aria-controls="dille" aria-selected="false">E Diele</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="hane" role="tabpanel" aria-labelledby="hane-tab">ee hane</div>
                    <div class="tab-pane fade" id="marte" role="tabpanel" aria-labelledby="marte-tab">ee marte</div>
                    <div class="tab-pane fade" id="merkure" role="tabpanel" aria-labelledby="merkure-tab">ee merkure</div>
                    <div class="tab-pane fade" id="ejte" role="tabpanel" aria-labelledby="ejte-tab">ee asd</div>
                    <div class="tab-pane fade" id="premte" role="tabpanel" aria-labelledby="premte-tab">eefrodau asd</div>
                    <div class="tab-pane fade" id="shtune" role="tabpanel" aria-labelledby="shtune-tab">ee aSATURdayyysd</div>
                    <div class="tab-pane fade" id="dille" role="tabpanel" aria-labelledby="dille-tab">ee DILLE</div>
                </div>
            </div>
            <div class="col-md-4">
                sidebar
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Programi"

    }
</script>

<style scoped>
    .container {
        margin-top: 100px;
    }

</style>
