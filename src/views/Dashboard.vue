<template>
  <div>
      <Linechart />
    <Barchart />
  </div>
</template>
<script>
import Barchart from '../components/Barchart.vue'
import Linechart from '../components/Linechart.vue'
export default {
  name: 'Dashboard',
  components: {
    Barchart,
    Linechart
  }
}
</script>
