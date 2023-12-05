<template>
  <div>
    <h1>Demo simple-step-progress</h1>

    <br />
    <br />
    <br />
    <br />
    <br />

    <SimpleStep :currentIndex.sync="currentIndex" :bookMark.sync="bookMark"/>

    <br />
    <br />

    <div>
      <label> label </label>
      <input v-model="addLabel" placeholder="label" style="margin-right: 15px">

      <label> name </label>
      <input v-model="addName" placeholder="name" style="margin-right: 15px">

      <button @click="addNewStep()">新增步驟</button>
      <button @click="clearStep()">清空步驟</button>
    </div>

    <br />
    <br />

    <div>
      <button @click="previousPage()">上一頁</button>
      <button @click="nextPage()">下一頁</button>
    </div>


  </div>
</template>

<script>

// import UploadScreenshotModal from "@/components/UploadScreenshotModal.vue";
import SimpleStep from "@/components/SimpleStep.vue";

export default {
  name: 'DemoComponent',
  props: {
    msg: String
  },

  components: {
    SimpleStep,
  },

  data() {
    return {
      currentIndex: 0,
      bookMark: [
      ],

      addLabel: '',
      addName: '',

    }
  },

  methods: {
    previousPage(){
      if (this.currentIndex !== 0) {
        this.currentIndex = this.currentIndex -1;
      }
    },
    nextPage(){
      if (this.currentIndex < this.bookMark.length -1) {
        this.currentIndex = this.currentIndex +1;
      }
    },
    addNewStep(){
      if (this.addLabel !== '' && this.addName !== '') {
        this.bookMark.push({
          show: true,
          label: this.addLabel,
          name: this.addName,
        })
      }
      else{
        alert("請輸入完整資訊");
      }
    },
    clearStep(){
      this.bookMark = [];
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
