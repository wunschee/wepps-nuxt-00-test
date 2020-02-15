<template>
  <nuxt-link :to="'/articles/' + id">
    <article class="article">
      <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <h1>{{ title }}</h1>
      <p>{{ previewText }}</p>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: ['thumbnail', 'title', 'previewText', 'id']
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9)
}

.article {
  box-sizing: border-box;
  width: 280px;
  margin: 10px;
  padding: 8px;
  border: 1px solid rgba(180, 180, 180, 0.7);
  box-shadow: 0 2px 2px rgba(180, 180, 180, 0.9);
}

.thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
}
</style>