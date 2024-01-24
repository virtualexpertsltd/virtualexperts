const path = require("path");

export const generateAltFromFilename = (filename) => {
	return path.parse(filename).name.replaceAll("-", " ").replaceAll(/ +/g, " ");
};
