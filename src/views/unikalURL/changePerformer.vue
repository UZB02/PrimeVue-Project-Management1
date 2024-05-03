<template>
<section class="flex flex-col gap-2 items-center justify-center ">
    <div class="top w-full">
           <div class="flex items-center shadow rounded border bg-purple-white justify-between">
                                <input type="text" class="p-3  outline-none w-full" placeholder="Search..." />
                                <i class="pi pi-search mr-1 cursor-pointer"></i>
                            </div>
    </div>
    <ScrollPanel style="width: 100%; height: 200px">
                        <li v-for="(item, itemId) in users" :key="itemId" @click="addPerformer(item.id)" class="flex items-center transition cursor-pointer active:bg-blue-200 justify-between align-items-center py-2 px-1 rounded-lg border-bottom-1 max-[900px]:w-[90%] surface-border">
                            <div class="w-full flex items-center justify-center  gap-2">
                                <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                   <img class="w-3rem h-3rem rounded-full" :src="item.avatar ? item.avatar :'https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250'" alt="">
                                </div>
                                <span  class="w-full text-900 line-height-3 flex flex-col gap-2">
                                    <h1 class="font-bold text-xl">{{ item.fio }}</h1>
                                    <h4 class="text-slate-400"></h4>
                                </span>
                            </div>
                        </li>
    </ScrollPanel>
</section>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
const router = useRouter();

const users=ref({});

const project_id=router.currentRoute.value.params.id;
const taskId=router.currentRoute.value.params.url;
const performer_id=ref('');
console.log(taskId,'taskId');
console.log(project_id,'project_id');

const isloading=ref(false);

function fetchUsers() {
    axios
        .get(`https://pm-api.essential.uz/api/performers`, {
            params: {
                project_id: project_id
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                // isloading.value = true;
                console.log(result.data);
                users.value = result.data;
            }
        })
        .catch((err) => {
            console.error(err);
        });
}
fetchUsers();

const addPerformer = (id) => {
    performer_id.value = id;
    axios
        .post(
            'https://pm-api.essential.uz/api/task-performers/create',
            {
                project_id: project_id,
                performer_id: performer_id.value,
                task_id: taskId
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
                })
            }
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

</script>
<style scoped>
    
</style>