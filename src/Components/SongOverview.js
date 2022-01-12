import React from 'react'
import SongForm from './SongForm'
import SongList from './SongList'

class SongOverview extends React.Component {

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
                            <th className="song-row__ratingitem">Rating</th>
                            <th className="song-row__button">Remove?</th>
                        </tr>
                    </tbody>
                </table>
                <SongList />
            </div>
        )
    }
}

export default SongOverview;