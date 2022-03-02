import React, { Component } from "react";

class SearchBar extends Component {
	state = {
		term: "",
		headline: "Video Search",
		animated: "I'm getting my search engines ready for you! 😁",
		animationStatus: false,
	};

	// Totally not important
	headlineAnimation = () => {
		this.setState({ animationStatus: true });
		if (!this.state.animationStatus) {
			this.setState({ headline: "" });
			for (let i = 0; i < this.state.animated.length; i++) {
				setTimeout(() => {
					this.setState({
						headline: this.state.headline + this.state.animated[i],
					});
				}, 50 * i);
			}
		}
	};

	onInputOnChange = (e) => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		if (this.state.term.length > 0) {
			// We will use this on submit to eventually
			// get some data (INPUT VALUE) as a callback
			// to the parent component:
			this.props.onFormSubmit(this.state.term);
		}
	};
	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<h2>{this.state.headline}</h2>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputOnChange}
							placeholder="I'm ready for your searches"
							onClick={this.headlineAnimation}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
