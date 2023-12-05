export default {
  name: "FillInFutures",

  props: {
    tittle1: {
    },
    tittle2: {
    },
    currentIndex: {
      default: -1
    },
    bookMark: {
      type: Array,
      default: () => ([
        { show: true, label: "基本資料", name: "BasicInfo" },
        { show: true, label: "進階資料", name: "AdvInfo" },
        { show: true, label: "FATCA 及 CRS 條款資料", name: "FATCA" },
        { show: true, label: "風險預告書及個人資料使用同意", name: "RskDisc" },
        { show: true, label: "期貨交易知識認知測驗", name: "TrdQuest" },
      ])
    },
  },

  mounted() {
    console.log("In mounted, currentIndex: " + this.currentIndex);
    this.setCurrentPage(this.bookMark[this.currentIndex].name);
  },

  data() {
    return {
      // 上方頁籤
    };
  },

  computed: {
  },

  watch:{
    currentIndex(){
        this.setCurrentPage(this.bookMark[this.currentIndex].name);
    }
  },

  methods: {
    // 設定當前頁籤
    setCurrentPage(value) {
      let key = "";
      this.bookMark.forEach((item) => {
        // 全清除
        let mark = document.getElementById("mark-" + item.name);
        mark.className = "mark text-center";
        // 設定id
        if (item.name == value) {
          key = value;
        }
      });
      if (key) {
        document.getElementById("mark-" + key).className = "mark-select text-center";
      }
    },

  },
};
