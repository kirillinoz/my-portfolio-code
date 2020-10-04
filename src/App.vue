<template>
  <div class="website">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    SocialMedia,
    Footer,
  },
};
</script>

<style>
/* COLORS FOR WS
Light-Gray: Text and buttons
White: Highlight buttons
Dark Red: Background
Gradient: Highlight
*/

/* -- IMPORT FONTS -- */
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700;900&display=swap");

/* -- SLIM WEBSITE DESIGN -- */
.content {
  padding: 0 30%;
}

/* -- DEFAULT STYLING -- */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Titillium Web", Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 400;
  background-color: rgb(58, 21, 21);
}

/* -- HEADERS -- */
h1 {
  margin: 50px 0 10px 0;
  font-size: 500%;
  font-weight: 300;
}
h2 {
  font-size: 200%;
  margin-bottom: 10px;
}

/* -- HIGHLIGHT TEXT -- */
.highlight,
.router-link-active {
  background-image: linear-gradient(
    180deg,
    rgb(255, 38, 0),
    rgb(255, 194, 194)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* -- COLLECTION GRID -- */
.collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
}

/* -- RESPONSIVNESS */
@media only screen and (max-width: 1550px) {
  .content {
    padding: 0 26.5%;
  }
}
@media only screen and (max-width: 1300px) {
  .content {
    padding: 0 23%;
  }
}
@media only screen and (max-width: 1050px) {
  .content {
    padding: 0 19.5%;
  }
}
@media only screen and (max-width: 850px) {
  .content {
    padding: 0 16%;
  }
}
@media only screen and (max-width: 770px) {
  .content {
    padding: 0 12.5%;
  }
}
@media only screen and (max-width: 700px) {
  .content {
    padding: 0 9%;
  }
}
@media only screen and (max-width: 640px) {
  .content {
    padding: 0 2%;
  }
}

/* CHANGE FONT-SIZE */
@media only screen and (max-width: 545px) {
  .website {
    font-size: 85%;
  }
}
@media only screen and (max-width: 470px) {
  .website {
    font-size: 70%;
  }
}
</style>

