<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Starting Page</nuxt-link></li>
        <li><nuxt-link to="/articles">Articles</nuxt-link></li>
        <li><nuxt-link to="/charts">Charts</nuxt-link></li>
        <li><nuxt-link to="/anythings">Anythings</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 102, 168, 0.7)
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 10px;
}

a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7)
}
</style>