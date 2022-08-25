<template>
  <div>
    <div>欢迎光临_vue开发的收银系统</div>
    <h4>苹果 10 ￥/斤，折扣 8 折</h4>
    <div>请输入你要购买的斤数 <input type="number" v-model.trim.number="weight"></div>
    <button @click="cal">结账买单</button>
    <div>结账单：总价{{total}}￥元 折后价{{afterDiscount}}￥元 省了{{save}}￥元</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: 0,
      total: 0,
      afterDiscount: 0,
      save: 0
    }
  },
  methods: {
    cal() {
      this.total = this.weight * 10
      this.afterDiscount = this.total * 0.8
      this.save = this.total * 0.2
    }
  }
}
</script>

<style scoped>

</style>
