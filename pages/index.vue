<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <div class="home-img" />
      <div class="home-img2" />
      <v-col class="home-section text-center">
        <img src="~/assets/logo_ipb.png" width="100" height="100" />
        <img src="~/assets/logo_bogor.png" width="100" height="100" />
        <div>
          <h1 style="color:white">Website Portal UMKM Bogor</h1>
          <h2 style="color:white">Berkolaborasi dengan Sekolah Vokasi IPB</h2>
        </div>
      </v-col>
    </v-row>
    <v-row class="pa-4 main-section">
      <CardWeb v-for="(a, b) in 24" :key="b" />
    </v-row>
  </v-container>
</template>

<script>
import CardWeb from "~/components/CardWeb.vue";

export default {
  components: {
    CardWeb
  },
  data() {
    return {};
  }
};
</script>

<style lang="css">
.home-section {
  position: relative;
  top: 200px;

  z-index: 2;
  height: 100vh;
}

.home-img {
  position: absolute;

  background-image: url("~assets/bogor.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  z-index: 1;

  filter: blur(2px);
  -webkit-filter: blur(2px);

  /* -webkit-filter: grayscale(100%);
  filter: grayscale(100%); */
}

.home-img2 {
  position: absolute;

  background-image: url("~assets/bogor.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  z-index: 1;

  /* filter: blur(2px);
  -webkit-filter: blur(2px); */

  -webkit-filter: grayscale(90%);
  filter: grayscale(90%);
}
</style>
