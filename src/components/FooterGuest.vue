<template>
  <b-navbar class="navBarGuastFooter" toggleable="lg" type="dark" >
    <b-container>
      <b-nav-text class="navBarGuastFooter_text">
        <span>for additional information</span>
        please contact ngsuresupport@nuprobe.com
      </b-nav-text>
    </b-container>
  </b-navbar>
</template>
<style lang="scss" scoped>
.navBarGuastFooter{
  background-color: #050E48;
  height: 65px;
  &_text{
    font-size: 14px;
    margin-right: 22px;
    font-family:  'OpenSans-Regular' , sans-serif;
  }
}
.navBarGuastFooter_text span {
  text-transform: uppercase;
  font-size: 12px;
}
.navbar-dark .navbar-text {
  color: #fff;
}
</style>