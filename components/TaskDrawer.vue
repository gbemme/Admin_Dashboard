<template>
  <div v-if="itemsDrawer" class="tw-flex">
    <v-navigation-drawer
      v-model="itemsDrawer"
      :clipped="clipped"
      :mini-variant="secondMiniVariant"
      class="secondDrawer"
      height="98vh"
      permanent
      :style="[$vuetify.breakpoint.mobile?{width:'230px'}:{width:'390px'}]"

    >
      <div class="task-agent-heading">
        <h3>Task</h3>
      </div>
      <v-tabs
        v-model="tab"
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

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card class="tw-mb-3 task-card"  v-for="(item, i) in drawerItems"
                   :key="i"
                   flat>
            <div class="tw-flex tw-p-4 tw-items-center ">
              <div class="tw-mr-6">
                <AssignLogo/>
                <span class="assign">Assign <br>Agent</span>
              </div>
              <div>
                <h3>{{item.name}}</h3>
                <div class="tw-flex tw-justify-between tw-items-center">
                  <h4>{{item.address}}</h4>
                  <v-icon class="tw-mr-8" color="">mdi-chevron-right</v-icon>

                </div>
                <div class="tw-flex">
                  <Building/>
                  <h4>Sterling Bank PLC</h4>
                </div>
                <h5>{{item.days}}</h5>
              </div>

            </div>
            <v-divider v-if="i!== drawerItems.length-1"/>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

    </v-navigation-drawer>
    <div class="arrow" @click="$emit('close-task')">
      <v-icon color="white">mdi-chevron-left</v-icon>
    </div>
  </div>

</template>

<script>
import AssignLogo from "~/components/AssignLogo";
import Building from "~/components/Building";
export default {
name: "TaskDrawer",
  components: {Building, AssignLogo},
  props:{
    itemsDrawer:[Boolean],
    clipped:[Boolean],
    secondMiniVariant:[Boolean]
  },
  data () {
    return{
      drawerItems: [
        {
          name: 'Abiodun Olawale Solomon',
          address: '12b  Emmanuel Hign street, Sur...',
          days:'A day ago'
        },
        {
          name: 'Abiodun Olawale Solomon',
          address: '12b  Emmanuel Hign street, Sur...',
          days:'2 day ago'
        },
        {
          name: 'Abiodun Olawale Solomon',
          address: '12b  Emmanuel Hign street, Sur...',
          days:'2 day ago'
        },
        {
          name: 'Abiodun Olawale Solomon',
          address: '12b  Emmanuel Hign street, Sur...',
          days:'2 day ago'
        },

      ],
      tab: null,
      items: [
        '24 Unassigned', '12 assigned', '30 Completed',
      ],

    }
  }
}
</script>

<style scoped>
.tab{
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 14px !important;
  line-height: 18px !important;
  text-transform: capitalize !important;

  color: #C4C4C4 !important;

}
.task-card h3{
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: #000000;
  padding-top: 20px;
  padding-bottom: 10px;
}
.task-card h4{
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: #ACB6BE;
}
.task-card h5{
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: #3056D3;
  margin-top: 15px;
  margin-bottom: 15px;

}
.assign{
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  text-transform: capitalize;

  color: #828282;

}
</style>
