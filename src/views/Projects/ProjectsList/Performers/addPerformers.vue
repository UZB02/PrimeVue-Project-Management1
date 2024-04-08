<template>
    <section class="flex items-center justify-center h-[80vh]">
        <div class="flex flex-col items-center justify-center w-full pt-5 pr-6 pb-6 pl-6 lg:pt-10 lg:flex-row">
            <div class="w-full mt-5 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                <form @submit.prevent="addUserRol()">
                    <div class="flex flex-col items-start justify-start pt-6 pr-6 pb-6 pl-6 bg-white shadow-2xl rounded-xl relative z-10">
                        <p class="w-full text-4xl font-bold text-center leading-snug">ADD Performers</p>
                        <div class="w-full mt-2 mr-0 mb-0 ml-0 relative space-y-8">
                            <div class="relative">
                                <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">User Rol</p>
                                <select
                                    v-model="usersrolid"
                                    @change="change($event)"
                                    class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                >
                                    <option v-for="userid in userRolsid" :value="userid.id" class="p-3">{{ userid.name }}</option>
                                </select>
                            </div>
                            <div class="relative">
                                <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Performers</p>
                                <select v-model="user" class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md">
                                    <option v-for="item in users" :value="item.id" class="p-3">{{ item.username }}</option>
                                </select>
                            </div>
                            <div class="relative">
                                <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Status</p>
                                <select v-model="status" class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md">
                                    <option value="active">Active</option>
                                    <option value="passive">Passive</option>
                                    <option value="deleted">Deleted</option>
                                    <option value="frozen">Frozen</option>
                                </select>
                            </div>

                            <div class="relative">
                                <button
                                    @click="addUserRol"
                                    type="button"
                                    class="text-white w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <span :class="isloading ? 'block' : 'hidden'">
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
                                    <span :class="isloading ? 'hidden' : 'block text-xl'">Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <svg viewbox="0 0 91 91" class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300 fill-current">
                    <g stroke="none" strokewidth="1" fillrule="evenodd">
                        <g fillrule="nonzero">
                            <g>
                                <g>
                                    <circle cx="3.261" cy="3.445" r="2.72" />
                                    <circle cx="15.296" cy="3.445" r="2.719" />
                                    <circle cx="27.333" cy="3.445" r="2.72" />
                                    <circle cx="39.369" cy="3.445" r="2.72" />
                                    <circle cx="51.405" cy="3.445" r="2.72" />
                                    <circle cx="63.441" cy="3.445" r="2.72" />
                                    <circle cx="75.479" cy="3.445" r="2.72" />
                                    <circle cx="87.514" cy="3.445" r="2.719" />
                                </g>
                                <g transform="translate(0 12)">
                                    <circle cx="3.261" cy="3.525" r="2.72" />
                                    <circle cx="15.296" cy="3.525" r="2.719" />
                                    <circle cx="27.333" cy="3.525" r="2.72" />
                                    <circle cx="39.369" cy="3.525" r="2.72" />
                                    <circle cx="51.405" cy="3.525" r="2.72" />
                                    <circle cx="63.441" cy="3.525" r="2.72" />
                                    <circle cx="75.479" cy="3.525" r="2.72" />
                                    <circle cx="87.514" cy="3.525" r="2.719" />
                                </g>
                                <g transform="translate(0 24)">
                                    <circle cx="3.261" cy="3.605" r="2.72" />
                                    <circle cx="15.296" cy="3.605" r="2.719" />
                                    <circle cx="27.333" cy="3.605" r="2.72" />
                                    <circle cx="39.369" cy="3.605" r="2.72" />
                                    <circle cx="51.405" cy="3.605" r="2.72" />
                                    <circle cx="63.441" cy="3.605" r="2.72" />
                                    <circle cx="75.479" cy="3.605" r="2.72" />
                                    <circle cx="87.514" cy="3.605" r="2.719" />
                                </g>
                                <g transform="translate(0 36)">
                                    <circle cx="3.261" cy="3.686" r="2.72" />
                                    <circle cx="15.296" cy="3.686" r="2.719" />
                                    <circle cx="27.333" cy="3.686" r="2.72" />
                                    <circle cx="39.369" cy="3.686" r="2.72" />
                                    <circle cx="51.405" cy="3.686" r="2.72" />
                                    <circle cx="63.441" cy="3.686" r="2.72" />
                                    <circle cx="75.479" cy="3.686" r="2.72" />
                                    <circle cx="87.514" cy="3.686" r="2.719" />
                                </g>
                                <g transform="translate(0 49)">
                                    <circle cx="3.261" cy="2.767" r="2.72" />
                                    <circle cx="15.296" cy="2.767" r="2.719" />
                                    <circle cx="27.333" cy="2.767" r="2.72" />
                                    <circle cx="39.369" cy="2.767" r="2.72" />
                                    <circle cx="51.405" cy="2.767" r="2.72" />
                                    <circle cx="63.441" cy="2.767" r="2.72" />
                                    <circle cx="75.479" cy="2.767" r="2.72" />
                                    <circle cx="87.514" cy="2.767" r="2.719" />
                                </g>
                                <g transform="translate(0 61)">
                                    <circle cx="3.261" cy="2.846" r="2.72" />
                                    <circle cx="15.296" cy="2.846" r="2.719" />
                                    <circle cx="27.333" cy="2.846" r="2.72" />
                                    <circle cx="39.369" cy="2.846" r="2.72" />
                                    <circle cx="51.405" cy="2.846" r="2.72" />
                                    <circle cx="63.441" cy="2.846" r="2.72" />
                                    <circle cx="75.479" cy="2.846" r="2.72" />
                                    <circle cx="87.514" cy="2.846" r="2.719" />
                                </g>
                                <g transform="translate(0 73)">
                                    <circle cx="3.261" cy="2.926" r="2.72" />
                                    <circle cx="15.296" cy="2.926" r="2.719" />
                                    <circle cx="27.333" cy="2.926" r="2.72" />
                                    <circle cx="39.369" cy="2.926" r="2.72" />
                                    <circle cx="51.405" cy="2.926" r="2.72" />
                                    <circle cx="63.441" cy="2.926" r="2.72" />
                                    <circle cx="75.479" cy="2.926" r="2.72" />
                                    <circle cx="87.514" cy="2.926" r="2.719" />
                                </g>
                                <g transform="translate(0 85)">
                                    <circle cx="3.261" cy="3.006" r="2.72" />
                                    <circle cx="15.296" cy="3.006" r="2.719" />
                                    <circle cx="27.333" cy="3.006" r="2.72" />
                                    <circle cx="39.369" cy="3.006" r="2.72" />
                                    <circle cx="51.405" cy="3.006" r="2.72" />
                                    <circle cx="63.441" cy="3.006" r="2.72" />
                                    <circle cx="75.479" cy="3.006" r="2.72" />
                                    <circle cx="87.514" cy="3.006" r="2.719" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <svg viewbox="0 0 91 91" class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500 fill-current">
                    <g stroke="none" strokewidth="1" fillrule="evenodd">
                        <g fillrule="nonzero">
                            <g>
                                <g>
                                    <circle cx="3.261" cy="3.445" r="2.72" />
                                    <circle cx="15.296" cy="3.445" r="2.719" />
                                    <circle cx="27.333" cy="3.445" r="2.72" />
                                    <circle cx="39.369" cy="3.445" r="2.72" />
                                    <circle cx="51.405" cy="3.445" r="2.72" />
                                    <circle cx="63.441" cy="3.445" r="2.72" />
                                    <circle cx="75.479" cy="3.445" r="2.72" />
                                    <circle cx="87.514" cy="3.445" r="2.719" />
                                </g>
                                <g transform="translate(0 12)">
                                    <circle cx="3.261" cy="3.525" r="2.72" />
                                    <circle cx="15.296" cy="3.525" r="2.719" />
                                    <circle cx="27.333" cy="3.525" r="2.72" />
                                    <circle cx="39.369" cy="3.525" r="2.72" />
                                    <circle cx="51.405" cy="3.525" r="2.72" />
                                    <circle cx="63.441" cy="3.525" r="2.72" />
                                    <circle cx="75.479" cy="3.525" r="2.72" />
                                    <circle cx="87.514" cy="3.525" r="2.719" />
                                </g>
                                <g transform="translate(0 24)">
                                    <circle cx="3.261" cy="3.605" r="2.72" />
                                    <circle cx="15.296" cy="3.605" r="2.719" />
                                    <circle cx="27.333" cy="3.605" r="2.72" />
                                    <circle cx="39.369" cy="3.605" r="2.72" />
                                    <circle cx="51.405" cy="3.605" r="2.72" />
                                    <circle cx="63.441" cy="3.605" r="2.72" />
                                    <circle cx="75.479" cy="3.605" r="2.72" />
                                    <circle cx="87.514" cy="3.605" r="2.719" />
                                </g>
                                <g transform="translate(0 36)">
                                    <circle cx="3.261" cy="3.686" r="2.72" />
                                    <circle cx="15.296" cy="3.686" r="2.719" />
                                    <circle cx="27.333" cy="3.686" r="2.72" />
                                    <circle cx="39.369" cy="3.686" r="2.72" />
                                    <circle cx="51.405" cy="3.686" r="2.72" />
                                    <circle cx="63.441" cy="3.686" r="2.72" />
                                    <circle cx="75.479" cy="3.686" r="2.72" />
                                    <circle cx="87.514" cy="3.686" r="2.719" />
                                </g>
                                <g transform="translate(0 49)">
                                    <circle cx="3.261" cy="2.767" r="2.72" />
                                    <circle cx="15.296" cy="2.767" r="2.719" />
                                    <circle cx="27.333" cy="2.767" r="2.72" />
                                    <circle cx="39.369" cy="2.767" r="2.72" />
                                    <circle cx="51.405" cy="2.767" r="2.72" />
                                    <circle cx="63.441" cy="2.767" r="2.72" />
                                    <circle cx="75.479" cy="2.767" r="2.72" />
                                    <circle cx="87.514" cy="2.767" r="2.719" />
                                </g>
                                <g transform="translate(0 61)">
                                    <circle cx="3.261" cy="2.846" r="2.72" />
                                    <circle cx="15.296" cy="2.846" r="2.719" />
                                    <circle cx="27.333" cy="2.846" r="2.72" />
                                    <circle cx="39.369" cy="2.846" r="2.72" />
                                    <circle cx="51.405" cy="2.846" r="2.72" />
                                    <circle cx="63.441" cy="2.846" r="2.72" />
                                    <circle cx="75.479" cy="2.846" r="2.72" />
                                    <circle cx="87.514" cy="2.846" r="2.719" />
                                </g>
                                <g transform="translate(0 73)">
                                    <circle cx="3.261" cy="2.926" r="2.72" />
                                    <circle cx="15.296" cy="2.926" r="2.719" />
                                    <circle cx="27.333" cy="2.926" r="2.72" />
                                    <circle cx="39.369" cy="2.926" r="2.72" />
                                    <circle cx="51.405" cy="2.926" r="2.72" />
                                    <circle cx="63.441" cy="2.926" r="2.72" />
                                    <circle cx="75.479" cy="2.926" r="2.72" />
                                    <circle cx="87.514" cy="2.926" r="2.719" />
                                </g>
                                <g transform="translate(0 85)">
                                    <circle cx="3.261" cy="3.006" r="2.72" />
                                    <circle cx="15.296" cy="3.006" r="2.719" />
                                    <circle cx="27.333" cy="3.006" r="2.72" />
                                    <circle cx="39.369" cy="3.006" r="2.72" />
                                    <circle cx="51.405" cy="3.006" r="2.72" />
                                    <circle cx="63.441" cy="3.006" r="2.72" />
                                    <circle cx="75.479" cy="3.006" r="2.72" />
                                    <circle cx="87.514" cy="3.006" r="2.719" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, toRaw } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter()

const project_id=ref(router.currentRoute.value.params.id)
console.log(project_id.value,5);

const key = ref('');


const user = ref('');
const status = ref('');
const usersrolid = ref('');

const userRolsid = ref('');

const users = ref({});

const isloading = ref(false);

const addUserRol = () => {
    if(user.value == '' || status.value == '' || usersrolid.value == '') {
         Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: `Ma'lumotlarni to'ldiring`,
                    showConfirmButton: false,
                    timer: 1500
                });
    }else{
        isloading.value = true;
         axios
        .post(
            'https://pm-api.essential.uz/api/performers/create',
            {
                user_id: user.value,
                project_id: project_id.value,
                role_id: usersrolid.value,
                status: status.value
            },
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
        .then((res) => {
           if(res.status == 200) {
                   Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `Bajarildi`,
                    showConfirmButton: false,
                    timer: 1500
                });
            console.log(res);
            user.value = '';
            status.value = '';
            usersrolid.value = '';
            isloading.value = false;
            router.push(`/projects_list/${project_id.value}/performers`);
           }
        }).catch((err) => {
            isloading.value = false;
            console.log(err);
        });
    }
    console.log(user.value, status.value,usersrolid.value,project_id.value);
}

function userRolsID() {
    axios
        .get('https://pm-api.essential.uz/api/user-roles', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((res) => {
            console.log(res.data);
            userRolsid.value = res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}


function change(event) {
    console.log(usersrolid.value);
   axios.get('https://pm-api.essential.uz/api/users', {
       params: {
           user_role_id: usersrolid.value
       },
       headers: {
           Authorization: 'Bearer ' + localStorage.getItem('token')
       }
   }).then((res) => {
       console.log(res.data);
       users.value = res.data;
   })
}

userRolsID();
</script>
<style scoped></style>
