<template>
  <div>
    <div>
              <div class="task-agent-heading">
                <div class="tw-flex tw-justify-between">
                  <h3>Agents</h3>
                  <v-icon color="white">mdi-magnify</v-icon>

                </div>
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
              <div class="scroll">
              <v-tabs-items  v-model="tab2">
                <v-tab-item
                  transition="fade-transition"
                  v-for="item in items"
                  :key="item"
                >
                  <v-card class="tw-mb-2 agent-card"  v-for="(item, i) in drawerItems"
                          :key="i"
                          flat>
                    <div class="tw-flex tw-p-4  ">
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
              </div>
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
      third:[Boolean]
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
  },
  methods: {
    openCloseAgent(){
      this.$emit('open-close-agent')
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
  padding-bottom: 10px;
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
