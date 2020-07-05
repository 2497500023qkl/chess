<template>
  <div class="login">
    <div class="jiemian">
        <form>
        <textbox v-bind:c="box" v-on:test1="onTest1" v-on:test2="onTest2"/>
        <button type="button" class="submite" @click="insert()">登录</button>
    </form>
    </div>
  </div>
</template>

<script>
import textbox from "@/components/TextBox.vue";
import axios from"axios";
export default {
  name: 'Login',
  components: {
      textbox
  },
  methods:{
    onTest1(msg){
      this.username=msg;
    },
    onTest2(msg){
       this.password=msg;
    },
    insert(){
      axios({
           method:'post',
           url:'http://'+this.$store.state.url+'/selectuser',
          params: {
           username: this.username,
           password: this.password,
          },
         responseType: "json",
        transformResponse:  (data) =>{
        if(data.start==undefined){
        localStorage.setItem("token",data.password);
        localStorage.setItem("user",data.username);
          this.$router.push({path: '/homepage',query:{ id:data}});
        }else{
          alert("帐号或密码错误")
        }
         },
      })
    }
},
  data(){
    return{
        box:[
            {"img":"../user.png","placeholder":"用户名","type":"text","class":"user","text1":"没有用户注册不?","url":"/register"},
            {"img":"../password.png","placeholder":"密码","type":"password","class":"pass","text1":"密码不好改密码?","url":"/forget"},
        ],
        username:"",
        password:"",
    }
  },
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.login{
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
    .login{
        padding: 10vh 0 0;
        height: 90vh;
         .submite{
        min-width: 200px;
    }
    }
    }
     @media(max-height:400px){
    .login{
          padding: 0;
        height: 100vh;
        min-height: 250px;
    }
    }
</style>