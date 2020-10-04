<template>
  <div class="skills">
    <h2>Skills</h2>
    <h3>
      Technical Skills
      <ion-icon name="settings-outline"></ion-icon>
    </h3>
    <p class="highlight">I am great with:</p>
    <div class="collection">
      <img src="../assets/skills/js.png" alt="JavaScript" />
      <img src="../assets/skills/html.png" alt="HTML 5" />
      <img src="../assets/skills/css.png" alt="CSS 3" />
      <img src="../assets/skills/cSharp.png" alt="C#" />
      <img src="../assets/skills/java.png" alt="Java" />
    </div>
    <p>I am learning:</p>
    <div class="collection">
      <img src="../assets/skills/react.png" alt="React" />
      <img src="../assets/skills/vue.png" alt="Vue" />
    </div>
    <p>I want to learn:</p>
    <div class="collection">
      <img src="../assets/skills/python.png" alt="Python" />
      <img src="../assets/skills/node.png" alt="Node" />
      <img src="../assets/skills/mongo.png" alt="Mongo" />
    </div>
    <h3>Language Skills <ion-icon name="volume-high-outline"></ion-icon></h3>
    <p class="highlight">I am fluent in:</p>
    <div class="collection">
      <p class="black">Russian, German</p>
    </div>
    <p>I am great in:</p>
    <div class="collection">
      <p class="black">English</p>
    </div>
    <p>I am good in:</p>
    <div class="collection">
      <p class="black">French, Luxembourgish</p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.skills {
  margin-top: 25px;
}
h2 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 50px;
  color: #fff;
}
h3 {
  color: #fff;
  padding-bottom: 5px;
  border-bottom: 1px solid #fff;
  margin-top: 40px;
}
p {
  margin: 20px 0;
  color: #fff;
}
img {
  margin: 5px;
  border-radius: 10px;
}
.collection {
  background-image: linear-gradient(180deg, rgb(38, 4, 3), #000);
  border-radius: 10px;
  padding: 10px 0;
  border: 1px solid #fff;
}
.black {
  color: #fff;
}

@media only screen and (max-width: 545px) {
  img {
    height: 80px;
  }
}
@media only screen and (max-width: 470px) {
  img {
    height: 60px;
  }
}
</style>
