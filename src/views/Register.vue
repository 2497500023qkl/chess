<template>
  <div class="register">
    <div class="jiemian">
        <form>
        <textbox v-bind:c="box" v-on:test1="onTest1" v-on:test2="onTest2" v-on:test3="onTest3"/>
        <button class="submite" @click="insert()">确定</button>
    </form>
    </div>
  </div>
</template>

<script>
import textbox from "@/components/TextBox.vue";
import axios from 'axios'
export default {
  name: 'Register',
  components: {
      textbox
  },
  mounted(){
        
  },
  methods:{
    onTest1(msg){
      this.username=msg;
    },
    onTest2(msg){
       this.password=msg;
    },
    onTest3(msg){
     this.npassword=msg;
    },
    insert(){
      if(this.npassword!=this.password){
        alert("密码不相等");
        return
      }
      axios({
           method:'post',
           url:'http://'+this.$store.state.url+'/insertuser',
          params: {
           username: this.username,
           password: this.password,
          },
         responseType: "json",
        transformResponse:  (data) =>{
        console.log(data);
        alert(data.message);
        // localStorage.setItem("token",data.tips);
        // console.log(localStorage.getItem("token"));
         },
      })
    }
},
  data(){
    return{
        box:[
            {"img":"../user.png","placeholder":"用户名","type":"text","class":"user","text1":"已有用户去登录","url":"/"},
            {"img":"../password.png","placeholder":"密码","type":"password","class":"pass","text1":"想改密码去修改","url":"/forget"},
            {"img":"../pass.png","placeholder":"确认密码","type":"password","class":"pass","text1":null},
        ],
        username:"",
        password:"",
        npassword:"",
    }
  },
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.register{
    background-image:url("../assets/download.jpg") ;
    background-size:cover;
    background-position:center;
    height: 80vh;
    padding: 20vh 0 0;
    width: 100%;
    .jiemian{
        border-radius:50px;
        max-height: 500px;
        max-width: 500px;
        margin: 0 auto;
        padding-top:15vh;
        padding-bottom: 10vh;
        text-align: center;
        background-color: rgba($color: #ccc, $alpha: 0.3);
    }
    .submite{
        border:0;
        font-size: 20px;
        letter-spacing:50px;
        margin-top: 30px;
        padding-left: 50px;
        min-width: 300px;
        height: 30px;
        border-radius:5px;
        background: #90ffff;
    }
}
@media(max-width:370px){
    .register{
        padding: 10vh 0 0;
        height: 90vh;
         .submite{
        min-width: 200px;
    }
    }
    }
    @media(max-height:400px){
    .register{
      padding: 0;
        height: 100vh;
        min-height: 250px;
    }
    }
</style>