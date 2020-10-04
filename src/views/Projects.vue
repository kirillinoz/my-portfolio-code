<template>
  <div class="projects">
    <h2>Projects</h2>
    <h3>Project Overview</h3>
    <div class="preview">
      <img class="main-image" :src="projects[selectedID].img" />
      <p class="title highlight">{{ projects[selectedID].title }}</p>
      <p class="description">{{ projects[selectedID].description }}</p>
      <a
        :href="projects[selectedID].demo.link"
        v-if="projects[selectedID].demo != null"
        >{{ projects[selectedID].demo.text }}</a
      >
      <a
        :href="projects[selectedID].code.link"
        v-if="projects[selectedID].code != null"
        >{{ projects[selectedID].code.text }}</a
      >
    </div>
    <div class="collection">
      <div
        v-for="project in projects"
        :key="project.id"
        @click="selectProject(project.id)"
      >
        <img
          :src="project.img"
          :class="{ selected: selectedID === project.id }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  computed: {
    selected(id) {
      if (this.selectedID === id) {
        return "selected";
      } else {
        return null;
      }
    },
  },
  methods: {
    selectProject(id) {
      this.selectedID = id;
    },
  },
  data() {
    return {
      selectedID: 0,
      projects: [
        {
          id: 0,
          title: "Werewolf Discord Bot",
          img: require("../assets/projects/werewolf-db.jpg"),
          description:
            "This Bot is helpful to setup and play the popular role game 'Werewolf' on your discord server. This bot can set up roles, channel permissions as well as flip a coin in a controversial situation.",
          code: {
            text: "Code",
            link: "https://github.com/Inkuantum/werwolf-discord-bot",
          },
        },
        {
          id: 1,
          title: "Time Loop",
          img: require("../assets/projects/time-loop.png"),
          description:
            "'Time Loop' - have you ever been stuck in a loop between three time travel destinations? No? Me neither! But you can experience this feeling  in this 2D platformer built in one week during the #BrackeysGameJam.",
          demo: {
            text: "Play",
            link: "https://inkuantum.itch.io/time-loop",
          },
          code: {
            text: "Code",
            link: "https://github.com/Inkuantum/time-loop-game",
          },
        },
        {
          id: 2,
          title: "Action Plus",
          img: require("../assets/projects/action-plus.png"),
          description:
            "This website represents a fictional streaming service called Action+. It offers beloved and origial movies to their customers for a subsription of their choice.",
          demo: {
            text: "Demo",
            link: "https://pedantic-boyd-67cb48.netlify.app",
          },
          code: {
            text: "Code",
            link: "https://github.com/Inkuantum/action-plus-website",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  margin-top: 25px;
}

.preview {
  background-image: linear-gradient(180deg, rgb(38, 4, 3), #000);
  border: 1px solid #fff;
  border-radius: 20px;
  text-align: center;
  padding: 20px 0;
  margin-bottom: 50px;
}

.preview * {
  margin: 20px 0;
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

.collection img {
  height: 100px;
  width: 100px;
  margin: 5px;
}

.collection img:hover {
  opacity: 0.8;
  cursor: pointer;
}

.main-image {
  height: 200px;
  width: 200px;
}

.title {
  font-weight: 700;
  font-size: 150%;
  text-transform: uppercase;
}

.description {
  margin-bottom: 40px;
  color: #fff;
  padding: 0 80px;
}

a {
  font-size: 110%;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 5px;
  border-left: #fff solid 1px;
}

a:hover {
  opacity: 0.8;
}

a:first-of-type {
  border: none;
}

.selected {
  box-sizing: content-box;
  padding-bottom: 10px;
  box-shadow: 0 1px 0 0 #fff;
}

@media only screen and (max-width: 525px) {
  .description {
    padding: 0 10px;
  }
}

@media only screen and (max-width: 545px) {
  .main-image {
    height: 180px;
    width: 180px;
  }
}
@media only screen and (max-width: 470px) {
  .main-image {
    height: 150px;
    width: 150px;
  }
}
</style>