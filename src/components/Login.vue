<template>

  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
            
              <v-toolbar dark color="primary">
                <v-toolbar-title>Logowanie</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  
                </v-tooltip> 
              </v-toolbar>
              <v-card-text>
                
                <v-form>
                  <v-text-field prepend-icon="person" name="e-mail" label="E-mail" type="text" v-model="user.email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Hasło" id="password" type="password" v-model="user.password"></v-text-field>
                </v-form>
                
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login(user)" color="primary">Login</v-btn>
              </v-card-actions>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>

</template>

<script>
import {getHeader} from '../API'
//import router from './router'

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
                const authUser = {}
                Store.dispatch('login', user)
                    .then(response => {
                        
                        if (response.status === 200 ) {
                            authUser.access_token = response.data.access_token
                            authUser.refresh_token = response.data.refrash_token
                            window.localStorage.setItem('authUser', JSON.stringify(authUser))
                            
                            axios.get('api/user1', { headers: getHeader() })
                                .then(function (response) {
                                    console.log('email', response.data.name);
                                    authUser.email = response.data.email
                                    authUser.name = response.data.name
                                    window.localStorage.setItem('authUser', JSON.stringify(authUser))
                                    //this.$router.push('/Dashboard')
                                    this.$router.push('/Dashboard')
                                }.bind(this))
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }
                    })
                    .catch(response => {
                        console.log(response)
                        //let errorMessage = response.response.data.message
                        //alert(errorMessage)
                        alert('t')
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

<!--

    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Login Form</h1>

                <form @submit.prevent="login(user)">
                    <div class="text-left">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Your email" v-model="user.email">
                            <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="user.email"></v-text-field>
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Your password" v-model="user.password">
                            <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="user.password"></v-text-field>
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

    -->