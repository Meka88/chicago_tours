import data from './places-data.json'

data.forEach((obj, i) => {
    obj.id = i
})

export default data
