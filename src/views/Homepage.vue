<template>
  <div class="homepage">
      <div class="body" @click="function(){if(strat==-1){strat=1}else{strat=0}}" >
          <div class="top">
              <div class="user">
                   <img src="../assets/logo.png" alt="" @click="strat=-1">
                     <div>{{u.username}}</div>
              </div>
              <div class="jifeng">
                   <img src="../assets/jf.png" alt="">
                     <div>{{u.integral}}</div>
              </div>
          </div>
          <div class="ti" @click="strat=0">
              <div class="go" @click="home()"><b>开始游戏</b></div>
          </div>
      </div>
      <div class="jdui"  v-if="strat==1">
          <div class="top">
              <img src="../assets/logo.png" alt="" class="img">
              <div class="name">
                  <div class="username">{{u.username}}</div>
                  <div>
                      <img src="../assets/jf.png" alt="" class="img1">
                      {{u.integral}}
                      </div>
              </div>
          </div>
          <div class="table">
              <div class="tr">
                  <img src="../assets/xg.png" alt="" class="img">
                  修改密码
                  <img src="../assets/you.png" alt="" class="img1">
            </div> 
              <div class="tr">
                  <img src="../assets/xn.png" alt="" class="img2">
                  修改名称
                  <img src="../assets/you.png" alt="" class="img1">
                  </div> 
              <div class="tr">
                  <img src="../assets/ck.png" alt="" class="img3">
                  查看战绩
                  <img src="../assets/you.png" alt="" class="img1">
                  </div>
              <div class="tr">
                  <img src="../assets/zx.png" alt="" class="img4">
                  注销用户
                  <img src="../assets/you.png" alt="" class="img1">
                  </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Homepage',
  components: {
  },
  mounted(){
      
      if(this.$route.query.id!=null){
        this.u=this.$route.query.id;
      }else{
          if(localStorage.getItem("token")==undefined){
            alert("未登录");
             this.$router.push('/');
          }
           axios({
           method:'post',
           url:'http://'+this.$store.state.url+'/selectuser',
          params: {
           token: localStorage.getItem("token"),
           user: localStorage.getItem("user"),
          },
         responseType: "json",
        transformResponse:  (data) =>{
        if(data.start=="过期"){
            alert("需重新登录");
             this.$router.push('/');
             return
        }
        
        if(data.start==undefined){
          this.u=data;
        
        }else{
          alert("帐号或密码错误")
        }
         },
      })
      }
  },
  methods:{
      home(){
          this.$router.push({path: '/Home',query:{id:this.u}});
      }
    },
  data(){
    return{
        strat:0,
        u:{"username":""},
    }
  },
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.homepage{
.body{
    background: rgb(255, 216, 172);
    height: 100vh;
    min-width: 405px;
    .top{
        height: 100px;
        .user{
            float: left;
            line-height: 50px;
            width: 150px;
            div{
                float: left;
            }
            img{
                float: left;
                height: 50px;
            }
        }
        .jifeng{
            float: left;
            line-height: 30px;
            margin-left: calc(50% - 200px);
            margin-top: 10px;
            width: 150px;
            div{
                float: left;
                width: 120px;
                text-align: center;
            }
            img{
                float: left;
                height: 30px;
            }
        }
    }
    .ti{
            width: 90%;
            min-width: 400px;
            border: 1px solid #aaa;
            margin: 0 auto;
            height: 300px;
            .go{
                margin: 0 auto;
                margin-top: 50px;
                width: 150px;
                text-align: center;
                height: 40px;
                line-height: 40px;
                background: rgb(189, 178, 25);
                color: aliceblue;
            }
        }
}
.jdui{
    height: 100vh;
    min-height: 410px;
    position: absolute;
    width: 30%;
    min-width: 200px;
    top:0px;
    background: #eee;
    .top{
        .img{
            width: 50px;
            margin:20px;
            float: left;
        }
        .img1{
            width: 20px;
            margin-top:10px ;
        }
        .name{
            float: left;
            font-size: 14px;
            line-height: 40px;
            margin-left: 10px;
            .username{
                margin-top: 10px;
            }
        }
        background: rgb(85, 255, 218);
        height: 100px;
    }
    .table{
        margin-left: 20px;
        margin-top: 20px;
        .tr{
            font-size: 16px;
            margin-top: 20px;
            padding: 10px;
            color: #444;
            .img1{
                width: 15px;
                height: 15px;
                position: relative;
                top:2px;
                left: 40%;
            }
            .img{
                width: 20px;
                height: 20px;
                position: relative;
                top:4px;
                right: 5px;
            }
            .img3{
                width: 20px;
                height: 20px;
                position: relative;
                top:4px;
                right: 3px;
            }
            .img2{
                width: 14px;
                position: relative;
                top:1px;
                right: 1px;
                margin-right: 6px;
            }
            .img4{
                width: 18px;
                position: relative;
                top:4px;
                right: 2px;
                margin-right: 2px;
            }
        }
    }
}
}
</style>