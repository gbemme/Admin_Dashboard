<template>
  <div class="tw-flex">
    <div class="tw-mt-">
      <div class="arrow tw-cursor-pointer" :class="{'arrow-out': rightDrawer}"  @click="$emit('open-close-agent')">
        <v-icon color="white">mdi-chevron-left</v-icon>
      </div>
    </div>

    <div :class="[{'out': rightDrawer}, 'drawer-agent']">
      <v-navigation-drawer
        v-model="rightDrawer"
        :mini-variant="secondMiniVariant"
        class="secondDrawer"
        height="98vh"
        permanent
        :right="right"
        :style="[$vuetify.breakpoint.mobile?{width:'230px'}:{width:'390px'}]"


      >
        <div class="task-agent-heading">
          <h3>Agents</h3>
        </div>


        <v-tabs
          v-model="tab2"
        >
          <v-tabs-slider color="#023A59"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
            class="tab"
          >
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab2">
          <v-tab-item
            v-for="item in items"
            :key="item"
          >
            <v-card class="tw-mb-3 agent-card"  v-for="(item, i) in drawerItems"
                    :key="i"
                    flat>
              <div class="tw-flex tw-p-6  ">
                <div class="tw-mr-6">
                  <img :src="require('@/static/solomon.svg')" alt="image">
                </div>
                <div>
                  <h3>{{item.name}}</h3>
                  <h4>{{item.phone}}</h4>
                  <h4 class="tw-pt-3">{{item.address}}</h4>
                </div>

              </div>
              <v-divider v-if="i!== drawerItems.length-1"/>
            </v-card>
          </v-tab-item>
        </v-tabs-items>


      </v-navigation-drawer>
    </div>

  </div>

</template>

<script>
import AssignLogo from "~/components/AssignLogo";
export default {
name: "AgentDrawer",
  components: {AssignLogo},
  props:{
    rightDrawer:[Boolean],
    secondMiniVariant:[Boolean],
      right:[Boolean]
  },
  data () {
    return{
      drawerItems: [
        {
          name: 'Abiodun Olawale Solomon',
          address: 'Akure',
          phone:'08069786754'
        },
        {
          name: 'Abiodun Olawale Solomon',
          address: 'Akure',
          phone:'08069786754'
        },
        {
          name: 'Abiodun Olawale Solomon',
          address: 'Akure',
          phone:'08069786754'
        },
        {
          name: 'Abiodun Olawale Solomon',
          address: 'Akure',
          phone:'08069786754'
        },

      ],
      tab2: null,
      items: [
        'All', 'Online', 'Offline',
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.agent-card h3{
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height */
  padding-bottom: 15px;
  text-transform: capitalize;
  color: #000000;

}
.secondDrawer {
  background: #FEFEFE !important;
  border-radius: 4px !important;
}
.agent-card h4{
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: #ACB6BE;
}

.out {
  transform: translateX(400px)

}

.drawer-agent {
  transition: all .2s ease
}

.arrow-out {
  position: absolute;
  right: 0;
}
</style>
