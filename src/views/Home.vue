<template>
  <div class='home'>
    <!-- <button v-on:click='getUsers'>click for data</button> -->
        <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class='text-left'>
            Id
          </th>
          <th class='text-left'>
            Name
          </th>
          <th class='text-left'>
            Username
          </th>
          <th class='text-left'>
            Email
          </th>
          <th class='text-left'>
            Address
          </th>
          <th class='text-left'>
            Phone
          </th>
          <th class='text-left'>
            Website
          </th>
          <th class='text-left'>
            Company
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(user, index) of listOfUsers' :key='index'>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address.street +' ' + user.address.suite +' ' + user.address.city +' ' + user.address.zipcode }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
          <td>{{'Name:'+ user.company.name +' Catchphrase:'+ user.company.catchPhrase +'  Bs:'+ user.company.bs }}</td>
        </tr>
      </tbody>
    </template>
        </v-simple-table>
        <Footer />
    </div>
    <!-- <Footer /> -->
</template>

<script lang='ts'>
// import { Component, Vue } from 'vue-property-decorator';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'

// @Component({
//   components: {
//     Header,
//     Footer
//   }
// })
// export default class Home extends Vue {}
export default {
  /* eslint-disable */
  // eslint-disable-next-line
  name: 'Home',
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters(['listOfUsers'])
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    ...mapActions(['setUsersAction']),
    async getUsers () {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        this.setUsersAction(response.data)
      } catch (error) {
        window.console.error(error)
      }
    }
  }
}
</script>
