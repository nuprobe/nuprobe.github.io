<template>
  <div class="wrapper">
    <HeaderGuast/>
      <b-container>
        <router-view/>
      </b-container>
    <FooterGuest/>
    <SubFooterGuest/>
  </div>
</template>
<script>
import HeaderGuast from '@/components/HeadersGuast';
import FooterGuest from '@/components/FooterGuest';
import SubFooterGuest from '@/components/SubFooterGuest';

export default {
  components: {
    HeaderGuast,
    FooterGuest,
    SubFooterGuest,
  },
};
</script>
<style lang="scss" scoped>
.wrapper{
  min-height: 100vh;
  background-image:url('../assets/img/bg/bg1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>