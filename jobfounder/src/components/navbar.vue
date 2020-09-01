<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="shadow-sm">
        <b-container>
            <b-navbar-brand href="../">
                <!-- <b>JOB</b>FOUNDER -->
                <img src="https://i.imgur.com/ygDv1Ap.png" style="width: 2em;" />
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/"><i class="far fa-home-lg-alt size-lg this-is-icon"></i></b-nav-item>
                    <b-nav-item href="/explore"><i class="far fa-search size-lg this-is-icon"></i></b-nav-item>
                    <b-nav-item href="/dashboard"><i class="far fa-newspaper size-lg this-is-icon"></i></b-nav-item>
                    <b-nav-item href="/profile"><i class="far fa-user size-lg this-is-icon"></i></b-nav-item>
                    <b-nav-item href="/logout"><i class="far fa-sign-out-alt size-lg this-is-icon"></i></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
  </div>
</template>

<style>
.navbar-brand{
    font-size: 2rem;
}
.size-lg {
    padding: .25em;
    font-size: 2rem;
}
.this-is-icon:hover{
    padding: .25em;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.24);
    color: rgb(39, 39, 39);
}
</style>
