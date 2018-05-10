import Api from '@/services/Api'

export default {
  fetchProducts (data) {
    return Api().post('products', data)
  },
  orderProducts (data) {
    return Api().post('order', data)
  },
  fetchCommands (data) {
    return Api().post('commands', data)
  },
  fetchStatistics (data) {
    return Api().post('getstats', data)
  },
  addStats (data) {
    return Api().post('statistic', data)
  }
}
