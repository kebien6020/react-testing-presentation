const fs = require('fs')
// In-memory DB
const db = { content: null }
const defaultDb = {
  todos: {},
}

const readDb = () =>
  new Promise((resolve, reject) => {
    fs.readFile('db.json', { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })

const loadDb = async () => {
  try {
    const str = await readDb()
    db.content = JSON.parse(str)
  } catch (err) {
    console.error(err)
    db.content = { ...defaultDb }
  }

  console.log('db loaded', db.content)
}

const saveDb = async () => {
  return new Promise((resolve, reject) => {
    fs.writeFile('db.json', JSON.stringify(db.content, null, 2), { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

loadDb()

module.exports = {
  saveDb,
  db,
}
