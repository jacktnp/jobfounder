<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="mb-5" style="box-shadow: 0px 0px 7px rgba(0,0,0,0.25);">
      <b-navbar-brand href="#">JobFounder @ITKMITL</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
        <b-navbar-nav>
          <!-- <router-link to="../" :class="[currentPage.includes('home') ? activeClass : '', 'nav-link']">งานทั้งหมด</router-link>
          <router-link to="../request" :class="[currentPage.includes('request') ? activeClass : '', 'nav-link']">รับสมัครงาน</router-link> -->
          <b-nav-item href="../" active>งานทั้งหมด</b-nav-item>
          <b-nav-item href="../request">รับสมัครงาน</b-nav-item>
          <b-nav-item href="../adminpanel">ผู้ดูแลระบบ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
