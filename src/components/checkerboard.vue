<template>
  <div class="checkerboard" >
      <div class="CHeckerboard" v-if="c.class==1">
     <div class="column">
       <div v-if="c.line==4||c.line==6" class="line3"></div>
       <div v-if="c.line==3||c.line==7" class="line4"></div>
       <div v-if="c.line==3||c.line==5" class="line5"></div>
       <div v-if="c.line==2||c.line==6" class="line6"></div>
       </div>
      <div class="column">
        <div v-if="c.line==3||c.line==7" class="line3"></div>
       <div v-if="c.line==4||c.line==6" class="line4"></div>
       <div v-if="c.line==2||c.line==6" class="line5"></div>
       <div v-if="c.line==3||c.line==5" class="line6"></div>
      </div>
      <div class="column">
        <div v-if="c.line==4||c.line==6" class="line3"></div>
         <div v-if="c.line==3||c.line==5" class="line5"></div>
      </div>
      <div class="column">
        <div v-if="c.line==1||c.line==7" class="line1"></div>
        <div v-if="c.line==4||c.line==6" class="line4"></div>
        <div v-if="c.line==3||c.line==5" class="line6"></div>
        </div>
      <div class="column">
        <div v-if="c.line==2||c.line==8" class="line2"></div>
      <div v-if="c.line==4||c.line==6" class="line3"></div>
         <div v-if="c.line==3||c.line==5" class="line5"></div>
      </div>

      <div class="column">
         <div v-if="c.line==4||c.line==6" class="line4"></div>
        <div v-if="c.line==3||c.line==5" class="line6"></div>
      </div>
       <div class="column">
         <div v-if="c.line==4||c.line==6" class="line3"></div>
         <div v-if="c.line==3||c.line==7" class="line4"></div>
         <div v-if="c.line==2||c.line==6" class="line6"></div>
         <div v-if="c.line==3||c.line==5" class="line5"></div>
       </div>
      <div class="column">
        <div v-if="c.line==3||c.line==7" class="line3"></div>
        <div v-if="c.line==4||c.line==6" class="line4"></div>
        <div v-if="c.line==3||c.line==5" class="line6"></div>
        <div v-if="c.line==2||c.line==6" class="line5"></div>
      </div>
      </div>
    <div  class="Checkerboard" v-else>
        <div class="river">楚</div>
        <div class="River">河</div>
         <div class="Circles">界</div>
        <div class="circles">汉</div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: 'checkerboard',
  props: ["c"],
  mounted(){
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
.checkerboard{
.Checkerboard{
    border-right:  1px solid #000;
    border-bottom:  1px solid #000;
    width: 407px;
    height: 80px;
    display: flex;
    justify-content:space-between;
      font-size: 40px;
    .river{
       margin-left: 50px;
       transform:rotate(270deg);
    }
    .River{
         margin-right: 25px;
       transform:rotate(270deg);
    }
    .circles{
        margin-right: 50px;
        transform:rotate(90deg);
    }
    .Circles{
        margin-left: 25px;
        transform:rotate(90deg);
    }
}
.CHeckerboard{
    width: 408px;
    height: 50px;
   
      .column{
         float: left;
         width: 50px;
         height: 50px;
         border-right:  1px solid #000;
         border-bottom:  1px solid #000;
         .line1,.line2{
          position: relative;
            border-top:  1px dashed #000;
           border-right:  1px dashed #000;
          width: 72px;
          height: 72px;
         }
         .line1{
          top:-36.9px;
           left: 14px;
          transform:rotate(135deg);
         }
         .line2{
          top:14px;
           left: -37px;
          transform:rotate(315deg);
         }
          .line3,.line4,.line5,.line6{
            position: relative;
            border-top:  1px solid #000;
           border-right:  1px solid #000;
           width: 10px;
          height: 10px;
          }
            .line3{
            top:2px;
            left: 2px;
            transform:rotate(270deg);
            float: left;
            }
          .line4{
            top:2px;
            left: 37px;
             float: left;
          }
          .line5{
            top:37px;
            left: 2px;
            transform:rotate(180deg);
          }
          .line6{
            top:37px;
            left: 37px;
            transform:rotate(90deg);
          }
     }
}
}
</style>