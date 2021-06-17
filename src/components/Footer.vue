
<template>
        <el-divider></el-divider>
        <div class="ContactWay">
        <div class="ContactItem" v-for="item in ContactItems" :key="item.id">
            <a :href="item.link" target="_blank">
            <SvgIcon class="iconSize" :iconname="item.icon" />
            </a>
        </div>
        </div>
        <div class="ContactWay">
        <p>© 2016-2021 Dogif. All rights reserved.</p>
        </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

export default {
    name: 'Footer',
    data() {
        return {
            ContactItems: [
                {
                id: 1,
                icon: "icon-telegram",
                title: "Fast",
                content: "Record and share animation with just a few clicks",
                link:"",
                },
                {
                id: 2,
                icon: "icon-twitter",
                title: "Playback",
                content: "With playback function, easily record again if you are not satisfied",
                link:"",
                }
            ],
        };
    },
    components: {
        SvgIcon
    }
};
</script>

<style scoped>
.ContactWay {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 0 auto;
}

.iconSize {
  font-size: 32px !important;
  margin: 12px;
}
</style>