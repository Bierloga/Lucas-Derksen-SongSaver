import React from "react";
import { useSelector, useDispatch } from "react-redux";

function SongList() {
    const songs = useSelector(state => state.songs)
    const dispatch = useDispatch()
    const handleClick = (id) => {
        dispatch({ type: "DELETE_SONG", id: id })
    }
    const newSongs = songs.map((item) =>
        <tbody key={item.id}>
            <tr>
                <th>{item.title}</th>
                <th>{item.artist}</th>
                <th>{item.genre}</th>
                <th>{item.rating}</th>
                <th>{item.id}</th>
                <button onClick={() => handleClick(item.id)}>Remove</button>
            </tr>
        </tbody>
    )
    return (
        <div>
            <table>
                {newSongs}
            </table>
        </div>
    );
}
export default SongList

