<script lang="ts">
import IconViews from "../icons/IconViews.vue";
import IconRating from "../icons/IconRating.vue";
import IconTime from "../icons/IconTime.vue";

export default{
    props: {
        views: { type: Boolean },
        rating: { type: Boolean },
        readingTimeMinutes: { type: Boolean },
    },
    components: { IconViews, IconRating, IconTime }
}
</script>

<template>
    <div class="item-container">
        <div class="picture-section"></div>
        <div class="contents">
            <h2 class="item-title"></h2>
            <div class="description"></div>
            <div class="item-other-info">
                <div v-if="views">
                    <IconViews></IconViews> <slot name="views"></slot>
                </div>
                <div v-if="rating">
                    <IconRating></IconRating> <slot name="rating"></slot>
                </div>
                <div v-if="readingTimeMinutes">
                    <IconTime></IconTime> <slot name="readingTimeMinutes"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
