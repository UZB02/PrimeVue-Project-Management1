<template>
    <section class="flex w-full items-center justify-center h-[80vh]">
        <div class="flex flex-col items-center justify-center w-full lg:pt-10 lg:flex-row">
            <div class="w-full mt-5 mr-0 mb-0 ml-0 relative z-10 lg:mt-0 lg:w-5/12">
                <form @submit.prevent="addUser()">
                    <div class="flex flex-col w-full gap-2 items-start justify-start pt-5 pr-6 pb-4 pl-6 bg-white shadow-2xl rounded-xl relative z-10">
                        <p class="w-full text-4xl font-bold text-center leading-snug">Add Client</p>
                        <div class="w-full mt-2 mr-0 mb-0 ml-0 relative space-y-8">
                            <span class="flex items-center justify-between gap-3">
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Name</p>
                                    <input
                                        v-model="client.eidt_name"
                                        placeholder="John"
                                        type="text"
                                        class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Phone</p>
                                     <InputMask id="ssn" v-model="client.edit_phone" mask="+998 (99) 999-99-99" placeholder="+998 (99) 999-99-99"  class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"/>
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                                    <input
                                        v-model="client.edit_email"
                                        type="email"
                                        placeholder="muhsinbek@gmail.com"
                                        class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Web Email</p>
                                    <input
                                        v-model="client.edit_web_site"
                                        type="email"
                                        placeholder="muhsinbek@gmail.com"
                                        class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                            </span>
                            <span class="flex items-center justify-between gap-3">
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">INN</p>
                                    <input
                                    v-model="client.edit_inn"
                                        type="number"
                                        placeholder="123456789"
                                        class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        min="0"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Address</p>
                                    <input
                                        v-model="client.edit_address"
                                        placeholder="Namangan"
                                        type="text"
                                        class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Joylashuv(X)</p>
                                    <input
                                    v-model="client.edit_addressX"
                                        type="number"
                                        placeholder="57893549"
                                        class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        min="0"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Joylashuv(Y)</p>
                                    <input
                                     v-model="client.edit_addressY"
                                        type="number"
                                        placeholder="99946544"
                                        class="border placeholder-gray-400 font-medium focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        min="0"
                                    />
                                </div>
                            </span>
                            <span class="flex items-center justify-between gap-3">
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Bank Acaunt</p>
                                    <input
                                    v-model="client.edit_bank_akaunt"
                                        type="number"
                                        placeholder="5544988698"
                                        class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Bank Name</p>
                                    <input
                                    v-model="client.edit_bank_name"
                                        type="text"
                                        placeholder="NBU"
                                        class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Bank MFI</p>
                                    <input
                                    v-model="client.edit_bank_mfi"
                                        type="number"
                                        placeholder="657895625"
                                        class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                                <div class="relative w-full">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-2 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Bank INN</p>
                                    <input
                                    v-model="client.edit_bank_inn"
                                        type="number"
                                        placeholder="7896265567"
                                        class="border placeholder-gray-400 focus:outline-none focus:border-black font-medium w-full pt-3 pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                    />
                                </div>
                            </span>
                            <div class="relative flex gap-3">
                                <button type="button" @click="editClient()" class="w-full inline-block pt-3 pr-3 pb-3 pl-3 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">
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
                                <button type="button" @click="()=>{router.push(`/all_clients`)}" class="w-full inline-block pt-3 pr-3 pb-3 pl-3 text-xl font-medium text-center text-white bg-red-500 rounded-lg transition duration-200 hover:bg-red-600 ease">Cacell</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref,reactive } from 'vue';
import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
const client_id=router.currentRoute.value.params.id;

const isloading = ref(false);
const client=reactive({
    eidt_name:'',
    edit_phone:'',
    edit_address:'',
    edit_email:'',
    edit_web_site:'',
    edit_inn:'',
    edit_addressX:'',
    edit_addressY:'',
    edit_bank_akaunt:'',
    edit_bank_name:'',
    edit_bank_inn:'',
    edit_bank_mfi:'',
});

// const eidt_name = ref('');
// const edit_phone = ref('');
// const edit_address = ref('');
// const edit_email = ref('');
// const edit_web_site = ref('');
// const edit_inn = ref(``);
// const edit_addressX = ref(``);
// const edit_addressY = ref(``);
// const edit_bank_akaunt = ref(``);
// const edit_bank_name = ref(``);
// const edit_bank_inn = ref(``);
// const edit_bank_mfi = ref(``);

function fetchClient() {
    axios
    .get(`https://pm-api.essential.uz/api/client/show/${client_id}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res) => {
        if (res.status === 200) {
            client.eidt_name = res.data.name;
            client.edit_phone = res.data.phone;
            client.edit_address = res.data.address;
            client.edit_email = res.data.email;
            client.edit_web_site = res.data.website;
            client.edit_inn = res.data.tin;
            client.edit_addressX = res.data.coordinate_x;
            client.edit_addressY = res.data.coordinate_y;
            client.edit_bank_akaunt = res.data.bank_account;
            client.edit_bank_name = res.data.bank_name;
            client.edit_bank_inn = res.data.bank_tin;
            client.edit_bank_mfi = res.data.bank_mfi;
        }
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    }); 
}
fetchClient()

const editClient=()=>{
    isloading.value = true;
    axios
    .post(`https://pm-api.essential.uz/api/client/${client_id}/update`,
    {
        name: client.eidt_name,
        phone: client.edit_phone,
        address: client.edit_address,
        email: client.edit_email,
        website: client.edit_web_site,
        tin: client.edit_inn,
        coordinate_x: client.edit_addressX,
        coordinate_y: client.edit_addressY,
        bank_account: client.edit_bank_akaunt,
        bank_name: client.edit_bank_name,
        bank_tin: client.edit_bank_inn,
        bank_mfi: client.edit_bank_mfi

    },
    {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res) => {
        if (res.status === 200) {
            isloading.value = false;
            router.push('/all_clients');
            console.log(res.data);
        }
    }).catch((err) => {
        isloading.value = false;
        console.log(err);
    });
}

// const addClient = () => {
//     if(name.value == "" || phone.value =="" || bank_name.value == "" || bank_inn.value == "" || bank_akaunt.value == "" || bank_mfi.value == "" || address.value == "" || email.value == "" || web_site.value == "" || inn.value == "" || addressX.value == "" || addressY.value == ""){
//           Swal.fire({
//                     position: 'top-center',
//                     icon: 'error',
//                     title: `Ma'lumotlarni to'ldiring`,
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//     }else{
//            isloading.value = true;
//     axios
//         .post(
//             'https://pm-api.essential.uz/api/client/create',
//             {
//                 name: name.value,
//                 phone: phone.value,
//                 address: address.value,
//                 email: email.value,
//                 website: web_site.value,
//                 tin: inn.value,
//                 coordinate_x: addressX.value,
//                 coordinate_y: addressY.value,
//                 bank_account: bank_akaunt.value,
//                 bank_name: bank_name.value,
//                 bank_mfi: bank_mfi.value,
//                 bank_tin: bank_inn.value
//             },
//             {
//                 headers: {
//                     Authorization: 'Bearer ' + localStorage.getItem('token')
//                 }
//             }
//         )
//         .then((res) => {
//             if (res.status === 200) {
//                 isloading.value = false;
//                 clear()
//                 router.push('/all_clients');
//                 console.log(res);
//             }
//         })
//         .catch((err) => {
//             isloading.value = false;
//             console.log(err);
//             clear()
//         });
//     }
// };

// function clear(){
//     name.value = '';
//     phone.value = '';
//     address.value = '';
//     email.value = '';
//     web_site.value = '';
//     inn.value = '';
//     addressX.value = '';
//     addressY.value = '';
//     bank_akaunt.value = '';
//     bank_name.value = '';
//     bank_inn.value = '';
//     bank_mfi.value = '';
// }
</script>
<style scoped></style>
