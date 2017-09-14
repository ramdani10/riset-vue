/**
 * Mocking client-server processing
 */
const _users = [
  {"id": 1, "name": "Yoga",
  {"id": 2, "name": "Fadli",
  {"id": 3, "name": "Nova"}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_users), 100)
  },
}
