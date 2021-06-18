<template>
  <span class="avatar">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar v-bind="attrs" v-on="on" size="45">
          <img :src="data.img" alt="John" v-if="data.img" />
          <img src="http://localhost:4003/photo/dummy.png" alt="" v-else />
        </v-avatar>
      </template>
      <span>{{ data.name }}</span>
    </v-tooltip>
  </span>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="css" scoped>
.v-avatar:hover {
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
  z-index: 100;
}

/* .v-avatar { */
/* border: 2px solid #0c0b8b; */
/* border: 2px solid black; */
/* } */
</style>
