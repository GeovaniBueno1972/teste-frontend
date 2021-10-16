<template>
  <div class="home">
      <PageTitle main="Pedidos" sub="semana" />
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import Stat from './Stat.vue'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: {PageTitle, Stat},
    data: function () {
      return {
        stat: {}
      }
    },
    methods: {
      getStats(){
        axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
      }
    }
}
</script>

<style>

</style>