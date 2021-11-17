<template>
  <div class="">
    <div class="">

      <div class="d-flex">
<!--        <div  @click="$emit('close-open-task')" :style="{ left: first ? '230px':'0' }" class="arrow select tw-cursor-pointer" >-->
<!--          <v-icon color="white">mdi-chevron-right</v-icon>-->
<!--        </div>-->

        <div :style="{ width: first ? '230px' : '0',}"
             class="pro mt=8 first">
          <MenuDrawer  @close-open-task="$emit('close-open-task')"/>
        </div>
      </div>
      <div class="d-flex" >
            <div  @click="$emit('close-open-task')" :style="{left: second ? '350px':'0' }" class="arrow select tw-cursor-pointer" >
              <v-icon color="white">mdi-chevron-right</v-icon>
            </div>

        <div :style="{ width: second ? '350px' : '0', left:first?'225px':'0'}" class="second">
          <TaskDrawer/>
        </div>
      </div>


    </div>
  </div>

</template>

<script>

import MenuDrawer from "@/components/MenuDrawer";
import TaskDrawer from "@/components/TaskDrawer";
export default {
  name: "LeftDrawer",
  components: {TaskDrawer, MenuDrawer},
  props: {
      first: [Boolean],
      second: [Boolean],
     third:[Boolean]

  },
  methods:{

    openAndCloseTask(){
      this.$emit('open-close-task')
    }
  }

}
</script>

<style scoped>

.second {
  background: #FEFEFE;
  position: relative;
  /*top: 0;*/
  left: 0;
  width: 0; /* initially */
  overflow: hidden;
  height: 93vh;
  z-index: 200;
  transition: all 0.2s;
}


.pro {
  transition-property: width, visibility, transform;
  transition-timing-property: ease-out;
  transition-duration: 1.3s;
}



.first {
  position: absolute;
  top: 0;
  left: 0;
  width: 0; /* initially */
  overflow: hidden;
  background-color: #0F808C !important;
  height: 93vh;
  /*z-index: 1;*/
  z-index: 199;
  transition: all 0.2s;

}
.third {
  position: relative;
  /*top: 0;*/
  right: 0;
  width: 0; /* initially */
  overflow: hidden;
  height: 350px;
  z-index: 200;
  transition: all 0.2s;
  background-color: olive;


}


.select {
  position: absolute;
  /*top: 0;*/
  left: 0;
  width: 40px;
  height: 44px;
  background: #200E32;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
}


.second-close{
  transform: translateX(100%);
  transition: transform ease-out 2.3s;
}
.second-open{
  transform: translateX(0);

}


</style>
