<template>
  <div class="row">
    <a href="https://github.com/Inkuantum" class="column">
      <ion-icon name="logo-github" />
    </a>
    <a
      href="https://www.linkedin.com/in/kirill-inozemtsev-628042185/"
      class="column"
    >
      <ion-icon name="logo-linkedin" />
    </a>
    <a href="https://twitter.com/Inkuantum" class="column">
      <ion-icon name="logo-twitter" />
    </a>
    <a href="https://dev.to/inkuantum" class="column">
      <ion-icon name="newspaper-outline"/>
    </a>
    <a href="mailto:ikirill2001@gmail.com" class="column">
      <ion-icon name="mail-outline" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialMedia",
};
</script>

<style scoped>
.row {
  margin-top: 50px;
  border-top: 3px solid #fff;
}

.row::after {
  clear: both;
}

.column {
  width: 20%;
  float: left;
  background-color: #000;
  border-right: #fff solid 1px;
  text-align: center;
}

.column:hover {
  background-color: rgb(19, 19, 19);
}

.column:last-child {
  border: none;
}

.column:nth-child(2),
.column:nth-child(4) {
  background-color: rgb(38, 4, 3);
}

.column:nth-child(2):hover,
.column:nth-child(4):hover {
  background-color: rgb(53, 5, 3);
}

.column * {
  margin-top: 7px;
  padding: 5px;
  color: #fff;
}
</style>
