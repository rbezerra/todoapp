Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Make a TODO app',
		isCompleted: true
	},
	{
		id: 2,
		title: 'Get the money',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Make it rain, babe!',
		isCompleted: false
	}
];