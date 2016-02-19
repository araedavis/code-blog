//site routes

page('/', landingController.index);
page('/projects', projectController.getData, projectController.index);
page('/about', aboutController.getData, aboutController.index);

page('/category', '/');

page('/category/:categoryName',
  projectController.loadByCategory,
  projectController.index);

page();
