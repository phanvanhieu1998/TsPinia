<script>
// import { RouterLink, RouterView } from "vue-router";
// import { reactive, ref } from "vue";
// import { useLaiXeStore } from "@/stores/laiXe";
// import { mapState, mapActions } from "pinia";
// const laiXeStore = useLaiXeStore();

// const LayDanhSachLaiXe = () => {
//   try {
//     const rs = laiXeStore.LayDanhSachLaiXe();
//     console.log("rs", rs);
//   } catch (error) {
//     console.log("error");
//   }
// };

// setTimeout(() => {
//   // laiXeStore.DanhSachLaiXe = [];
// }, 3000);

// LayDanhSachLaiXe();
//

export default {
  beforeMount() {
    // console.log("this.$el", this.$el);
  },
  mounted(){
    // console.log(' this.$refs', this.$refs.reference.innerHTML = 'xx')
  },
  data() {
    return {
      val: 0,
    };
  },
  methods: {
    updateVal() {
      this.$refs
    },
  },
  beforeUpdate() {
    console.log("beforeUpdate() val: " + this.val);
  },
  updated() {
    console.log("updated() val: " + this.val);
  },
  unmounted() {
    /* Options API */
    alert('Component has been');
  },
};
</script>
<template>
   <!-- <button ref="reference" @click="updateVal">Click to Change</button> -->
  <component   :is="$route.meta.layout">
  
    <router-view />
  </component>
   <!-- <div class="test">
      test
      <div class="test-test2">xxxxxxxxxxxxx</div>
    </div> -->
</template>

<style lang="scss" scoped>
// @import './assets/style.scss';
$primaryColor: blue;
.test{
  color: $primaryColor;
  &-test2{
    color: red
  }
}

</style>
