//site routes

page('/', landingController.index);
page('/projects', projectController.index);
page('/about', aboutController.getData, aboutController.index);


page();
