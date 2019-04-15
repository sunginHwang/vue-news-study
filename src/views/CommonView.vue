<template>
    <div>
        <h1>chart.js</h1>
        <AppHeader :title="appTitle"></AppHeader>
        <AppContent :items="items" @renew="renewItems"></AppContent>
    </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader';
import AppContent from '@/components/common/AppContent';

export default {
  components:{
      AppHeader,
      AppContent
  },
  data(){
      return{
          appTitle: 'common App Title',
          items: [10,20,30]
      }
  },
  methods: {
      renewItems(){
          this.items = [40,50,60]
      },
  },
}
</script>

<style>

</style>
