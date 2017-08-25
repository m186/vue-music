<template>
    <div class="song-list">
        <ul>
            <li @click="selectItem(song, index)" v-for="(song, index) in songs" class="items">
                <div class="content">
                    <h2 class="name">{{song.name}}</h2>
                    <p class="desc">{{getDesc(song)}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        songs: {
            type: Array,
            default: []
        }
    },
    methods: {
        getDesc(song) {
            return `${song.singer}.${song.album}`
        },

        // 列表点击事件
        selectItem(item, index) {
            this.$emit('select', item, index)
        }
    }
}
</script>

<style>
    .items{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 64px;
        font-size: 10px;
        margin-left:-30px;
        text-align: left;
        margin-bottom: 6px;
    }
    .rank{
        flex: 0 0 25px;
        width: 25px;
        margin-right: 30px;
        text-align: center;
    }
    .icon{
        display: inline-block;
        width: 25px;
        height: 24px;
        background-size: 25px 24px;
    }
    /* .icon0{
        bg-image('first');
    }
    .icon1{
        bg-image('second');
    }
    .icon2{
        bg-image('third');
    }*/
    .text{
        color: #fff;
        font-size: 14px;
    }
    .content{
        flex: 1;
        line-height: 14px;
        overflow: hidden;
    }
    .name{
        /* no-wrap(); */
        color: #fff;
    }
    .desc{
        /* no-wrap() */
        margin-top: 4px;
        color: #fff;
    }
</style>
