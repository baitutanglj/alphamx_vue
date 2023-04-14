<template>
  <div>
    <h3 class="pagetitle">AlphaMX generate</h3>
    <br>
    <PredictCom1 url="/generate"></PredictCom1>
  </div>
</template>

<script>
import PredictCom1 from "@/components/PredictCom1";
export default {
  name: "PageOne",
  components:{
    PredictCom1
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/pagetitle';
</style>