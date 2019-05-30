<template>
    <div>
       <button @click="changeCount('-')">-</button> 
       <span>{{count}}</span>
       <button @click="changeCount('+')">+</button>
    </div>
</template>

<script>
export default {
    computed:{
        count(){
            return this.$store.state.index.count
        }
    },
    mounted() {
        //获取store里面的数据
        console.log(this.$store)
    },
    methods: {
     changeCount(type){
         //组件内部触发一个mutation
         this.$store.commit('changeCount',type)
     }   
    }
}
</script>