<template>
    <section class="flex w-full items-center justify-center h-[80vh]">
        <div class="flex flex-col items-center justify-center w-full lg:pt-10 lg:flex-row">
            <div class="w-full mt-5 mr-0 mb-0 ml-0 relative z-10 lg:mt-0 lg:w-5/12">
                <form @submit.prevent="addUser()">
                    <div class="flex flex-col w-full gap-2 items-start justify-start pt-5 pr-6 pb-4 pl-6 bg-white shadow-2xl rounded-xl relative z-10">
                        <p class="w-full text-4xl font-bold text-center leading-snug">Edit Company</p>
                        <div class="w-full mt-2 mr-0 mb-0 ml-0 relative space-y-8">
                            <div class="flex gap-3">
                                <div class="left flex flex-col gap-3">
                                    <span class="flex items-center justify-between gap-3">
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Name</p>
                                            <input
                                                v-model="edit_name"
                                                placeholder="John"
                                                type="text"
                                                class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Phone</p>
                                            <InputMask
                                                id="ssn"
                                                v-model="edit_phone"
                                                mask="+998 (99) 999-99-99"
                                                placeholder="+998 (99) 999-99-99"
                                                class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                                            <input
                                                v-model="edit_email"
                                                type="email"
                                                placeholder="muhsinbek@gmail.com"
                                                class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Web Email</p>
                                            <input
                                                v-model="edit_website"
                                                type="email"
                                                placeholder="muhsinbek@gmail.com"
                                                class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </span>
                                    <span class="flex items-center justify-between gap-3">
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Logo</p>
                                            <input
                                                @change="handleFileChange"
                                                type="file"
                                                placeholder="123456789"
                                                class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                                min="0"
                                            />
                                        </div>
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Address</p>
                                            <input
                                                v-model="edit_address"
                                                placeholder="Namangan"
                                                type="text"
                                                class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Joylashuv(X)</p>
                                            <input
                                                v-model="edit_coordinate_x"
                                                type="number"
                                                placeholder="57893549"
                                                class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                                min="0"
                                            />
                                        </div>
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Joylashuv(Y)</p>
                                            <input
                                                v-model="edit_coordinate_y"
                                                type="number"
                                                placeholder="99946544"
                                                class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                                min="0"
                                            />
                                        </div>
                                    </span>
                                    <span class="flex items-center justify-between gap-3">
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Unikal Id</p>
                                            <input
                                                v-model="edit_company_unique_key"
                                                type="number"
                                                placeholder="5544988698"
                                                class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Director</p>
                                            <input
                                                v-model="edit_director"
                                                type="text"
                                                placeholder="F.I.O"
                                                class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Focebook</p>
                                            <input
                                                v-model="edit_facebook"
                                                type="text"
                                                placeholder="https//facebook.com"
                                                class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div class="relative w-full">
                                            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Linkedin</p>
                                            <input
                                                v-model="edit_linkedin"
                                                type="text"
                                                placeholder="https//linkedin.com"
                                                class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </span>
                                </div>
                                <div class="right">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">About</p>
                                    <textarea
                                        name="about"
                                        placeholder="About . . ."
                                        v-model="edit_about"
                                        cols="30"
                                        rows="8"
                                        class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div class="relative flex gap-3">
                                <button type="button" @click="editCompany()" class="w-full inline-block pt-3 pr-3 pb-3 pl-3 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">
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
                                    <span :class="isloading ? 'hidden' : 'block text-xl'">Edit</span>
                                </button>
                                <button
                                    type="button"
                                    @click="
                                        () => {
                                            router.push(`/companys`);
                                        }
                                    "
                                    class="w-full inline-block pt-3 pr-3 pb-3 pl-3 text-xl font-medium text-center text-white bg-red-500 rounded-lg transition duration-200 hover:bg-red-600 ease"
                                >
                                    Cacell
                                </button>
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
import Swal from 'sweetalert2';

const isloading = ref(false);
const companyID=router.currentRoute.value.params.id


const edit_name = ref('');
const edit_logo = ref('');
const edit_company_unique_key = ref(``);
const edit_director = ref(``);
const edit_phone = ref('');
const edit_about = ref(``);
const edit_address = ref('');
const edit_website = ref('');
const edit_email = ref('');
const edit_facebook = ref('');
const edit_linkedin = ref('');
const edit_coordinate_x = ref(``);
const edit_coordinate_y = ref(``);

const handleFileChange = (e) => {
    edit_logo.value = e.target.files[0];
    console.log(logo.value);
};

function fetchClient() {
    axios
    .get(`https://pm-api.essential.uz/api/companies/show/${companyID}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res) => {
        if (res.status === 200) {
            edit_name.value = res.data.name;
            edit_logo.value = res.data.logo;
            edit_company_unique_key.value = res.data.company_unique_key;
            edit_director.value = res.data.director;
            edit_phone.value = res.data.phone;
            edit_about.value = res.data.about;
            edit_address.value = res.data.address;
            edit_website.value = res.data.website;
            edit_email.value = res.data.email;
            edit_facebook.value = res.data.facebook;
            edit_linkedin.value = res.data.linkedin;
            edit_coordinate_x.value = res.data.coordinate_x;
            edit_coordinate_y.value = res.data.coordinate_y;
        }
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    }); 
}
fetchClient()

const editCompany = () => {
    if (
        edit_name.value == '' ||
        edit_logo.value == '' ||
        edit_company_unique_key.value == '' ||
        edit_director.value == '' ||
        edit_phone.value == '' ||
        edit_about.value == '' ||
        edit_address.value == '' ||
        edit_website.value == '' ||
        edit_email.value == '' ||
        edit_facebook.value == '' ||
        edit_linkedin.value == '' ||
        edit_coordinate_y.value == '' ||
        edit_coordinate_x.value == ''
    ) {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: `Ma'lumotlarni to'ldiring`,
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        isloading.value = true;
        const formData = new FormData();
        formData.append('name', edit_name.value);
        formData.append('phone', edit_phone.value);
        formData.append('address', edit_address.value);
        formData.append('email', edit_email.value);
        formData.append('website', edit_website.value);
        formData.append('logo', edit_logo.value);
        formData.append('coordinate_x', edit_coordinate_x.value);
        formData.append('coordinate_y', edit_coordinate_y.value);
        formData.append('company_unique_key', edit_company_unique_key.value);
        formData.append('director', edit_director.value);
        formData.append('about', edit_about.value);
        formData.append('facebook', edit_facebook.value);
        formData.append('linkedin', edit_linkedin.value);
        axios
            .post(`https://pm-api.essential.uz/api/companies/${companyID}/update`, formData, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
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
                    clear();
                    router.push('/companys');
                    console.log(res);
                }
            })
            .catch((err) => {
                isloading.value = false;
                console.log(err);
                clear();
            });
    }
};

function clear() {
    edit_name.value == '';
    edit_logo.value == '';
    edit_company_unique_key.value == '';
    edit_director.value == '';
    edit_phone.value == '';
    edit_about.value == '';
    edit_address.value == '';
    edit_website.value == '';
    edit_email.value == '';
    edit_facebook.value == '';
    edit_linkedin.value == '';
    edit_coordinate_y.value == '';
    edit_coordinate_x.value == '';
}
</script>
<style scoped></style>
