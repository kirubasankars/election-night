<script setup>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { ref } from 'vue'
import _ from "lodash"

const store = useStore()
const currentPlayer = ref(0)
const lastRolledPlayer = ref(-1)
const currentRolls = ref([])

const redBoard = ref([])
const blueBoard = ref([])


for (var i = 0; i < 269; i++) {
  redBoard.value.push({ filled: 0 })
  blueBoard.value.push({ filled: 0 })
}

const data = _.groupBy(store.state.data, "addition")

_.each(data, (group, slot) => {
  data[slot] = _.orderBy(group, (s) => { return parseInt(s.point) }, ['desc'])
  console.log(_.orderBy(group, (s) => { return parseInt(s.point) }, ['desc']))
})

_.each(data, (group) => {
  _.orderBy(group, ["point"], ['desc'])
  _.each(group, (state) => {
    let segments = []
    for (var i = 0; i < parseInt(state.segment); i++) {
      segments.push({ index: i, player: -1 })
    }
    state.segments = segments
  })
})

const getRndNumber = (min, max) => {
  fetch(`https://www.random.org/integers/?num=2&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`).then((r) => {
    console.log(r.text().then((o) => {
      
    }))
  })
  return Math.floor(Math.random() * (max - min)) + min;
}

const dice = async () => {
  let response = await  fetch(`https://www.random.org/integers/?num=2&min=3&max=8&col=1&base=10&format=plain&rnd=new`)
  let r1 = await response.text()
  r1 = r1.trim().split("\n")

  response = await  fetch(`https://www.random.org/integers/?num=2&min=4&max=9&col=1&base=10&format=plain&rnd=new`)
  let r2 = await response.text()
  r2 = r2.trim().split("\n")
  console.log(r1, r2)
  return [parseInt(r1[0]), parseInt(r1[1]), parseInt(r2[0]), parseInt(r2[1])]
}

const findPossibleCombinations = (roll) => {
  let t = [roll[0] + roll[1], roll[0] + roll[2], roll[0] + roll[3], roll[1] + roll[2], roll[1] + roll[3], roll[2] + roll[3]]
  t.sort((a, b) => {
    return a - b;
  })  
  t = _.uniq(t)
  if (t.length == 1) {
    t.push(t[0])
  }  
  return t
}

let filled = 0

const fillSegment = (seg, sum) => {
  let idx = currentRolls.value.indexOf(parseInt(sum))
  if (seg.player != -1 || idx == -1) {
    return
  }
  seg.player = currentPlayer.value
  currentRolls.value.splice(idx, 1)
  filled = filled + 1

  currentRolls.value = _.filter(currentRolls.value, (slot) => {
    return anyOpenSpot(slot)
  })

  if (filled == 2 || currentRolls.value.length == 0) {
    filled = 0
    currentRolls.value = []
    if (currentPlayer.value == 0) {
      currentPlayer.value = 1
    } else {
      currentPlayer.value = 0
    }
  }

  let scores = calculateScore()
  let r = scores[1], b = scores[0]
  _.each(blueBoard.value, (item) => {
    if (b < 1) {
      return
    }
    item.filled = 1
    b--
  })
  _.each(redBoard.value, (item) => {
    if (r < 1) {
      return
    }
    item.filled = 1
    r--
  })
}

const diceRoll = async () => {
  let rolls = findPossibleCombinations(await dice())
  currentRolls.value = rolls
  lastRolledPlayer.value = currentPlayer.value

  let openSlotAvailable = false
  _.each(currentRolls.value, (roll) => {
    if(anyOpenSpot(roll)) {
      openSlotAvailable = true
    }
  })

  if(!openSlotAvailable) {
    if (currentPlayer.value == 0) {
      currentPlayer.value = 1
    } else {
      currentPlayer.value = 0
    }
  }
}

const anyOpenSpot = (slot) => {
  let openspot = 0
  _.each(data[slot], (state) => {
    if (openspot == 1) {
      return
    }
    _.each(state.segments, (s) => {
      if (openspot == 1) {
        return
      }
      if (s.player == -1) {
        openspot = 1
        return
      }
    })
  })
  return openspot == 1
}

const canSelectSlot = (slot) => {
  return currentRolls.value.indexOf(parseInt(slot)) >= 0 && anyOpenSpot(slot)
}

const calculateScore = () => {
  let redTotalScore = 0, blueTotalScore = 0;
  _.each(data, (states, slot) => {
    _.each(states, (state) => {
      let blueScore = 0, redScore = 0;
      _.each(state.segments, (seg) => {
        if (seg.player == 0) {
          blueScore++
        }
        if (seg.player == 1) {
          redScore++
        }
      })
      if (Math.floor(state.segments.length / 2) < blueScore) {
        blueTotalScore += parseInt(state.point)
      }
      if (Math.floor(state.segments.length / 2) < redScore) {
        redTotalScore += parseInt(state.point)
      }
    })
  })
  return [blueTotalScore, redTotalScore]
}


</script>

<template>
  <div class="flex flex-row select-none h-full">
    <div class="flex-none w-2/5">
      <ul
        v-for="(group, slot) in data"
        :key="group"
        class="py-2 border flex flex-row bg-slate-100 font-mono"
        :class="{ 'bg-sky-100': canSelectSlot(slot) }"
      >
        <li class="text-4xl p-2 w-20 flex-none">{{ slot }}</li>
        <li class="px-2 flex-none">
          <ul>
            <li v-for="state in group" :key="state" class="p-2 static">
              <div class="flex flex-row">
                <div class="flex-none w-44 text-md">{{ state.name }}</div>
                <div class="flex-none w-20 text-lg font-bold">{{ state.point }}</div>
                <div class="flex-grow flex flex-row relative bottom-2">
                  <div
                    class="border-2 p-4 bg-gray-400 cursor-pointer"
                    :class="{ 'bg-red-600': s.player == 1, 'bg-blue-600': s.player == 0, 'hover:bg-blue-500': s.player == -1 && currentPlayer == 0 && canSelectSlot(slot), 'hover:bg-red-500': s.player == -1 && currentPlayer == 1 && canSelectSlot(slot) }"
                    v-for="s in state.segments"
                    :key="s"
                    v-on:click="fillSegment(s, slot)"
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="fixed flex-grow bg-gray-200 p-4 right-0 w-3/5 h-full">
      <ul class="grid gap-2" style="grid-template-columns: repeat(50, minmax(0, 1fr));">
        <li
          class="w-2 h-2 border-2 border-blue-500 rounded-full p-2"
          :class="{ 'bg-blue-500': item.filled == 1 }"
          v-for="item in blueBoard"
          :key="item"
        ></li>
      </ul>
      <ul class="grid gap-2 pt-10" style="grid-template-columns: repeat(50, minmax(0, 1fr));">
        <li
          class="w-2 h-2 border-2 border-red-500 rounded-full p-2"
          :class="{ 'bg-red-500': item.filled == 1 }"
          v-for="item in redBoard"
          :key="item"
        ></li>
      </ul>
      <div v-if="lastRolledPlayer == currentPlayer" class="py-10 text-2xl">
        {{currentRolls}}
      </div>
      <div class="p-4" v-if="lastRolledPlayer != currentPlayer">
        <span class="text-lg py-4" v-if="currentPlayer == 0">Democratic President</span>
        <span class="text-lg py-4" v-if="currentPlayer == 1">Republican President</span> 
      <div
        class="py-10 cursor-pointer text-lg border-2 text-center"
        v-on:click="diceRoll()"
        :class="{ 'bg-red-600 hover:bg-red-500': currentPlayer == 1, 'bg-blue-600 hover:bg-blue-500': currentPlayer == 0 }"
      >Dice
      </div>
      </div>
    </div>
  </div>
</template>
