<template src="./App.html"></template>
<style src="./reset.css"></style>
<style src="./App.scss" lang="scss"></style>

<script>
import Header from '@/components/Header/Header.vue'
import Teaser from '@/components/Teaser/Teaser.vue'
import Footer from '@/components/Footer/Footer.vue'
import Block from '@/components/Block/Block.vue'
import Hero from '@/components/Hero/Hero.vue'

export default {
  name: 'App',
  components: {
    Header,
    Teaser,
    Footer,
    Block,
    Hero
  },
  data () {
    return {
      navigationLinks: [
        { text: 'E-Mail & Cloud', href: 'https://web.de', target: '_blank' },
        { text: 'Mobilfunk & DSL', href: 'https://web.de', target: '_blank' },
        { text: 'Strom & Gas', href: 'https://web.de', target: '_blank' },
        { text: 'Shop', href: 'https://web.de', target: '_blank' },
        { text: 'Lotto', href: 'https://web.de', target: '_blank' },
        { text: 'Versicherung', href: 'https://web.de', target: '_blank' },
        { text: 'Teaser Title', href: 'https://web.de', target: '_blank' }
      ],
      rowTeasers: [
        {
          link: { href: 'https://web.de', target: '_blank' },
          image: { src: 'https://picsum.photos/300/170', alt: 'Teaser Title' },
          title: 'Teaser Title',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },
        {
          link: { href: 'https://web.de', target: '_blank' },
          image: { src: 'https://picsum.photos/300/170', alt: 'Teaser Title' },
          title: 'Teaser Title',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },
        {
          link: { href: 'https://web.de', target: '_blank' },
          image: { src: 'https://picsum.photos/300/170', alt: 'Teaser Title' },
          title: 'Teaser Title',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },
        {
          link: { href: 'https://web.de', target: '_blank' },
          image: { src: 'https://picsum.photos/300/170', alt: 'Teaser Title' },
          title: 'Teaser Title',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        }
      ],
      doubleRowTeasers: [
        {
          link: { href: 'https://web.de', target: '_blank' },
          image: { src: 'https://picsum.photos/630/360', alt: 'Teaser Title' },
          title: 'Teaser Title',
          text:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
          link: { href: 'https://web.de', target: '_blank' },
          image: { src: 'https://picsum.photos/300/170', alt: 'Teaser Title' },
          title: 'Teaser Title',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },
        {
          link: { href: 'https://web.de', target: '_blank' },
          image: { src: 'https://picsum.photos/300/170', alt: 'Teaser Title' },
          title: 'Teaser Title',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },
        {
          link: { href: 'https://web.de', target: '_blank' },
          image: { src: 'https://picsum.photos/300/170', alt: 'Teaser Title' },
          title: 'Teaser Title',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        },
        {
          link: { href: 'https://web.de', target: '_blank' },
          image: { src: 'https://picsum.photos/300/170', alt: 'Teaser Title' },
          title: 'Teaser Title',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
        }
      ]
    }
  }
}
</script>
