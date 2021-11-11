<template>
<div>
  <v-navigation-drawer
    v-if="drawer"
    v-model="drawer"
    :clipped="clipped"
    :mini-variant="miniVariant"
    class="drawer white--text"
    height="98vh"
    permanent
  >
    <div :style="[miniVariant?{display:'none'}:{display:'block'}]" class="company-details">
      <h4 class="font-weight-bold">Cheta And Daughters<br> Limited</h4>
      <span>RC123456789</span>
    </div>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        color="white"
        @click.stop="$emit('open-close-task')"
      >
        <v-list-item-action>
          <v-img :src="item.icon" ></v-img>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="white--text tw-my-4 font-weight-bold" v-text="item.title"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
export default {
name: "MenuDrawer",
  props:{
    drawer:[Boolean],
    clipped:[Boolean],
    miniVariant:[Boolean]
  },
  data(){
    return {
      items: [
        {
          icon: require('static/Work.svg'),
          title: 'Dashboard',
        },
        {
          icon: require('static/agent.svg'),
          title: 'Agents',
        },

        {
          icon: require('static/user.svg'),
          title: 'Task',
        },
        {
          icon: require('static/teams.svg'),
          title: 'Teams',
        },
        {
          icon: require('static/user.svg'),
          title: 'Users',
        },
        {
          icon: require('static/settings.svg'),
          title: 'Settings',
        },

      ],

    }
  }
}
</script>

<style scoped>

</style>
