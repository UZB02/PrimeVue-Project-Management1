<template>
    <section>
       <div class="card">
        <form>
            <div class="grid gap-3 md:grid-cols-4">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loyiha nomi</label>
                    <input v-model="name" type="text" id="first_name"
                        class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Project Menagment" />
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loyiha nomi qisqartmasi</label>
                    <input type="text" id="last_name"
                        class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="PM" />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="file_input">Logo</label>
                    <input
                        class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="file_input" type="file">
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">loyihani rejalashtirilgan start sanasi</label>
                    <input type="datetime-local" id="phone"
                        class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">loyihaning rejalashtirilgan tugash sanasi</label>
                    <input type="datetime-local" id="phone"
                        class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>
                <div>
                    <label for="summ" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">loyihanin ralizatsiyasiga ajratilgan summa</label>
                    <input type="number" id="summ"
                        class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="500 000" min="0" />
                </div>
                <div class="flex flex-col">
                    <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">loyiha belgilangan rangi </label>
       <span class="flex items-center justify-center"> <ColorPicker v-model="color" /></span>
                </div>
               <div>
                <select name="" id="" class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mt-4 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="manolith">Manolith</option>
                    <option value="subsystem">Sub-sytem</option>
                </select>
               </div>
            </div>
        <button @click="addProject" type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
    </form>
       </div>
    <!-- <ul v-for="item in data" :key="item.id">
        <li>{{ item }} <button class="btn btn-danger bg-red-600" @click="deleteList(item)">Delete</button></li>
    </ul> -->
</section></template>
<script setup>
import { ref, reactive,toRaw } from 'vue';
let name = ('')
let data = ([])

const addProject = () => {
    data.push(name)
    name =''
}
// const deleteList = (item) => {
//     console.log(6565);
//     const index = data.indexOf(item)
//     if (index > -1) {
//         data.splice(index, 1);
//     }
// }

</script>

<style scoped></style>