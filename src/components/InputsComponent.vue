<template>
  <div>
    <div class="row">
      <div class="row-column">
        <label for="price">Price</label>
        <input id="price" v-model="price" type="number" @input="calculate('price')">
      </div>

      <div class="row-column">
        <label for="cost">Cost</label>
        <input id="cost" v-model="cost" type="number" @input="calculate('cost')">
      </div>
    </div>

    <div class="row">
      <div class="row-column">
        <label for="discount">Discount</label>
        <input id="discount" v-model="discount" :disabled="!enableDiscount" type="number"
               @input="calculate('discount')">
      </div>

      <div class="row-column">
        <label>Enable discount</label>
        <label class="switch">
          <input v-model="enableDiscount" type="checkbox" @change="calculate('enableDiscount')">
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Ref, ref} from "vue";
import {userDataStore} from "@/store";

const {updateValue} = userDataStore()
const price = ref() as Ref<number>
const cost = ref() as Ref<number>
const discount = ref() as Ref<number>
const enableDiscount = ref(false) as Ref<boolean>

const calculate = (key: string): void => {
  console.log(key)
  switch (key) {
    case 'price':
      updateValue(key, price.value)
      break;
    case 'cost':
      updateValue(key, cost.value)
      break;
    case 'discount':
      updateValue(key, discount.value)
      break;
    case 'enableDiscount':
      updateValue(key, enableDiscount.value ? 1 : 0)
      break;
  }
}

</script>


<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;

  .row-column {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 50%;
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 1px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>