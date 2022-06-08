const todoList = {
  items: [
    {
      text: 'Завершить текущий челлендж',
      completed: false,
    },
    {
      text: 'Отдохнуть во время перерыва',
      completed: false,
    },
    {
      text: 'Помочь напарнику понять код',
      completed: false,
    },
    {
      text: 'Выиграть в мафию',
      completed: true,
    },
  ],

  printAll: function() {
      for(let i = 0; i < this.items.length; i++){  
        console.log(this.print(i))
      }
  },

  add: function(text) {
      return todoList.items.unshift({
          text: text,
          complete: false 
      }) 
  },

  remove: function(index) {
      return todoList.items.splice(index, 1)
  },

  print: function(index) {
    //   let sum = index - 1;
   if(todoList.items[index].completed) {
       return `[ ] ${todoList.items[index].text}`
   } else{
       return `[x] ${todoList.items[index].text}`
   }  
  },

  complete: function(index) {
      this.items[index].completed = true
  },
};
todoList.complete(0)
// todoList.print()
// todoList.remove(1)
// todoList.add()
todoList.printAll()