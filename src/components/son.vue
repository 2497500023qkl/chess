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
   .line3,.line4,.line5,.line6{
            position: relative;
            border-top:  1px solid #000;
           border-right:  1px solid #000;
           width: 10px;
          height: 10px;
          }
            .line3{
            top:-45px;
            left: -5px;
            transform:rotate(270deg);
            float: left;
            }
          .line4{
            top:-45px;
            left: 21px;
             float: left;
          }
          .line5{
            top:-17px;
            left: -5px;
            transform:rotate(180deg);
          }
          .line6{
            top:-5px;
            left: 32px;
            transform:rotate(90deg);
          }
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