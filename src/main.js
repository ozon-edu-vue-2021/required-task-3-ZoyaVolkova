import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

//Посчитать counters для legend.json
/* 
import tables from './assets/data/tables.json'

const tableGroups = []
tables.forEach((table) => {
  tableGroups.push(table.group_id)
})

console.log(
  'Counters:',
  `group 1 = ${tableGroups.filter((group) => group === 0).length};`,
  `group 2 = ${tableGroups.filter((group) => group === 1).length};`,
  `group 3 = ${tableGroups.filter((group) => group === 2).length};`,
  `group 4 = ${tableGroups.filter((group) => group === 3).length}`
)
*/
