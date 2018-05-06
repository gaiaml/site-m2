<template>
  <div id="app">
    <v-app>
     <page-header />
     <page-search />
     <main>
           <router-view></router-view>
     </main>
     <page-proposal />
     <page-footer />
   </v-app>
  </div>
</template>
<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
import PageSearch from '@/components/Search.vue'
import PageProposal from '@/components/Proposal.vue'
export default {
  name: 'app',
  components: {
    PageHeader, PageFooter, PageSearch,PageProposal
  }
}
</script>
<style>
</style>
