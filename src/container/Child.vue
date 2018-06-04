<template>
    <div class="child">
        <p>{{data}}</p>
        <!-- message即为子组件从从父组件拿到的值 -->
        <p>{{message}}</p>
        <!-- 子组件向父组件传值 -->
        <button @click="sendParent">传值给父组件</button>
    </div>
</template>
<script>
export default {
    name: 'Child',
    data(){
        return{
            childData:'我是子组件传给父组件的值'
        }
    },
    //子组件接收从父组件传来的值用props属性
    props:['message'],

    // 子组件向父组件传值，将需要传的值作为$emit的第二个参数，

    // $emit的第1个参数是父组件中引入子组件标签绑定的响应自定义事件的监听
    methods:{
        sendParent(){
            this.$emit('listenTochild',this.childData);
        }
    }
}
</script>
<style scoped>
   .child{
       width: 400px;
       height: 30px;
       margin: 0 auto;
       text-align: center;
   }
</style>

