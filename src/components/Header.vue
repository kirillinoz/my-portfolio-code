<template>
  <header>
    <div class="content">
      <img class="logo" src="../assets/header/logo.png" alt="logo" />
      <p class="nick">Inkuantum</p>
      <h1 class="highlight">Heyho!</h1>
      <h2>I'm Kirill</h2>
      <p class="prof">Student / Front-End Dev / Game Dev</p>
      <img
        class="profile-pic"
        src="../assets/header/profile-pic.jpg"
        alt="profile picture"
      />
      <div class="nav">
        <router-link to="/">About me</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/contacts">Contact</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
h1,
h2,
p {
  color: #fff;
}
header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/header/background.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 500px;
  border-bottom: 4px solid rgb(255, 255, 255);
  position: relative;
}
.logo {
  height: 40px;
  float: left;
  margin-top: 1px;
}
.nick {
  padding-top: 5px;
}
.nav {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
}
.nav a {
  text-decoration: none;
  margin-left: 5px;
  padding-right: 5px;
  border-right: 1px solid #fff;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  outline: none;
}

.nav a:hover {
  opacity: 0.8;
}

.nav a:last-child {
  border: none;
}

.profile-pic {
  float: right;
  height: 200px;
  width: auto;
  margin-top: -210px;
  border-radius: 100%;
}

/* -- RESPONSIVNESS */
@media only screen and (max-width: 545px) {
  .profile-pic {
    height: 180px;
    margin-top: -190px;
  }
  header {
    height: 400px;
  }
  .logo {
    height: 35px;
  }
}
@media only screen and (max-width: 470px) {
  .profile-pic {
    height: 140px;
    margin-top: -150px;
  }
  header {
    height: 340px;
  }
  .logo {
    height: 30px;
  }
}
</style>
