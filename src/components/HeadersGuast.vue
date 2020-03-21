<template>
  <div class="navBarGuastHeader">
    <b-container>
      <div class="d-flex justify-content-between align-items-center">
        <a href="http://nuprobe.com/" target="_blank" style="display:block">
          <img class="navBarGuastHeader_logo"  src="../assets/img/logo.svg" alt="Logo">
        </a>
        <div class="d-flex align-items-center navBarGuastHeader_item">
          <p class="navBarGuastHeader_item--text d-sm-none d-none d-sm-block">
            about ngsure and features
          </p>
          <button class="navBarGuastHeader_item--button">learn more</button>
        </div>
      </div>
    </b-container>
  </div>
</template>
<style lang="scss" scoped>

.navBarGuastHeader{
  background-color: #091FAB;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_logoLink{
    position: absolute;
    left: 109px;
  }
  &_logo{
    height: 25px;
  }
  &_item{
    position: absolute;
    right: 25px;
    &--button{
      text-transform: uppercase;
      background: none;
      color: #fff;
      border: 0.3px solid #fff;
      padding: 5px 12px;
      font-family:  'OpenSans-Regular' , sans-serif;
    }
    &--text{
      text-transform: uppercase;
      font-size: 14px;
      margin-right: 22px;
      color: #fff;
      font-family:  'OpenSans-Regular' , sans-serif;
    }
  }
}
</style>