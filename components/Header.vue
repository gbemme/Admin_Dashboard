<template>
  <v-app-bar
    app
    color="white"
    elevation="1"
    fixed
    class="align-center tw-px-8"
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
      <v-icon color="#0F808C">mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn>
    <v-spacer/>
    <div class="tw-pt-2 md:tw-w-850">
      <v-text-field flat hide-details label="Search for anything here" solo></v-text-field>

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
    miniVariant:[Boolean]
  }
}
</script>

<style scoped>

</style>
