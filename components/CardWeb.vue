<template>
  <v-col cols="12" xl="2" lg="3" md="4" sm="6">
    <v-card elevation="5">
      <v-card-title>
        Madzas
        <v-spacer />
        <v-btn icon><v-icon>mdi-web</v-icon></v-btn>
      </v-card-title>
      <v-card-actions>
        <div>
          <div>Creator</div>
          <AvatarGroup />
        </div>
        <v-spacer />
        <div>
          <div>Mentor</div>
          <Avatar />
        </div>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import AvatarGroup from "~/components/AvatarGroup.vue";
import Avatar from "~/components/Avatar.vue";

export default {
  components: {
    AvatarGroup,
    Avatar
  }
};
</script>
