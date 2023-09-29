<template>
  <div class="UserProfile">
    <h1>Hello {{ $store.getters.StateUser?.name }}</h1>
    <TestPost/>
    <ChatBox/>
  </div>
</template>

<script>
import ChatBox from '@/components/ChatBox'
import TestPost from '@/components/testPost'
export default {
  name: "UserProfile",
  components: {
    ChatBox,
    TestPost
  }
}
</script>

<style scoped>

</style>
