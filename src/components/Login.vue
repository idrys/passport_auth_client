<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Login Form</h1>

                <form @submit.prevent="login(user)">
                    <div class="text-left">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Your email" v-model="user.email">
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Your password" v-model="user.password">
                        </div>
                    </div>

                    <div class="text-center">
                        <button class="btn btn-primary">Login</button>

                        <br><br>

                        <router-link class="btn btn-default" :to="{ name: 'Index' }">
                            Index
                        </router-link>

                        <router-link class="btn btn-default" :to="{ name: 'Register' }">
                            Register
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    email: null,
                    password: null,
                },
            }
        },
        methods: {
            login(user) {
                
                Store.dispatch('login', user)
                    .then(response => {
                        console.log('Status: ', response)
                        //console.log('Token: ',  response.data.access_token)
                        if (response.status === 200 && 'access_token' in response.data) {
                            //this.$session.start()
                            //this.$session.set('jwt', response.data.access_token)
                            //Vue.http.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
                            //localStorage.setItem('access_token',response.data.access_token)
                            //localStorage.setItem('refresh_token',response.data.refresh_token)
                            this.$router.push('/Dashboard')
                        }
                        //console.log('response from success login', response)
                        //console.log('test');
                        //console.log(response.data.refresh_token)

                    })
                    .catch(response => {
                        let errorMessage = response.response.data.message
                        alert(errorMessage)
                    })
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>