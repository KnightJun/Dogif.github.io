
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
        <p>© 2021-2021 Dogif.top All rights reserved.</p>
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
                link:"https://t.me/joinchat/umFGwk5RNrI5ZDBl",
                },
                {
                id: 2,
                icon: "icon-twitter",
                link:"https://twitter.com/KnightDJun",
                },
                {
                id: 3,
                icon: "icon-github",
                link:"https://github.com/KnightJun/Dogif",
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