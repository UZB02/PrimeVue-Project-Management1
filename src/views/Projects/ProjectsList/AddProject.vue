<template>
    <section>
        <div class="card">
            <form @submit.prevent="addproject()" typeof="submit" class="w-full flex flex-col items-center justify-center gap-3">
                <div class="grid gap-3 md:grid-cols-2 w-full">
                    <div class="w-full">
                        <label for="first_name" class="block mb-2  font-medium text-gray-900 dark:text-white">Loyiha nomi</label>
                        <input
                            v-model="name"
                            type="text"
                            id="first_name"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Project Menagment"
                        />
                    </div>
                    <div class="w-full">
                        <label for="last_name" class="block mb-2 font-medium text-gray-900 dark:text-white">Loyiha nomi qisqartmasi</label>
                        <input
                            v-model="shortname"
                            type="text"
                            id="last_name"
                           class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="PM"
                        />
                    </div>
                    <div>
                        <label class="block mb-2  font-medium text-gray-900 dark:text-gray-300" for="file_input">Logo</label>
                        <input
                         class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 -translate-y-1 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="file_input"
                            @change="handleFileChange"
                            type="file"
                            ref="file"
                        />
                    </div>
                    <div>
                        <label for="startT" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihani rejalashtirilgan start sanasi</label>
                        <input
                            type="datetime-local"
                            v-model="date_create"
                            id="startT"
                           class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="EndT" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">loyihaning rejalashtirilgan tugash sanasi</label>
                        <input
                            type="date"
                            v-model="end_date"
                            id="EndT"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="summ" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">loyihanin ralizatsiyasiga ajratilgan summa</label>
                        <input
                            type="number"
                            v-model="budget"
                            id="summ"
                             class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="500 000"
                            min="0"
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="visitors" class="block mb-2 font-medium text-gray-900 dark:text-white">loyiha belgilangan rangi </label>
                        <span class="flex items-center justify-center"> <ColorPicker v-model="color" /></span>
                    </div>
                    <div>
                           <label for="visitors" class="block mb-2 font-medium text-gray-900 dark:text-white">loyiha tipi </label>
                        <select
                            name=""
                            id=""
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="manolith">Manolith</option>
                            <option value="subsystem">Sub-sytem</option>
                        </select>
                    </div>
                </div>
                <span class="w-full flex items-center justify-end  gap-2">
                    <button
                        @click="addproject"
                        type="button"
                        class="text-white w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <ProgressSpinner style="width: 20px; height: 20px" :class="isloading ? 'block' : 'hidden'" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                        <span :class="isloading ? 'block' : 'hidden'">Loading...</span> <span :class="isloading ? 'hidden' : 'block'">Add</span>
                    </button>
                    <button
                        type="button"
                        @click="Cencel"
                        class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
const shortname = ref('');
const date_create = ref('');
const end_date = ref('');
const budget = ref('');
const color = ref('');
const logo = ref('');

function handleFileChange(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            logo.value = e.target.result;
        };

        reader.readAsText(file);
    }
}

const addproject = () => {
    isloading.value = true;
    if (logo.value === '' || name.value === '' || shortname.value === '' || date_create.value === '' || end_date.value === '' || budget.value === '' || color.value === '') {
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
            'https://pm-api.essential.uz/api/project/create?name%20=Project1',
            {
                name: name.value,
                prefix: shortname.value,
                date_create: date_create.value,
                end_date: end_date.value,
                budget: budget.value,
                logo: logo.value,
                color: color.value
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
                isloading.value = false;
                name.value = '';
                shortname.value = '';
                date_create.value = '';
                end_date.value = '';
                budget.value = '';
                logo.value = '';
                color.value = '';
                router.push({ path: '/projects_list' });
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
};
const Cencel = () => {
    name.value = '';
    shortname.value = '';
    date_create.value = '';
    end_date.value = '';
    budget.value = '';
    logo.value = '';
    color.value = '';
    router.push({ path: '/projects_list' });
};
</script>

<style scoped></style>
