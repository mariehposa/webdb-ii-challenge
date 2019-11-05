const db =  require('../data/dbConfig')

function get(id){
    let query = db('cars as c')

    return query;
}

module.exports = {
    get
}