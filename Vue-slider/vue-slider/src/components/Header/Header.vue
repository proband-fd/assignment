<template src="./Header.html"></template>
<style src="./Header.scss" lang="scss"></style>

<script>
import Navigation from '@/components/Navigation/Navigation'

export default {
  components: {
    Navigation
  },
  props: {
    navigation: Array
  }
}
</script>
