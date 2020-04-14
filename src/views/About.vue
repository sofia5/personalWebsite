<template>
  <div class="about">

    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <img class="profilePicture" src="../assets/profilePic.jpg" alt="">
        </div>
        <div class="col-6 aboutMeWrapper">
          <h1 class="welcome">Hi and welcome to my site! </h1>
          <p class="aboutMeText">My name is Sofia Johansson and I love being creative. On this site I will try to share some of my creativity with you, as well as tell my story. 
            Another reason for creating this site was to try out Vue.js </p>
          <p class="aboutMeText">Below you can find some links to other places I hang out at.</p>
          <SocialMedia />
        </div>
        <div class="col-2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from "../components/SocialMedia.vue"

export default {
  components: {
    SocialMedia
  }
}
</script>



<style scoped>

  .profilePicture {
    height: 40vh;
    width: 40vh;
    object-fit:cover;
    background-position:center;
    margin-top: 22vh;
    margin-left: 5vw;
    border-radius: 50%;
  }
  .aboutMeWrapper {
      height: 92vh;
      top: 30vh;
  }
  .welcome {
    color: #00cccc;
  }
  .aboutMeText {
    margin-top: 20px;
    color: lightgray;
    font-size: 18px;
  }

</style>
