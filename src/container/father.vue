<template>
    <div class="father">
        <h1>我是父组件</h1>
        
        <child :message='fatherData'  @listenTochild="listenTochildData"></child>
    </div>
</template>
<script>
 import child from "./Child.vue"
 export default{
    //  当前组件名称name
     name:'Father',
    //当前组件数据 data
     data(){
         return{
             fatherData:'我是父组件传给子组件的值'
         }
     },
    //  当前组件中引入的子组件
     components:{
        child
     },
     //mounted生命周期，一般ajax获取数据在这个周期里进行
     mounted:{

     },
     //methods当前组件中用到的一些方法事件
     methods:{
       listenTochildData(data){
          console.log(data);
       }
     },

 }
</script>
<style>

</style>
