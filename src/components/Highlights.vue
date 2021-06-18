
<template>
  <el-main>
    <div class="HighlightsDiv">
      <div class="ShowItem" v-for="item in HighPoints" :key="item.id">
        <SvgIcon class="iconSize" :iconname="item.icon" />
        <h2>{{item.title}}</h2>
        <p>{{item.content}}</p>
      </div>
    </div>
  </el-main>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  name: "Highlights",
  data() {
    return {
      HighPoints: [
        {
          id: 1,
          icon: "icon-rocket",
          title: "Fast",
          content: "Few clicks to record and share animation",
        },
        {
          id: 2,
          icon: "icon-play",
          title: "Playback",
          content:
            "What you see is what you get",
        },
        { id: 3, icon: "icon-POWER",
             title: "Powerful",
             content: "Gif/APng/Webp, keylogging , playback progress bar, and much more"},
        { id: 4, icon: "icon-setting",
            title: "Customizable",
            content: "Global hotkeys, colour palette, compression levels, lossless, and more settings"},
      ],
    };
  },
  components: {
      SvgIcon
  },
};
</script>

<style scoped>
.HighlightsDiv {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  margin: 0 auto;
}

.iconSize {
  font-size: 48px !important;
}

.ShowItem{
    text-align: center;
    max-width: 256px;
    color: $mainTextColor;
}
</style>