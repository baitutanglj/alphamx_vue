<template>
  <el-menu
      :collapse="isCollapse"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <h3 v-show="isCollapse">AM</h3>
    <h3 v-show="!isCollapse">AlphaMX</h3>
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <el-icon><Star /></el-icon>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-sub-menu :index="item.label" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <el-icon><location /></el-icon>
        <span slot="title">{{ item.label }}</span>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  computed: {
    noChildren() {
      return this.menu.filter(item => !item.children)
    },
    hasChildren() {
      return this.menu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  data() {
    return {
      menu: [
        {
          path: '/',
          name: 'home',
          label: 'home',
          url: 'Home/Home',
        },
        {
          path: '/generate',
          name: 'generate',
          label: 'AlphaMX generate',
          url: 'PyProject/PageOne',
        }
      ]

    }
  },
  methods: {
    clickMenu(item) {
      this.$store.commit('selectMenu', item)
      this.$router.push({ name: item.name })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  width: auto;
  height: 100vh;
  border: none;
  h3 {
    color: #ffffff;
    text-align: center;
    line-height: 48px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 100vh;
}
</style>

