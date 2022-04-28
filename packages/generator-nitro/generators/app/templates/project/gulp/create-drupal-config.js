const patterns = require('../../config/default/patterns');
const fs = require('fs');

const drupalConfig = {
	nitro: {
		view_file_extension: 'twig',
		components: {},
	},
};

Object.keys(patterns).forEach((key) => {
	drupalConfig.nitro.components[key] = { path: patterns[key].path };
});

function writeDrupalConfig() {
	fs.writeFile('config.json', JSON.stringify(drupalConfig), (err) => {
		if (err) {
			console.error(err);
		}
	});
}

module.exports = () => {
	return (done) => {
		writeDrupalConfig();
		done();
	};
};
