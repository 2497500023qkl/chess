<template>
  <div class="home">
    <div class="chess">
      <div class="Chess">
<board class="board" v-for="i in disc" v-bind:c="i"/>
      </div>
      <fictitious class="fictitious"/>
    </div>
  </div>
</template>

<script>
import board from '@/components/checkerboard.vue';
import fictitious from '@/components/fictitious.vue';
export default {
  name: 'Home',
  components: {
    board,
    fictitious,
  },
  data(){
    return{
      i:0,
      disc:[
        {"class":1,"line":1},
        {"class":1,"line":2},
        {"class":1,"line":3},
        {"class":1,"line":4},
        {"class":2},
        {"class":1,"line":5},
        {"class":1,"line":6},
        {"class":1,"line":7},
        {"class":1,"line":8},
      ],
    }
  },
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
  .chess{
    width: 500px;
    background-color: rgb(207, 130, 42);
    margin: 50px auto 0;
    padding:50px 0;
    .Chess{
      width: 408px;
      margin: 0 auto;
    border-top:1px solid #000;
    border-left: 1px solid #000; 
    height: 489px;
    .board{
     margin: 0 auto;
    }
    }
    .fictitious{
      float: left;
       position: relative;
       width: 459px;
      margin: 0 0 0 45px;
      top:-509px;
      left: -19.5px;
    }
  }
</style>