<template>
  <div
    id="vueNavigation"
    class="card"
    data-senna-off="true"
  >
    <nav class="menubar menubar-transparent">
      <a
        class="navbar-brand"
        href="#">
        <div class="triberayLogo" />
      </a>
      <a
        aria-controls="menubarVerticalCollapse01"
        aria-expanded="false"
        data-toggle="collapse"
        href="#menubarVerticalCollapse01"
        role="button"
        class="menubar-toggler vueNavToggle">
        <svg class="lexicon-icon">
          <use :href="spritemap + '#bars'" />
        </svg>
      </a>
      <hr class="mt-0 mb-0">
      <div class="menubar-collapse" id="menubarVerticalCollapse01">
        <ul class="nav nav-nested">
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
  .vueNavToggle {
    position: absolute;
    top: 27px;
    right: 22px;
    z-index: 102;
  }
  .menubar {
    .card {
      margin-bottom: 0;
      z-index: 101;
    }
  }
</style>
