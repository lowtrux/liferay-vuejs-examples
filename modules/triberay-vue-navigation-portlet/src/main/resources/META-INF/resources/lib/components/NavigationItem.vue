<template>
  <li class="nav-item">
    <a
      v-if="item.hasChildren"
      :aria-controls="'navItem' + item.layoutId"
      :href="'#navItem' + item.layoutId"
      :class="cssClass"
      aria-expanded="false"
      data-toggle="collapse"
      role="button"
      @click="goToPage(item.layoutId, item.title, true)">
      <clay-icon
        :spritemap="spritemap"
        :symbol="item.icon ? item.icon : 'page'"
        class="nav-icon"/>
      <transition
        name="slide"
        type="animation"
        appear>
        <span class="nav-text">{{ item.title }}</span>
      </transition>
      <clay-icon
        :spritemap="spritemap"
        class="collapse-icon-closed"
        symbol="angle-right"/>
      <clay-icon
        :spritemap="spritemap"
        class="collapse-icon-open"
        symbol="angle-down"/>
    </a>
    <div
      v-if="item.hasChildren"
      :id="'navItem' + item.layoutId"
      :class="collapseCss">
      <slot />
    </div>
    <a
      v-else
      :ref="'link'+item.layoutId"
      :href="siteUrl + item.link"
      :class="cssClass"
      @click="goToPage(item.layoutId, item.title, true)"
    >
      <clay-icon
        :spritemap="spritemap"
        :symbol="item.icon ? item.icon : 'page'"
        class="nav-icon"/>
      <span class="nav-text">{{ item.title }}</span>
    </a>
  </li>
</template>

<script>
  import { store } from '../store'

  export default {
    props: {
      item: {
        type: Object,
        default: null,
        required: false
      }
    },
    data () {
      return {
        siteUrl: store.state.siteUrl,
        spritemap: store.state.spritemap
      }
    },
    computed: {
      currentLayoutId: function () {
        return store.state.currentLayoutId
      },
      parentLayoutId: function () {
        return store.state.parentLayoutId
      },
      cssClass: function () {
        let collapsed = this.parentLayoutId != this.item.layoutId ? 'collapsed' : '';
        let collapseClass = this.item.hasChildren ? 'collapse-icon ' + collapsed : '';
        return this.currentLayoutId == this.item.layoutId ? 'nav-link active ' + collapseClass : 'nav-link ' + collapseClass
      },
      collapseCss: function () {
        return this.parentLayoutId == this.item.layoutId ? 'collapse show' : 'collapse'
      }
    },
    methods: {
      goToPage (layoutId, title, clickLink) {
        this.$store.state.currentLayoutId = layoutId;

        // code specific for nav inclusion in Triberay website
        if (title == "Home") {
          let vueNavDiv = document.getElementById('vueNavigation');
          let contentDiv = document.getElementById('content');
          let bannerDiv = document.getElementById('banner');
          let lineWrapperDiv = document.getElementById('lineWrapper');

          vueNavDiv.style.display = "none";
          contentDiv.style.display = "none";
          bannerDiv.style.height = "280px";
          bannerDiv.style.minHeight = "280px";
          lineWrapperDiv.style.height = "550px";
        }
        // end Triberay website code

        if (clickLink && this.$refs['link' + layoutId]) {
          this.$refs['link' + layoutId].click()
        }
      }
    }
  }
</script>

<style lang="scss">
  .nav-link .collapse-icon-open,
  .nav-link .collapse-icon-closed,
  .nav-link .collapse-icon-open .lexicon-icon,
  .nav-link .collapse-icon-closed .lexicon-icon {
    width: 0.6em;
    height: 0.6em;
  }
</style>
<style lang="scss" scoped>
  .nav-icon {
    padding-left: 10px;
    padding-right: 10px;
  }
  .nav-nested .nav > li > a {
    padding-left: 38px;
  }
  .nav-link.active {
    background: rgba(111, 156, 192, 0.12);
  }
</style>
