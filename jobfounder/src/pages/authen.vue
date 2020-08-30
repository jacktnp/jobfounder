<template>
    <b-container style="height: 100vh;">
        <b-row style="height: 100vh;" class="justify-content-center align-items-center">
            <b-col md="6">
                <p>Welcome to</p>
                <h1><span class="font-weight-bold">JOB</span><span class="font-weight-light">FOUNDER</span></h1>
            </b-col>
            <b-col md="6">
                <div class="container bg-white shadow p-5" style="max-width: 28em;border-radius: 3em;">
                    <div>
                        <b-tabs content-class="mt-3" active-nav-item-class="tabselected">
                            <b-tab title="Sign in" active>
                                <signin></signin>
                            </b-tab>
                            <b-tab title="Sign up">
                                <signup></signup>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import signin from '@/components/signin'
import signup from '@/components/signup'

export default {
    components:{
        signin, signup
    }
}
</script>

<style>
.tabselected{
    border-bottom: 3px solid #007ECE !important;
    background: transparent;
    color: #666;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
    background: transparent;
    border: 0px;
    border-color: transparent;
}
.nav-item{
    font-size: 1.25em;
    color: #999;
}
</style>