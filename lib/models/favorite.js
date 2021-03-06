const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration);

const all = () => database('favorites').select()
const find = (id) => database('favorites').where('id', id).select()
const create = (newFavorite) => database('favorites').insert(newFavorite, ['id', 'name', 'artist_name', 'genre', 'rating'])
const destroy = (id) => database('favorites').where('id', id).del()

module.exports = {
  all, find, create, destroy
}
