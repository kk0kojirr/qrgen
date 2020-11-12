<template>
  <div>
    <h1>Generate QRCODE</h1>
    <h1>{{ message }}</h1>
    <img src="./assets/logo.png">

    <form>
      <div><input id="input" type="text" v-model="url" placeholder="this is test text box"></div>
      <input type="button" value="good! botton">
    </form>
    <qrcode v-bind:value="url" tag="img"></qrcode>
    <p>url is <a v-bind:href="url">{{ url }}</a></p>

    <h2>this page generate qrcode for ryomo TeamsMeetings!</h2>
    <h3>usage: imput meeting url. so simple</h3>
    <p>this page created by VUE, </p>

    <div id="spacer"></div>

    <footer>footer text get wild!</footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "ホームページへようこそ！",
      value: "get wild",
      url: "https://www.microsoft.com"
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

#input {
    width: 50%;
    padding: 10px 15px;
    font-size: 18px;
    border-radius: 3px;
    border: 2px solid #ddd;
    box-sizing: border-box;
}
</style>
