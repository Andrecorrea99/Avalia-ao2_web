var getTestimoials = function() {
    var testimoials = [
        {
          id: 1,
          nome: 'André J. Corrêa',
          company: 'Catolica SC',
          title : 'Aluno Engenharia de Software',
          testimony: 'Aluno',  
        },
        {
          id: 2, 
          nome : 'qualquer coisa',
          company: 'instituiçao',
          title: 'titulo',
          testimony: ' lfkajdffjfajjffj',
        }
    ];

    return testimoials;
}

module.exports = {
  getTestimoials: getTestimoials
}