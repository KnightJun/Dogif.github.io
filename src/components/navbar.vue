
<template>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          background-color="transparent"
          text-color="white"
          active-text-color="white"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <el-image
              style="width: 32px; height: 32px"
              fit="contain"
              :src="logoImg"
            ></el-image>
            Dogif
          </el-menu-item>
          <!-- <el-menu-item index="2">Document</el-menu-item>
          <el-menu-item index="3">Changelog</el-menu-item> -->
        </el-menu>
      </el-header>
    </el-container>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
        activeIndex: "1",
        logoImg: require("../assets/logo.png")
        };
    },
    methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
        },
    }
};
</script>

<style scoped>
.el-divider{
  margin-top: 0px;
  margin-bottom: 0px;
}

.el-header {
  color: #333;
  text-align: center;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0px !important;
}

.el-menu-item {
  border-radius: 6px;
  font-weight: bold;
  margin: 6px !important;
  border-bottom-width: 0px !important;
  font-size: 20px !important;
  color: rgba(0, 0, 0, 0.7) !important;
}

.el-menu-item:not(.is-disabled):hover {
  background: rgba(0, 0, 0, 0.3) !important;
}
</style>