<template>
<div class="banner-container">
<slot class="background-image" name="background-image"></slot>

<div class="banner-content">
    <h1 class="banner-title"><slot name="banner-title"></slot></h1>
    <slot class="banner-text"></slot>
</div>

</div>
</template>

<style>
.banner-container{
    width:100%;
    display: block;

}

.background-image{
    position: absolute;    
    top:0;
    height: 100%;
}

.banner-container img{
    width: 100%;
    height: auto;
    filter: opacity(50%);
}

.banner-content{
    position: absolute;
    top:0px;
    left: 0px;
    height: 100%;
    width: 100%;

}

.banner-title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    color: white;
    font-size: 80px;
    /* font-family: Cochin; */
    font-weight: 1000;
}
</style>