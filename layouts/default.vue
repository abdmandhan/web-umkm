<template>
  <v-app>
    <v-app-bar
      app
      dense
      elevate-on-scroll
      src="/footerbg.jpg"
      style="color:white"
    >
      <nuxt-link to="/">
        <h4>Portal UMKM Bogor</h4>
      </nuxt-link>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer class="footer">
      <v-container>
        <v-row>
          <v-col xl="6" cols="12" lg="6" md="6">
            <v-card class="pa-4">
              <img src="~/assets/sv.png" height="60" />
            </v-card>
          </v-col>
          <v-col xl="6" cols="12" lg="6" md="6">
            Alamat & kontak
            <div>
              Jl. Kumbang No. 14, Cilibende - Bogor Tengah
            </div>
            <div><v-icon color="white">mdi-phone</v-icon> (0251) 8376845</div>
            <div>
              <v-icon color="white">mdi-email</v-icon> sv@apps.ipb.ac.id
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="text-center">
              &copy; {{ new Date().getFullYear() }} Sekolah Vokasi Institut
              Pertanian Bogor
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="css">
.footer {
  color: white !important;
  background-image: url("~/assets/footerbg.jpg");
  background-repeat: initial;
}
</style>
