<script lang="ts">
import TopBanner from "../components/elements/TopBanner.vue"
import SearchBox from "../components/elements/SearchBox.vue"


export default{
    data() {
        return {};
    },
    components: { TopBanner }
}
</script>


<template>

<div class="site-contents">
<TopBanner>
    <template #background-image>
        <img
            src="../assets/images/animals-2222007_1280.jpg"
        >
    </template>
    <template #banner-title>
        Hello
    </template>
</TopBanner>

<main class="article">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</main>

</div>
<div class="side-section">
    <div class="side-item">

    </div>


</div>

</template>

<style>
.site-contents{
    display: grid; 
    grid-template-columns: 1.2fr 0.8fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "article side-section"; 
}

.article { 
    grid-area: article; 
}
.side-section { 
    grid-area: side-section;     
}


</style>
