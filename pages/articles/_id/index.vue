<template>
  <section class="single-article">
    <h1>{{ article.title }}</h1>
    <div>
      <img class="article-image" :src="article.thumbnail" :alt="article.title">
    </div>
    <p>{{ article.descriptionText }}</p>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    // return axios.get()
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          article: [
            {
              id: "1",
              title: "Foods",
              previewText: "Some foods",
              descriptionText: "Description of some food",
              thumbnail: "https://foodsecurityfoodjustice.files.wordpress.com/2019/01/food.jpg"
            },
            {
              id: "2",
              title: "Also Foods",
              previewText: "More foods",
              descriptionText: "Description of more food",
              thumbnail: "https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/howcuttingdo.jpg"
            }
          ].find(el => el.id === context.params.id)
        })
      }, 1500)
    })
  }
}
</script>

<style scoped>
.single-article {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
}

.article-image {
  width: 100%;
}
</style>