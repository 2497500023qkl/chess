<template>
  <div class="textbox">
    <div v-for="i in c" class="text">
            <img v-bind:src="i.img" alt="">
            <input v-bind:type="i.type" v-bind:class="i.class" v-bind:placeholder="i.placeholder" v-bind:value="i.value" @change="change(i)">
            <span @click="()=>{$router.push(i.url)}">{{i.text1}}</span>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'TextBox',
    props: ["c"],
  components: {
  },
  mounted(){    
  },
  methods:{
    change(i){
      if(i.placeholder!=null){
        if(i.placeholder=="用户名"){
          this.$emit('test1',$("."+i.class)[0].value);
        }else if(i.placeholder=="密码"){
          this.$emit('test2',$("."+i.class)[0].value);
        }else if(i.placeholder=="确认密码"||i.placeholder=="修改后密码"){
          this.$emit('test3',$("."+i.class)[1].value);
        }
      }
    },
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
.textbox{
    font-size: 16px;
    line-height: 20px;
    img{
        height: 20px;
        position: relative;
        top:6px;
        left: 25px;
    }
    .text{
        margin: 0 auto 20px;
        width: 340px;
        text-align: left;
        input{
            text-align: center;
        }
    .user{
        width: 150px;
        height: 25px;
        padding-left: 30px;
        padding-right: 10px;
    }
    span{
      color: aquamarine;
      padding-left: 10px;
      font-size:12px;
    }
    .pass{
        letter-spacing:8px;
        width: 150px;
        height: 25px;
        padding-left: 30px;
        padding-right: 10px;
    }
    }
    @media(max-width:370px){
     .text{
         padding-right: 45px;
        margin: 0 auto;
        width: 150px;
        text-align: left;
     }
     img{
        height: 20px;
        position: relative;
        top:30px;
        left: 5px;
    }
}
}
</style>