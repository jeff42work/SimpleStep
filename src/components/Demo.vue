<template>
  <div>
    <h1>Demo simple-step-progress</h1>

    <br />
    <br />
    <br />
    <br />
    <br />

    <SimpleStep :currentIndex.sync="currentIndex"
                :bookMark.sync="bookMark"
                :tittle1.sync="tittle1"
                :tittle2.sync="tittle2"/>

    <br />
    <br />

    <div>
      <label> Tittle1 </label>
      <input v-model="tittle1" placeholder="Tittle1" style="margin-right: 15px">

      <label> Tittle2 </label>
      <input v-model="tittle2" placeholder="Tittle2" style="margin-right: 15px">
    </div>

    <br />
    <br />
    

    <div>
      <label> label </label>
      <input v-model="addLabel" placeholder="label" style="margin-right: 15px">

      <label> name </label>
      <input v-model="addName" placeholder="name" style="margin-right: 15px">

      <button @click="addNewStep()">add new sep</button>
      <button @click="clearStep()">clear step</button>
    </div>

    <br />
    <br />

    <div>
      <button @click="previousPage()">Previous Step</button>
      <button @click="nextPage()">Nex Step</button>
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
      tittle1: 'Account opening',
      tittle2: 'FillInSteps',

      currentIndex: 0,
      bookMark: [
        { show: true, label: "Basin Info", name: "BasicInfo" },
        { show: true, label: "Adv Info", name: "AdvInfo" },
        { show: true, label: "FATCA and CRS data", name: "FATCA" },
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
