var getProjects = function() {
    var project = [
      {
        id: 1,
        title: 'Projeto 1',
        image: 'post4.jpg',
        description: 'Projeto 1',
        body: 'Meu primeiro projeto bla bla'
      },
      {
        id: 2,
        title: 'Projeto 2',
        image: 'post5.jpg',
        description: 'Meu segundo post',
        body: 'Meu segundo projeto bla bla'
      },
      {
        id: 3,
        title: 'Projeto 3',
        image: 'post6.jpg',
        description: 'Meu terceiro post',
        body: 'Meu terceiro projeto bla bla'
      },
      
    ]
  
    return project;
  }
  
  module.exports = {
    getProjects: getProjects
  }