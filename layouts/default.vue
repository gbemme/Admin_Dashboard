<template>
  <v-app>
    <Header :miniVariant="miniVariant" @open-menu="openAndCloseMenuDrawer"/>
    <v-main v-bind:style="{ backgroundImage: 'url(' + require('@/static/distance.png') + ')'}"  style="background-size: cover !important;height:100vh">
      <div class="tw-flex tw-justify-between">
        <div class="tw-flex">
          <MenuDrawer @open-close-task="openAndCloseTaskDrawer" :drawer="drawer" :mini-variant="miniVariant" :clipped="clipped"/>
          <TaskDrawer :clipped="clipped" :second-mini-variant="secondMiniVariant" @close-task="itemsDrawer=false" :items-drawer="itemsDrawer"/>
        </div>
        <AgentDrawer :right-drawer="rightDrawer" :clipped="clipped" :second-mini-variant="secondMiniVariant" @open-close-agent="openAndCloseAgentDrawer" :items-drawer="itemsDrawer"/>
      </div>
      <Nuxt/>
    </v-main>

  </v-app>
</template>

<script>
import Header from "~/components/Header";
import MenuDrawer from "~/components/MenuDrawer";
import TaskDrawer from "~/components/TaskDrawer";
import AgentDrawer from "~/components/AgentDrawer";
export default {
  components: {AgentDrawer, TaskDrawer, MenuDrawer, Header},
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      secondMiniVariant: false,
      right: true,
      rightDrawer: false,
      itemsDrawer: false,
    }
  },
  methods: {
    openAndCloseMenuDrawer(){
      this.drawer = !this.drawer;
    },
    openAndCloseTaskDrawer(){
      this.itemsDrawer = !this.itemsDrawer;
      // this.miniVariant = true
    },
    openAndCloseAgentDrawer(){
      this.rightDrawer = !this.rightDrawer;
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
  background-color: #0F808C !important;
  color: white;
  padding: 10px;

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
</style>
