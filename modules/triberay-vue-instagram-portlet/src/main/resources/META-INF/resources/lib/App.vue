<template>
  <div class="instagramFeed">
    <div
      v-for="feed in feeds"
      class="instagramPost"
    >
      <div class="innerIPWrapper">
        <div
          class="innerIP"
          :style="{backgroundImage: 'url(' + feed.images.standard_resolution.url + ')'}"
          :alt="getTitle(feed.caption)"
          :title="getTitle(feed.caption)"
          @click="openUrl(feed.link)"></div>
      </div>
    </div>
    <div v-if="!token">
      To use this portlet, please set an Instagram Access Token in the Configuration of this portlet
    </div>
    <div v-if="error">
      Error: {{ error }}
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import jsonp from 'browser-jsonp';

  export default {
    data: function () {
      return {
        token: this.$store.state.accessToken,
        count: 5,
        error: '',
        feeds: ''
      }
    },
    created() {
      this.getUserFeed();
    },
    methods: {
        getUserFeed () {
            if (this.token) {
              jsonp({
                    url: `https://api.instagram.com/v1/users/self/media/recent`,
                    data: { access_token: this.token, count: this.count },
                    error: error => { throw error },
                    complete: response => {
                        console.log('response: ' + response.meta.code);
                        if (response.meta.code === 400) {
                            console.log('error: ' + response.meta.error_message);
                            this.error = response.meta;
                        }
                        if (response.meta.code === 200) {
                            let { data } = response;
                            const types = ['image', 'video'];

                            if (this.mediaType && types.indexOf(this.mediaType) > -1) {
                                data = _.filter(data, item => this.mediaType === item.type)
                            }
                            /*if (this.tags.length) {
                                data = _.filter(data, item => _.intersection(this.tags, item.tags).length)
                            }*/
                            this.feeds = _.slice(_.values(data), 0, this.count)
                        }
                    }
                });
             }
        },
        getTitle: function (caption) {
            if (!caption) {
                return '';
            } else {
                return caption.text;
            }
        },
        openUrl: function (url) {
            window.open(url, "_blank");
        }
    }
  }
</script>

<style lang="scss" scoped>
  .instagramFeed {
    width: 100%;
    margin-bottom: -5px;

    .instagramPost {
      display: inline-flex;
      width: 20%;

      .innerIPWrapper {
        width: 100%;
        padding: 2px;

        .innerIP {
          background-size: cover;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }
      }
    }
    .instagramPost:before {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }
</style>
