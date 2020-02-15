<template>
  <section class="articles">
    <Article
      v-for="article in articles"
      :key="article.id"
      :thumbnail="article.thumbnail"
      :title="article.title"
      :id="article.id"
      :previewText="article.previewText"/>
  </section>
</template>

<script>
import Article from '@/components/Article'

export default {
  components: {
    Article
  },

  asyncData() {
    // return axios.get()
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          articles: [
            {
              id: "1",
              title: "Foods",
              previewText: "Some foods",
              thumbnail: "https://foodsecurityfoodjustice.files.wordpress.com/2019/01/food.jpg"
            },
            {
              id: "2",
              title: "Also Foods",
              previewText: "More foods",
              thumbnail: "https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/howcuttingdo.jpg"
            }
          ]
        })
      }, 1500)
    })
  }
}
</script>

<style scoped>
.articles {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>