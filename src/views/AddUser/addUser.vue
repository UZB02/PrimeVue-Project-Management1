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
                                    <img src="https://avatars.mds.yandex.net/i?id=82fb8729097624976e07a7f71da36ea4119b821a-11516533-images-thumbs&n=13" class="" alt="" />
                                   </span>
                            </span>
                            <span class="flex items-center justify-between gap-3">
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">F.I.O</p>
                                    <input
                                        v-model="fio"
                                        placeholder="John"
                                        type="text"
                                        class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Name</p>
                                    <input
                                        v-model="username"
                                        placeholder="John"
                                        type="text"
                                        class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                     <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Sellect Role Id</p>
                                    <select class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md">
                                        <option value="1">Admin</option>
                                        <option value="2">User</option>
                                    </select>
                                </div>
                                <div class="relative w-full">
                                       <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Sellect Status</p>
                                    <select class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md">
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
                                    class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                />
                            </div>
                             <div class="relative w-full">
                                <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Password</p>
                                <input v-model="password" type="password" class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                            </div>
                            <div class="relative w-full">
                                <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Key</p>
                                <input
                                    v-model="key"
                                    placeholder="Key"
                                    type="text"
                                    class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                />
                            </div>
                              <div class="relative w-full">
                                <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Avatar</p>
                                <input  type="file" class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-2 pl-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                            </div>
                            </span>
                            <div class="relative flex gap-3">
                                <button type="button" @click="addUser()" class="w-full inline-block pt-3 pr-3 pb-3 pl-3 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">
                                    Submit
                                </button>
                                <button type="button" @click="addUser()" class="w-full inline-block pt-3 pr-3 pb-3 pl-3 text-xl font-medium text-center text-white bg-red-500 rounded-lg transition duration-200 hover:bg-red-600 ease">Cacell</button>
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

const username = ref('');
const key = ref('');
const password = ref('');
const user_role_id = ref('');
const avatar = ref('');
const status=ref('');
const phone=ref('');
const fio=ref('');

const addUser = () => {
    console.log(username.value, key.value, password.value, user_role_id.value, status.value, phone.value, fio.value,5);
}

// const addUserRol = () => {
//     if(name.value == '' || key.value == '') {
//          Swal.fire({
//                     position: 'top-center',
//                     icon: 'error',
//                     title: `Ma'lumotlarni to'ldiring`,
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//     }else{
//          axios
//         .post(
//             'https://pm-api.essential.uz/api/user-role/create',
//             {
//                 name: name.value,
//                 key: key.value
//             },
//             {
//                 headers: {
//                     Authorization: 'Bearer ' + localStorage.getItem('token')
//                 }
//             }
//         )
//         .then((res) => {
//            if(res.status == 200) {
//                    Swal.fire({
//                     position: 'top-center',
//                     icon: 'success',
//                     title: `Bajarildi`,
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//             console.log(res);
//             name.value = '';
//             key.value = '';
//            }
//         }).catch((err) => {
//             console.log(err);
//         });
//     }
//     console.log(name.value, key.value);
// }
</script>
<style scoped></style>
