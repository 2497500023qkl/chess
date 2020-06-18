<template>
  <div class="son" >
      <div class="soldier" v-bind:class="c.color ?  'red' : 'blue'">
         {{c.text}}
      </div>
  </div>
  
</template>

<script>
export default {
  name: 'son',
    props: ["c"],
  mounted(){
      
  },
  methods:{
},
  data(){
      return{
      }
  },
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.son{
    float: left;
     position: relative;
     top:0;
     left: 0;
.soldier{
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    border-radius: 50%;
     font-size: 22px;
     text-align: center;
     line-height: 40px;
background-color: rgb(207, 130, 42);
}
.red{
  color: red;
}
.blue{
  color: black;
}
}
</style>