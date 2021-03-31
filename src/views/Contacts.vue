<template>
  <div class="contact">
    <h2>Contact</h2>
    <h2 class="announcement">
      Interested in my work? Let's chat!
      <ion-icon name="chatbubbles-outline"></ion-icon>
    </h2>
    <h3>
      It is desirable to contact me via
      <span class="highlight">Twitter</span>
      or <span class="highlight">e-mail</span>. If you like, feel free to
      check out my other social media. 👇
    </h3>
  </div>
</template>

<script>
export default {
  name: "Contacts",
};
</script>

<style scoped>
.contact {
  margin-top: 25px;
}
h2 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 50px;
  color: #fff;
}
.announcement {
  font-weight: 400;
}
h3 {
  color: #fff;
  margin-top: 40px;
}

/*@media only screen and (max-width: 430px) {
  .contact {
    font-size: 90%;
  }
}*/

/*@media only screen and (max-width: 545px) {
  .contact {
    margin-top: 65px;
    margin-bottom: 70px;
  }
}
@media only screen and (max-width: 470px) {
  .contact {
    margin-top: 45px;
    margin-bottom: 20px;
  }
}*/
</style>