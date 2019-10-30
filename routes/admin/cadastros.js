var express = require('express');
var router = express.Router();
var uploader = require('../../middlewares/uploaderMiddleware');

var cadastrosService = require('../../services/cadastrosService');

router.get('/' , function(req, res, next){
    var cadastros = cadastrosService.getCadastros();

    var data = {
        cadastros: cadastros
    };

    
    res.render('admin/cadastros/index', data);
});

router.get('/create', function(req, res, next){

    res.render('admin/cadastros/create');

});

router.post('/create',  function(req, res, next){
    var cadastros = cadastrosService.getCadastros();

    var newId = cadastros.length + 1;

    var newCadastro = {};
    newCadastro.id = newId;
    newCadastro.title = req.body.title;
    newCadastro.description = req.body.description;
    newCadastro.preco = req.body.preco;
    newCadastro.image = req.body.image;

    cadastrosService.saveCadastro(newCadastro);

    res.redirect('/admin/cadastros');
});

module.exports = router;

