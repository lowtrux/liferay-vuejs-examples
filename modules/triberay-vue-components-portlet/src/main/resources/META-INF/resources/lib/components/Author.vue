<template>
    <div>
        <h4>Vue examples for Liferay provided by {{ name }}</h4>
        <button @click="counter++">Increase counter</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                name: "Triberay",
                counter: 0
            }
        },
        destroyed() {
            console.log("destroyed");
        },
        deactivated() {
            console.log("deactivated");
        },
        activated() {
            console.log("activated");
        }
    }
</script>

<style scoped>

</style>
