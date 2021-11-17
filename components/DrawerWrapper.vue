<template>
<div class="d-flex">
  <LeftDrawer @close-open-task="openAndCloseTask" :first="first" :second="second"/>
  <div class="d-flex " style="position: absolute;right:0" >
    <div class="arrow tw-cursor-pointer select" :style="{right: third ? '355px':'0px',marginRight: third ?'-5px':'5px'}"   @click="openAndClose" >
      <v-icon color="white">mdi-chevron-left</v-icon>
    </div>
<!--    <div @click="third=!third" :style="{left: third ? '-55px':'0' }" class="select">-->
<!--      Select third-->
<!--    </div>-->
    <div :style="{ width: third ? '350px' : '0',}" class="pro third">
      <AgentDrawer/>
    </div>
  </div>
</div>
</template>

<script>
import LeftDrawer from "@/components/LeftDrawer";
import AgentDrawer from "@/components/AgentDrawer";
export default {
name: "DrawerWrapper",
  components: {AgentDrawer, LeftDrawer},
  props: {
    first: [Boolean],
    second: [Boolean],
    third:[Boolean]
  },
  methods:{
    openAndClose(){
      this.$emit('open-close-agent')
    },
    openAndCloseTask(){
      this.$emit('open-close-task')
    }
  }

}
</script>

<style scoped>
.pro {
  transition-property: width, visibility, transform;
  transition-timing-property: ease-out;
  transition-duration: 1.3s;
}
.third {
  position: relative;
  /*top: 0;*/
  right: 0;
  width: 0; /* initially */
  overflow: hidden;
  height: 93vh;
  /*z-index: 1;*/
  z-index: 200;
  transition: all 0.2s;
  background: #FEFEFE;
  /*z-index: 1;*/
  /*z-index: 199;*/
  /*transition: all 0.2s;*/

}
.select{
  position: absolute;
  /*top: 0;*/
  right: 0;
  width: 40px;
  height: 44px;
  background: #200E32;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
}
</style>
