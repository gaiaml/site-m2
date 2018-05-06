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
  }
}
