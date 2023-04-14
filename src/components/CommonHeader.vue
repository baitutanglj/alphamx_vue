<template>
    <header>
        <div class="l-content">
          <el-button size="small" @click="collapseMenu">
            <el-icon><Menu /></el-icon>
          </el-button>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path" v-if="current" >{{current.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </header>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState({
                current: state => state.tab.currentMenu

            })
        },
        data() {
            return {

            }

        },
      methods: {
        collapseMenu() {
          this.$store.commit('collapseMenu')
        },
      }
    }
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .l-content {
        display: flex;
        align-items: center;

        .el-button {
            margin-right: 20px;
        }
    }

    .r-content {
        .user {
            width: 45px;
            height: 40px;
            border-radius: 50%;
        }
    }
</style>

<style lang="scss">
    .el-breadcrumb__item {
        .el-breadcrumb__inner {
            color: #666666;
            font-weight: normal;
        }

        &:last-child {
            .el-breadcrumb__inner {
                color: #ffffff;
            }
        }
    }
</style>
