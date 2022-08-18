<script lang="ts">
import TopBanner from "../components/elements/TopBanner.vue"
import SearchBox from "../components/elements/SearchBox.vue"
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from '@dafcoe/vue-collapsible-panel'
import CatalogueItem from '../components/elements/CatalogueItem.vue'
import SectionAuthor from '../components/sections/SectionAuthor.vue'
import FlyingButton from '../components/elements/FlyingButton.vue'
// import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

export default{
    data() {
        return {};
    },
    components: { TopBanner, VueCollapsiblePanelGroup, VueCollapsiblePanel, CatalogueItem, SectionAuthor, FlyingButton }
}
</script>


<template>

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
<div class="site-contents">

<div class="article">
    <main >
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

    <div class="navigation-section">
        <FlyingButton/>
    </div>
    <br><br>
    <div class="author-section">
        <SectionAuthor>
            <template #author-photo>
                <img 
                src="../assets/images/sad_pepe.png" 
                alt="Mr. Pepe's photo"
                
                width="150"
                height="350"
                >
            </template>
            <template #name>Mr. Sad Pepe</template>
            <template #description>
                He may be a little sad boi sometimes
                but he makes great lasagna! 
            </template>
        </SectionAuthor>
    </div>
</div>




<div class="side-section">
    <div class="side-item">
        <vue-collapsible-panel-group class="expandable-items">
        <vue-collapsible-panel :expanded="false">
        <template #title>
            Panel A Title
        </template>
        <template #content>
            Panel A Content
        </template>
        </vue-collapsible-panel>

        <vue-collapsible-panel :expanded="false">
        <template #title>
            Panel B Title
        </template>
        <template #content>
            Panel B Content
        </template>
        </vue-collapsible-panel>
        </vue-collapsible-panel-group>
    </div>

    <br><br>

    <h2>Suggested articles</h2>
    <div class="side-item">
        <CatalogueItem views rating readingTime>
            <template #picture>
                <img 
                src="../assets/images/scientists.jpg" 
                alt="[scientists]"
               
            > </template>

            <template #title>The Institute of Unfinished Research has concluded 
                            that 6 out of 10 people.</template>

            <template #views>19</template>
            <template #rating>4.5</template>
            <template #minutes>3-5</template>
        </CatalogueItem>

        <CatalogueItem views rating readingTime>
            <template #picture>
                <img 
                src="../assets/images/watermelon.jpg" 
                alt="[watermelon]"
               
            > </template>

            <template #title>You've been eating watermelon all wrong!!!1!</template>

            <template #views>34</template>
            <template #rating>3.5</template>
            <template #minutes>5-7</template>
        </CatalogueItem>

         <CatalogueItem views rating readingTime>
            <template #picture>
                <img 
                src="../assets/images/art.jpg" 
                alt="[art]"
               
            > </template>

            <template #title>Famous piece of art stolen!!!! </template>

            <template #views>3</template>
            <template #rating>5.0</template>
            <template #minutes>10</template>
        </CatalogueItem>
    </div>
</div>
</div>

</template>

<style>
@import '../assets/base.css';

.site-contents{
    display: grid; 
    grid-template-columns: 1.2fr 0.8fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "article side-section"; 

    padding:30px;
}

.article { 
    padding: 20px;

    grid-area: article; 
}

.navigation-section{
    display: flex;
    flex-direction: row-reverse;
    padding: 20px;
}



.side-section { 
    grid-area: side-section;     
}

.side-section h2{
    font-weight: 600;
}


.vcpg[data-v-63943e43] {
    border: 1px solid var(--border-color);
    border-radius: 4px;
    width: 100%
}

.vcpg[data-v-63943e43] .vcp * {
    box-sizing: border-box
}

.vcpg[data-v-63943e43] .vcp__header {
    background-color: var(--vt-c-black);
    height: 46px;
    transition: background-color .3s ease
}

.vcpg[data-v-63943e43] .vcp__header:hover {
    background-color: var(--vt-c-black-soft)
}

.vcpg[data-v-63943e43] .vcp__header:active {
    background-color: var(--vt-c-black-soft)
}

.vcpg[data-v-63943e43] .vcp:not(:first-of-type) .vcp__header {
    border-top: 1px solid var(--border-color)
}

.vcpg[data-v-63943e43] .vcp__header-title {
    font-weight: 500
}

.vcpg[data-v-63943e43] .vcp__body {
    border-top: 1px solid var(--border-color);
    background-color: var(--vt-c-black-mute)
}

.vcp__header[data-v-64321428] {
    display: flex;
    padding: 12px;
    pointer-events: none
}

.vcp--expandable .vcp__header[data-v-64321428] {
    pointer-events: auto;
    cursor: pointer
}

.vcp__header-title[data-v-64321428] {
    display: flex;
    align-items: center;
    flex: 1
}

.vcp__header-icon[data-v-64321428] {
    display: flex;
    align-items: center;
    transition: transform .3s cubic-bezier(.5, .25, 0, 1)
}

.vcp--expanded .vcp__header-icon[data-v-64321428] {
    transform-origin: center;
    transform: rotate(180deg)
}

.vcp__header-icon>span[data-v-64321428] {
    display: flex;
    height: 24px;
    width: 24px
}

.vcp__header-icon[data-v-64321428] svg {
    height: 100%;
    width: 100%
}

.vcp__body[data-v-64321428] {
    overflow: hidden;
    transition: all .3s cubic-bezier(.5, .25, 0, 1)
}

.vcp__body-content[data-v-64321428] {
    padding: 12px
}

.slide-enter-from[data-v-64321428],
.slide-leave-to[data-v-64321428] {
    opacity: .25
}
</style>
