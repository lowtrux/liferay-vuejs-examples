<template>
  <li class="nav-item">
    <a
      v-if="item.hasChildren"
      :aria-controls="'navItem' + item.layoutId"
      :href="'#navItem' + item.layoutId"
      :class="cssClass"
      aria-expanded="false"
      data-toggle="collapse"
      role="button">
      <svg class="lexicon-icon nav-icon">
        <use :href="spritemap + '#' + item.icon" />
      </svg>
      <span class="nav-text">{{ item.title }}</span>
      <svg class="lexicon-icon collapse-icon-closed">
        <use :href="spritemap + '#angle-right'" />
      </svg>
      <svg class="lexicon-icon collapse-icon-open">
        <use :href="spritemap + '#angle-down'" />
      </svg>
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
      @click="goToPage(true)"
    >
      <svg class="lexicon-icon nav-icon">
        <use :href="spritemap + '#' + item.icon" />
      </svg>
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
        let collapsed = !this.isExpanded(this.item.layoutId) ? 'collapsed' : '';
        let collapseClass = this.item.hasChildren ? 'collapse-icon ' + collapsed : '';
        return this.currentLayoutId == this.item.layoutId ? 'nav-link active ' + collapseClass : 'nav-link ' + collapseClass
      },
      collapseCss: function () {
        return this.isExpanded(this.item.layoutId) ? 'collapse show' : 'collapse'
      }
    },
    methods: {
      isExpanded (layoutId) {
        return (this.currentLayoutId == layoutId) || (this.parentLayoutId == layoutId);
      },
      goToPage (clickLink) {
        //this.$store.state.currentLayoutId = this.item.layoutId;

        // code specific for nav inclusion in Triberay website
        if (this.item.title == "Home") {
          document.body.classList.add("header-big");
        } else {
          document.body.classList.remove("header-big");
        }
        // end Triberay website code

        if (clickLink) {
          Liferay.SPA.app.navigate(this.siteUrl + this.item.link);
        }
      }
    }
  }
</script>

<style lang="scss">
  #vueNavigation {
    .nav-link .collapse-icon-open,
    .nav-link .collapse-icon-closed,
    .nav-link .collapse-icon-open .lexicon-icon,
    .nav-link .collapse-icon-closed .lexicon-icon {
      width: .8em;
      height: .8em;
      top: 22px;
    }
    .nav-nested .nav > li > a {
      padding-left: 38px;
    }
    .nav-link.active {
      background: rgba(111, 156, 192, 0.12);
    }
    .nav-link .nav-text {
      padding-left: 10px;
    }
  }
</style>
