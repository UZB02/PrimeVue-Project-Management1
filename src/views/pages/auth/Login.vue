<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import router from '@/router';

const email = ref('');
const password = ref('');
const error = ref('');
const error2 = ref('');
const error3 = ref('');
const isloading=ref(false);

const login = async () => {
	isloading.value=true;
    try {
        const response = await axios.post('https://pm-api.essential.uz/api/login', {
            email: email.value,
            password: password.value
        });
        console.log(response);
        const token = response.data.result.token;
        localStorage.setItem('token', token);
        router.push('/');
		isloading.value=false;
    } catch (err) {
        console.log(err.response.data.errors.message);
        error.value = err.response.data.errors.email[0];
        error2.value = err.response.data.errors.password[0];
        error3.value = err.response.data.errors.message;
        // Xato bo'lganda xatni saqlash
        // error.value = err.response.data.errors.message
    } finally {
        // loading.value = false
    }
};

const eys=ref(false)
const showPassword =(()=>{
    eys.value = !eys.value
})
</script>

<template>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="w-1/2 relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div class="relative px-4 py-7 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <div class="text-center">
                        <Avatar :image="'demo/images/avatar/amyelsner.png'" size="xlarge" shape="circle"></Avatar>
                        <h1 class="text-2xl font-semibold">Welcome</h1>
                        <h1>Sign in to continue</h1>
                        <h1 class="font-sans text-lg text-red-500 font-medium">{{ error3 }}</h1>
                    </div>
                    <div class="divide-y divide-gray-200">
                        <form @submit.prevent="login" class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 flex flex-col gap-3">
                            <div class="relative">
                                <input
                                    autocomplete="off"
                                    v-model="email"
                                    id="email"
                                    name="email"
                                    type="text"
                                    class="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                    placeholder="Email address"
                                />
                                <span class="text-red-600 text-sm font-mono">{{ error }}</span>
                                <label
                                    for="text"
                                    class="absolute left-0 -top-3.5 text-gray-600 text-base peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-medium"
                                    >Your Email</label
                                >
                            </div>
                            <div class="relative">
                                <span class="flex gap-2 items-center justify-center peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600">
                                    <input
                                    autocomplete="off"
                                    v-model="password"
                                    id="password"
                                    name="password"
                                    :type="eys ? 'text' : 'password'"
                                    class="w-[90%] outline-none"
                                    placeholder="Password"
                                />
                                <i @click="showPassword" :class="eys ? 'pi pi-eye cursor-pointer' : 'pi pi-eye-slash cursor-pointer'" class="text-gray-400"></i>
                                </span>
                                <span class="text-red-600 text-sm font-mono">{{ error2 }}</span>
                                <label
                                    for="password"
                                    class="absolute left-0 -top-3.5 text-gray-600  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-medium text-base"
                                    >Password</label
                                >
                            </div>
                            <div class="relative w-full">
                                <button type="button" @click="login" class="bg-blue-500 text-2xl font-medium w-full text-white rounded-md px-2 py-3">
                                   <span class="flex items-center justify-center">
                                    <span :class="isloading ? 'block' : 'hidden'"><div aria-label="Loading..." role="status" class="flex items-center space-x-2">
    <svg class="h-6 w-6 animate-spin stroke-white" viewBox="0 0 256 256">
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
    <span class="font-medium text-white">Loading...</span>
</div></span>
								   </span> <span :class="isloading ? 'hidden' : 'block'">Log In</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
