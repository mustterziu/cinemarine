<template>
    <div class="modal fade" id="exampleModalSignUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalSignTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-body p-0">

                        <div class="card-body px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                <small>Regjistrohu!</small>
                            </div>
                            <form role="form">
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">   <font-awesome-icon :icon="['fa', 'user']" /></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Emri i perdoruesit" type="username">
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">   <font-awesome-icon :icon="['fa', 'envelope']" /></span>
                                        </div>
                                        <input class="form-control" placeholder="Email" type="email">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><font-awesome-icon :icon="['fa', 'key']" /></span>
                                        </div>
                                        <input class="form-control" placeholder="Password" type="password">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><font-awesome-icon :icon="['fa', 'key']" /></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Confirm Password" type="password">
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary my-4">Konfirmo</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignUpModal"
    }
</script>

<style scoped>

</style>
