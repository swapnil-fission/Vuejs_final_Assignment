<template>
<div>
    <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required"
      >
        <v-text-field
          v-model="formdata.name"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          digits: 10,
          regex: '^(71|72|74|76|81|82|84|85|86|87|88|89|91|92|93|94|95|96|97|98|99)\\d{8}$'
        }"
      >
        <v-text-field
          v-model="formdata.phonenumber"
          :counter="10"
          :error-messages="errors"
          label="Phone Number"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="formdata.email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="dateofbirth"
        :rules="{required:true,regex:'^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$'}"
      >
        <v-text-field
          v-model="formdata.dateofbirth"
          :error-messages="errors"
          label="Date of birth:-- MM/DD/YYYY"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="checkbox"
      >
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Accept T&C"
          type="checkbox"
          required
        ></v-checkbox>
      </validation-provider>
      <v-btn class="mr-4" type="submit" @click="storingdata" :disabled="invalid">submit</v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})'
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters'
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      formdata: {
        name: '',
        phonenumber: '',
        email: '',
        dateofbirth: ''
      }
    }
  },
  computed: {
    products () {
      return this.$store.state.storepreviosdata
    }
  },
  methods: {
    ...mapMutations([
      'Add_User_previosdata'
    ]),
    submit () {
      this.$refs.observer.validate()
      this.Add_User_formdata(this.formdata)
      this.formdata.name = this.formdata.phonenumber = this.formdata.email = this.formdata.dateofbirth = ''
      event.target.reset()
    },
    storingdata () {
      var obj = {
        name: this.formdata.name,
        phonenumber: this.formdata.phonenumber,
        email: this.formdata.email,
        dateofbirth: this.formdata.dateofbirth
      }
      this.products.push(obj)
    },
    clear () {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.dateofbirth = ''
      this.checkbox = null
      this.$refs.observer.reset()
    }
  }
}
</script>
