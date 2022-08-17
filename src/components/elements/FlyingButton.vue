<script lang="ts">
export default{
    data(){
       return{
            x: 0,
            y: 0,
            distanceMultiplier: 200,
       }
    },
    methods:{
        moveToRandom(){
            this.x = Math.floor(Math.random() * 2 * this.distanceMultiplier) - this.distanceMultiplier;
            this.y = Math.floor(Math.random() * 2 * this.distanceMultiplier) - this.distanceMultiplier;
        }
    },
    computed:{
        cssPositionVars():object {
            return{
                '--position-top': this.y + 'px',
                '--position-left': this.x + 'px',
            }
        }
    }
}
</script>

<template>
    <div @click="moveToRandom()" class="flying-button" :style="cssPositionVars">Next</div>
</template>

<style>
.flying-button{
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    user-select: none;

    background-color: #15ba3b;
    padding: 8px;
    padding-left: 25px;
    padding-right: 30px;
    border-radius: 10px;

    min-width: 100px;

    position: relative;

    top: var(--position-top);
    left: var(--position-left);

    transition: 0.4s ease;

    z-index: 4;
}
</style>