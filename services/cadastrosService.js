var fs = require('fs');

var cadastrosFilePath = 'db/cadastros.json';

var loadFileCadastros = function() {
  var fileData = fs.readFileSync(cadastrosFilePath, 'utf8');
  var cadastros = JSON.parse(fileData);

  return cadastros;
}

var saveFileCadastros = function(cadastros) {
  var data = JSON.stringify(cadastros);
  fs.writeFileSync(cadastrosFilePath, data, 'utf8');
}

var getCadastros = function() {
  var cadastros = loadFileCadastros();
  return cadastros;
}

var saveCadastro  = function(newCadastro) {
  var cadastros = loadFileCadastros();
  cadastros.push(newCadastro);
  saveFileCadastros(cadastros);
}

module.exports = {
  getCadastros : getCadastros,
  saveCadastro: saveCadastro
}