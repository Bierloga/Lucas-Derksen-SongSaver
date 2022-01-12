import React from "react";
import { useSelector, useDispatch } from "react-redux";

function SongList() {
    const songs = useSelector(state => state.songs)
    const dispatch = useDispatch()
    const handleClick = (id) => {
        dispatch({ type: "DELETE_SONG", id: id })
    }
    const newSongs = songs.map((item) =>
        <tr key={item.id} className="songlist-header">
            <th className="songlist-row__item">{item.title}</th>
            <th className="songlist-row__item">{item.artist}</th>
            <th className="songlist-row__item">{item.genre}</th>
            <th className="songlist-row__ratingitem">{item.rating}</th>
            <th className="songlist-row__button"><button className="btn" onClick={() => handleClick(item.id)}>Remove</button></th>
        </tr>
    )
    return (
        <div className="songlist-overview">
            <table className="songlist-table">
                <tbody>
                    {newSongs}
                </tbody>
            </table>
        </div>
    );
}
export default SongList

