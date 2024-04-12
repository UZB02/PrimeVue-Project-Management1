<template>
    <section class="flex w-full items-center justify-center h-[80vh]">
        <div class="flex flex-col items-center justify-center w-full lg:pt-10 lg:flex-row">
            <div class="w-full mt-5 mr-0 mb-0 ml-0 relative z-10 lg:mt-0 lg:w-5/12">
                <form @submit.prevent="addUser()">
                    <div class="flex flex-col w-full gap-2 items-start justify-start pt-5 pr-6 pb-4 pl-6 bg-white shadow-2xl rounded-xl relative z-10">
                        <p class="w-full text-4xl font-bold text-center leading-snug">ADD User</p>
                        <div class="w-full mt-2 mr-0 mb-0 ml-0 relative space-y-8">
                            <span class="flex w-full items-center justify-center gap-3">
                                <span class="bg-gray-50 w-48 h-48 border-dotted flex items-center justify-center border-8">
                                    <img :src="avatar" class="w-full h-full object-cover rounded-md" alt="avatar" />
                                </span>
                            </span>
                            <span class="flex items-center justify-between gap-3">
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">F.I.O</p>
                                    <input
                                        v-model="fio"
                                        placeholder="John"
                                        type="text"
                                        class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Name</p>
                                    <input
                                        v-model="username"
                                        placeholder="John"
                                        type="text"
                                        class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Sellect Status</p>
                                    <select v-model="status" class="border font-medium placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md">
                                        <option value="passive">Passive</option>
                                        <option value="active">Active</option>
                                        <option value="deleted">Deleted</option>
                                        <option value="frozen">Frozen</option>
                                    </select>
                                </div>
                            </span>
                            <span class="flex items-center justify-between gap-3">
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Phone</p>
                                    <input
                                        v-model="phone"
                                        placeholder="+998917622603"
                                        type="phone"
                                        class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Password</p>
                                    <span class="flex border items-center justify-between  placeholder-gray-400 focus:outline-none focus:border-black font-medium pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base  bg-white border-gray-300 rounded-md gap-1">
                                      <input
                                        v-model="password"
                                        :type="eys ? `text` : `password`"
                                        :placeholder="eys ? `Parol kiriting` : `********`"
                                        autocomplete="current-password"
                                        class="outline-none w-[98%]"
                                    />
                                    <i @click="showPassword" :class="eys ? 'pi pi-eye cursor-pointer' : 'pi pi-eye-slash cursor-pointer'"></i>
                                  </span>
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                                    <input
                                        v-model="email"
                                        type="email"
                                        placeholder="muhsinbek@gmail.com"
                                        class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Avatar</p>
                                    <input
                                        @change="previewImage"
                                        type="file"
                                        class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-2 pl-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                            </span>
                            <div class="relative flex gap-3">
                                <button type="button" @click="addUser()" class="w-full inline-block pt-3 pr-3 pb-3 pl-3 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">
                                    <span :class="isloading ? 'flex items-center justify-center' : 'hidden'">
                                        <div aria-label="Loading..." role="status" class="flex items-center justify-center space-x-2">
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
                                    <span :class="isloading ? 'hidden' : 'block text-xl'">Add</span>
                                </button>
                                <button type="button" @click="cancel()" class="w-full inline-block pt-3 pr-3 pb-3 pl-3 text-xl font-medium text-center text-white bg-red-500 rounded-lg transition duration-200 hover:bg-red-600 ease">Cacell</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';

const rols_id = router.currentRoute.value.params.id;
console.log(rols_id);

const username = ref('');
const password = ref('');
const avatar = ref('');
const status = ref('');
const phone = ref('');
const fio = ref('');
const email = ref('');

const isloading = ref(false);

const previewImage = (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            avatar.value = reader.result;
            // console.log(avatar.value);
        };
        reader.readAsDataURL(file);
    }
};

const addUser = () => {
    isloading.value = true;
    console.log(rols_id);
    axios
        .post(
            'https://pm-api.essential.uz/api/users/create',
            {
                username: username.value,
                fio: fio.value,
                email: email.value,
                phone: phone.value,
                password: password.value,
                user_role_id: rols_id,
                status: status.value,
                //   avatar: avatar.value
            },
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
        .then((res) => {
            if (res.status === 200) {
                isloading.value = false;
                 Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `Bajarildi`,
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push(`/rols/${rols_id}/users`)
            }
            console.log(res);
        })
        .catch((err) => {
            isloading.value = false;
            console.log(err);
        });
    console.log(username.value,  password.value, status.value, phone.value, fio.value, email.value);
};


function cancel() {
    fio.value = '';
    username.value = '';
    email.value = '';
    password.value = '';
    avatar.value = '';
    status.value = '';
    phone.value = '';
    router.push(`/rols/${rols_id}/users`)
}
const eys=ref(false)
const showPassword =(()=>{
    eys.value = !eys.value
})
</script>
<style scoped></style>
