const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withImages(
	withSass({
		webpack: config => {
			config.module.rules.push({
				test: /\.svg$/,
				use: ["@svgr/webpack"]
			});
			config.node = {
				fs: "empty"
			};
			return config;
		},
		exportPathMap: function() {
			return {
				"/": { page: "/" }
			};
		}
	})
);
