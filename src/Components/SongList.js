import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
    render() {
        const { songs } = this.props
        const newSongs = songs.map((item) =>
            <tbody key={item.id}>
                <tr>
                    <th>{item.title}</th>
                    <th>{item.artist}</th>
                    <th>{item.genre}</th>
                    <th>{item.rating}</th>
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
}
const mapStateToProps = (state) => ({songs: state})

export default connect(mapStateToProps)(SongList);