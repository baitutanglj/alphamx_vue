<template>
  <div>
    <el-container >
      <el-aside>
        <common-aside class="el-menu-container"></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <!--      <common-tab></common-tab>-->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";

export default {
  name: 'MainVue',
  components:{
    CommonAside,
    CommonHeader
  }
}
</script>


<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-aside {
    width: auto;
    height: 100vh;
   .el-menu-container {
     height: 100vh;
   }
 }
  .el-header {
   background-color: #333;
  }
  .el-main {
    padding-top: 0;
    color: #333;
    //margin:auto;
  }
}
</style>

