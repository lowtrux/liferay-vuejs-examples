<template>
  <div>
    <!-- Use the component -->
    <svg 
      width="200" 
      height="200">
      <polygraph :stats="stats"/>
    </svg>
    <!-- controls -->
    <div v-for="stat in stats">
      <label>{{ stat.label }}</label>
      <input 
        v-model="stat.value" 
        type="range" 
        min="0" 
        max="100">
      <span>{{ stat.value }}</span>
      <button 
        class="remove" 
        @click="remove(stat)">X</button>
    </div>
    <form id="add">
      <input 
        v-model="newLabel" 
        name="newlabel">
      <button @click="add">Add a Stat</button>
    </form>
    <pre id="raw">{{ stats }}</pre>
  </div>
</template>

<script>
    import Polygraph from "./components/Polygraph";

    export default {
        components: {
            "polygraph": Polygraph
        },
        data: function() {
            return {
                newLabel: '',
                stats: [
                    { label: 'A', value: 100 },
                    { label: 'B', value: 100 },
                    { label: 'C', value: 100 },
                    { label: 'D', value: 100 },
                    { label: 'E', value: 100 },
                    { label: 'F', value: 100 }
                ]
            }
        },
        methods: {
            add: function (e) {
                e.preventDefault();
                if (!this.newLabel) return;
                this.stats.push({
                    label: this.newLabel,
                    value: 100
                });
                this.newLabel = ''
            },
            remove: function (stat) {
                if (this.stats.length > 3) {
                    this.stats.splice(this.stats.indexOf(stat), 1)
                } else {
                    alert('Can\'t delete more!')
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import './variables.scss';

    label {
        display: inline-block;
        margin-left: 10px;
        width: 20px;
    }

    #raw {
        position: absolute;
        top: 40px;
        left: 300px;
        font-size: 0.9em;
        line-height: 1.2em;
        overflow: hidden;
        color: $triberay-blue;
    }
</style>
