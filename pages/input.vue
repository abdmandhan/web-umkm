<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <v-card :loading="$store.state.loading">
          <v-card-title>
            Pengumpulan Data Website UMKM
          </v-card-title>
          <v-card-text v-if="!$store.state.loading">
            <v-select
              clearable
              label="Kelompok Website"
              v-model="form.team_id"
              :items="teams"
              item-text="name"
              item-value="id"
            />

            <div v-if="form.team_id">
              <v-text-field label="Website Name" v-model="form.website_name" />
              <v-text-field label="Website Link" v-model="form.website_link" />
              <v-file-input
                label="Website Image"
                v-model="form.website_image"
              />

              <v-row v-for="college in colleges" :key="college.id * 22">
                <v-col cols="6">
                  <v-text-field
                    label="Creator Name"
                    :value="college.name"
                    disabled
                  />
                </v-col>
                <v-col cols="6">
                  <v-file-input
                    label="Creator Image"
                    v-model="form.colleges[college.id]"
                  />
                </v-col>
              </v-row>

              <v-row v-for="umkm in umkms" :key="umkm.id * 11">
                <v-col cols="6">
                  <v-text-field label="UMKM Name" :value="umkm.name" disabled />
                </v-col>
                <v-col cols="6">
                  <v-file-input
                    label="UMKM Image"
                    v-model="form.colleges[umkm.id]"
                  />
                </v-col>
              </v-row>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" :loading="$store.state.loading">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mentors: [],
      teams: [],
      form: {
        team_id: null,
        website_name: null,
        website_link: null,
        website_image: {},
        colleges: [],
        umkms: []
      }
    };
  },
  mounted() {
    this.$axios.get("/team").then(result => {
      this.teams = result.data.data;
    });
  },
  computed: {
    colleges() {
      if (this.form.team_id) {
        let team = this.teams.find(a => this.form.team_id == a.id);
        return team.colleges;
      } else {
        return [];
      }
    },
    umkms() {
      if (this.form.team_id) {
        let team = this.teams.find(a => this.form.team_id == a.id);
        return team.umkms;
      } else {
        return [];
      }
    }
  },
  methods: {
    submit() {}
  },
  watch: {
    form: {
      handler(val) {
        console.log("form", val);
      },
      deep: true
    }
  }
};
</script>
