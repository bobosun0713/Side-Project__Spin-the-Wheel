<script>
import { reactive, ref, watch, watchEffect } from "vue";
import db from "@/assets/db/data.json";
import RouletteWrap from "@/components/RouletteWrap.vue";

export default {
  components: {
    RouletteWrap,
  },
  setup() {
    // 獲取資料 - 獎品內容
    const dbData = reactive([]);
    db.forEach((dblist) => {
      dbData.push(dblist);
    });

    // 獲獎訊息
    const OpMsg = ref(false);
    const MsgPrice = ref("");
    const OpemMsg = (msg) => {
      OpMsg.value = msg.isOpen;
      MsgPrice.value = msg.price;
    };

    // 關閉獲獎視窗
    const closeMsg = () => {
      OpMsg.value = false;
    };

    // 監控獎品長度，如果新增重新計算轉盤旋轉角度。
    watchEffect(() => {
      dbData.forEach((item, i) => {
        item.deg = (360 / dbData.length) * (dbData.length - i);
      });
      // console.log("重新計算", dbData);
    });

    // 設定
    const OpControl = ref(false);
    const control = () => {
      OpControl.value = !OpControl.value;
    };

    // 新增按鈕
    const savaBtn = () => {
      let idx = dbData.length + 1 + "";
      dbData.push({ id: idx, price: 0 });
      console.log(dbData);
    };

    // 刪除按鈕
    const delBtn = (idx) => {
      dbData.splice(idx, 1);
      console.log(dbData);
    };

    return {
      dbData,
      OpemMsg,
      OpMsg,
      MsgPrice,
      closeMsg,
      control,
      OpControl,
      savaBtn,
      delBtn,
    };
  },
};
</script>

<template>
  <div class="Rwrap">
    <div class="rouletteWrap">
      <div class="rouletteBG"></div>
      <RouletteWrap :db="dbData" @msg="OpemMsg" />
    </div>
    <div :class="['rouletteMsgWrap', { rouletteMsgWrap_open: OpMsg }]">
      <div class="rouletteMsg">
        <span class="rouleMsg_span">恭喜獲得{{ MsgPrice }}元</span>
        <button class="rouleMsg_cancel" @click="closeMsg">關 閉</button>
      </div>
    </div>
    <button class="control" @click="control">設定</button>
    <div :class="['controlWrap', { 'controlWrap--active': OpControl }]">
      <div class="controlWrap_item">
        <ul>
          <li v-for="(item, i) in dbData">
            <span>獎品 {{ i + 1 }}</span>
            <input type="text" v-model.trim="item.price" />
            <a href="javascript:;" @click="delBtn(i)">&#10007;</a>
          </li>
        </ul>
      </div>
      <button class="savebtn" @click="savaBtn">新 增</button>
    </div>
  </div>
</template>



<style lang="scss">
@import "~@/assets/scss/mixin.scss";

.Rwrap {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0e171d;
  font-family: "微軟正黑體", "Microsoft JhengHei";
}

// 設定按鈕
.control {
  position: absolute;
  right: 50px;
  bottom: 50px;
  outline: none;
  background-color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 0;
  font-weight: bold;
  font-size: 1.125rem;
  cursor: pointer;
}

// 設定窗口
.controlWrap {
  position: absolute;
  left: -300px;
  width: 300px;
  height: 100%;
  background: linear-gradient(60deg, #313f49, #131e26);
  box-shadow: 2px 0 10px rgb(165, 162, 162);
  transition: left 0.5s;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // RWD
  @include RWD_499px {
    width: 200px;
  }

  .controlWrap_item {
    height: calc(100% - 100px);
    overflow-y: scroll;
  }

  // scoll bar樣式
  .controlWrap_item::-webkit-scrollbar {
    width: 8px;
    height: 50px;
  }

  .controlWrap_item::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      background-color: #0e171d;
      height: 40px;
      margin-bottom: 10px;

      // 編號
      span {
        border-left: 4px solid #ff9519;
        display: inline-block;
        width: calc(100% / 3);
        color: #ff9519;
        font-weight: bold;
        line-height: 40px;
      }

      // 輸入框
      input {
        width: calc(100% / 3);
        outline: none;
        border: 0;
        padding-left: 10px;
        background-color: transparent;
        color: #ff9519;
        font-size: 1.125rem;
      }

      // 刪除案
      a {
        display: inline-block;
        width: calc(100% / 3);
        line-height: 40px;
        text-decoration: none;
        color: red;
      }
    }
  }

  // 新增
  .savebtn {
    outline: none;
    width: 150px;
    height: 50px;
    border-radius: 50px;
    border: 0;
    margin: 0 auto 25px;

    font-size: 1.25rem;
    font-weight: bold;
    background-color: #ff9519;
    color: white;
    cursor: pointer;
  }
}

// 打開設定視窗
.controlWrap--active {
  left: 0;
}

// 轉盤背景
.rouletteWrap {
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  width: 605px;
  height: 605px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("~@/assets/image/Roulette.gif") no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  transition: all 0.8s;

  @include RWD_676px {
    width: 565px;
    height: 565px;
  }
  @include RWD_576px {
    width: 515px;
    height: 515px;
  }
  @include RWD_499px {
    width: 415px;
    height: 415px;
  }
  @include RWD_411px {
    width: 355px;
    height: 355px;
  }
}

// 轉動背景
// .rouletteBG {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;

//   z-index: 1;
//   background: url("~@/assets/image/RouletteGif2.gif") no-repeat center center;
//   background-size: cover;
//   display: none;
// }

// 中獎跳窗
.rouletteMsgWrap {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 0;
  left: 0;

  display: none;
  justify-content: center;
  align-items: center;

  .rouletteMsg {
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 100%;
    position: relative;

    // RWS
    @include RWD_676px {
      width: 565px;
      height: 565px;
    }
    @include RWD_576px {
      width: 515px;
      height: 515px;
    }
    @include RWD_499px {
      width: 415px;
      height: 415px;
    }
    @include RWD_411px {
      width: 355px;
      height: 355px;
    }

    // 文字顯示
    .rouleMsg_span {
      height: 200px;
      line-height: 200px;
      width: 100%;
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      font-size: 3rem;
      font-weight: bold;
      text-align: center;

      @include RWD_676px {
        font-size: 2.5rem;
      }
      @include RWD_576px {
        font-size: 2rem;
      }
      @include RWD_499px {
        font-size: 1.875rem;
      }
      @include RWD_411px {
        font-size: 1.5rem;
      }
    }

    //關閉
    .rouleMsg_cancel {
      outline: none;
      position: absolute;
      bottom: 50px;
      left: 0;
      right: 0;
      width: 30%;
      margin: 0 auto;
      padding: 8px;
      border: 2.5px solid white;
      border-radius: 30px;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      background-color: #fc5000;
      color: white;
      text-decoration: none;
      transition: background-color 0.3s ease;
      animation: linktxt 1s infinite linear;
      text-shadow: 0.5px 0.5px 1px rgb(85, 84, 84);
      cursor: pointer;

      @include RWD_676px {
        bottom: 40px;
      }
      @include RWD_576px {
        bottom: 90px;
        padding: 5px;
        font-size: 1.5rem;
      }
      @include RWD_499px {
        bottom: 120px;
        font-size: 1.125rem;
      }
      @include RWD_411px {
        bottom: 160px;
        font-size: 1rem;
      }

      &:hover {
        background-color: orange;
      }

      @keyframes linktxt {
        0% {
          transform: scale(1.05);
        }
        50% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.05);
        }
      }
    }
  }
}

// 開始中獎視窗
.rouletteMsgWrap_open {
  display: flex;
}
</style>
