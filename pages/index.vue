<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <div class="home-img" />
      <v-col class="home-section text-center">
        <img src="~/assets/logo_ipb.png" width="100" height="100" />
        <img src="~/assets/logo_bogor.png" width="100" height="100" />
        <div>
          <h1>Website Portal UMKM Bogor</h1>
          <h2>Berkolaborasi dengan Sekolah Vokasi IPB</h2>
        </div>
      </v-col>
    </v-row>
    <v-row class="pa-4 main-section">
      <v-col cols="12">
        <v-card color="#f2f2f2">
          <v-card-title>
            About
          </v-card-title>
          <v-card-text>
            <p>
              Dalam rangka membantu UMKM khususnya daerah Bogor. Sekolah Vokasi
              ....
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#f2f2f2">
          <v-card-title>
            Daftar Website UMKM
          </v-card-title>
          <v-card-text>
            <v-row>
              <CardWeb v-for="(a, b) in 24" :key="b" />
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
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
  padding-top: 200px;
  /* top: 200px; */

  z-index: 2;
  height: 100vh;
}

.home-img {
  position: absolute;

  background-image: url("~assets/bg1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  z-index: 1;

  /* filter: blur(2px);
  -webkit-filter: blur(2px); */

  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
</style>
