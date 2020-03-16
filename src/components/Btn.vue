<template>
<div id="btn_vue">
    <button class="btn"><slot></slot></button>
</div>
</template>

<script>
export default {};
</script>

<style scoped>

.btn {
  position: relative;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  background-color: rgba(219, 87, 51, 1);
  font-family: "Microsoft YaHei", 微软雅黑, 宋体;
  font-weight: 700; 
  display: block;
  padding: 4px;
  box-shadow: 0px 9px 0px rgba(219, 31, 5, 1), 0px 9px 25px rgba(0, 0, 0, 0.7);
  margin: 0 auto;
  text-align: center;
  transition: all 0.1s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  /* font-size: 3em;
  top: 500px;
  width: 260px;
  border-radius: 8px; */

}
.btn:active {
  box-shadow: 0px 3px 0px rgba(219, 31, 5, 1), 0px 3px 6px rgba(0, 0, 0, 0.9);
  /* top: 506px; */
}
</style>