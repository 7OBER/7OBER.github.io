<template>
  <div id="game1_vue">
    <div id="game1">
      <div id="top">
        <div class="tag">
          <img src="../../public/imgs/1.jpg" />
        </div>
        <div class="tag" >
          <img src="../../public/imgs/5.jpg" />
        </div>
        <div class="tag">
          <img src="../../public/imgs/2.jpg" />
        </div>
        <div class="tag">
          <img src="../../public/imgs/6.jpg" />
        </div>
        <div class="tag">
          <img src="../../public/imgs/3.jpg" />
        </div>
        <div class="tag">
          <img src="../../public/imgs/7.jpg" />
        </div>
        <div class="tag">
          <img src="../../public/imgs/8.jpg" />
        </div>
        <div class="center">选择你的</div>
        <div class="tag">
          <img src="../../public/imgs/4.jpg" />
        </div>
        <div class="tag">
          <img src="../../public/imgs/4.jpg" />
        </div>
        <div class="center">梦想女友</div>
        <div class="tag">
          <img src="../../public/imgs/8.jpg" />
        </div>
        <div class="tag">
          <img src="../../public/imgs/7.jpg" alt />
        </div>
        <div class="tag">
          <img src="../../public/imgs/3.jpg" alt />
        </div>
        <div class="tag">
          <img src="../../public/imgs/6.jpg" alt />
        </div>
        <div class="tag">
          <img src="../../public/imgs/2.jpg" alt />
        </div>
        <div class="tag">
          <img src="../../public/imgs/5.jpg" alt />
        </div>
        <div class="tag">
          <img src="../../public/imgs/1.jpg" alt />
        </div>
      </div>

      <div id="bottom">
        <div id="dingwei" v-for="(item,index) in srcs" :key="index">
          <span>{{item.nums}}</span>

          <img :src="item.src" alt>
          <Btn @click.native="jiayi(index)">+1</Btn>
          <Btn id="ten" @click.native="jiashi(index)">+10</Btn>
        </div>
      </div>
    </div>
    <div id="num">{{num}}</div>
    <div id="btn">
        <Btn id="btn1" @click.native="toubi">投币</Btn>
        <Btn id="btn2" @click.native="kaishi">开始</Btn>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn";
var i = Math.round(Math.random()*15)

export default {
  data() {
    return {
      num: 0,
      b:5,
      srcs: [
        { nums:0, src: require("../../public/imgs/1.jpg") },
        { nums:0, src: require("../../public/imgs/2.jpg") },
        { nums:0, src: require("../../public/imgs/3.jpg") },
        { nums:0, src: require("../../public/imgs/4.jpg") },
        { nums:0, src: require("../../public/imgs/5.jpg") },
        { nums:0, src: require("../../public/imgs/6.jpg") },
        { nums:0, src: require("../../public/imgs/7.jpg") },
        { nums:0, src: require("../../public/imgs/8.jpg") }
      ]
    };
  },
  components:{
      Btn
  },
  methods: {
    toubi() {
      if (this.b==0) {
        alert("您的币已用完");
      } else {
        this.num += 10;
        this.b -=1;
      }
    },
    jiayi(index){
        if (this.num<=0) {
            alert('分数不足，请投币')
        } else {
            this.srcs[index].nums+=1
            this.num-=1
        }
    },
    jiashi(index){
        if (this.num<10) {
            alert('分数不足，请投币')
        } else {
            this.srcs[index].nums+=10
            this.num-=10
        }
    },
    kaishi(){
    var tag = document.querySelectorAll(".tag");
    var count = 1;
    var goround = setInterval(pick, count);	
    var that=this
	document.querySelector("#btn").style.pointerEvents = "none";	
	function pick(){
        for(let i=0;i<tag.length;i++){
				tag[i].style.opacity = "0.3";
        }
		
			if(i == 0){
				tag[6].style.opacity = "0.3";
				tag[i].style.opacity = "1";
				i++;
      }
      else if(i>0 && i<5){
        tag[i-1].style.opacity = "0.3";
				tag[i].style.opacity = "1";
         i++;
      }
      else if(i == 5){
				tag[4].style.opacity = "0.3";
				tag[i].style.opacity = "1";
        i+=2;

      }
      else if(i == 7){
				tag[5].style.opacity = "0.3";
				tag[i].style.opacity = "1";
        i+=2;
      }
      else if(i == 9){
				tag[7].style.opacity = "0.3";
				tag[i].style.opacity = "1";
        i+=6;

      }
      else if(i == 15){
				tag[9].style.opacity = "0.3";
				tag[i].style.opacity = "1";
        i--

      }
      else if(i>10 && i<15){
        tag[i+1].style.opacity = "0.3";
				tag[i].style.opacity = "1";
        i--;
      }
      else if(i == 10){
        tag[11].style.opacity = "0.3";
				tag[i].style.opacity = "1";
        i-=2;

      }
      else if(i == 8){
        tag[10].style.opacity = "0.3";
				tag[i].style.opacity = "1";
        i-=2;

      }
      else if(i == 6){
        
				tag[8].style.opacity = "0.3";
        tag[i].style.opacity = "1";
        i=0

      }		
		count +=5;
		clearInterval(goround)
		if( count < Math.round(Math.random()*100+300) ){
			goround = setInterval(pick, count);
		}
        else{
            document.querySelector("#btn").style.pointerEvents = "auto";
            console.log(i)
            if (i==14 || i==1) {
                that.num=that.num+that.srcs[0].nums*10
            }else if(i==3 || i==12){
                that.num=that.num+that.srcs[1].nums*10
            }else if(i==5 || i==10){
                that.num=that.num+that.srcs[2].nums*10
            }else if(i==6 || i==9){
                that.num=that.num+that.srcs[3].nums*10
            }else if(i==2 || i==12){
                that.num=that.num+that.srcs[4].nums*5
            }else if(i==4 || i==11){
                that.num=that.num+that.srcs[5].nums*5
            }else if(i==7 || i==8){
                that.num=that.num+that.srcs[6].nums*5
            }else if(i==0 || i==15){
                that.num=that.num+that.srcs[7].nums*5
            };
            that.srcs[0].nums=that.srcs[1].nums=that.srcs[2].nums=that.srcs[3].nums=that.srcs[4].nums=that.srcs[5].nums=that.srcs[6].nums=that.srcs[7].nums=0
        }
    }

    }
  }
};
</script>

<style scoped>
#game1_vue{
 -webkit-user-select:none;
 -moz-user-select:none;
 -ms-user-select:none;
 user-select:none;
 width: 100vw;
 height: 100vh;
 background: url(../../public/imgs/bg2.jpg) no-repeat top center;
 background-size: 100%;
}
#game1 {
  width: 60vw;
  height: 100vh;
  float: left;
}
#top {
  margin: 0 auto;
  background: #000;
  width: 48vw;
  height: 32vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2vh;
}
#top .tag {
  width: 8vw;
  height: 8vw;
  box-sizing: border-box;
  
}
#top .tag img {
  width: 100%;
}
#top .center {
  width: 32vw;
  height: 8vw;
  background: url(../../public/imgs/bg.jpg) no-repeat top center;
  background-size: contain;
  color: white;
  text-align: center;
  line-height: 8vw;
  font-size: 7rem;
}
#bottom {
  margin-top: 6vh;
  display: flex;
  justify-content: space-between;
  height: 8vw;
}
#bottom #dingwei {
  width: 6vw;
  height: 6vw;
  position: relative;
  color: red;
  text-align: center;
  text-decoration: none;
}
#bottom #dingwei span{
  border: 2px solid red;
  display: inline-block;
  font-weight: 700;
  font-size: 2rem;
  width: 5rem;
  margin-bottom: 1vh;
}
#bottom #dingwei img {
  width: 6vw;
  height: 6vw;
}
::v-deep #bottom #dingwei button{
 font-size: 1em;
 padding: 4px;
 border-radius: 50%;
 width: 40px;
 height: 40px;
 bottom: -110px;
 position: absolute;
}
::v-deep #bottom #dingwei #btn_vue .btn{
  left: 10px;
}
::v-deep #bottom #dingwei #ten .btn{
    right: 10px;
}
::v-deep #bottom #dingwei .btn:active{
 box-shadow: 0px 3px 0px rgba(219, 31, 5, 1), 0px 3px 6px rgba(0, 0, 0, .9);
 bottom: -116px;
}
#num {
  width: 19vw;
  height: 50vh;
  float: left;
  font-size: 150px;
  line-height: 50vh;
  text-align: center;
  color: red;
}
#btn {
  width: 19vw;
  height: 50vh;
  float: left;
}
::v-deep #btn .btn { 
  font-size: 1em;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
::v-deep #btn #btn1 .btn{
  top: 80px;
  background-color: rgba(87, 219, 51, 1);
  box-shadow: 0px 9px 0px rgba(31, 219, 5, 1), 0px 9px 25px rgba(0, 0, 0, 0.7);
}
::v-deep #btn #btn1 .btn:active {
  box-shadow: 0px 3px 0px rgba(31, 219, 5, 1), 0px 3px 6px rgba(0, 0, 0, 0.9);
  
  top: 86px;
}
::v-deep #btn #btn2 .btn {
  background-color: rgba(87, 51, 219, 1);
  box-shadow: 0px 9px 0px rgba(31, 5, 219, 1), 0px 9px 25px rgba(0, 0, 0, 0.7);
  top: 160px;
}
::v-deep #btn #btn2 .btn:active {
  box-shadow: 0px 3px 0px rgba(31, 5, 219, 1), 0px 3px 6px rgba(0, 0, 0, 0.9);
  position: relative;
  top: 166px;
}
</style>