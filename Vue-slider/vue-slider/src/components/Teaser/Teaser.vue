<template src="./Teaser.html"></template>
<style src="./Teaser.scss" lang="scss"></style>

<script>
export default {
  props: {
    link: {
      href: String,
      target: String
    },
    image: {
      src: String,
      alt: String
    },
    title: String,
    text: String
  }
}
</script>
