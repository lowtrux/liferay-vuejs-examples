<template>
  <v-card
        color="transparent"
        flat
  >
    <v-card class="d-inline-block elevation-12">
      <v-navigation-drawer
              floating
              permanent
              stateless
              value="true"
      >
        <v-list>
          <v-list-tile
                  v-for="item in items"
                  v-if="item.parentLayoutId == 1"
                  :key="item.title"
                  @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title><a :href="siteUrl + item.link">{{ item.title }}</a></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>
</template>

<script>
    export default {
      data () {
        return {
          items: JSON.parse(this.$store.state.siteLayouts),
          siteUrl: this.$store.state.siteUrl,
          right: null
        }
      }
    }
</script>

<style lang="scss">

</style>

