<script lang="ts">
import IconViews from "../icons/IconViews.vue";
import IconRating from "../icons/IconRating.vue";
import IconTime from "../icons/IconTime.vue";

export default{
    props: {
        views: { type: Boolean },
        rating: { type: Boolean },
        readingTime: { type: Boolean },
    },
    components: { IconViews, IconRating, IconTime }
}
</script>

<template>
    <div class="item-container">
        <div class="picture-section"> 
            <slot name="picture"></slot>
        </div>
        <div class="contents">
            <div class="item-contents-list">
                <h3 class="item-title"><slot name="title"></slot></h3>
                <div class="description"> <slot name="description"></slot></div>

            </div>
            <div class="item-other-info">
                <div  class="other-info-element" v-if="views">
                    <IconViews class="info-icon"></IconViews><div><slot name="views"></slot></div>
                </div>
                <div class="other-info-element"  v-if="rating">
                    <IconRating class="info-icon"></IconRating><div><slot name="rating"></slot></div>
                </div>
                <div  class="other-info-element" v-if="readingTime">
                    <IconTime class="info-icon"></IconTime><div><slot name="minutes"></slot> min.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import "../../assets/base.css";

    .item-container{
        display: flex;
        flex-direction: row;
        
        box-shadow: white 2 1 5px;
        border-radius: 7px;

        background-color: var(--color-background-soft);
        margin-bottom: 10px;
    }

    .picture-section{
        height: 100%;
        max-width: 30%;      
        padding: 10px;  
    }

    .picture-section img {
        width: 100px;
        height: 100px;
    }

    .contents{
        display: block;
    }

    .item-contents-list{
        display: flex;
        flex-direction: column;
    }

    .item-title{
        font-weight: 400;
    }

    .item-other-info{
        display: flex;
        flex-direction: row;
        height: 40px;

        padding-bottom: 10px;
        bottom: 0;
        position: absolute;
    }

    .other-info-element{
        padding-right: 10px;
        line-break: s;
    }

    .other-info-element div{
        display: inline;
        padding: 5px;
    }

    .info-icon{
        transform: translate(0, 30%);
    }
</style>
