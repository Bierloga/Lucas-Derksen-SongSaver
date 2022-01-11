import { connect } from 'react-redux'

const initState = {
  songs: [
    { title: "Rasputin", artist: "Boney M", genre: "disco", rating: "3", id: "1" },
    { title: "Master of puppets", artist: "Metallica", genre: "metal", rating: "4", id: "2" }
  ]
}

const Reducer = (state = initState, action) => {
  // if (action.type === 'ADD_SONG') {
  //   return {
  //     songs: [...state.songs, action.song]
  //   }
  // }
  console.log(action)

}

export default Reducer