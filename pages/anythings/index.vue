<template>
  <div class="anythings">
    <Anything/>
    <Oldsmobile/>
  </div>
</template>

<script>
import Anything from '@/components/Anything'
import Oldsmobile from '@/components/Oldsmobile'

export default {
  components: {
    Anything,
    Oldsmobile
  }
}
</script>

<style scoped>
.anythings {
  display: flex;
  flex-flow: row nowrap;
}
</style>