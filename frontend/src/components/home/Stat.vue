<template>
  <div class="stat">
      <div class="stat-info">
          <span class="stat-title">{{ title }}</span>
          <span class="stat-value">{{ value }}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Stat',
    props: ['title', 'value'],
    computed: {

    }
}
</script>

<style>

</style>