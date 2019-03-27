<template>
  <text
    :x="point.x"
    :y="point.y">{{ stat.label }}</text>
</template>

<script>
    // math helper...
    function valueToPoint (value, index, total) {
        var x     = 0;
        var y     = -value * 0.8;
        var angle = Math.PI * 2 / total * index;
        var cos   = Math.cos(angle);
        var sin   = Math.sin(angle);
        var tx    = x * cos - y * sin + 100;
        var ty    = x * sin + y * cos + 100;
        return {
            x: tx,
            y: ty
        }
    }

    export default {
        props: {
            stat: { type: Object, required: true },
            index: { type: Number, required: true },
            total: { type: Number, required: true }
        },
        computed: {
            point: function () {
                return valueToPoint(
                    +this.stat.value + 10,
                    this.index,
                    this.total
                )
            }
        }
    }
</script>

<style lang="scss" scoped>
    text {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 10px;
        fill: #666;
    }
</style>
