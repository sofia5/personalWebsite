<template>
  <div class="home">
    <div class="container-fluid">
      <div class="profilePictureWrapper">
        <img class="profilePicture" src="../assets/profilePic.jpg" alt />
      </div>
      <div class="aboutMeWrapper">
        <h1 class="titleText">Hi and welcome to my site!</h1>
        <p class="aboutMeText">
          My name is Sofia Johansson and I love being creative. On this site I will try to share some of my creativity with you, as well as tell my story.
          Another reason for creating this site was to try out Vue.js
        </p>
        <p class="aboutMeText">Below you find other places that I like.</p>
        <SocialMedia />
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from "../components/SocialMedia.vue";

export default {
  name: "Home",
  components: {
    SocialMedia
  }
};
</script>


<style scoped>
body {
  overflow: hidden;
}

.container-fluid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 86vh;
}

.profilePictureWrapper {
  flex: 0 0 30vw;
  min-width: 300px;
  height: 30vw;
  min-height: 300px;
  margin-left: 2vw;
  margin-right: 5vw;
}

.profilePicture {
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center;
  border-radius: 50%;
}
.aboutMeWrapper {
  flex: 0 2 50vw;
}
.titleText {
  color: #00cccc;
}
.aboutMeText {
  color: lightgray;
  font-size: 18px;
}

@media all and (max-width: 800px) {
  .container-fluid {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .profilePictureWrapper {
    width: 35vw;
    height: 35vw;
    margin-left: 0;
    margin-right: 0;
    margin-top: 150px;
  }

  .aboutMeWrapper {
    margin-top: 40px;
    text-align: center;
  }

  .aboutMeText {
    font-size: 100%;
  }
  .titleText {
    font-size: 150%;
  }
}
</style>
