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
  
  async removeById(id) {
    return this.model.deleteOne({ _id: id })
  }
  
  async find(itemId) {
    return this.model.findOne({ _id: itemId})
  }
}

module.exports = Service
