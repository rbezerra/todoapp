Todos.Router.map(function() {
  this.resource('todos', {path : '/'}, function (){
    this.route('active');
    this.route('completed'); 
  });
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

Todos.TodosIndexRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
      return this.modelFor('todos');
  }
});

Todos.TodosActiveRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  },
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
      return this.store.filter('todo', function (todo){
        return !todo.get('isCompleted');
      });
  }
});


Todos.TodosCompletedRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller})    
  },
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
      return this.store.filter('todo', function (todo){
        return todo.get('isCompleted');
      });
  }
});

