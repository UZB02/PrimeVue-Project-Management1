<template>
  <div id="app" class="font-sans">
    <!-- <header class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl text-white">PM Kanban Board</h1>
    </header> -->
    <main class="flex p-4">
      <section class="w-1/3 p-4">
        <h2 class="text-lg font-semibold mb-4">Task</h2>
        <draggable class="bg-white p-2 rounded shadow" :list="tasks.todo" group="tasks" @change="updateTasks">
          <div v-for="task in tasks.todo" :key="task.id" class="flex flex-wrap justify-between overflow-auto mb-2 p-2 bg-gray-100 rounded shadow">
            <div>{{ task.title }}</div>
            <div id="actions" class="flex items-center justify-center gap-2">
              <i @click="editTask" class="editTask pi pi-pencil cursor-pointer"></i>
              <i @click="removeTask" class="editTask pi pi-trash cursor-pointer"></i>
            </div>
          </div>
         <div :class="addTaskmodal ? `w-full flex flex-col gap-2 transition outline-none p-2 bg-gray-100 rounded shadow` : 'hidden'">
          <form class="flex flex-col gap-2">
             <input v-model="addTaskValue" class="w-full transition outline-none p-2 bg-gray-100 rounded shadow"  type="text" placeholder="Add New Task" autofocus >
             <div class="actions flex items-center justify-between">
              <button @click.prevent="AddTask" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add Task</button>
              <button @click="CancelNewTask" class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">Cancel</button>
             </div>
          </form>
         </div>
          <div @click="addTaskModal" class="flex items-center gap-3 mb-2 mt-4 cursor-pointer p-2 bg-gray-100 rounded shadow">
            <i class="pi pi-plus"></i>
            <h2>Add Task</h2>
          </div>
        </draggable>
      </section>
      <section class="w-1/3 p-4">
        <h2 class="text-lg font-semibold mb-4">On Process</h2>
        <draggable class="bg-white p-2 rounded shadow" :list="tasks.inProgress" group="tasks" @change="updateTasks">
          <div v-for="task in tasks.inProgress" :key="task.id" class="flex flex-wrap justify-between overflow-auto mb-2 p-2 bg-gray-100 rounded shadow">
           <div>{{ task.title }}</div>
                <div id="actions" class="flex items-center justify-center gap-2">
                  <i @click="editDone" class="editTask pi pi-pencil cursor-pointer"></i>
                  <i @click="removeProgres" class="editTask pi pi-trash cursor-pointer"></i>
                </div>
          </div>
             <div :class="addProgresmodal ? `w-full flex flex-col gap-2 transition outline-none p-2 bg-gray-100 rounded shadow` : 'hidden'">
            <form class="flex flex-col gap-2">
               <input v-model="addProgresValue" class="w-full transition outline-none p-2 bg-gray-100 rounded shadow"  type="text" placeholder="Add New Task" autofocus >
               <div class="actions flex items-center justify-between">
                <button @click.prevent="AddProgres" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add Task</button>
                <button @click="CancelNewProgres" class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">Cancel</button>
               </div>
            </form>
           </div>
            <div @click="addProgreskModal" class="flex items-center gap-3 mb-2 mt-4 cursor-pointer p-2 bg-gray-100 rounded shadow">
              <i class="pi pi-plus"></i>
              <h2>Add Task</h2>
            </div>
        </draggable>
      </section>
      <section class="w-1/3 p-4">
        <h2 class="text-lg font-semibold mb-4">Done</h2>
        <draggable class="bg-white p-2 rounded shadow" :list="tasks.done" group="tasks" @change="updateTasks">
          <div v-for="task in tasks.done" :key="task.id" class="flex flex-wrap justify-between overflow-auto mb-2 p-2 bg-gray-100 rounded shadow">
         <div>{{ task.title }}</div>
              <div id="actions" class="flex items-center justify-center gap-2">
                <i @click="editDone" class="editTask pi pi-pencil cursor-pointer"></i>
                <i @click="removeDone" class="editTask pi pi-trash cursor-pointer"></i>
              </div>
          </div>
          <div :class="addDonemodal ? `w-full flex flex-col gap-2 transition outline-none p-2 bg-gray-100 rounded shadow` : 'hidden'">
            <form class="flex flex-col gap-2">
               <input v-model="addDoneValue" class="w-full transition outline-none p-2 bg-gray-100 rounded shadow"  type="text" placeholder="Add New Task" autofocus >
               <div class="actions flex items-center justify-between">
                <button @click.prevent="AddDone" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add Task</button>
                <button @click="CancelNewDone" class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">Cancel</button>
               </div>
            </form>
           </div>
            <div @click="addDoneModal" class="flex items-center gap-3 mb-2 mt-4 cursor-pointer p-2 bg-gray-100 rounded shadow">
              <i class="pi pi-plus"></i>
              <h2>Add Task</h2>
            </div>
        </draggable>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { VueDraggableNext as draggable } from 'vue-draggable-next';

const addTaskmodal = ref(false)
const addTaskValue = ref('')
const addProgresmodal = ref(false)
const addProgresValue = ref('')
const addDonemodal = ref(false)
const addDoneValue = ref('')


const tasks = ref({
  todo: [
    {
      id: 1, title: 'Task 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, expedita.' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
    { id: 4, title: 'Task 4' },
    { id: 5, title: 'Task 5' },
    // Add more tasks as needed
  ],
  inProgress: [
    { id: 6, title: 'Task 6' },
    { id: 7, title: 'Task 7' },
    { id: 8, title: 'Task 8' },
    // Add more tasks as needed
  ],
  done: [
    { id: 9, title: 'Task 9' },
    { id: 10, title: 'Task 10' },
    // Add more tasks as needed
  ],
});

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

const addProgreskModal = () => {
  addProgresmodal.value = !addProgresmodal.value
  addProgresValue.value=''
};
const addTaskModal = () => {
  addTaskmodal.value = !addTaskmodal.value
  addTaskValue.value=''
};
const AddTask = () => {
  if (addTaskValue.value === '') {
    alert(`Maydonni To'ldiring`)
  }
  else {
    const newTask = { id: Date.now(), title: `${addTaskValue.value}` };
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
     addProgresmodal.value=false
    console.log(newTask);
  }
}
const addDoneModal = () => {
  addDonemodal.value = !addDonemodal.value
  addDoneValue.value = ''
};
const AddDone = (e) => {
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


const removeDone = (task) => {
  tasks.value.done.splice(tasks.value.done.indexOf(task), 1);
};
const removeProgres = (task) => {
  tasks.value.inProgress.splice(tasks.value.inProgress.indexOf(task), 1);
};
const removeTask = (task) => {
  tasks.value.todo.splice(tasks.value.todo.indexOf(task), 1);
};
// const editTask = (list, taskId) => {
//   const taskIndex = tasks.value.todo[list].findIndex((task) => task.id === taskId);
//   const newTitle = prompt('Enter new title:', tasks.value.todo[list][taskIndex].title);
//   if (newTitle !== null) {
//     tasks.value.todo[list][taskIndex].title = newTitle;
//   }
// };
</script>


<style>
/* Add Tailwind CSS styles here */
</style>
