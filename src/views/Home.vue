<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg=""/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { PrimitiveString } from '@/lib'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  name:string = 'Simon Zhang'
  str:any = 0 
  // computed
  get MyName():string {
    return `My name is ${this.name}`
  }
  // methods
  sayHello():void {
    // alert(`Hello ${this.name}`)
  }
  mounted() {
    console.log(this.str instanceof PrimitiveString)
    this.sayHello()
  }
}
</script>
