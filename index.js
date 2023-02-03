console.clear()
const eventLoop = "event-loop"
function constructPath(folder, file) {
    require(`./${folder}/${file}.js`)
}

constructPath(eventLoop, eventLoop)
