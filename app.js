/**
 * Constructor function for Projects
 */
function Project(name, description, img) {
    this.name = name;
    this.description = description;
    this.img = img;
  }
  
  // An array containing all the projects with their information
  var projects = [
    new Project('Project 1', 'Project 1 Description', 'http://bit.ly/1E0IzpX'),
    new Project('Project 2', 'Project 2 Description', 'http://bit.ly/1FHLGOt'),
    new Project('Project 3', 'Project 3 Description', 'http://bit.ly/1H5wRt7'),
    new Project('Project 4', 'Project 4 Description', 'http://bit.ly/1ECIQht'),
    new Project('Project 5', 'Project 5 Description', 'http://bit.ly/1CYeY9F')
  ];
  
  // Cacheing HTML elements
  var project = document.querySelector('#project');
  var projName   = document.querySelector('#proj_name');
  var projDescr  = document.querySelector('#proj_description');
  var projImg    = document.querySelector('#proj_img');
  var projButton = document.querySelector('#proj_switcher');
  
  // Index of the current project being displayed
  var projIndex = 0;
  
  projButton.addEventListener('click', function() {
    // Fade out
    project.style.opacity = 0;
    
    // Fade in 
    setTimeout(function(){ 
        projName.innerHTML = projects[projIndex].name;
        projDescr.innerHTML = projects[projIndex].description;
        projImg.src = projects[projIndex].img;
        projImg.style.width = '250px';
        projImg.style.height = '150px';
        projIndex = (projIndex + 1) % projects.length;
        project.style.opacity = 1;
    },500);
    
  });