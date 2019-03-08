<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                Dynamic component selector:<br/>
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appUser'">User</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <h2 slot="title">{{quoteTitle}}</h2>
                        <p>An amazing quote!</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quote";
    import Author from "./components/Author";
    import User from "./components/User";
    import Vue from 'vue/dist/vue.common';

    export const eventBus = new Vue({
        methods: {
            changeAge(age) {
                this.$emit('ageWasEdited', age);
            }
        }
    });

    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote Title',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appUser: User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
    button {
        margin: 10px 3px;
    }
</style>

