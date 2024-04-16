<template>
    <section>
        <div class="card">
            <form @submit.prevent="addproject()" typeof="submit" class="w-full flex flex-col items-center justify-center gap-3">
                <div class="grid gap-3 md:grid-cols-2 w-full">
                    <div class="w-full">
                        <label for="first_name" class="block mb-2 font-medium text-gray-900 dark:text-white">Bosqich nomi</label>
                        <input
                            v-model="name"
                            type="text"
                            id="first_name"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Project Menagment"
                        />
                    </div>
                     <div>
                        <label for="summ" class="block mb-2 font-medium text-gray-900 dark:text-white">Bosqich tartib raqami</label>
                        <input
                            type="number"
                            v-model="order_by"
                            id="summ"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1"
                            min="0"
                        />
                    </div>
                    <div class="w-full">
                        <label for="last_name" class="block mb-2 font-medium text-gray-900 dark:text-white">Bosqich davomida topshirilishi zarur bo'lgan ishlar</label>
                        <textarea
                            id="message"
                            rows="4"
                            v-model="works"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bosqich davomida topshirilishi zarur bo'lgan ishlar haqida umumiy ma'lumot..."
                        ></textarea>
                    </div>
                    <div class="w-full">
                        <label for="last_name" class="block mb-2 font-medium text-gray-900 dark:text-white">Bosqich so'ngida topshirilishi zauru bo'lgan ishlar</label>
                       <textarea
                            id="message"
                            rows="4"
                            v-model="results"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bosqich so'ngida topshirilishi zauru bo'lgan ishlar haqida umumiy ma'lumot..."
                        ></textarea>
                    </div>
                    <div class="w-full">
                        <label for="last_name" class="block mb-2 font-medium text-gray-900 dark:text-white">Bosqich haqida umumiy ma'lumot</label>
                       <textarea
                            id="message"
                            rows="4"
                            v-model="about"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bosqich haqida umumiy ma'lumot..."
                        ></textarea>
                    </div>
                    <div>
                        <label for="startT" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihani rejalashtirilgan start sanasi</label>
                        <input
                            type="datetime-local"
                            v-model="start_date"
                            id="startT"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="EndT" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihaning rejalashtirilgan tugash sanasi</label>
                        <input
                            type="date"
                            v-model="end_date"
                            id="EndT"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="visitors" class="block mb-2 font-medium text-gray-900 dark:text-white">loyiha belgilangan rangi </label>
                        <span class="flex items-center justify-center"> <ColorPicker v-model="color" /></span>
                    </div>
                </div>
                <span class="w-full flex items-center justify-end gap-2">
                    <button
                        @click="addproject"
                        type="button"
                        class="text-white w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <span :class="isloading ? 'block' : 'hidden'">
                                  <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
    <svg class="h-7 w-7 animate-spin stroke-white" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
    </svg>
    <span class="text-xl font-medium text-white">Loading...</span>
</div>
                        </span>                    
                         <span :class="isloading ? 'hidden' : 'block text-xl'">Add</span>
                    </button>
                    <button
                        type="button"
                        @click="Cencel"
                        class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full text-xl px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                        Cencel
                    </button>
                </span>
            </form>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
const isloading = ref(false);
const name = ref('');
const works = ref('');
const results = ref('');
const order_by = ref('');
const about = ref('');
const color = ref('');
const start_date = ref('');
const end_date = ref('');
const melistone_id=router.currentRoute.value.params.slug
const project_id=router.currentRoute.value.params.id
console.log(melistone_id,"melistone_idADD");
// const milestone_files = ref('');
// const factual_start_date = ref('');

function handleFileChange(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            milestone_files.value = e.target.result;
            // console.log(logo.value);
        };

        reader.readAsText(file);
    }
}

const addproject = () => {
    isloading.value = true;
    if(name.value === '' || works.value === '' || results.value === '' || order_by.value === '' || about.value === '' || start_date.value === '' || end_date.value === '' || color.value === ''){
          Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: `Ma'lumotlarni to'ldiring`,
                    showConfirmButton: false,
                    timer: 1500
                });
        isloading.value = false;
    }else{
            axios
        .post(
            'https://pm-api.essential.uz/api/sprints/create',
            {
                name: name.value,
                works: works.value,
                results: results.value,
                order_by: order_by.value,
                about: about.value,
                start_date: start_date.value,
                end_date: end_date.value,
                color: color.value,
                milestone_id: melistone_id,
                project_id:project_id
            },
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
        .then((res) => {
            if (res.status === 200) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Bajarildi',
                    showConfirmButton: false,
                    timer: 1500
                });
               router.push(`/projects_list/${project_id}/melistone/${melistone_id}/sprint`)
            }
            console.log(res);
            isloading.value = false;
        })
        .catch((err) => {
            console.log(err);
            isloading.value = false;
        });
    }
};
const Cencel = () => {
    name.value = '';
    works.value = '';
    results.value = '';
    order_by.value = '';
    about.value = '';
    start_date.value = '';
    end_date.value = '';
    color.value = '';
 router.push('/Sprint?milestone_id='+melistone_id)
};
</script>

<style scoped></style>
