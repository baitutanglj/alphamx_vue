<template>
  <el-row class="home" :gutter="20">
    <el-col :span="15" style="margin-top: 20px">
      <el-card>
        <div class="user">
          <div class="userinfo">
            <p class="name">AlphaMX</p>
            <br>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
    export default {
      data() {
        return {
            }
        },
        // methods: {
        //     getTableData() {
        //         this.$http.get('/home/getData').then(res => {
        //             res = res.data
        //             this.tableData = res.data.tableData
        //         })
        //     }


        // },
        //一进组件就会去请求后端接口 获取首页数据
        // created() {
        //     this.getTableData()
        // }

    }


</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/home';
</style>
