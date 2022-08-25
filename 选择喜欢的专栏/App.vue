<template>
  <div>
    <h4>请选择你喜欢的专栏</h4>
    <label v-for="item in hobbyList" :key="item"><input type="checkbox" :value="item" v-model="hobby"><span>{{item}}</span></label>
    <ul>
      <li v-for="(item, index) in hobby" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hobbyList: ["科幻", "喜剧", "动漫", "冒险", "科技", "军事", "娱乐", "奇闻"],
      hobby: []
    }
  }
}
</script>

<style scoped>

</style>
