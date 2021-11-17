<template>
  <v-app>
    <Header :drawer="first"  @open-menu="openAndCloseMenuDrawer"/>
    <v-main v-bind:style="{ backgroundImage: 'url(' + require('@/static/distance.png') + ')'}"  style="background-size: cover !important;height:95vh;overflow: hidden">
      <DrawerWrapper :first="first" :second="second" :third="third" @open-close-task="openAndCloseTaskDrawer"  @open-close-agent="openAndCloseAgentDrawer" />
      <Nuxt/>
    </v-main>

  </v-app>
</template>

<script>
import Header from "~/components/Header";
import DrawerWrapper from "@/components/DrawerWrapper";
export default {
  components: {DrawerWrapper,Header},
  data() {
    return {
      first: false,
      third: false,
      second: false,
    }
  },
  methods: {
    openAndCloseMenuDrawer(){
      this.first = !this.first;
    },
    openAndCloseTaskDrawer(){
      this.second = !this.second;
    },
    openAndCloseAgentDrawer(){
      this.third = !this.third;
    },
  }
}
</script>
<style>
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot, .v-text-field.v-text-field--enclosed .v-text-field__details {
  background: #F1F1F1 !important;
  border: 2px solid #FFFFFF !important;
  box-sizing: border-box !important;
}

.drawer {
  background-color: #0F808C !important;
  color: #FFFFFF !important;
}

.company-details {
  background: #1C697A;
  padding: 20px;
  color: #C2E2E9;

}

.company-details span {
  margin-bottom: 20px;
}

.task-agent-heading {
  background-color: #46B2C8 !important;
  color: white;
  padding: 10px;
  font-weight: bold;

}

.secondDrawer {
  background: #FEFEFE !important;
  border-radius: 4px !important;
}

.arrow {
  width: 40px;
  height: 42px;
  background: #200E32;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toggle{
  background: #FFFFFF !important;
  box-shadow: 0px 2px 4px rgba(2, 58, 89, 0.16) !important;
}
.agent-card .theme--light.v-sheet{
  background-color: #0F808C !important;

}
.menu-list .theme--light.v-sheet{
  background-color: #0F808C !important;

}
.scroll {
  max-height: 680px;
  overflow-y: auto;
  overflow-x: hidden;

}

.scroll::-webkit-scrollbar {
  background: transparent !important;
  width: 5px;
  height: 8px;
}

.scroll::-webkit-scrollbar-thumb {
  background: #c4c4c4 !important;
  max-height: 20px !important;
  border-radius: 6px;
}

</style>
