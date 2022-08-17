<template>
<div class="comment-wrapper">
    <div class="user-details">
        <div class="user-picture"> <slot name="user-picture"></slot></div>
        <slot name="username"></slot>
    </div><br/><br/>
    <div class="comment-content">
        <slot name="comment-content"></slot>
    </div>
</div>
</template>