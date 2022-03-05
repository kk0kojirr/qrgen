<template>
  <div class="wrapper">
    <div id="item1">
    <h1>Generate QRCODE</h1>
    <h1>{{ message }}</h1>
    <img id="logo" src="./assets/logo.png">
    </div>

    <div id="item2">
    <form>
      <div><input id="input" type="text" v-model="url" :placeholder="url"></div>
    </form>
    <vue-qrcode id="qrcode" v-bind:value="url" tag="img"></vue-qrcode>
    <p>url is <a v-bind:href="url">{{ url }}</a></p>
    </div>

    <div id="item3">
    <h3>this page generate qrcode for RS TeamsMeetings!</h3>
    <h3>usage: imput meeting url. so simple</h3>
    <p>this page created by VUE.js</p>
    </div>

    <div id="item4">
    <input type="button" @click="countup" id="button" value="👍">
    get wild! {{ count }}
    </div>

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
    countup: function() {
      axios.get('./api/counter')
        .then((res) => {
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
      count: ""
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
}

.wrapper {
  display: grid;
  grid-template-columns: 30px 450px 30px;
  grid-template-rows: 280px 200px 180px 100px;
}

#item1 {
  grid-row: 1 /2;
  grid-column: 2;
}
#item2 {
  grid-row: 2 /3;
  grid-column: 2;
  text-align: center;
}
#item3 {
  grid-row: 3 /4;
  grid-column: 2;
}
#item4 {
  grid-row: 4 /5;
  grid-column: 2;
}

#logo {
  width: 100%;
  max-width: 100%;
  height: auto;
}

#input {
  width: 100%;
  padding: 10px 15px;
  font-size: 18px;
  border-radius: 3px;
  border: 2px solid #ddd;
  box-sizing: border-box;
}

#button {
  width: 100%;
  max-width: 70px;
  font-size: 24px;
  margin: 5px;
  padding: 3px 5px;
  display: inline-block;
  text-align: center;
  letter-spacing: 0.1em;
  color: #fff;
  background-color: rgb(117,132,219);
}
</style>
