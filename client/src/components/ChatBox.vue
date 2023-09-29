<template>
  <div class="chat-box container">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-sm-12">
        <div id="status"></div>
        <div id="chat">
          <div class="card">
            <div id="messages" class="card-block pt-5">
              <h3 class="bg-light text-left">{{ title }}</h3>
              <ul>
                <li v-for="message of messages" :key="message.id">{{ message.name }}: {{ message.text }}</li>
              </ul>
            </div>
          </div>
          <br>
          <textarea id="textarea" class="form-control" v-model="text" placeholder="Enter message..."></textarea>
          <br>
          <button id="send" class="btn btn-primary" @click.prevent="sendMessage">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from 'socket.io-client'
export default {
  name: "ChatBox",
  data () {
    return {
      title: 'Chat',
      name: '',
      text: '',
      messages: [],
      socket: null
    }
  },
  methods: {
    sendMessage() {
      if(this.validateInput()) {
        this.socket.emit('msgToServer', {
          name: this.$store.getters.StateUser?.name,
          text: this.text
        })
        this.text = ''
      }
    },
    receivedMessage(message) {
      this.messages.push(message)
    },
    validateInput() {
      return this.text.length > 0
    }
  },
  created() {
    this.socket = io(window.location.origin)
    this.socket.on('msgToClient', (message) => {
      this.receivedMessage(message)
    })
  }
}
</script>

<style scoped>
#messages {
  height: 250px;
}

#messages h3 {
  text-align: left;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
