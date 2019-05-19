<template>
    <div>
        <h1>User Details</h1>
        <h3>retrieved with Apio</h3>
        <p>
            Name:   {{name}}<br/>
            Email:  {{email}}<br/>
            Gender: {{gender}}<br/>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                name: '',
                email: '',
                gender: ''
            }
        },
        // Fetches data when the component is created.
        created() {
            axios.get(`/o/api/p/my-user-account`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.name = response.data.elements[0].name;
                    this.email = response.data.elements[0].email;
                    this.gender = response.data.elements[0].gender;
                })
                .catch(e => {
                    console.log(e);;
                    this.errors.push(e)
                })
        }
    }
</script>
