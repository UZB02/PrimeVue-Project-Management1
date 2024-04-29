<template>
    <section :class="loading ? 'hidden' : 'block'">
        <Loading></Loading>
    </section>
    <section :class="loading ? 'block w-svw' : 'hidden'">
        <div id="app" class="font-sans">
            <!-- <header class="bg-black text-white p-2">
      <h1 class="text-2xl text-white">PM Kanban Board</h1>
    </header> -->
            <main class="flex h-[90vh] p-4">
                <section v-for="(column, index) in columns" :key="index" class="w-1/2 p-2 h-full">
                    <div class="card w-full rounded-2xl p-2 flex flex-col items-center gap-3 max-h-full">
                        <div class="top flex items-center justify-between w-[80%]">
                            <span
                                ><h2 class="font-semibold font-mono text-xl">{{ column.name }}</h2>
                            </span>
                            <span class="flex items-center gap-1"
                                ><i class="pi pi-inbox cursor-pointer"></i>
                                <h3>{{ column.tasks.length }}</h3></span
                            >
                        </div>
                        <div class="w-full flex flex-col h-auto overflow-scroll">
                            <div drag-class="drag" :data-id="column.id" class="w-full flex flex-col gap-1 p-2 rounded" :list="columns.tasks" group="columns">
                                <div v-for="(item, itemKey) in tasks" :key="itemKey" :class="column.id === item.column_id ? 'block' : 'hidden'">
                                    <div class="tasks_board shadow border flex flex-col flex-wrap justify-between overflow-auto p-1 rounded" v-if="column.id === item.column_id">
                                        <div @click="coments(item.url)" class="h-10 flex items-center cursor-pointer">{{ item.title }}</div>
                                        <div id="actions" class="flex items-center justify-center gap-2">
                                            <i @click="modalEdit(item)" id="edit" class="editTask pi pi-pencil cursor-pointer"></i>
                                            <i id="delite" @click="modalDelet(item.id)" class="delite pi pi-trash cursor-pointer"></i>
                                        </div>
                                        <div class="w-full flex items-center justify-between">
                                            <span class="flex items-center justify-center gap-2">
                                                <span>
                                                    <i class="pi pi-user text-sm"></i>
                                                    <span class="text-sm">{{ item.performers.length }}</span>
                                                </span>
                                                <!-- <span class="flex items-center justify-center gap-1">
                                                    <i class="pi pi-comments text-sm cursor-pointer"></i>
                                                    <span class="text-sm">{{ 0 }}</span>
                                                </span> -->
                                            </span>
                                            <span>
                                                <i @click="addPerformer(item.id)" class="pi pi-user-plus text-sm"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="column.id === 1 ? 'block w-full flex  items-center justify-between gap-3  p-2 border rounded shadow' : 'hidden'">
                            <div @click="modalAddTask(column.id)" class="left transition p-2 w-[60%] flex items-center cursor-pointer rounded-lg gap-3 hover:bg-slate-300">
                                <i class="pi pi-plus"></i>
                                <h2 class="font-medium font-sans">Add Task</h2>
                            </div>
                            <i class="p-2 rounded-lg transition text-end hover:bg-slate-300 pi pi-box cursor-pointer"></i>
                        </div>
                    </div>
                </section>
            </main>
            <!-- Begin ADD Modal -->
            <Dialog v-model:visible="addModal" header="ADD task" class="w-[70%]">
                <div class="p-[1px] pt-0 text-center w-full">
                    <form @submit.prevent="AddTask()" typeof="submit" class="w-full flex flex-col gap-3 p-5">
                        <div class="grid gap-2 md:grid-cols-2">
                            <div class="w-full">
                                <label for="first_name" class="block text-start mb-2 font-medium text-gray-900 dark:text-white">Nomi</label>
                                <input
                                    v-model="title"
                                    type="text"
                                    id="first_name"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Project Menagment"
                                />
                            </div>
                            <div>
                                <label for="startT" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">loyihani rejalashtirilgan start sanasi</label>
                                <input
                                    type="datetime-local"
                                    v-model="created_date"
                                    id="startT"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label for="startT" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Ijrochisi tomonidan ijrodan olinish vaqto</label>
                                <input
                                    type="datetime-local"
                                    v-model="dealine_end_date"
                                    id="startT"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div class="flex flex-col">
                                <label for="visitors" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Topshiriq holati </label>
                                <select
                                    v-model="status"
                                    id=""
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="active">Active</option>
                                    <option value="archive">Archive</option>
                                </select>
                            </div>
                            <div>
                                <label for="startT" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Belgilangan bal</label>
                                <input
                                    type="number"
                                    v-model="task_weight"
                                    id="startT"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label for="startT" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Ijrochi qo'shish</label>
                                <select
                                    v-model="users"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option v-for="performer in performers" :value="performer.id" class="p-3">{{ performer.user.fio }}</option>
                                </select>
                            </div>
                            <div class="w-full">
                                <label for="last_name" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Umimiy Ma'lumot</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    v-model="description"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Umumiy yozilgan maulmot..."
                                ></textarea>
                            </div>
                            <!-- <div class="w-full">
                            <label for="performers" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Add Performer</label>
                            <div class="w-full">
                                <span @click="addPerformer()" class="bg-slate-300 w-8 h-7 rounded-full p-3 cursor-pointer">
                                    <i class="pi pi-plus text-white"></i>
                                </span>
                                <span class="bg-slate-300 w-8 h-8 rounded-full p-3 cursor-pointer"></span>
                            </div>
                        </div> -->
                            <i @click="addPerformer(tasks.id)" class="pi pi-user-plus"></i>
                        </div>
                        <span class="w-full flex items-center justify-end gap-2">
                            <button
                                @click="AddTask()"
                                type="button"
                                class="text-white w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <span :class="addisloading ? 'block' : 'hidden'">
                                    <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
                                        <svg class="h-5 w-5 animate-spin stroke-white" viewBox="0 0 256 256">
                                            <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                        </svg>
                                        <span class="text-xl font-medium text-white">Loading...</span>
                                    </div>
                                </span>
                                <span :class="addisloading ? 'hidden' : 'block text-xl'">Add</span>
                            </button>
                            <button
                                type="button"
                                class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg w-full text-xl px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                                Cencel
                            </button>
                        </span>
                    </form>
                </div>
            </Dialog>
            <!-- End ADD Modal -->
            <!-- Begin Edit Modal -->
            <Dialog v-model:visible="editModal" header="Edit task" class="w-[70%]">
                <div class="p-[1px] pt-0 text-center w-full">
                    <form @submit.prevent="editTask()" typeof="submit" class="w-full flex flex-col gap-3 p-5">
                        <div class="grid gap-2 md:grid-cols-2">
                            <div class="w-full">
                                <label for="first_name" class="block text-start mb-2 font-medium text-gray-900 dark:text-white">Nomi</label>
                                <input
                                    v-model="editTitle"
                                    type="text"
                                    id="first_name"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Project Menagment"
                                />
                            </div>
                            <div>
                                <label for="startT" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">loyihani rejalashtirilgan start sanasi</label>
                                <input
                                    type="datetime-local"
                                    v-model="editCreatedDate"
                                    id="startT"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label for="startT" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Ijrochisi tomonidan ijrodan olinish vaqto</label>
                                <input
                                    type="datetime-local"
                                    v-model="editdealine_end_date"
                                    id="startT"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label for="startT" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">loyihani rejalashtirilgan start sanasi</label>
                                <input
                                    type="datetime-local"
                                    v-model="editCreatedDate"
                                    id="startT"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div class="flex flex-col">
                                <label for="visitors" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Topshiriq holati </label>
                                <select
                                    v-model="editStatus"
                                    id=""
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="active">Active</option>
                                    <option value="archive">Archive</option>
                                </select>
                            </div>
                            <div>
                                <label for="startT" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Belgilangan bal</label>
                                <input
                                    type="number"
                                    v-model="editTaskWeight"
                                    id="startT"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div class="w-full">
                                <label for="last_name" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Umimiy Ma'lumot</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    v-model="editDescription"
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Umumiy yozilgan maulmot..."
                                ></textarea>
                            </div>
                            <div>
                                <label for="performers" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Edit Performer</label>
                                <!-- <div v-for="performer in tasks" :key="performer.id">{{ performer.performers }}</div> -->
                                <select
                                    v-model="selectedCategory"
                                    @change="testSellect()"
                                    id=""
                                    class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option v-for="item in columns" :value="item.id">{{ item.name }}</option>
                                </select>
                                <!-- <div class="flex gap-3">
                                    <div v-for="category in columns" :key="category.id" class="flex align-items-center">
                                        <RadioButton v-model="selectedCategory" :inputId="category.id" name="dynamic" :value="category.name" />
                                        <label :for="category.id" class="ml-2">{{ category.name }}</label>
                                    </div>
                                </div> -->
                                <!-- <fieldset class="flex items-center justify-center gap-3">
        <div class="flex items-center mb-4">
            <input id="country-option-1" v-model="newTasks" type="radio" name="countries" value="USA" class="border-gray-300 focus:ring-2 focus:ring-blue-300 cursor-pointer" aria-labelledby="country-option-1" aria-describedby="country-option-1">
            <label for="country-option-1" class="text-sm cursor-pointer font-medium text-gray-900 ml-2 block">
            New Tasks
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="country-option-2" v-model="bugs" type="radio" name="countries" value="Germany" class="border-gray-300 focus:ring-2 focus:ring-blue-300 cursor-pointer" aria-labelledby="country-option-2" aria-describedby="country-option-2">
            <label for="country-option-2" class="text-sm cursor-pointer font-medium text-gray-900 ml-2 block">
            Bugs
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="country-option-3" type="radio" name="countries" value="Spain" class="border-gray-300 focus:ring-2 focus:ring-blue-300 cursor-pointer" aria-labelledby="country-option-3" aria-describedby="country-option-3">
            <label for="country-option-3" class="text-sm font-medium cursor-pointer text-gray-900 ml-2 block">
           In progress
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="country-option-4" type="radio" name="countries" value="United Kingdom" class=" border-gray-300 focus:ring-2 focus:ring-blue-300 cursor-pointer" aria-labelledby="country-option-4" aria-describedby="country-option-4">
            <label for="country-option-4" class="text-sm cursor-pointer font-medium text-gray-900 ml-2 block">
            Testing
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="option-disabled" type="radio" name="countries" value="China" class=" border-gray-200 focus:ring-2 focus:ring-blue-300 cursor-pointer" aria-labelledby="option-disabled" aria-describedby="option-disabled">
            <label for="option-disabled" class="text-sm cursor-pointer text-gray-900 font-medium ml-2 block">
            Done
            </label>
        </div>
    </fieldset> -->
                            </div>
                        </div>
                        <div class="">
                            <div class="top flex items-center justify-between gap-2">
                                <div class="left w-1"><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" /></div>
                                <div class="right flex w-full gap-2">
                                    <input
                                        type="text"
                                        class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <button class="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">Submit</button>
                                </div>
                            </div>
                        </div>
                        <span class="w-full flex items-center justify-end gap-2">
                            <button
                                @click="editTask()"
                                type="button"
                                class="text-white w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <span :class="editisloading ? 'block' : 'hidden'">
                                    <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
                                        <svg class="h-5 w-5 animate-spin stroke-white" viewBox="0 0 256 256">
                                            <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                            <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                        </svg>
                                        <span class="text-xl font-medium text-white">Loading...</span>
                                    </div>
                                </span>
                                <span :class="editisloading ? 'hidden' : 'block text-xl'">Edit</span>
                            </button>
                            <button
                                type="button"
                                @click="editModal = false"
                                class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg w-full text-xl px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                                Cencel
                            </button>
                        </span>
                    </form>
                </div>
            </Dialog>
            <!-- End Edit Modal -->
            <!-- Begin Modal Delet -->
            <Dialog v-model:visible="deletModal" header="Delet Project" :style="{ width: '25rem' }">
                <div class="p-2 pt-0 text-center">
                    <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">O'chirishni istaysizmi?</h3>
                    <button @click="deletTask" class="text-white bg-red-600 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                        <span :class="deletisloading ? 'block' : 'hidden'">
                            <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
                                <svg class="h-7 w-7 animate-spin stroke-white" viewBox="0 0 256 256">
                                    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                </svg>
                                <span class="text-xl font-medium text-white">Loading...</span>
                            </div>
                        </span>
                        <span :class="deletisloading ? 'hidden' : 'block text-xl'">O'chirish</span>
                    </button>
                    <button @click="deletModal = false" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                        Bekor qilish
                    </button>
                </div>
            </Dialog>
            <!-- End Modal Delet -->
            <!-- Begin Modal Add Performers -->
            <Dialog v-model:visible="modalAddPerformer" header="Add performer" :style="{ width: '25rem' }">
                <div class="p-2 pt-0 text-center">
                    <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Performer qo'shish {{ taskId }}</h3>
                    <button @click="deletTask" class="text-white bg-red-600 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                        <span :class="deletisloading ? 'block' : 'hidden'">
                            <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
                                <svg class="h-7 w-7 animate-spin stroke-white" viewBox="0 0 256 256">
                                    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                </svg>
                                <span class="text-xl font-medium text-white">Loading...</span>
                            </div>
                        </span>
                        <span :class="deletisloading ? 'hidden' : 'block text-xl'">O'chirish</span>
                    </button>
                    <button @click="modalAddPerformer = false" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                        Bekor qilish
                    </button>
                </div>
            </Dialog>
            <!-- End Modal Add Performers -->
            <!-- Begin Modal Comentaries -->
            <Dialog v-model:visible="comentsMoadal" header="Add performer" :style="{ width: '25rem' }">
                <div class="p-2 pt-0 text-center">
                    <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Performer qo'shish {{ taskId }}</h3>
                    <button @click="deletTask" class="text-white bg-red-600 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                        <span :class="deletisloading ? 'block' : 'hidden'">
                            <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
                                <svg class="h-7 w-7 animate-spin stroke-white" viewBox="0 0 256 256">
                                    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                                </svg>
                                <span class="text-xl font-medium text-white">Loading...</span>
                            </div>
                        </span>
                        <span :class="deletisloading ? 'hidden' : 'block text-xl'">O'chirish</span>
                    </button>
                    <button @click="comentsMoadalClose()" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                        Bekor qilish
                    </button>
                </div>
            </Dialog>
            <!-- End Modal Comentaries -->
            <!-- <Charts/> -->
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { VueDraggableNext as draggable } from 'vue-draggable-next';
// import Charts from './charts.vue'
import Loading from '../../../../components/loading.vue';
import axios from 'axios';
import router from '../../../../router';

const project_id = router.currentRoute.value.params.id;
const milestone_id = router.currentRoute.value;
const sprint_id = router.currentRoute.value.params.sprint_id;
console.log(sprint_id);



const selectedCategory = ref('');
console.log(selectedCategory.value);

function testSellect() {
    console.log(selectedCategory.value);
}

function coments(url) {
    router.push(`/projects_list/${project_id}/melistone/${milestone_id}/sprint/${sprint_id}/kanban/${url}`);
}

const comentsMoadal = ref(false);

const modalAddPerformer = ref(false);
const loading = ref(false);
const columns = ref();
const tasks = ref();
const addModal = ref(false);
const addisloading = ref(false);
const deletModal = ref(false);
const deletisloading = ref(false);
const editModal = ref(false);
const editisloading = ref(false);
const taskId = ref();
const performers = ref([]);
const users = ref([]);
const dealine_end_date = ref('');

const column_id = ref();
const title = ref();
const description = ref();
const status = ref();
const created_date = ref();
const task_weight = ref();

const editTitle = ref();
const editDescription = ref();
const editStatus = ref();
const editCreatedDate = ref();
const editTaskWeight = ref();
const editId = ref();
const editdealine_end_date = ref();

function addPerformer(id) {
    modalAddPerformer.value = true;
    taskId.value = id;
    console.log(taskId.value);
}

function modalAddTask(id) {
    addModal.value = true;
    column_id.value = id;
    console.log(column_id.value);
}

function modalEdit(item) {
    editModal.value = true;
    // let data = item;
    // console.log(item);
    editTitle.value = item.title;
    editDescription.value = item.description;
    editStatus.value = item.status;
    editCreatedDate.value = item.created_date;
    editTaskWeight.value = item.task_weight;
    editId.value = item.id;
    editdealine_end_date.value = item.dealine_end_date;
    console.log(editId.value);
}

const modalDelet = (id) => {
    taskId.value = id;
    console.log(taskId.value);
    deletModal.value = true;
};

function AddTask() {
    console.log(users.value);
    addisloading.value = true;
    axios
        .post(
            'https://pm-api.essential.uz/api/tasks/create',
            {
                project_id: project_id,
                milestone_id: milestone_id,
                sprint_id: sprint_id,
                column_id: column_id.value,
                title: title.value,
                description: description.value,
                status: status.value,
                created_date: created_date.value,
                task_weight: task_weight.value,
                performer_id: users.value,
                dealine_end_date: dealine_end_date.value
            },
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
        .then((result) => {
            if (result.status === 200) {
                addModal.value = false;
                fetchTasks();
                fetchBoards();
            }
            addisloading.value = false;
            console.log(result);
        });
}

function deletTask() {
    deletisloading.value = true;
    axios
        .delete(`https://pm-api.essential.uz/api/tasks/${taskId.value}/delete`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Bajarildi',
                    showConfirmButton: false,
                    timer: 1500
                });
                deletModal.value = false;
                deletisloading.value = false;
                fetchBoards();
                fetchTasks();
            }
            console.log(result);
        })
        .catch((error) => {
            deletisloading.value = false;
            // console.error(error);
        });
}

function editTask() {
    editisloading.value = true;
    axios
        .post(
            `https://pm-api.essential.uz/api/tasks/${editId.value}/update`,
            {
                title: editTitle.value,
                description: editDescription.value,
                status: editStatus.value,
                created_date: editCreatedDate.value,
                task_weight: editTaskWeight.value,
                dealine_end_date: editdealine_end_date.value,
                column_id: selectedCategory.value
            },
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
        .then((result) => {
            if (result.status === 200) {
                editModal.value = false;
                editisloading.value = false;
                fetchBoards();
                fetchTasks();
                // console.log(result);
            }
        })
        .catch((error) => {
            // editisloading.value = false;
            console.log(error);
        });
}

function fetchBoards() {
    axios
        .get(`https://pm-api.essential.uz/api/columns?sprint_id=${sprint_id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                loading.value = true;
                console.log(result.data);
                columns.value = result.data;
            }
        })
        .catch((err) => {
            console.error(err);
        });
}
fetchBoards();

function fetchTasks() {
    console.log(sprint_id);
    axios
        .get(`https://pm-api.essential.uz/api/tasks?sprint_id=${sprint_id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                // isloading.value = true;
                console.log(result.data);
                tasks.value = result.data;
            }
        })
        .catch((err) => {
            console.error(err);
        });
}
fetchTasks();

function fetchPerformers() {
    axios
        .get(`https://pm-api.essential.uz/api/performers`, {
            params: {
                project_id: project_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                // isloading.value = true;
                console.log(result.data);
                performers.value = result.data;
            }
        })
        .catch((err) => {
            console.error(err);
        });
}
fetchPerformers();
</script>

<style scoped>
.tasks_board {
    position: relative;
}
.tasks_board:hover #actions {
    visibility: visible;
    /* background-color: rgba(0, 0, 0, 0.676); */
    color: #fff;
}
.tasks_board:hover #actions .delite {
    color: red;
}
#actions #delite {
    background-color: rgba(0, 0, 0, 0.676);
    padding: 5px;
    border-radius: 50%;
}
#actions #edit {
    background-color: rgba(0, 0, 0, 0.676);
    padding: 5px;
    border-radius: 50%;
}

#actions {
    visibility: hidden;
    position: absolute;
    right: 0;
    padding: 5px;
    border-radius: 15px;
}

#actions:hover {
    visibility: visible;
}
.drag {
    background-color: grey;
    transform: rotate(5deg);
    color: white;
}
.drag > div {
    transform: rotate(5deg);
}
.ghost {
    background-color: lightgray;
    border-radius: 5px;
}
.ghost > div {
    visibility: hidden;
}
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-thumb {
    background-color: gainsboro;
    border-radius: 20px;
}
</style>
