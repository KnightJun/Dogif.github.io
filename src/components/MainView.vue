
<template>
    <el-main>
    <el-row :gutter="20">
      <el-col :span="12"  style="text-align: middle;" align="right">
        <div class="banner" style="text-align: middle;" align="middle">
          <div class="banner-desc">
            <h1>Dogif</h1>

            <h4>
              Start with a simple click.
              <br>
              Fast recording, small files, clear images.
            </h4>
            <br>
            <el-button id="down-Install" class="" type="primary" @click="DownClick($event)">
              <SvgIcon style="color:white" iconname="icon-window" />
              Installer
            </el-button>
            <el-button id="down-Portable" class="" type="primary" @click="DownClick($event)">
              <SvgIcon iconname="icon-zip" />
              Portable
            </el-button>
            <p class="vertext"> Version 1.0 </p>
          </div>
        </div>
      </el-col>
      <el-col :span="12" justify="center" style="text-align: left;">
        <el-image class="MainImage" :src="mainui" style="display: inline-block;" fit="scale-down"></el-image>
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
  methods: {
    DownClick(event){
      event.currentTarget.blur();
      var downurl="https://github.com/KnightJun/Dogif/releases/download/v1.0/dogif_1.0_installer.exe";
      if(event.currentTarget.id == "down-Portable"){
        downurl="https://github.com/KnightJun/Dogif/releases/download/v1.0/Dogif-v1.0.0.win64.zip"
      }
      window.open(downurl)
    }
  }
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
    color: rgb(80,80, 80);
    margin: 10px 40px 5px 0px;
}
.vertext{
    font-size: 10px;
    color: rgb(80, 80, 80);
}
.MainImage{
  max-height: 480px;
  max-width: 480px;
}
</style>