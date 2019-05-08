<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{info}}
    {{ urll }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters(['info'])
  },
  components: {
    HelloWorld
  },
  data() {
    return {
      urll: JSON.stringify(process.env)
    }
  }
}
</script>
