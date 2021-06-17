
<template>
    <el-main>
      <el-carousel
        :interval="60000"
        height="480px"
        indicator-position="outside"
        arrow="never"
      >
        <el-carousel-item v-for="item in images" :key="item.id">
          <div style="text-align:center">
            <el-image :src="item.url" fit="contain"></el-image>
            <h3>{{item.title}}</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-main>
</template>

<script>
export default {
    name: 'FeatureView',
    data() {
        return {
        images: [
            {id:1, url: require("../assets/feature/feature.png"), title: "Easy to use control panel"},
            {id:2, url: require("../assets/feature/fastRecord.webp"), title: "Smooth, high frame rate screen recording"},
            {id:3, url: require("../assets/feature/keylogger.webp"), title: "Demonstrating keyboard and mouse operation during screen recording"},
            ],
        };
    },
  components: {
  },
};
</script>

<style scoped>

.bgradient {
  background-image: linear-gradient(135deg, #fddb92 10%, #d1fdff 100%);
}

.el-carousel__item {
  width: 100%;
  height: 100%;
  display: flex !important;
  justify-content: center !important;
}

</style>