<template>
  <div class="footer">
    <p class="caption">
      Made with
      <ion-icon name="logo-vue"></ion-icon>
      and <ion-icon name="heart-outline"></ion-icon>
      by Kirill Inoz © 2020
    </p>
    <p class="caption">inkuantum.com <span>v.1.0.6</span></p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  border-top: solid 48px #fff;
  padding-top: 20px;
  background-color: #000;
  box-shadow: 0 50vh 0 50vh #000;
}
.caption {
  color: #8a8a8a;
  text-align: center;
  padding-top: 5px;
}
.caption:last-child {
  padding-bottom: 20px;
}
span {
  font-size: 65%;
}

@media only screen and (max-width: 545px) {
  .footer {
    border-top-width: 45px;
  }
}
@media only screen and (max-width: 470px) {
  .footer {
    border-top-width: 39px;
  }
}
</style>
