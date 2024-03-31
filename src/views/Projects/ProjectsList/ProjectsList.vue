<template>
    <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addProject"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-1"><i
                    class="pi pi-plus"></i> ADD
                Project</button>
            <!-- <h2 class="font-semibold">Loyihaning umumiy ma’lumotlarini ko’rish</h2> -->
            <span class="flex items-center justify-center gap-3 p-input-icon-right">
                <button type="button" @click="rolsToggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                    <!-- <Menu ref="menu" id="overlay_menu" :model="profil" :popup="true"  />
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" /> -->
                </button>
                <Menu ref="rolsMenu" id="overlay_menu" :model="rolsItems" :popup="true" class="translate-y-2">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                                <span :class="item.icon" />
                                <span class="ml-2">{{ item.label }}</span>
                            </a>
                        </router-link>
                    </template>
                </Menu>
                <span @click="cardFunction" class=" hover:scale-105 flex cursor-pointer items-center justify-center gap-1">
                    <i class="pi pi-th-large cursor-pointer" />
                    <h3 class="font-semibold">Card</h3>
                </span>
                <span @click="tableFunction" class="flex hover:scale-105 cursor-pointer items-center justify-center gap-1">
                    <i class="pi pi-table cursor-pointer" />
                    <h3 class="font-semibold">Table</h3>
                </span>
            </span>
        </div>
    </header>
    <!-- <section class="container flex flex-wrap items-center justify-center gap-2">
            <div class="flex items-center justify-center w-full h-full bg-red-500">
	<div class="flex justify-center items-center w-full space-x-1 text-sm text-gray-700">
		 
				<svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
					<path clip-rule='evenodd'
						d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
						fill='currentColor' fill-rule='evenodd' />
				</svg>
		<div>Loading ...</div>
	</div>
</div>
    </section> -->
    <section>
        <div class="container flex flex-wrap items-center justify-center gap-2">
            <div class="container flex flex-wrap justify-center gap-2">
                <div :class="card_table ? 'card shadow-md p-3 rounded-lg w-[32%] h-[300px] max-[1100px]:w-[45%] max-[1100px]:h-[300px]   flex flex-col gap-2 max-[1030px]:w-[49%] max-[1030px]:h-[300px]' : 'hidden'"
                    v-for="(item,ItemKey) in data" :key="ItemKey">
                    <div class="actions flex items-center justify-between">
                        <h2 class="font-bold text-sm text-slate-400">{{ ItemKey + 1 }}</h2>
                        <i class="pi pi-trash cursor-pointer" @click="deletCategory(item.id)"></i>
                        <div class="svg flex items-center justify-end gap-2">
                            <i @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
                                    class="pi pi-ellipsis-h cursor-pointer"></i>
                        </div>
                    </div>
                    <div class="image">
                        <img @click="generalinformation" class="rounded-xl cursor-pointer w-full h-40 object-cover" :src="item.logo" alt="Rasm">
                    </div>
                    <div class="bottom">
                        <span class="flex flex-col gap-2">
                            <div class="flex items-center justify-between">
                                <h1 @click="generalinformation"
                                    class="w-[80%] whitespace-nowrap overflow-hidden text-overflow-ellipsis cursor-pointer text-2xl font-bold">
                                    {{item.name}}</h1>
                            </div>

                            <div class="flex items-center justify-between gap-1">
                                <div class="flex items-center justify-center gap-2">
                                    <span class="flex items-center justify-center gap-1">
                                        <i class="pi pi-calendar"></i>
                                        <h2 class="whitespace-nowrap  overflow-hidden text-overflow-ellipsis">{{
                                            item.date_create }}</h2>
                                    </span>
                                    <span class="flex items-center justify-center gap-1">
                                        <i class="pi pi-paperclip"></i>
                                        <h2>{{ item.file }}</h2>
                                    </span>
                                    <span class="flex items-center justify-center gap-1">
                                        <i class="pi pi-verified"></i>
                                        <h2>{{ item.checked }}</h2>
                                    </span>
                                </div>
                                <span class="flex items-center justify-center gap-1">
                                    <Tag class="" :severity="item.severity" :value="item.icon_value"></Tag>
                                </span>
                                <div class="">
                                    <AvatarGroup class="mb-2">
                                        <Avatar v-tooltip.bottom="{ value: `${item.avatar_name}`, autoHide: false }"
                                            :image="item.avatar" shape="circle">
                                        </Avatar>
                                    </AvatarGroup>
                                </div>
                            </div>
                            <div class="w-full flex items-center  justify-center gap-3">
                                <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                    <div :style="{ width: `${item.score}` }" class="score rounded-xl bg-green-500 h-2">
                                    </div>
                                </span>
                                <span class="text-sm">{{ item.score }}</span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div :class="card_table ? 'hidden' : 'list w-full max-[900px]:w-[100%]'">
                <div class="card p-3">
                    <div class="flex align-items-center justify-content-between mb-4">
                        <h5 class="text-4xl font-medium">6 Sprints</h5>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="This Week"
                            class="w-1/2 md:w-14rem border" />
                    </div>
                    <ul v-for="(item , ItemKey) in data" :key="ItemKey" class="w-full p-0 mx-0 mt-0 mb-4 list-none">
                        <li
                            class="flex items-center justify-between align-items-center py-2 border-bottom-1 max-[900px]:w-[90%] surface-border">
                            <div class="w-[35%] flex items-center gap-2">
                                <h1 class="font-bold text-gray-500">{{ ItemKey + 1 }}.</h1>
                                <div
                                    class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                    <i :class="item.svg" class="text-xl text-blue-500"></i>
                                </div>

                                <span @click="generalinformation"
                                    class="w-[70%] cursor-pointer text-900 line-height-3 flex flex-col gap-2">
                                    <h1 class="font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{
                                        item.name }}</h1>
                                    <h4 class="text-slate-400">{{ item.status }}</h4>
                                </span>
                            </div>
                            <div class="w-[65%] flex  gap-3 items-center justify-center">
                                <span class="flex items-center justify-center gap-1">
                                    <Tag class="w-[65px]" :severity="item.severity" :value="item.icon_value"></Tag>
                                </span>
                                <span class="flex w-1/4 items-center justify-center gap-2">
                                    <Avatar :image="item.avatar" size="large" shape="circle">
                                    </Avatar>
                                    <h1 class="w-1/2 text-slate-500 font-medium whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.avatar_name }}</h1>
                                </span>
                                <span class="flex items-center justify-center gap-2">
                                    <i class="pi pi-calendar"></i>
                                    <span class="w-40 font-semibold">
                                        {{ item.date_create }}
                                    </span>
                                </span>

                                <span class="flex items-center justify-center gap-2">
                                    <i class="pi pi-paperclip"></i>
                                    <h3>{{ item.files }}</h3>
                                </span>
                                <span class="w-1/4 flex flex-col items-center  justify-center gap-1">
                                    <div class=" w-full flex  items-center  justify-center gap-3">
                                        <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                            <div :style="{ width: `${item.score}` }"
                                                class="score rounded-xl bg-green-500 h-2">
                                            </div>
                                        </span>
                                        <span class="text-sm">{{ item.score }}</span>
                                    </div>
                                </span>
                                <div class="actions flex items-center justify-center gap-3">
                                    <i @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
                                        class="pi pi-ellipsis-h cursor-pointer"></i>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="w-1/6 translate-y-2">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
            </template>
        </Menu>
    </section>
    
</template>
<script setup>
import { ref, reactive } from 'vue';
import router from '@/router';
import axios from 'axios';
const eId = ref(null)
const data=ref({})
const items = ref([
    {
        label: `Taxrirlash`,
        icon: 'pi pi-pencil',
        route: '/general_information'
    },
    {
        label: `O'chirish`,
        icon: 'pi pi-trash',
        route: '/general_information'
    },
    {
        label: `Arxivlash`,
        icon: 'pi pi-server',
        route: '/general_information'
    },
    {
        label: `Umumiy ma'lumotlar`,
        icon: 'pi pi-list',
        route: '/general_information'
    },
    // {
    //     label: 'Loyihaga biriktirilgan fayllar',
    //     route: '/files'
    // },
    {
        label: 'Loyiha ijrochilari',
        route: '/performers',
        icon: 'pi pi-users'
    },
    {
        label: 'Loyiha moliyaviy ko’rsatkichlari',
        route: '/financial',
        icon: 'pi pi-wallet'
    },
    {
        label: 'Loyiha bosqichlari',
        route: '/stages',
        icon: 'pi pi-database'
    },
    // {
    //     label: 'Loyihada ijrochilarga biriktirilgan topshiriqlar',
    //     route: '/tasks',
    // },
    // {
    //     label: 'Loyiha xronologiya ma’lumoti',
    //     route: '/timeline_information',
    // },
    {
        label: 'Kanban Doska',
        route: '/kanban',
        icon: 'pi pi-sliders-v'
    },
]);
const menu = ref();

function fetchData() {
  axios
    .get('https://pm-api.essential.uz/api/project', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(res => {
      console.log(res.data);
      data.value=res.data // Ma'lumotlarni ko'rish uchun
    })
    .catch(err => {
      console.error(err); // Xatoni chiqarish uchun
    });
}
fetchData()

const deletCategory = (id) => {
    eId.value = id
    console.log(id);
  axios
    .delete(`https://pm-api.essential.uz/api/project/${eId.value}/delete`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(result => {
        if (result.status === 200) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Bajarildi',
                showConfirmButton: false,
                timer: 1500
            })
            fetchData()
        }
        console.log(result);
    })
}

const generalinformation = () => {
    router.push('/stages')
}
const toggle = (event) => {
    menu.value.toggle(event);
};

const fullTable = ref(
    {
        id: ``,
        project_name: ``,
        status: ``,
        svg: ``,
        term: ``,
        month: ``,
        avatar_name: ``,
        score: ``,
        file_name: ``,
        avatar: ``,
        createTime: ``,
        company: ``,
        category: ``,
        cost_usd: ``,
        cost_uzs: ``,
        tell: ``,
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
    }
)

const selectedCity = ref();
const card_table = ref(true);
const rolsMenu = ref();
const rolsItems = ref([
    {
        label: 'Developer',
        icon: 'pi pi-user',
        route: '/developer'
    },
    {
        label: 'Manager',
        icon: 'pi pi-user',
        route: '/projects_list'
    },
    {
        label: 'Analyst',
        icon: 'pi pi-user',
        route: '/analyst'
    },
]);
const cities = ref([
    { name: 'This Week', code: 'TW' },
    { name: 'To Day', code: 'TD' },
    { name: 'Last Week', code: 'LW' },
    { name: 'Last Day', code: 'LD' },
    { name: 'This Month', code: 'TM' }
]);

const list = ref([
    {
        id: `1`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-chart-line`,
        term: `4,2024`,
        month: `Avg 12`,
        files: `3`,
        score: `63%`,
        createTime: `01.02.2024 -07:00`,
        avatar_name: `Julia`,
        cost_usd: `3000`,
        cost_uzs: `30000000`,
        severity: "danger",
        company: `Epan`,
        icon_value: "Stopped",
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        category: `SMM`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
    },
    {
        id: `2`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-chart-line`,
        term: `4,2024`,
        month: `Avg 12`,
        files: `3`,
        score: `47%`,
        createTime: `01.02.2024 -07:00`,
        avatar_name: `Jhonsn`,
        cost_usd: `3000`,
        cost_uzs: `30000000`,
        severity: "danger",
        company: `Epan`,
        icon_value: "Stopped",
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        category: `SMM`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=eab337afe51db765394f86a89629edb430a9d8c9-10299621-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
    },
    {
        id: `3`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-chart-pie`,
        term: `1,2024`,
        month: `Mar 26`,
        files: `7`,
        score: `81%`,
        cost_usd: `7000`,
        cost_uzs: `70000000`,
        severity: "warning",
        icon_value: "Suspended",
        category: `Marketing`,
        company: `UITC`,
        createTime: `01.02.2024 -07:00`,
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        avatar_name: `Andrey`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=7175b19a61240ba5d952072ba196839ba6072297-12153883-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
    },
    {
        id: `4`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-star`,
        term: `10,2023`,
        month: `Yan 31`,
        score: `53%`,
        files: `12`,
        cost_usd: `7000`,
        cost_uzs: `70000000`,
        severity: "primary",
        icon_value: "Draft ",
        category: `It`,
        company: `Global`,
        createTime: `01.02.2024 -07:00`,
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        avatar_name: `Watson`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=ec34e1f537840d74d17325bb883a6fe029a27e53-12314646-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
    },
    {
        id: `5`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-chart-pie`,
        term: `1,2024`,
        month: `Mar 26`,
        files: `7`,
        score: `81%`,
        cost_usd: `7000`,
        cost_uzs: `70000000`,
        severity: "warning",
        icon_value: "Suspended",
        category: `Marketing`,
        company: `UITC`,
        createTime: `01.02.2024 -07:00`,
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        avatar_name: `Andrey`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=7175b19a61240ba5d952072ba196839ba6072297-12153883-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
    },
    {
        id: `6`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-star`,
        term: `10,2023`,
        month: `Yan 31`,
        score: `53%`,
        files: `12`,
        cost_usd: `7000`,
        cost_uzs: `70000000`,
        severity: "primary",
        icon_value: "Draft ",
        category: `It`,
        company: `Global`,
        createTime: `01.02.2024 -07:00`,
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        avatar_name: `Watson`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=ec34e1f537840d74d17325bb883a6fe029a27e53-12314646-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
    },
])

const addProject = () => {
    router.push('/addProject');
}

const rolsToggle = (event) => {
    rolsMenu.value.toggle(event);
};
const cardFunction = () => {
    card_table.value = true
}
const tableFunction = () => {
    card_table.value = false
}

</script>
<style scoped>
</style>