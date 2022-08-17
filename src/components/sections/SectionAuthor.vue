<script lang="ts">
    import CatalogueItem from "../elements/CatalogueItem.vue"

    export default{
        components:{CatalogueItem},
    }
</script>

<template>

    <h1 style="font-weight: 500;">Author</h1>
    <CatalogueItem :pictureSize="2">
        <template #picture>
            <slot name="author-photo"></slot>
        </template>

        <template #title>
            <span class="author-name">
                <slot name="name"></slot>
            </span>
        </template>

        <template #description>
            <slot name="description"></slot>
        </template>
    </CatalogueItem>
</template>

<style>
.author-name{
    font-size: 30px;
    font-weight: 500;
}
</style>