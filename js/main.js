// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({

  el: '#app',

  data: {

    todoList: [
      {
        title: 'What to Pack',
        content: 'Shoes, Jeans, Sunglasses, Sweater'
      },
      {
        title: 'What to Eat',
        content: 'Cake, Apples, Sandwich, Potato'
      }
    ],

    inputTitle: '',

    inputContent: '',

    editingTodo: null,

    editing: false

  },

  methods: {

      addTodo() {

        this.todoList.push({

          title: this.inputTitle,

          content: this.inputContent

        })

        this.inputTitle= '';
        this.inputContent= '';

      },

      eraseTodo(todo) {

        this.todoList.splice(todo, 1)

      },

      editTodo(todo) {

        this.editing = true;
        this.editingTodo = todo;
        this.inputTitle = this.editingTodo.title;
        this.inputContent = this.editingTodo.content;

      },

      saveTodo() {

        this.editingTodo.title = this.inputTitle;
        this.editingTodo.content = this.inputContent;
        this.editingTodo = null;

        this.inputTitle = '';
        this.inputContent = '';
        this.editing = false;

      },

      cancelTodo() {

        this.inputTitle = '';
        this.inputContent = '';
        this.editing = false;

      }

    }

});
