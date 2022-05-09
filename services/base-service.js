class Service {
  async findAll() {
    return this.model.find()
  }

  async add(item) {
    return this.model.create(item)
  }

  async removeByName(name) {
    return this.model.deleteOne({ name: name })
  }

  async find(itemId) {
    return this.model.findById(itemId)
  }
}

module.exports = Service
