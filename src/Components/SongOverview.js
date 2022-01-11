import React from 'react'
import SongForm from './SongForm'
import SongList from './SongList'

class SongOverview extends React.Component {

    // addSong = (song) => {
    //     // do something to change the state
    // }

    render() {
        return (
            <div className='song-overview'>
                <SongForm />
                <table className="song-table">
                    <tbody>
                        <tr className="song-header">
                            <th className="song-row__item">Song</th>
                            <th className="song-row__item">Artist</th>
                            <th className="song-row__item">Genre</th>
                            <th className="song-row__item">Rating</th>
                        </tr>
                    </tbody>
                </table>
                <SongList />
            </div>
        )
    }
}

export default SongOverview;