<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Page not found</h1>
        <p>Go to <router-link class="link" to="/">main page</router-link></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper-content {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>