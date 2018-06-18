var fs = require('fs');

fs.readdir('folder-files', 'utf-8', (err, files) => {
	fs.writeFile('nowy-tekst.txt', files, (err) => {
	  if (err) throw err;
	  console.log('The file has been saved!');
	});
});