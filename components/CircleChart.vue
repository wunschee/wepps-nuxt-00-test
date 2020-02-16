<template>
  <div class="chart">
    <svg viewBox="0 0 36 36" :class="['svg', chartcolor]">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        :stroke-dasharray="percentage + ', 100'"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">{{ percentage }}%</text>
    </svg>
  </div>
</template>

<script>
export default {
  props: ['chartcolor', 'percentage']
}
</script>

<style scoped>
.chart {
  width: 33%;
  justify-content: space-around;
}

.svg {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.svg.orange .circle {
  stroke: #ff9f00;
}

.svg.green .circle {
  stroke: #4CC790;
}

.svg.blue .circle {
  stroke: #3c9ee5;
}

.percentage {
  fill: #666;
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
}
</style>