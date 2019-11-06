const db =  require('../data/dbConfig')

function get(id){
    let query = db('cars')

    if (id) {
        query.where('cars.id', id).first()
    }
    return query;
}

function insert(car) {
    return db('cars')
    .insert(car)
    .then(([ id ]) => this.get(id))
}

function update(id, changes) {
    return db('cars')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
    return db('cars')
      .where('id', id)
      .del();
}

module.exports = {
    get,
    insert,
    update,
    remove
}