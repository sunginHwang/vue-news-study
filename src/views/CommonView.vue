<template>
    <div>
        <h1>chart.js</h1>
        <AppHeader :title="appTitle"></AppHeader>
        <AppContent :items="items" @renew="renewItems"></AppContent>
        <h1>scoped css</h1>
        <ScopeCssContent></ScopeCssContent>
    </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader';
import AppContent from '@/components/common/AppContent';
import ScopeCssContent from '@/components/common/ScopeCssContent';

export default {
  components:{
      AppHeader,
      AppContent,
      ScopeCssContent
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
