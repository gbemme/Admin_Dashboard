<template>
<div>
      <div class="company-details">
        <h4 class="font-weight-bold">Cheta And Daughters<br> Limited</h4>
        <span>RC123456789</span>
      </div>
      <v-list style="background-color: #0f808c!important" class="menu-list">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          color="white"
          @click.stop="$emit('close-open-task')"
        >
          <v-list-item-action>
            <v-img :src="item.icon" ></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text tw-my-4 font-weight-bold" v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>

</div>
</template>

<script>
export default {
name: "MenuDrawer",
  props:{
    drawer:[Boolean],

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
