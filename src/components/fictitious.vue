<template>
  <div class="fictitious">
      <div class="CHeckerboard" v-for="c in fictitious" v-if="c.class==1">
     <div class="column" v-for="j in Hang" @click="clickBlank(c,j)">
       <div v-for="i in grid" v-if="i.hang==c.hang&&i.grid==j" @click="select(i,j)">
        <son   v-bind:c="i" v-if="i.number"/>
       </div>
       </div>
      </div>
    <div  class="Checkerboard" v-else>
  </div>
  </div>
</template>

<script>
import son from '@/components/son.vue';
export default {
  name: 'fictitious',
    components: {
    son,
  },
  mounted(){
  },
  methods:{
    choice(){
        this.current.number=!this.current.number;
    },
    kill(){
      this.current2=null;
      this.current3=null;
      if(this.most()=="将"){
        for(var i=0;i<this.grid.length;i++){
          this.current1=this.grid[i];
        if(this.grid[i].text=="车"&&this.grid[i].color==this.take.color){
           var MaxHang=10;
          var MaxLie=9;
          var SmallHang=-1;
          var SmallLie=-1;
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<MaxLie&&this.grid[c].grid>this.grid[i].grid){
                MaxLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<MaxHang&&this.grid[c].hang>this.grid[i].hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>SmallLie&&this.grid[c].grid<this.grid[i].grid){
                SmallLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<this.grid[i].hang){
                SmallHang = this.grid[c].hang;
              }
            }
            this.die=[this.grid[i].hang,this.grid[i].grid];
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==SmallHang&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid.splice(c,1);
                    if(i>c){
                      i--;
                    }
                    
                    if(this.most()=="将"){
                      this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      }else{
                        this.grid[i].hang=this.die[0];
                        this.grid.push(this.current);
                         return "将"
                      }
                  }
              }
            for(var j=Number(SmallHang+1);j<this.die[0];j++){
              this.grid[i].hang=j;
              if(this.most()=="将"){
              }else{
                  this.grid[i].hang=this.die[0];
                return "将"
              }
            }
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==MaxHang&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                     this.grid.splice(c,1);
                    if(i>c){
                      i--;
                    }
                   
            if(this.most()=="将"){
              this.grid[i].hang=this.die[0];
              this.grid.push(this.current);
              }else{
                this.grid[i].hang=this.die[0];
                  this.grid.push(this.current);
                return "将"
              }
                  }
              }
             for(var j=Number(this.die[0])+1;j<=MaxHang;j++){
              this.grid[i].hang=j;
              if(this.most()=="将"){
              }else{
                  this.grid[i].hang=this.die[0];
                return "将"
              }
            }
            this.grid[i].hang=this.die[0];
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==SmallLie){
                    this.current=this.grid[c];
                    this.grid.splice(c,1);
                    if(i>c){
                      i--;
                    }
                    if(this.most()=="将"){
                      this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                  
              }else{
                if(j==SmallLie){
                  this.grid[i].grid=this.die[1];
                  this.grid.push(this.current);
                }
                return "将"
              }
                  }
              }
              for(var j=SmallLie;j<this.die[1];j++){
              this.grid[i].grid=j;
              if(this.most()=="将"){
              }
                  this.grid[i].grid=this.die[1];
                return "将"
            }
             for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==MaxLie){
                    this.current=this.grid[c];
                     this.grid.splice(c,1);
                    if(i>c){
                      i--;
                    }
                   
                    if(this.most()=="将"){
                      this.grid[i].grid=this.die[1];
                  this.grid.push(this.current);
              }
                   this.grid[i].grid=this.die[1];
                  this.grid.push(this.current);
                return "将"
                  }
              }
             for(var j=Number(this.die[1])+1;j<=MaxLie;j++){
              this.grid[i].grid=j;
              if(this.most()=="将"){
              }else{
                this.grid[i].grid=this.die[1];
                return "将"
              }
            }
            this.grid[i].grid=this.die[1];
      }else if(this.grid[i].text=="炮"&&this.grid[i].color==this.take.color){
          var MaxHang=10;
          var MaxLie=9;
          var SmallHang=-1;
          var SmallLie=-1;
          var MaxHang1=10;
          var MaxLie1=9;
          var SmallHang1=-1;
          var SmallLie1=-1;
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<MaxLie&&this.grid[c].grid>this.grid[i].grid){
                MaxLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<MaxHang&&this.grid[c].hang>this.grid[i].hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>SmallLie&&this.grid[c].grid<this.grid[i].grid){
                SmallLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<this.grid[i].hang){
                SmallHang = this.grid[c].hang;
              }
            }
            this.die=[this.grid[i].hang,this.grid[i].grid];
            for(var j=Number(SmallHang)+1;j<MaxHang;j++){
              this.grid[i].hang=j;
              if(this.most()!="将"){
                this.grid[i].hang=this.die[0];
                return "将"
              }
            }
            this.grid[i].hang=this.die[0];
              for(var j=SmallLie;j<MaxLie;j++){
              this.grid[i].grid=j;
              if(this.most()!="将"){
                this.grid[i].grid=this.die[1];
                return "将"
              }
            }
            this.grid[i].grid=this.die[1];
              for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>MaxLie&&this.grid[c].grid<MaxLie1){
                MaxLie1 = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<MaxHang1){
                MaxHang1 = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<SmallLie&&this.grid[c].grid>SmallLie1){
                SmallLie1 = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<SmallHang&&this.grid[c].hang>SmallHang1){
                SmallHang1 = this.grid[c].hang;
              }
              }
              for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==SmallHang1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=SmallHang1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }else if(this.grid[c].hang==MaxHang1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=MaxHang1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    
                    if(this.most()!="将"){
                     this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"将"
                    }
                     this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==MaxLie1){
                    this.current=this.grid[c];
                    this.grid[i].grid=MaxLie1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    
                    if(this.most()!="将"){
                      this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==SmallLie1){
                    this.current=this.grid[c];
                    this.grid[i].grid=SmallLie1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                      this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
      }else if(this.grid[i].text=="马"&&this.grid[i].color==this.take.color){
        var Pressure1={"hang":this.grid[i].hang-1,"grid":this.grid[i].grid};
        var Pressure2={"hang":Number(this.grid[i].hang)+1,"grid":this.grid[i].grid};
        var Pressure3={"hang":this.grid[i].hang,"grid":this.grid[i].grid-1};
        var Pressure4={"hang":this.grid[i].hang,"grid":Number(this.grid[i].grid)+1};
          for(var c=0;c<this.grid.length;c++){
            if(this.grid[c].hang==Pressure1.hang&&this.grid[c].grid==Pressure1.grid){
              Pressure1={"hang":null,"grid":null};
            }else  if(this.grid[c].hang==Pressure2.hang&&this.grid[c].grid==Pressure2.grid){
              Pressure2={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure3.hang&&this.grid[c].grid==Pressure3.grid){
              Pressure3={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure4.hang&&this.grid[c].grid==Pressure4.grid){
              Pressure4={"hang":null,"grid":null};
            }
         }
         this.die=[this.grid[i].hang,this.grid[i].grid];
         if(Pressure1.hang!=null){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-2&&this.grid[c].grid==Number(this.grid[i].grid)-1&&this.grid[i].hang-2>=0&&this.grid[i].grid-1>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=this.grid[i].grid-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current2=this.grid[c];
                  }
                  if(this.grid[c].hang==this.grid[i].hang-2&&this.grid[c].grid==Number(this.grid[i].grid)+1&&this.grid[i].hang-2>=0&&this.grid[i].grid<=7){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                     this.current3=this.grid[c];
                  }
              }
              if( this.current2==null){
                this.grid[i].hang=this.grid[i].hang-2;
              this.grid[i].grid=this.grid[i].grid-1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
              }
              if(this.current3==null){
          this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
              } 
               this.current2=null;
                this.current3=null;
         }
         if(Pressure2.hang!=null){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)+2&&this.grid[c].grid==Number(this.grid[i].grid)-1&&this.grid[i].hang<=7&&this.grid[i].grid-1>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=this.grid[i].grid-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current2=this.grid[c];
                  }
                  if(this.grid[c].hang==Number(this.grid[i].hang)+2&&this.grid[c].grid==Number(this.grid[i].grid)+1&&this.grid[i].hang<=7&&this.grid[i].grid<=7){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current3=this.grid[c];
                  }
              }
               if( this.current2==null){
                this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=this.grid[i].grid-1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
                if( this.current3==null){
                 this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
               this.current2=null;
               this.current3=null;
         }
         if(Pressure3.hang!=null){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].grid)-2&&this.grid[c].hang==Number(this.grid[i].hang)-1&&this.grid[i].hang-1>=0&&this.grid[i].grid-2>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=this.grid[i].grid-2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current2=this.grid[c];
                  }
                  if(this.grid[c].hang==Number(this.grid[i].grid)-2&&this.grid[c].hang==Number(this.grid[i].hang)+1&&this.grid[i].hang<=8&&this.grid[i].grid-2>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=this.grid[i].grid-2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current3=this.grid[c];
                  }
              }
               if( this.current2==null){
                             this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=this.grid[i].grid-2;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
                if( this.current3==null){
                 this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=this.grid[i].grid-2;
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
               this.current2=null;
               this.current3=null;
         }
         if(Pressure4.hang!=null){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].grid)+2&&this.grid[c].hang==Number(this.grid[i].hang)-1&&this.grid[i].hang-1>=0&&this.grid[i].grid<=6){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current2=this.grid[c];
                  }
                  if(this.grid[c].hang==Number(this.grid[i].grid)+2&&this.grid[c].hang==Number(this.grid[i].hang)+1&&this.grid[i].hang<=8&&this.grid[i].grid<=6){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current3=this.grid[c];
                  }
              }
               if(this.current2==null){
                 this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
                if( this.current3==null){
                 this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
               this.current2=null;
               this.current3=null;
         }
      }else if(this.grid[i].text=="象"&&this.grid[i].color==this.take.color){
        var Pressure1={"hang":this.grid[i].hang-1,"grid":this.grid[i].grid-1};
        var Pressure2={"hang":Number(this.grid[i].hang)+1,"grid":Number(this.grid[i].grid)+1};
        var Pressure3={"hang":Number(this.grid[i].hang)+1,"grid":this.grid[i].grid-1};
        var Pressure4={"hang":this.grid[i].hang-1,"grid":Number(this.grid[i].grid)+1};
          for(var c=0;c<this.grid.length;c++){
            if(this.grid[c].hang==Pressure1.hang&&this.grid[c].grid==Pressure1.grid){
              Pressure1={"hang":null,"grid":null};
            }else  if(this.grid[c].hang==Pressure2.hang&&this.grid[c].grid==Pressure2.grid){
              Pressure2={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure3.hang&&this.grid[c].grid==Pressure3.grid){
              Pressure3={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure4.hang&&this.grid[c].grid==Pressure4.grid){
              Pressure4={"hang":null,"grid":null};
            }
         }
         this.die=[this.grid[i].hang,this.grid[i].grid];
         if(Pressure1.hang!=null){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-2&&this.grid[c].grid==Number(this.grid[i].grid)-2&&this.grid[i].hang-2>=0&&this.grid[i].grid-2>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=this.grid[i].grid-2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=this.grid[i].grid-2;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }
         if(Pressure2.hang!=null){
            for(var c=0;c < this.grid.length;c++){
           if(this.grid[c].hang==Number(this.grid[i].hang)+2&&this.grid[c].grid==Number(this.grid[i].grid)+2&&this.grid[i].hang<=7&&this.grid[i].grid<=6){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
            }
           this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }
         if(Pressure3.hang!=null){
           for(var c=0;c < this.grid.length;c++){
           if(this.grid[c].hang==Number(this.grid[i].hang)+2&&this.grid[c].grid==Number(this.grid[i].grid)-2&&this.grid[i].hang<=7&&this.grid[i].grid-2>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=this.grid[i].grid-2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
            }
            this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=this.grid[i].grid-2;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }
         if(Pressure4.hang!=null){
           console.log("Sdfsd")
           for(var c=0;c < this.grid.length;c++){
           if(this.grid[c].hang==Number(this.grid[i].hang)-2&&this.grid[c].grid==Number(this.grid[i].grid)+2&&this.grid[i].hang-2>=0&&this.grid[i].grid<=6){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
            }
             this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }
      }else if(this.grid[i].text=="士"&&this.grid[i].color==this.take.color){
        this.die=[this.grid[i].hang,this.grid[i].grid];
         if(this.grid[i].hang-1>6&&this.grid[i].grid-1>3){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-1&&this.grid[c].grid==Number(this.grid[i].grid)-1){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=this.grid[i].grid-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=this.grid[i].grid-1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }else if(Number(this.grid[i].hang)+1<=9&&Number(this.grid[i].grid)+1<=5){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)+1&&this.grid[c].grid==Number(this.grid[i].grid)+1){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }else if(this.grid[i].grid-1>6&&Number(this.grid[i].hang)+1<=9){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)+1&&this.grid[c].grid==Number(this.grid[i].grid)-1){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)-1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }else if(Number(this.grid[i].grid)+1<=5&&this.grid[i].hang-1>6){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)-1&&this.grid[c].grid==Number(this.grid[i].grid)+1){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)-1;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].hang)-1;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }
      }else if(this.grid[i].text==this.text[1].text1&&this.grid[i].hang<5&&this.grid[i].color==this.take.color){
        this.die=[this.grid[i].hang,this.grid[i].grid];
           if(this.grid[i].hang-1>=0){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=this.grid[i].hang-1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
         }
         if(this.grid[i].grid-1>=0){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==Number(this.grid[i].grid)-1){
                    this.current=this.grid[c];
                    this.grid[i].grid=this.grid[i].grid-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
                    this.grid[i].grid=this.grid[i].grid-1;
                if(this.most()!="将"){
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                       this.grid[i].grid=this.die[1];
         }
         if(this.grid[i].grid<=7){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==Number(this.grid[i].grid)+1){
                    this.current=this.grid[c];
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"将"
                    }
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                if(this.most()!="将"){
                       this.grid[i].grid=this.die[1];
                      return"将"
                }
                       this.grid[i].grid=this.die[1];
         }
      }else if(this.grid[i].text==this.text[1].text1&&this.grid[i].hang>4&&this.grid[i].color==this.take.color){
        this.die=[this.grid[i].hang,this.grid[i].grid];
        for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=this.grid[i].hang-1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
      }else if(this.grid[i].text=="将"){
         this.die=[this.grid[i].hang,this.grid[i].grid];
        if(this.current.hang-1>6){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=this.grid[i].hang-1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
         }
         if(this.current.hang<=8){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)+1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].hang)+1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
         }
         if(this.current.grid-1>2){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)&&this.grid[c].grid==this.grid[i].grid-1){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].grid)-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].grid)-1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
         }if(this.current.grid<=4){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)&&this.grid[c].grid==Number(this.grid[i].grid)+1){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"将"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].grid)+1;
                if(this.most()!="将"){
                       this.grid[i].hang=this.die[0];
                      return"将"
                }
                this.grid[i].hang=this.die[0];
         }
      }
        }
      }
      if(this.most()=="帅"){
        for(var i=0;i<this.grid.length;i++){
          this.current1=this.grid[i];
        if(this.grid[i].text=="车"&&this.grid[i].color==this.Handsome.color){
           var MaxHang=10;
          var MaxLie=9;
          var SmallHang=-1;
          var SmallLie=-1;
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<MaxLie&&this.grid[c].grid>this.grid[i].grid){
                MaxLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<MaxHang&&this.grid[c].hang>this.grid[i].hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>SmallLie&&this.grid[c].grid<this.grid[i].grid){
                SmallLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<this.grid[i].hang){
                SmallHang = this.grid[c].hang;
              }
            }
            this.die=[this.grid[i].hang,this.grid[i].grid];
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==SmallHang&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid.splice(c,1);
                    if(i>c){
                      i--;
                    }
                    
                    if(this.most()=="帅"){
                      this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      }else{
                        this.grid[i].hang=this.die[0];
                        this.grid.push(this.current);
                         return "帅"
                      }
                  }
              }
            for(var j=Number(SmallHang+1);j<this.die[0];j++){
              this.grid[i].hang=j;
              if(this.most()=="帅"){
              }else{
                  this.grid[i].hang=this.die[0];
                return "帅"
              }
            }
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==MaxHang&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                     this.grid.splice(c,1);
                    if(i>c){
                      i--;
                    }
                   
            if(this.most()=="帅"){
              this.grid[i].hang=this.die[0];
              this.grid.push(this.current);
              }else{
                this.grid[i].hang=this.die[0];
                  this.grid.push(this.current);
                return "帅"
              }
                  }
              }
             for(var j=Number(this.die[0])+1;j<=MaxHang;j++){
              this.grid[i].hang=j;
              if(this.most()=="帅"){
              }else{
                  this.grid[i].hang=this.die[0];
                return "帅"
              }
            }
            this.grid[i].hang=this.die[0];
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==SmallLie){
                    this.current=this.grid[c];
                    this.grid.splice(c,1);
                    if(i>c){
                      i--;
                    }
                    if(this.most()=="帅"){
                      this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                  
              }else{
                if(j==SmallLie){
                  this.grid[i].grid=this.die[1];
                  this.grid.push(this.current);
                }
                return "帅"
              }
                  }
              }
              for(var j=SmallLie;j<this.die[1];j++){
              this.grid[i].grid=j;
              if(this.most()=="帅"){
              }
                  this.grid[i].grid=this.die[1];
                return "帅"
            }
             for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==MaxLie){
                    this.current=this.grid[c];
                     this.grid.splice(c,1);
                    if(i>c){
                      i--;
                    }
                   
                    if(this.most()=="帅"){
                      this.grid[i].grid=this.die[1];
                  this.grid.push(this.current);
              }
                   this.grid[i].grid=this.die[1];
                  this.grid.push(this.current);
                return "帅"
                  }
              }
             for(var j=Number(this.die[1])+1;j<=MaxLie;j++){
              this.grid[i].grid=j;
              if(this.most()=="帅"){
              }else{
                this.grid[i].grid=this.die[1];
                return "帅"
              }
            }
            this.grid[i].grid=this.die[1];
      }else if(this.grid[i].text=="炮"&&this.grid[i].color==this.Handsome.color){
          var MaxHang=10;
          var MaxLie=9;
          var SmallHang=-1;
          var SmallLie=-1;
          var MaxHang1=10;
          var MaxLie1=9;
          var SmallHang1=-1;
          var SmallLie1=-1;
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<MaxLie&&this.grid[c].grid>this.grid[i].grid){
                MaxLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<MaxHang&&this.grid[c].hang>this.grid[i].hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>SmallLie&&this.grid[c].grid<this.grid[i].grid){
                SmallLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<this.grid[i].hang){
                SmallHang = this.grid[c].hang;
              }
            }
            this.die=[this.grid[i].hang,this.grid[i].grid];
            for(var j=Number(SmallHang)+1;j<MaxHang;j++){
              this.grid[i].hang=j;
              if(this.most()!="帅"){
                this.grid[i].hang=this.die[0];
                return "帅"
              }
            }
            this.grid[i].hang=this.die[0];
              for(var j=SmallLie;j<MaxLie;j++){
              this.grid[i].grid=j;
              if(this.most()!="帅"){
                this.grid[i].grid=this.die[1];
                return "帅"
              }
            }
            this.grid[i].grid=this.die[1];
              for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>MaxLie&&this.grid[c].grid<MaxLie1){
                MaxLie1 = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<MaxHang1){
                MaxHang1 = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<SmallLie&&this.grid[c].grid>SmallLie1){
                SmallLie1 = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<SmallHang&&this.grid[c].hang>SmallHang1){
                SmallHang1 = this.grid[c].hang;
              }
              }
              for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==SmallHang1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=SmallHang1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }else if(this.grid[c].hang==MaxHang1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=MaxHang1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    
                    if(this.most()!="帅"){
                     this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"帅"
                    }
                     this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==MaxLie1){
                    this.current=this.grid[c];
                    this.grid[i].grid=MaxLie1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    
                    if(this.most()!="帅"){
                      this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==SmallLie1){
                    this.current=this.grid[c];
                    this.grid[i].grid=SmallLie1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                      this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
      }else if(this.grid[i].text=="马"&&this.grid[i].color==this.Handsome.color){
        var Pressure1={"hang":this.grid[i].hang-1,"grid":this.grid[i].grid};
        var Pressure2={"hang":Number(this.grid[i].hang)+1,"grid":this.grid[i].grid};
        var Pressure3={"hang":this.grid[i].hang,"grid":this.grid[i].grid-1};
        var Pressure4={"hang":this.grid[i].hang,"grid":Number(this.grid[i].grid)+1};
          for(var c=0;c<this.grid.length;c++){
            if(this.grid[c].hang==Pressure1.hang&&this.grid[c].grid==Pressure1.grid){
              Pressure1={"hang":null,"grid":null};
            }else  if(this.grid[c].hang==Pressure2.hang&&this.grid[c].grid==Pressure2.grid){
              Pressure2={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure3.hang&&this.grid[c].grid==Pressure3.grid){
              Pressure3={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure4.hang&&this.grid[c].grid==Pressure4.grid){
              Pressure4={"hang":null,"grid":null};
            }
         }
         this.die=[this.grid[i].hang,this.grid[i].grid];
         if(Pressure1.hang!=null){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-2&&this.grid[c].grid==Number(this.grid[i].grid)-1&&this.grid[i].hang-2>=0&&this.grid[i].grid-1>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=this.grid[i].grid-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current2=this.grid[c];
                  }
                  if(this.grid[c].hang==this.grid[i].hang-2&&this.grid[c].grid==Number(this.grid[i].grid)+1&&this.grid[i].hang-2>=0&&this.grid[i].grid<=7){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                     this.current3=this.grid[c];
                  }
              }
              if( this.current2==null){
                this.grid[i].hang=this.grid[i].hang-2;
              this.grid[i].grid=this.grid[i].grid-1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
              }
              if(this.current3==null){
          this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
              } 
               this.current2=null;
                this.current3=null;
         }
         if(Pressure2.hang!=null){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)+2&&this.grid[c].grid==Number(this.grid[i].grid)-1&&this.grid[i].hang<=7&&this.grid[i].grid-1>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=this.grid[i].grid-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current2=this.grid[c];
                  }
                  if(this.grid[c].hang==Number(this.grid[i].hang)+2&&this.grid[c].grid==Number(this.grid[i].grid)+1&&this.grid[i].hang<=7&&this.grid[i].grid<=7){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current3=this.grid[c];
                  }
              }
               if( this.current2==null){
                this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=this.grid[i].grid-1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
                if( this.current3==null){
                 this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
               this.current2=null;
               this.current3=null;
         }
         if(Pressure3.hang!=null){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].grid)-2&&this.grid[c].hang==Number(this.grid[i].hang)-1&&this.grid[i].hang-1>=0&&this.grid[i].grid-2>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=this.grid[i].grid-2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current2=this.grid[c];
                  }
                  if(this.grid[c].hang==Number(this.grid[i].grid)-2&&this.grid[c].hang==Number(this.grid[i].hang)+1&&this.grid[i].hang<=8&&this.grid[i].grid-2>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=this.grid[i].grid-2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current3=this.grid[c];
                  }
              }
               if( this.current2==null){
                             this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=this.grid[i].grid-2;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
                if( this.current3==null){
                 this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=this.grid[i].grid-2;
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
               this.current2=null;
               this.current3=null;
         }
         if(Pressure4.hang!=null){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].grid)+2&&this.grid[c].hang==Number(this.grid[i].hang)-1&&this.grid[i].hang-1>=0&&this.grid[i].grid<=6){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current2=this.grid[c];
                  }
                  if(this.grid[c].hang==Number(this.grid[i].grid)+2&&this.grid[c].hang==Number(this.grid[i].hang)+1&&this.grid[i].hang<=8&&this.grid[i].grid<=6){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                    this.current3=this.grid[c];
                  }
              }
               if(this.current2==null){
                 this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
                if( this.current3==null){
                 this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
               }
               this.current2=null;
               this.current3=null;
         }
      }else if(this.grid[i].text=="相"&&this.grid[i].color==this.Handsome.color){
        var Pressure1={"hang":this.grid[i].hang-1,"grid":this.grid[i].grid-1};
        var Pressure2={"hang":Number(this.grid[i].hang)+1,"grid":Number(this.grid[i].grid)+1};
        var Pressure3={"hang":Number(this.grid[i].hang)+1,"grid":this.grid[i].grid-1};
        var Pressure4={"hang":this.grid[i].hang-1,"grid":Number(this.grid[i].grid)+1};
          for(var c=0;c<this.grid.length;c++){
            if(this.grid[c].hang==Pressure1.hang&&this.grid[c].grid==Pressure1.grid){
              Pressure1={"hang":null,"grid":null};
            }else  if(this.grid[c].hang==Pressure2.hang&&this.grid[c].grid==Pressure2.grid){
              Pressure2={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure3.hang&&this.grid[c].grid==Pressure3.grid){
              Pressure3={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure4.hang&&this.grid[c].grid==Pressure4.grid){
              Pressure4={"hang":null,"grid":null};
            }
         }
         this.die=[this.grid[i].hang,this.grid[i].grid];
         if(Pressure1.hang!=null){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-2&&this.grid[c].grid==Number(this.grid[i].grid)-2&&this.grid[i].hang-2>=0&&this.grid[i].grid-2>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=this.grid[i].grid-2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=this.grid[i].grid-2;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }
         if(Pressure2.hang!=null){
            for(var c=0;c < this.grid.length;c++){
           if(this.grid[c].hang==Number(this.grid[i].hang)+2&&this.grid[c].grid==Number(this.grid[i].grid)+2&&this.grid[i].hang<=7&&this.grid[i].grid<=6){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
            }
           this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }
         if(Pressure3.hang!=null){
           for(var c=0;c < this.grid.length;c++){
           if(this.grid[c].hang==Number(this.grid[i].hang)+2&&this.grid[c].grid==Number(this.grid[i].grid)-2&&this.grid[i].hang<=7&&this.grid[i].grid-2>=0){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=this.grid[i].grid-2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
            }
            this.grid[i].hang=Number(this.grid[i].hang)+2;
                    this.grid[i].grid=this.grid[i].grid-2;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }
         if(Pressure4.hang!=null){
           for(var c=0;c < this.grid.length;c++){
           if(this.grid[c].hang==Number(this.grid[i].hang)-2&&this.grid[c].grid==Number(this.grid[i].grid)+2&&this.grid[i].hang-2>=0&&this.grid[i].grid<=6){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
            }
             this.grid[i].hang=this.grid[i].hang-2;
                    this.grid[i].grid=Number(this.grid[i].grid)+2;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }
      }else if(this.grid[i].text=="士"&&this.grid[i].color==this.Handsome.color){
        this.die=[this.grid[i].hang,this.grid[i].grid];
         if(this.grid[i].hang-1>=0&&this.grid[i].grid-1>3){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-1&&this.grid[c].grid==Number(this.grid[i].grid)-1){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=this.grid[i].grid-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=this.grid[i].hang-1;
                    this.grid[i].grid=this.grid[i].grid-1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }else if(Number(this.grid[i].hang)+1<=2&&Number(this.grid[i].grid)+1<=5){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)+1&&this.grid[c].grid==Number(this.grid[i].grid)+1){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }else if(this.grid[i].grid-1>2&&Number(this.grid[i].hang)+1<=2){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)+1&&this.grid[c].grid==Number(this.grid[i].grid)-1){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].hang)+1;
                    this.grid[i].grid=Number(this.grid[i].grid)-1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }else if(Number(this.grid[i].grid)+1<=5&&this.grid[i].hang-1>=0){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)-1&&this.grid[c].grid==Number(this.grid[i].grid)+1){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)-1;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].hang)-1;
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
                       this.grid[i].grid=this.die[1];
         }
      }else if(this.grid[i].text==this.text[1].text2&&this.grid[i].hang>4&&this.grid[i].color==this.Handsome.color){
        this.die=[this.grid[i].hang,this.grid[i].grid];
           if(this.grid[i].hang-1>=0){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=this.grid[i].hang-1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
         }
         if(this.grid[i].grid-1>=0){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==Number(this.grid[i].grid)-1){
                    this.current=this.grid[c];
                    this.grid[i].grid=this.grid[i].grid-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
                    this.grid[i].grid=this.grid[i].grid-1;
                if(this.most()!="帅"){
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                       this.grid[i].grid=this.die[1];
         }
         if(this.grid[i].grid<=7){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid==Number(this.grid[i].grid)+1){
                    this.current=this.grid[c];
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].grid=this.die[1];
                      this.grid.push(this.current);
                      return"帅"
                    }
                       this.grid[i].grid=this.die[1];
                    this.grid.push(this.current);
                  }
              }
                    this.grid[i].grid=Number(this.grid[i].grid)+1;
                if(this.most()!="帅"){
                       this.grid[i].grid=this.die[1];
                      return"帅"
                }
                       this.grid[i].grid=this.die[1];
         }
      }else if(this.grid[i].text==this.text[1].text1&&this.grid[i].hang<5&&this.grid[i].color==this.Handsome.color){
        this.die=[this.grid[i].hang,this.grid[i].grid];
        for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=this.grid[i].hang-1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
      }else if(this.grid[i].text=="帅"){
         this.die=[this.grid[i].hang,this.grid[i].grid];
        if(this.grid[i].hang-1>=0){
            for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==this.grid[i].hang-1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=this.grid[i].hang-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=this.grid[i].hang-1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
         }
         if(this.grid[i].hang<3){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)+1&&this.grid[c].grid==this.grid[i].grid){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].hang)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].hang)+1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
         }
         if(this.grid[i].grid-1>2){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)&&this.grid[c].grid==this.grid[i].grid-1){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].grid)-1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].grid)-1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
         }if(this.grid[i].grid<=4){
           for(var c=0;c < this.grid.length;c++){
                  if(this.grid[c].hang==Number(this.grid[i].hang)&&this.grid[c].grid==Number(this.grid[i].grid)+1){
                    this.current=this.grid[c];
                    this.grid[i].hang=Number(this.grid[i].grid)+1;
                    if(i>c){
                      i--;
                    }
                    this.grid.splice(c,1);
                    if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      this.grid.push(this.current);
                      return"帅"
                    }
                    this.grid[i].hang=this.die[0];
                    this.grid.push(this.current);
                  }
              }
               this.grid[i].hang=Number(this.grid[i].grid)+1;
                if(this.most()!="帅"){
                       this.grid[i].hang=this.die[0];
                      return"帅"
                }
                this.grid[i].hang=this.die[0];
         }
      }
        }
      }
        return"绝杀"
    },
    most(){
        for(var i=0;i<this.grid.length;i++){
            if(this.grid[i].text=="帅"){
            this.Handsome.hang=this.grid[i].hang;
            this.Handsome.lie=this.grid[i].grid;
             }else if(this.grid[i].text=="将"){
            this.take.hang=this.grid[i].hang;
             this.take.lie=this.grid[i].grid;
             }
        }
        for(var i=0;i<this.grid.length;i++){
      if(this.grid[i].text=="车"&&this.grid[i].color!=this.take.color){
          var MaxHang=9;
          var MaxLie=8;
          var SmallHang=0;
          var SmallLie=0;
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<MaxLie&&this.grid[c].grid>this.grid[i].grid){
                MaxLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<MaxHang&&this.grid[c].hang>this.grid[i].hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>SmallLie&&this.grid[c].grid<this.grid[i].grid){
                SmallLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>SmallHang&&this.grid[c].hang<this.grid[i].hang){
                SmallHang = this.grid[c].hang;
              }
            }
            
            if((this.grid[i].hang==this.take.hang&&(SmallLie==this.take.lie||MaxLie==this.take.lie))||(this.grid[i].grid==this.take.lie&&(SmallHang==this.take.hang||MaxHang==this.take.hang))){
                return "将";
            }
      }else if(this.grid[i].text=="炮"&&this.grid[i].color!=this.take.color){
          var MaxHang=10;
          var MaxLie=9;
          var SmallHang=-1;
          var SmallLie=-1;
          var MaxHang1=10;
          var MaxLie1=9;
          var SmallHang1=-1;
          var SmallLie1=-1;
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<MaxLie&&this.grid[c].grid>this.grid[i].grid){
                MaxLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<MaxHang&&this.grid[c].hang>this.grid[i].hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>SmallLie&&this.grid[c].grid<this.grid[i].grid){
                SmallLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>SmallHang&&this.grid[c].hang<this.grid[i].hang){
                SmallHang = this.grid[c].hang;
              }
            }
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>MaxLie&&this.grid[c].grid<MaxLie1){
                MaxLie1 = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<MaxHang1){
                MaxHang1 = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<SmallLie&&this.grid[c].grid>SmallLie1){
                SmallLie1 = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<SmallHang&&this.grid[c].hang>SmallHang1){
                SmallHang1 = this.grid[c].hang;
              }
            }
            if((MaxHang1==this.take.hang&&this.grid[i].grid==this.take.lie)||(SmallHang1==this.take.hang&&this.grid[i].grid==this.take.lie)||(MaxLie1==this.take.lie&&this.grid[i].hang==this.take.hang)||(SmallLie1==this.take.lie&&this.grid[i].hang==this.take.hang)){
                return "将";
            }
      }else if(this.grid[i].text=="马"&&this.grid[i].color!=this.take.color){
        var Pressure1={"hang":this.grid[i].hang-1,"grid":this.grid[i].grid};
        var Pressure2={"hang":Number(this.grid[i].hang)+1,"grid":this.grid[i].grid};
        var Pressure3={"hang":this.grid[i].hang,"grid":this.grid[i].grid-1};
        var Pressure4={"hang":this.grid[i].hang,"grid":Number(this.grid[i].grid)+1};
          for(var c=0;c<this.grid.length;c++){
            if(this.grid[c].hang==Pressure1.hang&&this.grid[c].grid==Pressure1.grid){
              Pressure1={"hang":null,"grid":null};
            }else  if(this.grid[c].hang==Pressure2.hang&&this.grid[c].grid==Pressure2.grid){
              Pressure2={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure3.hang&&this.grid[c].grid==Pressure3.grid){
              Pressure3={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure4.hang&&this.grid[c].grid==Pressure4.grid){
              Pressure4={"hang":null,"grid":null};
            }
         }
         if(Pressure1.hang!=null&&this.grid[i].hang-2==this.take.hang&&(this.grid[i].grid==this.take.lie-1||this.grid[i].grid-1==this.take.lie)){
           return "将";
         }else if(Pressure2.hang!=null&&this.grid[i].hang==this.take.hang-2&&(this.grid[i].grid==this.take.lie-1||this.grid[i].grid-1==this.take.lie)){
           return "将";
         }else if(Pressure3.hang!=null&&this.grid[i].grid-2==this.take.lie&&(this.grid[i].hang==this.take.hang-1||this.grid[i].hang-1==this.take.hang)){
           return "将";
         }else if(Pressure4.hang!=null&&this.grid[i].grid==this.take.lie-2&&(this.grid[i].hang==this.take.hang-1||this.grid[i].hang-1==this.take.hang)){
           return "将";
         }
      }else if(this.grid[i].text==this.text[1].text2&&this.grid[i].hang>5){
           if(this.grid[i].hang==this.take.hang-1&&this.grid[i].grid==this.take.lie){
           return "将";
         }else if(this.grid[i].grid-1==this.take.lie&&this.grid[i].hang==this.take.hang){
           return "将";
         }else if(this.grid[i].grid==this.take.lie-1&&this.grid[i].hang==this.take.hang){
           return "将";
         }
      }else if(this.grid[i].text==this.text[1].text1&&this.grid[i].hang<5){
           if(this.grid[i].hang-1==this.Handsome.hang&&this.grid[i].grid==this.Handsome.lie){
           return "帅";
         }else if(this.grid[i].grid-1==this.Handsome.lie&&this.grid[i].hang==this.Handsome.hang){
           return "帅";
         }else if(this.grid[i].grid==this.Handsome.lie-1&&this.grid[i].hang==this.Handsome.hang){
           return "帅";
         }
      }else if(this.grid[i].text=="帅"||this.grid[i].text=="将"){
        var MaxHang=-1;
          for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<this.grid[i].hang){
                MaxHang = this.grid[c].hang;
              }
            }
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang==MaxHang&&this.grid[c].text==this.text[2].text2){
               if(this.grid[i].text=="将"){
                 return "帅";
               }else {
                return "将";
               }
              }
            }
      }else if(this.grid[i].text=="车"&&this.grid[i].color!=this.Handsome.color){
          var MaxHang=9;
          var MaxLie=8;
          var SmallHang=0;
          var SmallLie=0;
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<MaxLie&&this.grid[c].grid>this.grid[i].grid){
                MaxLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<MaxHang&&this.grid[c].hang>this.grid[i].hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>SmallLie&&this.grid[c].grid<this.grid[i].grid){
                SmallLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>SmallHang&&this.grid[c].hang<this.grid[i].hang){
                SmallHang = this.grid[c].hang;
              }
            }
            if((this.grid[i].hang==this.Handsome.hang&&(SmallLie==this.Handsome.lie||MaxLie==this.Handsome.lie))||(this.grid[i].grid==this.Handsome.lie&&(SmallHang==this.Handsome.hang||MaxHang==this.Handsome.hang))){
                return "帅";
            }
      }else if(this.grid[i].text=="炮"&&this.grid[i].color!=this.Handsome.color){
          var MaxHang=10;
          var MaxLie=9;
          var SmallHang=-1;
          var SmallLie=-1;
          var MaxHang1=10;
          var MaxLie1=9;
          var SmallHang1=-1;
          var SmallLie1=-1;
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<MaxLie&&this.grid[c].grid>this.grid[i].grid){
                MaxLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<MaxHang&&this.grid[c].hang>this.grid[i].hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>SmallLie&&this.grid[c].grid<this.grid[i].grid){
                SmallLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>SmallHang&&this.grid[c].hang<this.grid[i].hang){
                SmallHang = this.grid[c].hang;
              }
            }
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid>MaxLie&&this.grid[c].grid<MaxLie1){
                MaxLie1 = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<MaxHang1){
                MaxHang1 = this.grid[c].hang;
              }else if(this.grid[c].hang==this.grid[i].hang&&this.grid[c].grid<SmallLie&&this.grid[c].grid>SmallLie1){
                SmallLie1 = this.grid[c].grid;
              }else if(this.grid[c].grid==this.grid[i].grid&&this.grid[c].hang<SmallHang&&this.grid[c].hang>SmallHang1){
                SmallHang1 = this.grid[c].hang;
              }
            }
            if((MaxHang1==this.Handsome.hang&&this.grid[i].grid==this.Handsome.lie)||(SmallHang1==this.Handsome.hang&&this.grid[i].grid==this.Handsome.lie)||(MaxLie1==this.Handsome.lie&&this.grid[i].hang==this.Handsome.hang)||(SmallLie1==this.Handsome.lie&&this.grid[i].hang==this.Handsome.hang)){
                return "帅";
            }
      }else if(this.grid[i].text=="马"&&this.grid[i].color!=this.Handsome.color){
        var Pressure1={"hang":this.grid[i].hang-1,"grid":this.grid[i].grid};
        var Pressure2={"hang":Number(this.grid[i].hang)+1,"grid":this.grid[i].grid};
        var Pressure3={"hang":this.grid[i].hang,"grid":this.grid[i].grid-1};
        var Pressure4={"hang":this.grid[i].hang,"grid":Number(this.grid[i].grid)+1};
          for(var c=0;c<this.grid.length;c++){
            if(this.grid[c].hang==Pressure1.hang&&this.grid[c].grid==Pressure1.grid){
              Pressure1={"hang":null,"grid":null};
            }else  if(this.grid[c].hang==Pressure2.hang&&this.grid[c].grid==Pressure2.grid){
              Pressure2={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure3.hang&&this.grid[c].grid==Pressure3.grid){
              Pressure3={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure4.hang&&this.grid[c].grid==Pressure4.grid){
              Pressure4={"hang":null,"grid":null};
            }
         }
         if(Pressure1.hang!=null&&this.grid[i].hang-2==this.Handsome.hang&&(this.grid[i].grid==this.Handsome.lie-1||this.grid[i].grid-1==this.Handsome.lie)){
           return "帅";
         }else if(Pressure2.hang!=null&&this.grid[i].hang==this.Handsome.hang-2&&(this.grid[i].grid==this.Handsome.lie-1||this.grid[i].grid-1==this.Handsome.lie)){
           return "帅";
         }else if(Pressure3.hang!=null&&this.grid[i].grid-2==this.Handsome.lie&&(this.grid[i].hang==this.Handsome.hang-1||this.grid[i].hang-1==this.Handsome.hang)){
           return "帅";
         }else if(Pressure4.hang!=null&&this.grid[i].grid==this.Handsome.lie-2&&(this.grid[i].hang==this.Handsome.hang-1||this.grid[i].hang-1==this.Handsome.hang)){
           return "帅";
         }
      }
      }
      return "无"
    },
    judge(i,j){
      if(this.current==null){
        return true;
      }
      if(this.current.hang==i&&this.current.grid==j){
        this.start=!this.start;
        return true;
      }
      if(this.current.text=="车"){
        if(i==this.current.hang||j==this.current.grid){
          var MaxHang=9;
          var MaxLie=8;
          var SmallHang=0;
          var SmallLie=0;
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.current.hang&&this.grid[c].grid<MaxLie&&this.grid[c].grid>this.current.grid){
                MaxLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.current.grid&&this.grid[c].hang<MaxHang&&this.grid[c].hang>this.current.hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].hang==this.current.hang&&this.grid[c].grid>SmallLie&&this.grid[c].grid<this.current.grid){
                SmallLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.current.grid&&this.grid[c].hang>SmallHang&&this.grid[c].hang<this.current.hang){
                SmallHang = this.grid[c].hang;
              }
            }
            if(MaxHang>=i&&SmallHang<=i&&MaxLie>=j&&SmallLie<=j){
                return false;
            }else{
              clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
           return true;
            }
        }
        clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
        return true;
      }else if(this.current.text=="炮"){
        if(i==this.current.hang||j==this.current.grid){
          var MaxHang=10;
          var MaxLie=9;
          var SmallHang=-1;
          var SmallLie=-1;
          var MaxHang1=10;
          var MaxLie1=9;
          var SmallHang1=-1;
          var SmallLie1=-1;
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.current.hang&&this.grid[c].grid<MaxLie&&this.grid[c].grid>this.current.grid){
                MaxLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.current.grid&&this.grid[c].hang<MaxHang&&this.grid[c].hang>this.current.hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].hang==this.current.hang&&this.grid[c].grid>SmallLie&&this.grid[c].grid<this.current.grid){
                SmallLie = this.grid[c].grid;
              }else if(this.grid[c].grid==this.current.grid&&this.grid[c].hang>SmallHang&&this.grid[c].hang<this.current.hang){
                SmallHang = this.grid[c].hang;
              }
            }
            if(MaxHang>i&&SmallHang<i&&MaxLie>j&&SmallLie<j){
              return false;
            }else{
              for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].hang==this.current.hang&&this.grid[c].grid>MaxLie&&this.grid[c].grid<MaxLie1){
                MaxLie1 = this.grid[c].grid;
              }else if(this.grid[c].grid==this.current.grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<MaxHang1){
                MaxHang1 = this.grid[c].hang;
              }else if(this.grid[c].hang==this.current.hang&&this.grid[c].grid<SmallLie&&this.grid[c].grid>SmallLie1){
                SmallLie1 = this.grid[c].grid;
              }else if(this.grid[c].grid==this.current.grid&&this.grid[c].hang<SmallHang&&this.grid[c].hang>SmallHang1){
                SmallHang1 = this.grid[c].hang;
              }
            }
            if((MaxHang1==i&&this.current.grid==j)||(SmallHang1==i&&this.current.grid==j)||(MaxLie1==j&&this.current.hang==i)||(SmallLie1==j&&this.current.hang==i)){
                return false;
            }else{
              clearInterval(this.ding);
      this.current.number=true;
      this.start=!this.start;
            this.current=null;
           return true;
            }
            }
        }
        clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
        return true;
      }else if(this.current.text=="马"){
        var Pressure1={"hang":this.current.hang-1,"grid":this.current.grid};
        var Pressure2={"hang":Number(this.current.hang)+1,"grid":this.current.grid};
        var Pressure3={"hang":this.current.hang,"grid":this.current.grid-1};
        var Pressure4={"hang":this.current.hang,"grid":Number(this.current.grid)+1};
          for(var c=0;c<this.grid.length;c++){
            if(this.grid[c].hang==Pressure1.hang&&this.grid[c].grid==Pressure1.grid){
              Pressure1={"hang":null,"grid":null};
            }else  if(this.grid[c].hang==Pressure2.hang&&this.grid[c].grid==Pressure2.grid){
              Pressure2={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure3.hang&&this.grid[c].grid==Pressure3.grid){
              Pressure3={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure4.hang&&this.grid[c].grid==Pressure4.grid){
              Pressure4={"hang":null,"grid":null};
            }
         }
         if(Pressure1.hang!=null&&this.current.hang-2==i&&(this.current.grid==j-1||this.current.grid-1==j)){
           return false;
         }else if(Pressure2.hang!=null&&this.current.hang==i-2&&(this.current.grid==j-1||this.current.grid-1==j)){
           return false;
         }else if(Pressure3.hang!=null&&this.current.grid-2==j&&(this.current.hang==i-1||this.current.hang-1==i)){
           return false;
         }else if(Pressure4.hang!=null&&this.current.grid==j-2&&(this.current.hang==i-1||this.current.hang-1==i)){
           return false;
         }else{
           clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
           return true;
         }
      }else if(this.current.text=="相"||this.current.text=="象"){
        var Pressure1={"hang":this.current.hang-1,"grid":this.current.grid-1};
        var Pressure2={"hang":Number(this.current.hang)+1,"grid":Number(this.current.grid)+1};
        var Pressure3={"hang":Number(this.current.hang)+1,"grid":this.current.grid-1};
        var Pressure4={"hang":this.current.hang-1,"grid":Number(this.current.grid)+1};
          for(var c=0;c<this.grid.length;c++){
            if(this.grid[c].hang==Pressure1.hang&&this.grid[c].grid==Pressure1.grid){
              Pressure1={"hang":null,"grid":null};
            }else  if(this.grid[c].hang==Pressure2.hang&&this.grid[c].grid==Pressure2.grid){
              Pressure2={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure3.hang&&this.grid[c].grid==Pressure3.grid){
              Pressure3={"hang":null,"grid":null};
            }else if(this.grid[c].hang==Pressure4.hang&&this.grid[c].grid==Pressure4.grid){
              Pressure4={"hang":null,"grid":null};
            }
         }
         if((this.current.text==this.text[0].text1&&i<5)||(this.current.text==this.text[0].text2&&i>4)){
           clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
           return true;
         }
         if(Pressure1.hang!=null&&this.current.hang-2==i&&this.current.grid-2==j){
           return false;
         }else if(Pressure2.hang!=null&&this.current.hang==i-2&&this.current.grid==j-2){
           return false;
         }else if(Pressure3.hang!=null&&this.current.grid-2==j&&this.current.hang==i-2){
           return false;
         }else if(Pressure4.hang!=null&&this.current.grid==j-2&&this.current.hang-2==i){
           return false;
         }else{
          clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
           return true;
         }
      }else if(this.current.text=="士"){
        if(j<3||j>5||(i>2&&i<7)){
          clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
           return true;
         }
         if(this.current.hang-1==i&&this.current.grid-1==j){
           return false;
         }else if(this.current.hang==i-1&&this.current.grid==j-1){
           return false;
         }else if(this.current.grid-1==j&&this.current.hang==i-1){
           return false;
         }else if(this.current.grid==j-1&&this.current.hang-1==i){
           return false;
         }else{
           clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
           return true;
         }
      }else if(this.current.text=="帅"||this.current.text=="将"){
        if(j<3||j>5||(i>2&&i<7)){
          clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
           return true;
         }
        if(this.current.hang-1==i&&this.current.grid==j){
           return false;
         }else if(this.current.hang==i-1&&this.current.grid==j){
           return false;
         }else if(this.current.grid-1==j&&this.current.hang==i){
           return false;
         }else if(this.current.grid==j-1&&this.current.hang==i){
           return false;
         }
        var MaxHang=-1;
         var SmallHang=10;
          for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].grid==this.current.grid&&this.grid[c].hang>MaxHang&&this.grid[c].hang<this.current.hang){
                MaxHang = this.grid[c].hang;
              }else if(this.grid[c].grid==this.current.grid&&this.grid[c].hang<SmallHang&&this.grid[c].hang>this.current.hang){
                SmallHang = this.grid[c].hang;
              }
            }
            for(var c=0;c<this.grid.length;c++){
              if(this.grid[c].grid==this.current.grid&&this.grid[c].hang==MaxHang&&this.grid[c].text==this.text[2].text2){
                return false;
              }else if(this.grid[c].grid==this.current.grid&&this.grid[c].hang==SmallHang&&this.grid[c].text==this.text[2].text1){
                return false;
              }
            }
            clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
           return true;
        }
      if(this.current.text==this.text[1].text2&&this.current.hang<5){
        if(this.current.hang==i-1&&this.current.grid==j){
          return false;
        }
    clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
          return true;
        }else if(this.current.text==this.text[1].text1&&this.current.hang>4){
          if(this.current.hang-1==i&&this.current.grid==j){
           return false;
         }
         clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
          return true;
        }else if(this.current.text==this.text[1].text2&&this.current.hang>4){
           if(this.current.hang==i-1&&this.current.grid==j){
           return false;
         }else if(this.current.grid-1==j&&this.current.hang==i){
           return false;
         }else if(this.current.grid==j-1&&this.current.hang==i){
           return false;
         }else{
          clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
           return true;
         }
        }else if(this.current.text==this.text[1].text1&&this.current.hang<5){
           if(this.current.hang-1==i&&this.current.grid==j){
           return false;
         }else if(this.current.grid-1==j&&this.current.hang==i){
           return false;
         }else if(this.current.grid==j-1&&this.current.hang==i){
           return false;
         }else{
         clearInterval(this.ding);
      this.current.number=true;
                this.current=null;
                this.start=!this.start;
           return true;
         }
        }
            return false;
         },
    clickBlank(c,j){
      if(this.current==null){
          return
      }
      if(this.judge(c.hang,j)){
        if(this.start){
          if(this.current!=null){
      this.current.number=true;
              this.current=null;
           }
           clearInterval(this.ding);
        }
        return
      }else{
        for(var b=0;b<this.grid.length;b++){
            if(this.grid[b]==this.current&&(this.grid[b].hang!=c.hang||this.grid[b].grid!=j)){
              for(var i=0;i<this.grid.length;i++){
              if(this.grid[i].grid==j&&this.grid[i].hang==c.hang){
                this.start=!this.start;
                  return
              }
              }
              this.die=[this.grid[b].hang,this.grid[b].grid];
              this.grid[b].hang=c.hang;
              this.grid[b].grid=j;
              if(this.most()=="将"&&!this.go){
                this.grid[b].hang=this.die[0];
                this.grid[b].grid=this.die[1];
                alert("被将军")
                return
              }else if(this.most()=="帅"&&this.go){
                this.grid[b].hang=this.die[0];
                this.grid[b].grid=this.die[1];
                alert("被将军")
                return
              }
              this.go=!this.go;
              this.start=!this.start;
              clearInterval(this.ding);
      this.current.number=true;
              this.current=null;
              if(this.most()!="无"){
                alert(this.kill());
                this.current=null;
              }
              return
            }
          }
      }
    },
    select(i,j){
      if(this.current==null&&this.go==i.color){
          this.current=i;
          this.current.number=false;
          this.ding=setInterval(this.choice,800);
          return
      }
      if(this.current==i){
        this.start=!this.start;
        clearInterval(this.ding);
      this.current.number=true;
        this.current=null;
        return;
      }
      if(this.current==null&&this.go!=i.color){
          return
      }
      if(this.judge(i.hang,i.grid)){
        clearInterval(this.ding);
        if(this.current!=null){
          this.current.number=true;
        this.current==null;
        }
          return
      }
        if(this.current.color!=i.color){
          for(var b=0;b<this.grid.length;b++){
            if(this.grid[b]==this.current){
              this.grid.splice(b,1); 
            }
          }
          for(var b=0;b<this.grid.length;b++){
            if(this.grid[b]==i){
              if(this.grid[b].text=="将"){
                alert("红方获胜");
              }else if(this.grid[b].text=="帅"){
                alert("黑方获胜");
              }
              this.die=[this.grid[b].color,this.grid[b].text];
              this.grid[b].color=this.current.color;
             this.grid[b].text=this.current.text;
             if(this.most()=="将"&&!this.go){
                this.grid[b].color=this.die[0];
                this.grid[b].text=this.die[1];
                this.grid.push(this.current);
                alert("被将军")
                return
              }else if(this.most()=="帅"&&this.go){
                this.grid[b].color=this.die[0];
                this.grid[b].text=this.die[1];
                this.grid.push(this.current);
                alert("被将军")
                return
              }
          }
          }
          this.start=!this.start;
          clearInterval(this.ding);
      this.current.number=true;
          this.current=null;
          this.go=!this.go;
         if(this.most()!="无"){
                alert(this.kill());
              }
          return
        }else{
          clearInterval(this.ding);
      this.current.number=true;
          this.current=null;
        return;
        }
    },
},
  data(){
      return{
        ding:null,
        text:[
          {"text1":"象","text2":"相"},
          {"text1":"卒","text2":"兵"},
          {"text1":"将","text2":"帅"},
        ],
        die:null,
        take:{"hang":null,"lie":null,"color":false},
        Handsome:{"hang":null,"lie":null,"color":true},
        start:true,
          Hang:["0","1","2","3","4","5","6","7","8"],
          current:null,
          current1:null,
          current2:null,
          current3:null,
          go:true,//在单击版可以改联机是固定的
                fictitious:[
         {"class":1,"hang":"0"},
        {"class":1,"hang":"1"},
        {"class":1,"hang":"2"},
        {"class":1,"hang":"3"},
        {"class":1,"hang":"4"},
        {"class":2},
        {"class":1,"hang":"5"},
        {"class":1,"hang":"6"},
        {"class":1,"hang":"7"},
        {"class":1,"hang":"8"},
        {"class":1,"hang":"9"},
      ],
          grid:[
              {"text":"兵","hang":"3","grid":"0","color":true,"number":true},
              {"text":"车","hang":"0","grid":"0","color":true,"number":true},
              {"text":"兵","hang":"3","grid":"2","color":true,"number":true},
              {"text":"兵","hang":"3","grid":"4","color":true,"number":true},
              {"text":"车","hang":"0","grid":"8","color":true,"number":true},
              {"text":"兵","hang":"3","grid":"6","color":true,"number":true},
              {"text":"兵","hang":"3","grid":"8","color":true,"number":true},
              {"text":"炮","hang":"2","grid":"1","color":true,"number":true},
              {"text":"炮","hang":"2","grid":"7","color":true,"number":true},
              {"text":"马","hang":"0","grid":"1","color":true,"number":true},
              {"text":"相","hang":"0","grid":"2","color":true,"number":true},
              {"text":"士","hang":"0","grid":"3","color":true,"number":true},
                {"text":"马","hang":"0","grid":"7","color":true,"number":true},
              {"text":"相","hang":"0","grid":"6","color":true,"number":true},
              {"text":"士","hang":"0","grid":"5","color":true,"number":true},
              {"text":"帅","hang":"0","grid":"4","color":true,"number":true},
            {"text":"卒","hang":"6","grid":"0","color":false,"number":true},
              {"text":"车","hang":"9","grid":"0","color":false,"number":true},
              {"text":"卒","hang":"6","grid":"2","color":false,"number":true},
              {"text":"卒","hang":"6","grid":"4","color":false,"number":true},
              {"text":"车","hang":"9","grid":"8","color":false,"number":true},
              {"text":"卒","hang":"6","grid":"6","color":false,"number":true},
              {"text":"卒","hang":"6","grid":"8","color":false,"number":true},
              {"text":"炮","hang":"7","grid":"1","color":false,"number":true},
              {"text":"炮","hang":"7","grid":"7","color":false,"number":true},
              {"text":"马","hang":"9","grid":"1","color":false,"number":true},
              {"text":"象","hang":"9","grid":"2","color":false,"number":true},
              {"text":"士","hang":"9","grid":"3","color":false,"number":true},
                {"text":"马","hang":"9","grid":"7","color":false,"number":true},
              {"text":"象","hang":"9","grid":"6","color":false,"number":true},
              {"text":"士","hang":"9","grid":"5","color":false,"number":true},
              {"text":"将","hang":"9","grid":"4","color":false,"number":true},
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
.fictitious{
.Checkerboard{
    width: 459px;
    height: 31px;
    display: flex;
    justify-content:space-between;
      font-size: 40px;
}
.CHeckerboard{
    width: 459px;
    height: 51px;
   
      .column{
         float: left;
         width: 51px;
         height: 51px;
     }
}
}
</style>