<template>
  <v-app-bar
    app
    color="white"
    elevation="1"
    fixed
    class="align-center md:tw-px-8"
    height="72"
  >
    <div class="md:tw-w-32 tw-w-24">
      <img
        class="Logo"
        alt="Logo"
        src="/youverify.svg"
      >
    </div>

    <v-btn
      fab
      x-small
      class="toggle tw-ml-6"
      @click="$emit('open-menu')"
      :ripple="false"
    >
      <v-icon color="#0F808C">mdi-{{ `chevron-${drawer ? 'left' : 'right'}` }}</v-icon>
    </v-btn>
    <v-spacer/>
    <div class="tw-pt-2 input-style md:tw-w-850">
      <div class="tw-flex tw-items-center">
        <div class="md:tw-flex tw-hidden tw-items-center">
          <h4 class="tw-mr-4">All</h4>
          <v-icon color="#999999" class="tw-mr-1">mdi-chevron-down</v-icon>
          <v-divider vertical></v-divider>

        </div>
        <span class="md:tw-ml-5"> Search for anything here</span>


      </div>

    </div>
    <v-spacer/>
    <div class="md:tw-flex tw-hidden tw-items-center">
      <img
        class="Logo"
        alt="Logo"
        src="/bell.svg"
      >
      <img
        alt="Logo"
        class="tw-mx-3"
        src="/solomon.svg"
      >
      <h6>Solomon</h6>
      <v-icon class="tw-ml-2" color="#0F808C">mdi-chevron-down</v-icon>

    </div>

  </v-app-bar>

</template>

<script>
export default {
name: "Header",
  props:{
    miniVariant:[Boolean],
    drawer:[Boolean]
  }
}
</script>

<style scoped>
.input-style{
  background: #F1F1F1;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  padding: 15px;

}
h4{
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;


  color: #999999 !important;
}
span{
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;


  color: #999999 !important;
}

</style>
