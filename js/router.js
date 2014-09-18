Todos.Router.map(function() {
  this.resource('todos', {path : '/'});
});

Todos.TodosRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
      return this.store.find('todo');
  }
});
