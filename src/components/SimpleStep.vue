<template>
      <!-- 上方頁籤進度條 -->
      <div class="frame-style" style="">
        <div class="tag-mark">
          <div style="padding-top: 10px;">{{ tittle1 }}</div>
          <div style="padding-bottom: 10px;">{{ tittle2 }}</div>
        </div>

        <div>
          <hr style="margin-top: 20px;" />
          <div class="book-mark">
            <template v-for="(mark, index) of bookMark">
              <div v-show="mark.show" class="mark-container" :key="index">
                <div :id="'mark-' + mark.name"
                     class="mark">
                  <div style="margin-top: 5px ">
                    {{ index + 1 }}
                  </div>
                </div>
                <p class="mt-1 mb-0">{{ mark.label }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>

</template>


<script src="./SimpleStep.js"></script>
<style scoped>
span,
p,
input,
div {
  font-size: 16px;
}
.frame-style {
  background-color: white;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 10px 10px 5px rgb(128, 124, 127);
}
.tag-mark {
  background-color: #524a2a;
  border-radius: 0 0 10px 10px;
  width: 100px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  margin: -30px 0 0 20px;
}
.book-mark {
  display: flex;
  justify-content: space-around;
  margin: -25px 0 0 0;
}
.mark-container {
  width: 95px;
  cursor: default;
}
.mark {
  background-color: white;
  border: 1px #cccccc solid ;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  color: #0d0d0d;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.mark-select {
  background-color: #fff3c2;
  border: 1px #cccccc solid;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  color: #805500;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: bold;
}
</style>
