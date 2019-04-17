<template>
  <div
    id="vueNavigation"
    class="card"
    data-senna-off="true"
  >
    <nav class="navbar">
      <a
        class="navbar-brand"
        href="#">
        <div class="triberayLogo" />
      </a>
      <a
        aria-controls="navbarCollapse01"
        aria-expanded="false"
        data-toggle="collapse"
        data-target="#navbarCollapse01"
        href="#navbarCollapse01"
        role="button"
        class="navbar-toggler pull-right">
        <svg class="lexicon-icon">
          <use :href="spritemap + '#bars'" />
        </svg>
      </a>
      <!-- Collapsible content -->
      <div
        id="navbarCollapse01"
        class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <navigation-item
            v-for="(item, index) in items"
            v-if="item.parentLayoutId == 0"
            :key="index"
            :item="item"
          >
            <ul class="nav nav-stacked">
              <navigation-item
                v-for="(subItem, subIndex) in items"
                v-if="subItem.parentLayoutId == item.layoutId"
                :key="subIndex"
                :item="subItem"
                :is-sub-item="true"
              />
            </ul>
          </navigation-item>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import { store } from './store'
  import NavigationItem from './components/NavigationItem'

  export default {
    components: {
      navigationItem: NavigationItem
    },
    data () {
      return {
        items: JSON.parse(store.state.siteLayouts),
        siteUrl: store.state.siteUrl,
        currentLayoutId: store.state.currentLayoutId,
        parentLayoutId: store.state.parentLayoutId,
        right: null,
        drawer: true,
        mini: store.state.isMobile,
        spritemap: store.state.spritemap
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar-brand {
    min-height: 50px;
  }
  .navbar-toggler {
    padding: 20px;
    display: block;
  }
  .navbar-collapse .navbar-nav {
    flex-direction: column;
  }
</style>
