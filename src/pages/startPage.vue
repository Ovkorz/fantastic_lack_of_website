<script lang="ts">
import { def } from "@vue/shared";
import RouterLink from "vue-router";

export default{}

</script>

<template>

  <div id="hidden-text-wrapper">

    <div id="hidden-text">
        So, as you probably already know, there's no website.<br>
        However, considered the fact that you're actually reading this, we have decided to honor your achievement.<br><br>

        Here's a link that leads somewhere. We're not sure...<br><br>

        <RouterLink :to="{ name: 'escapingButton' }"><b>[click]</b></RouterLink>
    </div>
  </div>

</template>

<style>
    #hidden-text-wrapper{
        background-color: black;
        color: black;


        position: absolute;
        top:0px;
        left: 0px;

        display: flex;
        place-items: center;
        align-items: center;

        /* display: block;
        text-align: center;
        margin: auto;
        padding: auto; */


        height: 100%;
        width: 100%;
/* 
        text-align: center;
        width: 100%; */

}

#hidden-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

a {
    color: black;
    text-decoration: none;
}
</style>