<script setup>
// import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import router from '@/router';

// const { layoutConfig } = useLayout();
const name = ref('');
const password = ref('');
const LogIn = () => {
	router.push('/')
}

// const logoUrl = computed(() => {
//     return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
// });
</script>

<template>
   <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    	<div class="w-1/2 relative py-3 sm:max-w-xl sm:mx-auto">
    		<div
    			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    		</div>
    		<div class="relative px-4 py-7 bg-white shadow-lg sm:rounded-3xl sm:p-20">
    			<div class="max-w-md mx-auto">
    				<div class="text-center">
						      <Avatar :image="'demo/images/avatar/amyelsner.png'" size="xlarge" shape="circle"></Avatar>
						 <h1 class="text-2xl font-semibold">Welcome</h1>
    					<h1>Sign in to continue</h1>
    				</div>
    				<div class="divide-y  divide-gray-200">
    						<form class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
								<div class="relative">
	    							<input autocomplete="off" v-model="name" id="name" name="name" type="text" class="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
	    							<label for="text" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
	    						</div>
	    						<div class="relative">
	    							<input autocomplete="off" v-model="password" id="password" name="password" type="password" class="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
	    							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
	    						</div>
	    						<div class="relative w-full">
	    							<button type="submit" @click="LogIn" class="bg-blue-500 w-full text-white rounded-md px-2 py-3">Submit</button>
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
