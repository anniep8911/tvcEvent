<template>
  <div class="gnb-wrap">
    <div class="gnb" >
      <Tabmenu v-for="(item,index) in menu" :menu="item.title" :disabled="item.disabled" @click="handleClick(index)"/>
     <Toast :msg="toastMessage" :active="isActive"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tabmenu from './Tabmenu.vue';
import Toast from './Toast.vue';

// 1. Props
const props = defineProps<{
  menu: Array<{ title: string, disabled?:boolean, toastMsg?:string}>,
}>()

const isActive = ref(false)
const toastMessage = ref('')

const handleClick = (index: number) => {
  if (index === 1) {
    const msg = props.menu[index];
    toastMessage.value = msg.toastMsg ?? ''
    isActive.value = true

    // 일정 시간 후 자동 비활성화 (예: 3초)
    setTimeout(() => {
      isActive.value = false
    }, 2000)
  }
}

</script>

<style scoped lang="scss">
.gnb-wrap{
  background-color: #666;
  .gnb{
    display: flex;
    width: 80%;
    max-width: 1080px;
    margin: 0 auto;
  }
}
</style>
