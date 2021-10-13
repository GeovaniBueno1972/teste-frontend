<template>
  <header class="header">
      <h1 class="title">
          {{ title }}
      </h1>
  </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: blue;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
        }

    .title a{
        color: #fff;
        text-decoration: none;
    }
</style>