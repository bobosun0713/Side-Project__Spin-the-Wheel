<script>
import { reactive, ref } from "vue";
import db from "@/assets/db/data.json";
import RouletteWrap from "@/components/RouletteWrap.vue";

export default {
  components: {
    RouletteWrap,
  },
  setup() {
    const dbData = reactive([]);
    db.forEach((dblist) => {
      dbData.push(dblist);
    });
    dbData.forEach((item, i) => {
      item.deg = (360 / dbData.length) * (dbData.length - i);
    });

    const OpMsg = ref(false);
    const MsgPrice = ref(0);
    const OpemMsg = (msg) => {
      OpMsg.value = msg.isOpen;
      MsgPrice.value = msg.price;
      console.log(msg);
    };

    const closeMsg = () => {
      OpMsg.value = false;
    };

    return { dbData, OpemMsg, OpMsg, MsgPrice, closeMsg };
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
  background-color: rgb(65, 50, 50);
  font-family: "微軟正黑體", "Microsoft JhengHei";
}

// 轉盤背景
.rouletteWrap {
  -webkit-tap-highlight-color: transparent;
  margin-bottom: 60px;
  width: 590px;
  height: 590px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("~@/assets/image/RouletteGif1.gif") no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  transition: all 0.8s;

  @include RWD_676px {
    width: 550px;
    height: 550px;
  }
  @include RWD_576px {
    width: 500px;
    height: 500px;
  }
  @include RWD_499px {
    width: 400px;
    height: 400px;
  }
  @include RWD_411px {
    width: 340px;
    height: 340px;
  }
}

// 轉動背景
.rouletteBG {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;
  background: url("~@/assets/image/RouletteGif2.gif") no-repeat center center;
  background-size: cover;
  display: none;
}

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
    width: 650px;
    height: 650px;
    // background: url(../image/test04.png) no-repeat center center;
    background-size: contain;
    position: relative;

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
