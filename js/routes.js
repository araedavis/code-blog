//site routes

page('/', landingController.index);
page('/projects', projectController.getData, projectController.index);
page('/about', aboutController.getData, aboutController.index);


page();
