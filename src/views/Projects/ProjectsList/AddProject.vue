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
                        <label for="EndT" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihaning rejalashtirilgan tugash sanasi</label>
                        <input
                            type="date"
                            v-model="end_date"
                            id="EndT"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="EndT" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihaning haqiqatdan start berilgan sanasi</label>
                        <input
                            type="date"
                            v-model="factual_start_date"
                            id="EndT"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="EndT" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihaning haqiqatdan tugagan sanasi</label>
                        <input
                            type="date"
                            v-model="factual_end_date"
                            id="EndT"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="summ" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihaning bir birlik valyutadagi(so'mdagi) summa qiymati</label>
                        <input
                            type="number"
                            v-model="unit_value"
                            id="summ"
                             class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="500 000"
                            min="0"
                        />
                    </div>
                    <div>
                        <label for="summ" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihanin ralizatsiyasiga ajratilgan summa</label>
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
                            v-model="project_type"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="manolith">Manolith</option>
                            <option value="subsystem">Sub-sytem</option>
                        </select>
                    </div>
                       <div>
                        <label for="about" class="block mb-2 font-medium text-gray-900 dark:text-white">Ushbu loyiha haqida ma'lumot</label>
                          <textarea
                          id="about"
                            rows="4"
                            v-model="description"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bosqich haqida umumiy ma'lumot..."
                        ></textarea>
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
const shortname = ref('');
const date_create = ref('');
const end_date = ref('');
const budget = ref('');
const color = ref('');
const logo = ref('');
const description=ref('');
const factual_start_date = ref('');
const factual_end_date = ref('');
const unit_value = ref('');
const project_type = ref('');

const handleFileChange=((e)=>{
    logo.value = e.target.files[0];
    console.log(logo.value);
})

const addproject = () => {
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('prefix', shortname.value);
    formData.append('start_date', date_create.value);
    formData.append('end_date', end_date.value);
    formData.append('budget', budget.value);
    formData.append('logo', logo.value, logo.value.name);
    formData.append('color', color.value);
    formData.append('description', description.value);
    formData.append('factual_start_date', factual_start_date.value);
    formData.append('factual_end_date', factual_end_date.value);
    formData.append('unit_value', unit_value.value);
    formData.append('project_type', project_type.value);
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
            'https://pm-api.essential.uz/api/project/create?name=Project1',
           formData,
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
                router.push("/projects_list")
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
