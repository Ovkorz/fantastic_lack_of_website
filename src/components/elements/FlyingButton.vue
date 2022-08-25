<script lang="ts">
import { parse } from '@babel/parser';
import anime from 'animejs/lib/anime.es.js';

export default{
    data(){
       return{
            x: 0,
            y: 0,
            widthHalf: 0,
            heightHalf: 0,
            offsetX: 0,
            offsetY: 0,

            movementDuration: 0,

            distanceMultiplier: 10,
            repulsionMultiplier: 10, //repulsive force pushing button away from pointer
            deceleration: 400,
            angleCoef: 1,

            minDistance: 20,
            minDuration: 0.2,

            correctAnimation:false,

            mouseX:0,
            mouseY:0,
            
            mouseXPrev:0,
            mouseYPrev:0,

            destination: {
                x:0,
                y:0,
            },
       }
    },
    methods:{
        moveToRandom(){
            this.x = Math.floor(Math.random() * 2 * this.distanceMultiplier) - this.distanceMultiplier;
            this.y = Math.floor(Math.random() * 2 * this.distanceMultiplier) - this.distanceMultiplier;
        },
        getScroll(){
            const body = document.body
            
            const scrollLeft = window.pageXOffset || this.$refs.buttonAreaDOM.scrollLeft || body.scrollLeft
            const scrollTop = window.pageYOffset || this.$refs.buttonAreaDOM.scrollTop || body.scrollTop;

            return {
                x: scrollLeft,
                y: scrollTop,
            }
        },
        updateMousePos(mouseEvent: MouseEvent){
            this.mouseXPrev = this.mouseX;
            this.mouseYPrev = this.mouseY;

            this.mouseX = mouseEvent.clientX;
            this.mouseY = mouseEvent.clientY;
        },
        calculateDestination(){
            const dirX = this.mouseX - this.mouseXPrev;
            const dirY = this.mouseY - this.mouseYPrev;

            const angle = Math.atan2(dirY, dirX);
            const minX = this.minDistance * Math.cos(angle);
            const minY = this.minDistance * Math.sin(angle);

            const buttonDestination = this.destination;
            const vectMouseToButton = this.vectButtonMouse;
        
            let destX = buttonDestination.x + dirX * this.distanceMultiplier + minX;
            let destY = buttonDestination.y + dirY * this.distanceMultiplier + minY;
            destX += (vectMouseToButton.x !== 0) ? (this.repulsionMultiplier / vectMouseToButton.x) : 0;
            destY += (vectMouseToButton.y !== 0) ? (this.repulsionMultiplier / vectMouseToButton.y) : 0;
            
            return {
                x: destX,
                y: destY,
            }
        },
        calculateDurationMs(dist: Number): Number {
            let seconds = Math.sqrt(2 * dist / this.deceleration);
            return seconds * 1000;
        },
        move(){
            this.destination = this.calculateDestination();

            const distX = this.destination.x - this.x;
            const distY = this.destination.y - this.y;

            const distance = Math.sqrt(Math.pow(distX,2) + Math.pow(distY,2));
            const duration = this.calculateDurationMs(distance);

            const movement = anime({
                targets: '.flying-button-area',
                left: this.destination.x,
                top: this.destination.y,
                duration: duration,
                easing: 'cubicBezier(0.333, 0.666, 0.666, 1)',
                autoplay: true,
                // update: (anim) => {
                //     this.
                // }
            })

            this.correctAnimation = true;
        }
    },
    computed:{
        buttonCoordsDocAnime(): object{
            let x_string = anime.get(this.$refs.buttonAreaDOM, 'left');
            let y_string = anime.get(this.$refs.buttonAreaDOM, 'top');

            x_string = x_string.replace( /\D+$/g, '');
            y_string = y_string.replace( /\D+$/g, '');

            const x_relative = parseFloat(x_string)
            const y_relative = parseFloat(y_string)

            return {
                x: x_relative + this.offsetX,
                y: y_relative + this.offsetY,
            }
        },
        vectButtonMouse(): object {
            const buttonPos = this.buttonCoordsDocAnime;
            const buttonCenterPos = {
                    x: buttonPos.x + this.widthHalf,
                    y: buttonPos.y + this.heightHalf,
            }

            const scroll = this.getScroll();
            const mouseXDoc = this.mouseX + scroll.x;
            const mouseYDoc = this.mouseY + scroll.y;
            
            return {
                x: buttonCenterPos.x - mouseXDoc,
                y: buttonCenterPos.y - mouseYDoc,
            }
        }
    },
    created(){
        window.addEventListener('mousemove', e => this.updateMousePos(e));        
    },
    mounted(){
        const buttonRect = this.$refs.buttonAreaDOM.getBoundingClientRect();
        const body = document.body;
        const scroll = this.getScroll();

        this.widthHalf = buttonRect.width / 2;
        this.heightHalf = buttonRect.height / 2;

        this.offsetX  = buttonRect.left +  scroll.x;
        this.offsetY = buttonRect.top + scroll.y;
    },
    unmounted(){
        window.removeEventListener('mousemove', e => this.updateMousePos(e));        
    }
}
</script>

<template>

<div @mouseenter="move()" @mouseleave="()=> {this.correctAnimaion = false;}" class="flying-button-area" :style="cssPositionVars" ref="buttonAreaDOM">
        <div class="flying-button" ref="buttonDOM">Next</div>
    </div>
</template>

<style>
.flying-button{
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    user-select: none;

    background-color: #15ba3b;
    opacity: 100%;

    padding: 8px;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 10px;

    height: 55px;
    width: 100px;
    margin:auto;

    position: relative;
    z-index: 4;
}

.flying-button-area{
    position: relative;
    display: flex;
    place-content: center;
    z-index: 3;

    width: 150px;
    height: 100px;

    top: var(--position-top);
    left: var(--position-left);
    transition: var(--time) cubic-bezier(.05,.97,.42,1.01);

    /* background-color: yellowgreen; */
}
</style>