const initState = {
  songs: [
    { title: "Rasputin", artist: "Boney M", genre: "disco", rating: "3", id: "1" },
    { title: "Master of puppets", artist: "Metallica", genre: "metal", rating: "4", id: "2" }
  ]
}

const Reducer = (state = initState, action) => {
  switch(action.type) {
    case "ADD_SONG":
      const createID = () => {
        if (state.songs.length > 0) {
            const idArray = state.songs.map((item) => { return item.id })
            const newArray = idArray.sort(function (a, b) {
                return a - b
            })
            const highNumber = newArray.splice(-1)
            return parseInt(highNumber) + 1
        } else { return 1 }}
      action.song.id = createID()
      return {songs: [...state.songs, action.song]};
    case "DELETE_SONG":
      const copiedArray = [...state.songs]
      const fixedArray = copiedArray.filter(item => item.id !== action.id)
      return {songs: [...fixedArray]}
    default:
      return state
  }  
}

export default Reducer