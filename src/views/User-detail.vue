<template>
  <div>
    <h2>Form Data</h2>
    <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Phone Number
          </th>
          <th class="text-left">
            Email Id
          </th>
          <th class="text-left">
            Date of birth
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listofformdata" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.phonenumber }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.dateofbirth }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'User-detail',
  computed: {
    ...mapGetters(['listofformdata']),
    ...mapState([
      'userformdata'
    ])
  }
}
</script>
