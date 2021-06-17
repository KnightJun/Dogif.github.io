
<template>
    <el-main>
    <el-row :gutter="20">
      <el-col :span="12"  style="text-align: middle;" align="right">
        <div class="banner" style="text-align: middle;" align="middle">
          <div class="banner-desc">
            <h1>Dogif</h1>

            <h4>
              Dogif is a powerful and easy-to-use screen recorder that can
              record your screen with dynamic pictures in different formats and
              visualize your keystrokes. Start with a simple click. Fast
              recording, small files and clear images.
            </h4>
            <el-button class="ButtonText" type="primary">
              <SvgIcon style="color:white" iconname="icon-window" />
              Installer
            </el-button>
            <el-button class="ButtonText" type="primary">
              <SvgIcon iconname="icon-zip" />
              Portable
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="12" justify="center" style="text-align: left;">
        <el-image :src="mainui" style="display: inline-block;" fit="scale-down"></el-image>
      </el-col>
    </el-row>
    </el-main>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";
export default {
    name: 'MainView',
    data() {
        return {
        mainui: require("../assets/mainui.png"),
        };
  },
  components: {
      SvgIcon
  },
};
</script>

<style scoped>
.banner {
  margin-bottom: 80px;
  max-width: 720px;
}
.el-row {
    align-items: center;
}
h4{
    font-size: 18px;
    line-height: 28px;
    color: rgb(20, 20, 20);
    margin: 10px 40px 5px 0px;
}
.ButtonText{
  font-size: 32px;
}
</style>