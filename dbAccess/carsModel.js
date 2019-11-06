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
module.exports = {
    get,
    insert
}