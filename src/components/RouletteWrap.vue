<script>
import { onMounted, reactive, ref, watch } from "vue";
export default {
  props: {
    db: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["msg"],
  setup(props, { emit }) {
    // DOM渲染
    const Circle_Deg = (index, name) => {
      if (name === "item_wrap") {
        let deg =
          (360 / props.db.length) * index +
          90 / (props.db.length / 2).toFixed(2);
        return `rotate(${deg}deg)`;
      }

      if (name === "item_circle") {
        let deg = (180 - 360 / props.db.length).toFixed(2);
        return `rotate(${deg}deg)`;
      }
    };

    const degree = ref(0);
    const isClick = ref(false);
    const isMsg = reactive({
      isOpen: false,
      price: 0,
    });
    let timer = ref(null);

    // 點擊抽獎
    const clickhandler = () => {
      if (isClick.value) return;
      isClick.value = true;

      // 取得獎品長度-1
      let idx = props.db.length - 1;
      let db_deg = props.db[rand(0, idx)].deg;
      // console.log(db_deg);
      degree.value += 2880 + db_deg - (degree.value % 360);

      timer = setTimeout(() => {
        isClick.value = false;
        isMsg.isOpen = true;
        isMsg.price = getPrice(db_deg);
        emit("msg", isMsg);
      }, 10500);
    };

    // 旋轉角度
    const rotate = () => {
      return `rotate(${degree.value}deg)`;
    };

    // 亂數隨機獎品
    const rand = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // 取得得獎物品
    const getPrice = (deg) => {
      let Price = props.db.filter((val) => val.deg === deg);
      return Price[0].price;
    };

    return {
      props,
      Circle_Deg,
      clickhandler,
      rotate,
    };
  },
};
</script>

<template>
  <div class="roulette_pointer" @click="clickhandler">
    <span>GO</span>
  </div>
  <div
    class="roulette_circle"
    ref="rouletteDOM"
    :style="{ transform: rotate() }"
  >
    <div
      class="roulette_circle_item"
      v-for="(item, index) in props.db"
      :key="item.id"
      :style="{ transform: Circle_Deg(index, 'item_wrap') }"
    >
      <div
        class="roulette_circle_item_cir"
        :style="{ transform: Circle_Deg(index, 'item_circle') }"
      >
        <span>{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/mixin.scss";

.roulette_pointer {
  content: "";
  display: block;
  position: absolute;
  width: 100px;
  height: 130px;
  background: url(~@/assets/image/Roulette_pointer.svg) no-repeat center center;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;

  @include RWD_499px {
    height: 80px;
  }

  // 文字
  span {
    display: inline-block;
    width: 70px;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;

    user-select: none;
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 30px;
    color: #fff;
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.8),
      0 0 10px rgba(246, 229, 141, 1), 0 0 30px rgba(246, 229, 141, 1),
      0 0 30px rgba(246, 229, 141, 1);

    @include RWD_676px {
      width: 70px;
      bottom: 32px;
      line-height: 26px;
      font-size: 1.5rem;
    }
    @include RWD_576px {
      width: 50px;
      bottom: 30px;
      font-size: 1.25rem;
      line-height: 23px;
    }
    @include RWD_499px {
      line-height: 18px;
      width: 40px;
      bottom: 18px;
      font-size: 1rem;
    }
  }

  // 抽獎時更換 加入文字class
  .txt {
    width: 100px;
    bottom: 50px;
    animation: unset;

    @include RWD_676px {
      width: 100px;
      bottom: 45px;
    }
    @include RWD_576px {
      width: 100px;
      bottom: 45px;
    }
    @include RWD_499px {
      width: 100px;
      bottom: 35px;
    }
    @include RWD_411px {
      width: 100px;
      bottom: 27.5px;
    }
  }
}

.roulette_circle {
  width: 500px;
  height: 500px;
  position: relative;
  transition: transform 10s cubic-bezier(0.25, 0, 0, 1);
  overflow: hidden;

  @include RWD_676px {
    width: 470px;
    height: 470px;
  }
  @include RWD_576px {
    width: 425px;
    height: 425px;
  }
  @include RWD_499px {
    width: 341px;
    height: 341px;
  }
  @include RWD_411px {
    width: 290px;
    height: 290px;
  }

  //半圓遮罩
  .roulette_circle_item {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    transform-origin: 100% 50%;
    overflow: hidden;

    @include RWD_676px {
      width: 235px;
    }
    @include RWD_576px {
      width: 212.5px;
    }
    @include RWD_499px {
      width: 170.5px;
    }
    @include RWD_411px {
      width: 145px;
    }

    //實際看到半圓
    .roulette_circle_item_cir {
      width: 100%;
      height: 100%;
      background-color: brown;
      border-radius: 252.5px 0 0 252.5px;
      transform-origin: 100% 50%;
      position: relative;

      @include RWD_576px {
        border-radius: 212.5px 0 0 212.5px;
      }
      @include RWD_499px {
        border-radius: 170.5px 0 0 170.5px;
      }
      @include RWD_411px {
        border-radius: 145px 0 0 145px;
      }

      //輪盤獎品
      span {
        position: absolute;
        bottom: 35px;
        right: 50px;
        font-size: 2rem;
        font-weight: bold;
        transform: rotate(-160deg);
        color: white;

        @include RWD_676px {
          right: 45px;
          bottom: 35px;
        }
        @include RWD_576px {
          font-size: 1.8rem;
          right: 35px;
        }
        @include RWD_499px {
          font-size: 1.5rem;
          right: 30px;
          bottom: 25px;
        }
        @include RWD_411px {
          font-size: 1.25rem;
          right: 25px;
          bottom: 20px;
        }
      }
    }
  }
  // 顏色
  .roulette_circle_item:nth-of-type(even) .roulette_circle_item_cir {
    background-color: #75485e;
  }
  .roulette_circle_item:nth-of-type(odd) .roulette_circle_item_cir {
    background-color: #51a3a3;
  }
  // .roulette_circle_item:nth-of-type(3n + 3) .roulette_circle_item_cir {
  //   background-color: #75d469;
  // }
}
</style>