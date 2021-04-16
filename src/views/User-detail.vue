<template>
  <div>
    <h2>Data on form submit</h2>
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
        <!-- <tr
          v-for="item in desserts"
          :key="item.name"
        > -->
          <td>{{ userformdata.name }}</td>
          <td>{{ userformdata.phonenumber }}</td>
          <td>{{ userformdata.email }}</td>
          <td>{{ userformdata.dateofbirth }}</td>
          {{storepreviosdata}}
        <!-- </tr> -->
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'User-detail',
  computed: {
    ...mapState([
      'userformdata'
      //   'storepreviosdata'
    ])
  }
}
</script>
