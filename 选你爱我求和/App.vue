<template>
  <div>
    <label v-for="item in arr" :key="item"><input type="checkbox" :value="item" v-model="pickArr"><span>{{item}}</span></label>
    <div>你选中的元素，累加的值和为{{sum}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      pickArr: []
    }
  },
  computed: {
    sum() {
      return this.pickArr.length === 0? 0: this.pickArr.reduce((acc, item) => acc += item)
    }
  }
}
</script>

<style scoped>

</style>