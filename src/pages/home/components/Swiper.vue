
<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {el: '.swiper-pagination'},
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1805/d1/5e0bc05b6dfa5f02.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/des-mis/ad/1706/ef/d591e9a0ac403d.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: white !important
  .wrapper
    height:0
    overflow: hidden
    width: 100%
    padding-bottom: 52.46%
    background: #eee
    .swiper-img
      width: 100%
</style>
