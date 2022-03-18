import React from "react";
import { connect } from "react-redux";


class SongForm extends React.Component {
    state = {
        title: null,
        artist: null,
        rating: null,
        genre: null
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newSong = this.state
        if (this.state.title == null) {
            alert("Please provide correct input!")
            return
        }
        else if (this.state.artist == null) {
            alert("Please provide correct input!")
            return
        }
        else if (this.state.rating == null) {
            alert("Please provide correct input!")
            return
        }
        else if (this.state.genre == null) {
            alert("Please provide correct input!")
            return
        }
        this.props.addSong(newSong)
        const titleForm = document.getElementById("title")
        titleForm.value = ""
        const artistForm = document.getElementById("artist")
        artistForm.value = ""
        const genreForm = document.getElementById("genre")
        genreForm.value = "DEFAULT"
        const ratingForm = document.getElementById("rating")
        ratingForm.value = "DEFAULT"

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="container">
                    <h2>Enter Your Song Here:</h2>
                    <input type="text" placeholder="Title" onChange={this.handleChange} name="title" id="title" />
                    <input type="text" placeholder="Artist" onChange={this.handleChange} name="artist" id="artist" />
                    <select defaultValue="DEFAULT" onChange={this.handleChange} name="genre" id="genre">
                        <option value="DEFAULT" disabled hidden>Genre?</option>
                        <option value="metal">Rock</option>
                        <option value="disco">Disco</option>
                        <option value="pop">Pop</option>
                        <option value="hiphop">HipHop</option>
                        <option value="palingsound">Palingsound</option>
                        <option value="other">Other</option>
                    </select>
                    <select defaultValue="DEFAULT" onChange={this.handleChange} name="rating" id="rating">
                        <option value="DEFAULT" disabled hidden>Rating?</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button className="btn" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (newSong) => { dispatch({ type: "ADD_SONG", song: newSong }) }
    }
}

export default connect(null, mapDispatchToProps)(SongForm); 