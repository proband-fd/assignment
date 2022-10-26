<template src="./Block.html"></template>
<style src="./Block.scss" lang="scss"></style>

<script>
import { useMedia } from '../../composables/useMedia'
export default {
  props: {
    layout: String,
    title: String
  },
  data () {
    return {
      showSlider: useMedia('(max-width: 768px)')
    }
  }
}
</script>
