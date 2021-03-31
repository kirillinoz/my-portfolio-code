<template>
  <div class="about-me">
    <h2>About Me</h2>
    <div class="row">
      <div class="col-lg ml-auto">
        <p>Me</p>
        <ion-icon name="person-circle-outline"></ion-icon>
      </div>
      <div class="col-lg mr-auto">
        <p>
          I am a 19 year old developer from Luxembourg who learns and
          practices programing languages to create interesting projects and
          useful applications.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg ml-auto">
        <p>Travel</p>
        <ion-icon name="airplane-outline"></ion-icon>
      </div>
      <div class="col-lg mr-auto">
        <p>
          I love travelling, discovering new cultures and meeting new people.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg ml-auto">
        <p>Gaming</p>
        <ion-icon name="game-controller-outline"></ion-icon>
      </div>
      <div class="col-lg mr-auto">
        <p>
          I like to play games which require creativity, logic or tell a nice
          story. Games are also one of the aspects that lead me into my
          programing jorney.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg ml-auto">
        <p>Movies / TV</p>
        <ion-icon name="videocam-outline"></ion-icon>
      </div>
      <div class="col-lg mr-auto">
        <p>
          In my spare time I like to watch movies and TV shows. DC shows, Marvel
          movies and classic sitcoms are my favourites.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg ml-auto">
        <p>Sports</p>
        <ion-icon name="tennisball-outline"></ion-icon>
      </div>
      <div class="col-lg mr-auto">
        <p>
          I am a very sportive person. I play tennis and do workouts. I also
          like to play and watch football.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg ml-auto">
        <p>Food</p>
        <ion-icon name="leaf-outline"></ion-icon>
      </div>
      <div class="col-lg mr-auto">
        <p>
          I love trying food from different countries. But I also practice
          flexitarisme and try to eat as less meat as possible.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg ml-auto">
        <p>Inspiration</p>
        <ion-icon name="rocket-outline"></ion-icon>
      </div>
      <div class="col-lg mr-auto">
        <p>
          There are a lot of companies as well as some start-ups which I admire.
          Tesla, SpaceX, Microsoft and FAANG inspire me to pursue my career in
          technology.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.about-me {
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
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.row:not(:first-child) {
  margin-top: 50px;
}

.col-lg {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.ml-auto {
  margin-left: auto !important;
}

.ml-auto {
  width: 100%;
  text-align: center;
}

.ml-auto p {
  font-size: 150%;
  color: #fff;
}

.ml-auto *:not(p) {
  font-size: 600%;
  color: #fff;
}

.mr-auto {
  margin-right: auto !important;
}

.mr-auto * {
  width: 100%;
  font-size: 120%;
  color: #fff;
}
</style>
