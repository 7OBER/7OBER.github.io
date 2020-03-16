<template>
    <div id="home">
        <Btn @click.native="tiaozhuan">开始游戏</Btn>  
    </div>
    
</template>

<script>
import Btn from "../components/Btn";
export default {
    methods:{
        tiaozhuan(){
            this.$router.push('/Game')
        }
    },
    components:{
        Btn
    }
}
</script>

<style scoped>
#home{
    width: 100vw;
    height: 100vh;
    background: url(../../public/imgs/dali.jpg) no-repeat top center;
}
::v-deep .btn{
  font-size: 3em;
  top: 500px;
  width: 260px;
  border-radius: 8px;
}
::v-deep .btn:active{
  top: 506px;
}
</style>