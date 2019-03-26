<template>
  <v-card
    color="transparent"
    flat
    data-senna
  >
    <v-card class="d-inline-block elevation-12">
      <v-navigation-drawer
        floating
        permanent
        stateless
        value="true"
      >
        <v-list>
          <navigation-item
            v-for="(item, index) in items"
            v-if="item.parentLayoutId == 0"
            :key="index"
            :item="item">
            <navigation-item
              v-for="(subItem, subIndex) in items"
              v-if="subItem.parentLayoutId == item.layoutId"
              :key="subIndex"
              :item="subItem"
              :css-class="'subItem'"/>
          </navigation-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>
</template>

<script>
  import NavigationItem from './components/NavigationItem';

  export default {
    components: {
      navigationItem: NavigationItem
    },
    data () {
      return {
        items: JSON.parse(this.$store.state.siteLayouts),
        siteUrl: this.$store.state.siteUrl,
        currentLayoutId: this.$store.state.currentLayoutId,
        parentLayoutId: this.$store.state.parentLayoutId,
        right: null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-list {
    padding: 0;
  }
</style>

