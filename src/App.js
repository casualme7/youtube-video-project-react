import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./api/Youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	componentDidMount() {
		this.onTermSubmit("React Crash Course");
	}

	onTermSubmit = async (term) => {
		console.log("From APP.js callback...");
		console.log("But the info coming from SearchBar.jsx is:");
		console.log(term);
		//
		const response = await Youtube.get("/search", {
			params: {
				q: term,
			},
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVieoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVieoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
