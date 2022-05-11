<template>
  <div class="socialMedia">
    <a
      href="https://www.linkedin.com/in/sofia5johansson/"
      class="fa fa-linkedin"
    ></a>
    <a href="https://www.instagram.com/sofia__j/" class="fa fa-instagram"></a>
    <a
      href="https://swiceprincess.wordpress.com/"
      class="fab fa-wordpress-simple"
    ></a>
    <a href="https://github.com/sofia5" class="fa fa-github"></a>
    <a href="https://steamcommunity.com/id/swicep/" class="fa fa-steam"></a>
  </div>
</template>

<script>
export default {
  name: "SocialMedia",
};
</script>

<style scoped>
.fa,
.fab {
  font-size: 20px;
  margin-right: 15px;
}
.fa:hover,
.fab:hover {
  text-decoration: none;
}
</style>