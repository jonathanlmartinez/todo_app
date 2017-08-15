/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
        {task:"Pick up milk", completed:false},
        {task:"Call mom", completed:false},
        {task:"pay the gas bill", completed:false},
      ],
      newTask: ""
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if(this.newTask)
          var newTask = {task: this.newTask, completed: false};
          this.tasks.push(newTask);
          this.newTask = ""; 
      },
      toggleComplete: function(task) {
        task.completed = !task.completed;
      }
    },
    computed: {

    }
  });
});