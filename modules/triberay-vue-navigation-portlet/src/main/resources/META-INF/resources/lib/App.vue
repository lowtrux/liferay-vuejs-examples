<template>
  <div
    id="vueNavigation"
    class="card"
  >
    <nav class="menubar menubar-transparent">
      <div class="card">
        <a
          class="navbar-brand"
          href="#">
          <div class="triberayLogo" />
        </a>
      </div>
      <a
        class="vueNavToggle"
        @click="vueNavToggle">
        <clay-icon
          :spritemap="spritemap"
          class="vueNavToggleIconOpen"
          symbol="product-menu-open"/>
        <clay-icon
          :spritemap="spritemap"
          class="vueNavToggleIconClosed"
          symbol="product-menu-closed"/>
      </a>
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
    },
    methods: {
      vueNavToggle () {
        let wrapperDiv = document.getElementById('wrapper');
        if (wrapperDiv) {
          if (wrapperDiv.classList.contains('vueNavOpen')) {
            wrapperDiv.classList.remove('vueNavOpen');
            wrapperDiv.classList.add('vueNavClosed');
          } else {
            wrapperDiv.classList.remove('vueNavClosed');
            wrapperDiv.classList.add('vueNavOpen');
          }
        }
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
    max-width: 300px;
    > .menubar-collapse {
      width: 300px;
      padding-top: 5px;
    }
    .card {
      margin-bottom: 0;
      z-index: 101;
    }
  }
</style>
