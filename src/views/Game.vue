<template>
    <div>
    <nav>
        <Btn><router-link to="/Game/Game1">游戏一</router-link></Btn>
        <br>
        <Btn><router-link to="/Game/Game2">游戏二</router-link></Btn>
          
   </nav>
    <router-view/>

    </div>
</template>

<script>
import Btn from "../components/Btn";
export default {
    components:{
        Btn
    }
}
</script>

<style scoped>
nav{
    float: left;
    height: 100vh;
    width: 20vw;
}
::v-deep nav .btn{
 font-size: 3em;
 border-radius: 8px;
 width: 200px;
 top: 300px;
}
::v-deep nav .btn:active{
 box-shadow: 0px 3px 0px rgba(219, 31, 5, 1), 0px 3px 6px rgba(0, 0, 0, .9);
 top: 306px;
}
a{
    text-decoration: none;
    color: white;
}
</style>