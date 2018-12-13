import React, { Component } from "react";
import Cloudinary from "./posts/Cloudinary";
import posts from "./posts/info.js";

export default class BlogContainer extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const month = new Date();
		const year = new Date();

		return (
			<div className="blog-display">
				<div>
					<h1>Blog</h1>

					<span>
						{month.getMonth() + 1 + "/" + year.getFullYear()}
					</span>
				</div>
				<div className="blog-selection-container">
					<Cloudinary />
				</div>
			</div>
		);
	}
}
