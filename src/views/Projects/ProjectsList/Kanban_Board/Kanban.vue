<template>
  <div id="app" class="font-sans">
    <header class="bg-gray-800 text-white p-2">
      <h1 class="text-2xl text-white">PM Kanban Board</h1>
    </header>
    <main class="flex p-4">
      <section v-for="(task, index) in tasks" :key="index" class="w-1/3 p-4">
        <h2 class="font-semibold font-mono text-2xl mb-4">{{ task.title }}</h2>
        <draggable drag-class="drag" ghost-class="ghost" class="border p-2 rounded shadow" :list="tasks.todo" group="tasks" @change="updateTasks">
          <div v-for="(card, cardIndex) in task.cards" :key="cardIndex"
            class="flex flex-wrap justify-between overflow-auto mb-2 p-2 border rounded shadow">
            <div class="h-10 flex items-center">{{ card.title }}</div>
            <div id="actions" class="flex items-center justify-center gap-2">
              <i @click="() => modalEdit(JSON.stringify(card))" class="editTask pi pi-pencil cursor-pointer"></i>
              <i @click="deleteTodo" class="delite pi pi-trash cursor-pointer"></i>
            </div>
          </div>
          <div
            :class="addTaskmodal ? `w-full flex flex-col gap-2 transition outline-none p-2 border rounded shadow` : 'hidden'">
            <form class="flex flex-col gap-2">
              <input v-model="addTaskValue" class="w-full transition outline-none p-2 border rounded shadow" type="text"
                placeholder="Add New Task" autofocus>
              <div class="actions flex items-center gap-3">
                <button @click.prevent="AddTask"
                  class="bg-blue-500 w-1/2 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add
                  Task</button>
                  <i class="pi pi-times cursor-pointer p-1 transition font-bold text-lg  hover:text-red-500" @click="CancelNewTask"></i>
              </div>
            </form>
          </div>
          <div @click="addTaskModal" class="flex h-10 items-center gap-3 mb-2 mt-4 cursor-pointer p-2 border rounded shadow">
            <i class="pi pi-plus"></i>
            <h2>Add Task</h2>
          </div>
        </draggable>
      </section>
      <!-- <section class="w-1/3 p-4">
        <h2 class="text-2xl font-semibold mb-4">On Process</h2>
        <draggable drag-class="drag" ghost-class="ghost" class="border p-2 rounded shadow" :list="tasks.inProgress" group="tasks" @change="updateTasks">
          <div v-for="task in tasks.inProgress" :key="task.id" :style="{ backgroundColor: task.backgroundColor, color: task.textColor }"
            class="flex flex-wrap justify-between overflow-auto mb-2 p-2 border rounded shadow">
            <div class="h-10 flex items-center">{{ task.title }}</div>
            <div id="actions" class="flex items-center justify-center gap-2">
              <i @click="editDone" class="editTask pi pi-pencil cursor-pointer"></i>
              <i @click="removeProgres" class="editTask pi pi-trash cursor-pointer"></i>
            </div>
          </div>
          <div
            :class="addProgresmodal ? `w-full flex flex-col gap-2 transition outline-none p-2 border rounded shadow` : 'hidden'">
            <form class="flex flex-col gap-2">
              <input v-model="addProgresValue" class="w-full transition outline-none p-2 border rounded shadow"
                type="text" placeholder="Add New Task" autofocus>
              <div class="actions flex items-center gap-3">
                <button @click.prevent="AddProgres"
                  class="bg-blue-500 w-1/2 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add
                  Task</button>
                   <i class="pi pi-times cursor-pointer p-1 transition font-bold text-lg  hover:text-red-500" @click="CancelNewProgres"></i>
              </div>
            </form>
          </div>
          <div @click="addProgreskModal"
            class="flex h-10 items-center gap-3 mb-2 mt-4 cursor-pointer p-2 border rounded shadow">
            <i class="pi pi-plus"></i>
            <h2>Add Task</h2>
          </div>
        </draggable>
      </section>
      <section class="w-1/3 p-4">
        <h2 class="text-2xl font-semibold mb-4">Done</h2>
        <draggable drag-class="drag" ghost-class="ghost" class="border p-2 rounded shadow" :list="tasks.done" group="tasks" @change="updateTasks">
          <div v-for="task in tasks.done" :key="task.id" :style="{ backgroundColor: task.backgroundColor, color: task.textColor }"
            class="flex flex-wrap justify-between overflow-auto mb-2 p-2 border rounded shadow">
            <div class="h-10 flex items-center">{{ task.title }}</div>
            <div id="actions" class="flex items-center justify-center gap-2">
              <i @click="editDone" class="editTask pi pi-pencil cursor-pointer"></i>
              <i @click="removeDone" class="editTask pi pi-trash cursor-pointer"></i>
            </div>
          </div>
          <div
            :class="addDonemodal ? `w-full flex flex-col gap-2 transition outline-none p-2 border rounded shadow` : 'hidden'">
            <form class="flex flex-col gap-2">
              <input v-model="addDoneValue" class="w-full transition outline-none p-2 border rounded shadow" type="text"
                placeholder="Add New Task" autofocus>
              <div class="actions flex items-center gap-3">
                <button @click.prevent="AddDone"
                  class="bg-blue-500 w-1/2 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add
                  Task</button>
                  <i class="pi pi-times cursor-pointer p-1 transition font-bold text-lg  hover:text-red-500" @click="CancelNewDone"></i>
              </div>
            </form>
          </div>
          <div @click="addDoneModal" class="h-10 flex items-center gap-3 mb-2 mt-4 cursor-pointer p-2 border rounded shadow">
            <i class="pi pi-plus"></i>
            <h2>Add Task</h2>
          </div>
        </draggable>
      </section> -->
      <section class="w-1/5 p-4">
        <div class="container transition bg-slate-200 hover:bg-slate-100 cursor-pointer p-2 rounded-sm flex items-center justify-center gap-2">
          <i class="pi pi-plus font-bold"></i>
          <h1 class="font-semibold">Add New Card</h1>
        </div>
      </section>
      <template>
      <div class="card">
          <Editor v-model="value" editorStyle="height: 320px" />
      </div>
  </template>
    </main>
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue';
import { VueDraggableNext as draggable } from 'vue-draggable-next';

const addTaskmodal = ref(false)
const addTaskValue = ref('')
const addProgresmodal = ref(false)
const addProgresValue = ref('')
const addDonemodal = ref(false)
const addDoneValue = ref('')
const EditModalOpend = ref(false)
const editInputValue = reactive({
title:''
})
const eId = ref(null)

const value = ref('');

const tasks = ref([
  {title:'Task',
    cards: [
      {
        id: 1, title: 'Task 1',
      },
      { id: 2, title: 'Task 2', },
      { id: 3, title: 'Task 3', },
      { id: 4, title: 'Task 4', },
      { id: 5, title: 'Task 5', },
      // Add more tasks as needed
    ],
  },
  {title:'In Progress',
    cards: [
      {
        id: 1, title: 'Task 1',
      },
      { id: 2, title: 'Task 2', },
      { id: 3, title: 'Task 3', },
      // Add more tasks as needed
    ],
  },
  {title:'done',
    cards: [
      {
        id: 1, title: 'Task 1',
      },
      { id: 2, title: 'Task 2', },
      // Add more tasks as needed
    ],
  },
]);

function modalEdit(card) {
  EditModalOpend.value = true
  let data = JSON.parse(card)
  console.log(data);
  eId.value = data.id
  for (let key in data) {
    editInputValue[key] = data[key]
  }
}
const updateTasks = (event) => {
  const { from, to, item } = event;

  // Ensure that both the source and destination lists exist
  if (tasks[from] && tasks[to]) {
    // Remove item from the source list
    tasks[from].splice(tasks[from].indexOf(item), 1);

    // Add item to the destination list
    tasks[to].splice(event.newIndex, 0, item);
  }
};

// const addProgreskModal = () => {
//   addProgresmodal.value = !addProgresmodal.value
//   addProgresValue.value = ''
//   addTaskmodal.value = false
//   addDonemodal.value = false
// };
const addTaskModal = () => {
  addTaskmodal.value = !addTaskmodal.value
  addTaskValue.value = ''
  addDonemodal.value = false
  addProgresmodal.value = false
};
const addDoneModal = () => {
  addDonemodal.value = !addDonemodal.value
  addDoneValue.value = ''
  addProgresmodal.value = false
  addTaskmodal.value = false
};
const AddTask = () => {
  if (addTaskValue.value === '') {
    alert(`Maydonni To'ldiring`)
  }
  else {
    const newTask = { id: Date.now(), title: `${addTaskValue.value}`};
    tasks.value.todo.push(newTask);
    addTaskValue.value = ''
    addTaskmodal.value = false
    console.log(newTask);
  }
}

const CancelNewTask = () => {
  addTaskmodal.value = false
  addTaskValue.value = ''
}
const CancelNewProgres = () => {
  addProgresmodal.value = false
  addProgresValue.value = ''
}
const AddProgres = () => {
  if (addProgresValue.value === '') {
    alert(`Maydonni To'ldiring`)
  }
  else {
    const newTask = { id: Date.now(), title: `${addProgresValue.value}` };
    tasks.value.inProgress.push(newTask);
    addProgresValue.value = ''
    addProgresmodal.value = false
    console.log(newTask);
  }
}
const AddDone = () => {
  if (addDoneValue.value === '') {
    alert(`Maydonni To'ldiring`)
  }
  else {
    const newTask = { id: Date.now(), title: `${addDoneValue.value}` };
    tasks.value.done.push(newTask);
    addDoneValue.value = ''
    addDonemodal.value = false
    console.log(newTask);
  }
}
const CancelNewDone = () => {
  addDonemodal.value = false
  addDoneValue.value = ''
}


// const deleteTodo = (list, todoId) => {
//   const taskIndex = tasks.value[list].findIndex((task) => task.id === todoId);
//   if (taskIndex !== -1) {
//     tasks.value[list].splice(taskIndex, 1);
//   }
// };
const removeProgres = (task) => {
  tasks.value.inProgress.splice(tasks.value.inProgress.indexOf(task), 1);
};
const removeTask = (task) => {
  tasks.value.todo.splice(tasks.value.todo.indexOf(task), 1);
};
</script>


<style scoped>
.drag{
  background-color: grey;
  transform: rotate(5deg);
  color: white;
}
.drag >div{
  transform: rotate(5deg);
}
.ghost{
  background-color: lightgray;
  border-radius: 5px;
}
.ghost >div{
  visibility: hidden;
}

</style>
