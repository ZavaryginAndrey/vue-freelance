import {createStore} from 'vuex'
import {getLocaleDate, getStorageObject, isTaskFormValid, isPast, setStorageObject} from '@/utils/utils'

export default createStore({
  state() {
    return {
      activeCount: 0,
      tasks: {}
    }
  },
  getters: {
    activeCount(state) {
      return state.activeCount
    },
    tasks(state) {
      return state.tasks
    },
    task: state => (id) => {
      return state.tasks[id]
    }
  },
  mutations: {
    initStore(state) {
      state.tasks = getStorageObject('tasks') || {}
    },
    updateStore(state) {
      setStorageObject('tasks', state.tasks)
    }
  },
  actions: {
    newTask({commit, state}, task) {
      if (isTaskFormValid(task)) {
        const id = Math.random().toString().substring(2)
  
        task.status = isPast(task.date.value) ? 'Отменен' : 'Активен'
        
        task.date = getLocaleDate(task.date.value)
        state.tasks[id] = task
  
        commit('updateStore')
      }
      else {
        console.log('Impossible to add incorrect task.')
      }
    },
    updateTaskStatus({state, commit}, {id, status}) {
      state.tasks[id].status = status
      commit('updateStore')
    }
  }
})