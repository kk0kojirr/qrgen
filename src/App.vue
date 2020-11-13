<template>
  <div>
    <h1>Generate QRCODE</h1>
    <h1>{{ message }}</h1>
    <img id="logo" src="./assets/logo.png">

    <form>
      <div><input id="input" type="text" v-model="url" :placeholder="url"></div>
      <input type="button" @click="countup" id="button" value="👍">
    </form>
    <vue-qrcode id="qrcode" v-bind:value="url" tag="img"></vue-qrcode>
    <p>url is <a v-bind:href="url">{{ url }}</a></p>

    <h2>this page generate qrcode for RS TeamsMeetings!</h2>
    <h3>usage: imput meeting url. so simple</h3>
    <p>this page created by VUE.js</p>

    <div id="spacer"></div>

    <footer>footer text get wild! {{ count }}</footer>
  </div>
</template>

<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";
import axios from 'axios'
export default {
  components: {
    VueQrcode
  },
  name: "App",
  methods: {
    countup: () => {
      axios.get('./api/counter')
        .then((res) => {
          console.log(res);
          this.count = res.data.count;
        })
        .catch((e) => {
          alert(e);
        });
    }
  },
  data() {
    return {
      message: "ホームページへようこそ✨",
      value: "get wild",
      url: "https://www.microsoft.com",
      count: 0
    };
  }
};
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}

html, body {
  margin: 0;
  border: 0;
  padding: 0;
  background-color: rgb(242,242,242);
  text-align: center;
}

main {
  margin: auto;
  width: 50%;
  padding: 20px;
}

main > h1 {
  text-align: center;
  font-size: 3.5em;
}

#logo {
  width: 50%;
  max-width: 50%;
  height: auto;
}

#input {
  width: 80%;
  padding: 10px 15px;
  font-size: 18px;
  border-radius: 3px;
  border: 2px solid #ddd;
  box-sizing: border-box;
}

#button {
  width: 100%;
  max-width: 120px;
  font-size: 20px;
  margin: 5px;
  padding: 15px 10px;
  display: inline-block;
  text-align: center;
  letter-spacing: 0.1em;
  color: #fff;
  background-color: rgb(117,132,219);
}
</style>
