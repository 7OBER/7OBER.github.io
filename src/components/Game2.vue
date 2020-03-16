<template>
  <div id="game2">
    <div class="left">
      <div v-for="(item,index) in imgs" :key="index" class="big" @click="dianji($event)">
        <div :class="getclass(item.id)" class="one"></div>
        <div class="two"></div>
      </div>
    </div>
    <div class="right">
      <Btn @click.native="kaishi">{{msg}}</Btn>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn";
export default {
  data() {
    return {
      msg: "开始",
      a:0,
      newimgs: [],
      Class: [],
      imgs: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 }
      ]
    };
  },
  components: {
    Btn
  },
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    shuffle(arr) {
      let _arr = arr.slice();
      for (let i = 0; i < _arr.length; i++) {
        let j = this.getRandomInt(0, i);
        let t = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = t;
      }
      return _arr;
    },
    getclass(res) {
      return "box" + res;
    },
    kaishi() {
      this.msg = "重新开始";
      let big = document.getElementsByClassName("big");
      if (this.newimgs.length != 0) {
        for (let i = 0; i < big.length; i++) {
          big[i].children[0].classList.remove('active')
          big[i].children[0].classList.add(`box${this.imgs[i].id}`);
          big[i].children[0].classList.remove(`box${this.newimgs[i].id}`);
        }
      }
      for (let i = 0; i < big.length; i++) {
        big[i].style.pointerEvents = "auto";
        big[i].children[0].style.transform = "rotateY(180deg)";
        big[i].children[1].style.transform = "rotateY(180deg)";
      }
      this.newimgs = this.shuffle(this.imgs);
      for (let i = 0; i < big.length; i++) {
        big[i].children[0].classList.remove(`box${this.imgs[i].id}`);
        big[i].children[0].classList.add(`box${this.newimgs[i].id}`);
      }
    },
    dianji(e) {
      clearTimeout(timer);
      e.target.children[0].classList.add("active");
      e.target.style.pointerEvents = "none";
      e.target.children[0].style.transform = "rotateY(0deg)";
      e.target.children[1].style.transform = "rotateY(0deg)";
      this.Class.push(e.target.children[0].className);
      if (this.Class.length == 2) {
        let big = document.getElementsByClassName("big");
        for (let i = 0; i < big.length; i++) {
          big[i].style.pointerEvents = "none";
        }
        if (this.Class[0] !== this.Class[1]) {
          var timer = setTimeout(() => {
            let active1 = document.getElementsByClassName(`${this.Class[0]}`)[0]
              .parentNode;
            active1.style.pointerEvents = "auto";
            active1.children[0].style.transform = "rotateY(180deg)";
            active1.children[1].style.transform = "rotateY(180deg)";
            e.target.style.pointerEvents = "auto";
            e.target.children[0].style.transform = "rotateY(180deg)";
            e.target.children[1].style.transform = "rotateY(180deg)";
            this.Class = [];
            e.target.children[0].classList.remove("active");
            active1.children[0].classList.remove("active");
            for (let i = 0; i < big.length; i++) {
              big[i].style.pointerEvents = "auto";
            }
          }, 1200);
        } else {
          this.Class = [];
          this.a+=2
          for (let i = 0; i < big.length; i++) {
              big[i].style.pointerEvents = "auto";
            }
          if(this.a==16){
            var timer=setTimeout(()=>{alert('恭喜您已通关，请重新开始');this.a=0},1500)
          }
        }
      }
    }
  }
};
</script>

<style scoped>
#game2{
 width: 100vw;
 height: 100vh;
 background: url(../../public/imgs/bg2.jpg) no-repeat top center;
 background-size: 100%;
}
.left {
  position: absolute;
  left: 50%;
  margin-left: -50vh;
  height: 100vh;
  width: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transform-style: preserve-3d;
}
.left .big {
  position: relative;
  height: 22vh;
  width: 22vh;
  pointer-events: none;
}
.left .big div {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform ease 1s;
}
.left .big .one {
  z-index: 5;
  pointer-events: none;
  backface-visibility: hidden;
}
.left .big .two {
  pointer-events: none;
  background: url(../../public/imgs/bg3.jpg) no-repeat top center;
}
.left .box1 {
  background: url(../../public/imgs/1.jpg) no-repeat top center;
  background-size: contain;
}
.left .box2 {
  background: url(../../public/imgs/2.jpg) no-repeat top center;
  background-size: contain;
}
.left .box3 {
  background: url(../../public/imgs/3.jpg) no-repeat top center;
  background-size: contain;
}
.left .box4 {
  background: url(../../public/imgs/4.jpg) no-repeat top center;
  background-size: contain;
}
.left .box5 {
  background: url(../../public/imgs/5.jpg) no-repeat top center;
  background-size: contain;
}
.left .box6 {
  background: url(../../public/imgs/6.jpg) no-repeat top center;
  background-size: contain;
}
.left .box7 {
  background: url(../../public/imgs/7.jpg) no-repeat top center;
  background-size: contain;
}
.left .box8 {
  background: url(../../public/imgs/8.jpg) no-repeat top center;
  background-size: contain;
}
/* .left .big:active div{
  transform: rotateY(-180deg);
} */
.right {
  width: 20vw;
  height: 100vh;
  position: absolute;
  right: 0;
}
::v-deep .btn {
  font-size: 3em;
  top: 400px;
  width: 260px;
  border-radius: 8px;
}
::v-deep .btn:active {
  top: 406px;
}
</style>