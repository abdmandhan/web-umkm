<template>
  <v-col cols="12" xl="2" lg="3" md="4" sm="6">
    <v-card elevation="5">
      <v-img :src="data.website_image" max-height="150" />
      <v-card-title>
        {{ data.website_name }}
        <!-- {{ data.website_name }} -->
        <v-spacer />
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <a :href="data.website_link" target="_blank">
                <v-icon color="primary">mdi-web</v-icon>
              </a>
            </v-btn>
          </template>
          <span>Kunjungi Web</span>
        </v-tooltip>
      </v-card-title>
      <v-card-text> </v-card-text>
      <v-card-actions>
        <div>
          <div>Creator</div>
          <AvatarGroup :data="data.colleges" />
        </div>
        <v-spacer />
        <div>
          <div>Mentor</div>
          <Avatar :data="data.mentor" />
        </div>
      </v-card-actions>
      <v-card-actions>
        <div>
          <div>UMKM</div>
          <AvatarGroup :data="data.umkms" />
        </div>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import AvatarGroup from "~/components/AvatarGroup.vue";
import Avatar from "~/components/Avatar.vue";

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    AvatarGroup,
    Avatar
  }
};
</script>
