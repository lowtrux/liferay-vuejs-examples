<template>
  <div>
    <h1>{{ hello }}</h1>
    <div>
      <span class="tag">{{ portletNamespaceTitle }}: </span>
      <span class="value">{{ portletNamespace }}</span>
    </div>
    <div>
      <span class="tag">{{ contextPathTitle }}: </span>
      <span class="value">{{ contextPath }}</span>
    </div>
    <div>
      <span class="tag">{{ portletElementIdTitle }}: </span>
      <span class="value">{{ portletElementId }}</span>
    </div>
  </div>
</template>

<script>
    import { store } from './store'

    export default {
      data () {
        return {
          portletNamespace: store.state.portletNamespace,
          contextPath: store.state.contextPath,
          portletElementId: store.state.portletElementId,

          hello: Liferay ? Liferay.Language.get('hello') : 'Hello default text',
          portletNamespaceTitle: Liferay ? Liferay.Language.get('porlet-namespace') : 'default',
          contextPathTitle: Liferay ? Liferay.Language.get('context-path') : 'default',
          portletElementIdTitle: Liferay ? Liferay.Language.get('portlet-element-id') : 'default'
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import './scss/variables.scss';

  h1 {
    color: $triberay-light-blue;
    text-decoration: underline;
  }
</style>
