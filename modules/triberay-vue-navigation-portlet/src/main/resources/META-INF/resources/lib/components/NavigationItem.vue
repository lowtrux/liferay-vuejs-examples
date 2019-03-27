<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <span>
    <v-list-group
      v-if="item.hasChildren"
      value="true"
    >
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-title><a
            :ref="'link'+item.layoutId"
            :href="siteUrl + item.link">{{ item.title }}</a></v-list-tile-title>
        </v-list-tile>
      </template>
      <v-divider/>
      <slot/>
    </v-list-group>

    <v-list-tile
      v-else
      :class="cssClass"
      @click="goToPage(item.layoutId, true)">
      <v-list-tile-content>
        <v-list-tile-title><a
          :ref="'link'+item.layoutId"
          :href="siteUrl + item.link"
          @click="goToPage(item.layoutId, false)">{{ item.title }}</a></v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon>keyboard_arrow_right</v-icon>
      </v-list-tile-action>
    </v-list-tile>
    <v-divider v-if="!item.hasChildren && item.parentLayoutId == 0"/>
  </span>
</template>

<script>
    import {store} from '../store/store';

    export default {
        props: {
            item: {
                type: Object,
                default: null,
                required: false
            },
            isSubItem: {
                type: Boolean,
                default: false,
                required: false
            }
        },
        data () {
            return {
                siteUrl: store.state.siteUrl
            }
        },
        computed: {
            currentLayoutId: function() {
                return store.state.currentLayoutId
            },
            cssClass: function () {
                let subItemCssClass = this.isSubItem ? 'subItem' : '';
                return this.currentLayoutId == this.item.layoutId ? 'activeListItem ' + subItemCssClass : subItemCssClass;
            }
        },
        methods: {
            goToPage(layoutId, clickLink) {
              this.$store.state.currentLayoutId = layoutId;
              if (clickLink) {
                this.$refs['link' + layoutId].click();
              }
            }
        }
    }
</script>

<style lang="scss">
  .theme--light.v-icon {
    color: #6F9CC0 !important;
  }
</style>
<style lang="scss" scoped>
  .v-list__tile__action {
    min-width: 35px;
  }
  i.v-icon {
    display: none;
  }
  .activeListItem {
    background: rgba(111, 156, 192, 0.12);
    i.v-icon {
      display: inline-block;
      color: #6F9CC0 !important;
    }
    .v-list__tile__title a {
      font-weight: 600;
    }
  }
  .subItem .v-list__tile__content {
    padding-left: 40px;
  }
  .rippleEffect {
    background-color: cornflowerblue;
  }
  hr {
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
