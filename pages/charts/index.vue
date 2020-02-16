<template>
  <div class="charts">
    <CircleChart :chartcolor="cc1" :percentage="cv1"/>
    <CircleChart :chartcolor="cc2" :percentage="cv2"/>
    <CircleChart :chartcolor="cc3" :percentage="cv3"/>
  </div>
</template>

<script>
import CircleChart from '@/components/CircleChart'

export default {
  components: {
    CircleChart
  },

  data() {
    return {
      cc1: 'orange',
      cv1: 30,
      cc2: 'green',
      cv2: 60,
      cc3: 'blue',
      cv3: 90
    }
  }
}
</script>

<style scoped>
.charts {
  display: flex;
  flex-flow: row nowrap;
}
</style>