<template>
  <HeaderView />
  <router-view :key="$route.path"></router-view>
</template>
<script>
import { defineComponent } from 'vue'
import HeaderView from "./Header.vue"

export default defineComponent({
  setup() {
    
  },
  components: {
    HeaderView
  }
})
</script>
