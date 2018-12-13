import React, { Component } from "react";
import Post from "./Blog";
import Header from "../Shared/Header";
import "./blog.scss";

export default class BlogContainer extends Component {
	constructor() {
		super();
		this.state = {
			header: "black"
		};
	}
	render() {
		return (
			<div>
				<Header header1={this.state.header} />
				<Post />
			</div>
		);
	}
}
