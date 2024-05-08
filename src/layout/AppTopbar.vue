<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();
const sellectvalue = ref();
const projects = ref({});
const items = ref([
    {
        label: 'Profile',
        items: [
            {
                label: 'Developer',
                icon: 'pi pi-user',
                command: () => {
                    router.push('/');
                }
            },
            {
                label: 'Analyst',
                icon: 'pi pi-user',
                command: () => {
                    router.push('/dashboard_analyst');
                }
            },
            {
                label: 'Manager',
                icon: 'pi pi-user',
                command: () => {
                    router.push('/dashboard_manager');
                }
            },
            {
                label: 'Add User Rols',
                icon: 'pi pi-plus',
                command: () => {
                    router.push('/addUserRols');
                }
            },
            {
                label: 'Add User',
                icon: 'pi pi-plus',
                command: () => {
                    router.push('/addUser');
                }
            },
            {
                label: 'Log Out',
                icon: 'pi pi-sign-out',
                command:
                ()=>{
                    localStorage.removeItem('token');
                    router.push('/auth/login');
                }
            }
        ]
    }
]);
const menu = ref();
const changeProekt=(()=>{
    console.log(sellectvalue.value);
    router.push(`/${sellectvalue.value}`);
})
function fetchData(page) {
    axios
        .get(`https://pm-api.essential.uz/api/project?page=${page}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            projects.value=result.data.result.data
          console.log(result.data.result.data);
        })
        .catch((err) => {
            console.error(err); 
        });
}
fetchData();

const toggle = (event) => {
    menu.value.toggle(event);
};

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};
const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/documentation');
};
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
    <div class="layout-topbar flex items-center justify-between">
        <div class="left flex">
            <router-link to="/" class="layout-topbar-logo">
                <img :src="logoUrl" alt="logo" />
                <span><h1 class="font-bold text-2xl">PM</h1></span>
            </router-link>

            <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>

            <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
                <i class="pi pi-ellipsis-v"></i>
            </button>
        </div>
        <div class="right flex items-center w-1/2 gap-2">
            <div class="w-full flex items-center justify-end">
               <select @change="changeProekt" v-model="sellectvalue" class="border font-medium placeholder-gray-400 focus:outline-none focus:border-black w-1/3 pt-3 cursor-pointer pr-3 pb-3 pl-3 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" placeholder="Change Proekt">
                                        <option v-for="item in projects" :value="item.id">{{ item.name }}</option>
                                    </select>
            </div>
            <div class="layout-topbar-menu" :class="topbarMenuClasses">
                <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                    <i class="pi pi-calendar"></i>
                    <span>Calendar</span>
                </button>
                <button type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                    <!-- <Menu ref="menu" id="overlay_menu" :model="profil" :popup="true"  />
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" /> -->
                </button>
               <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="translate-y-2">
                <Menu :model="items" />
                </Menu>
               <!-- <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="translate-y-2">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                                <span :class="item.icon" />
                                <span class="ml-2">{{ item.label }}</span>
                            </a>
                        </router-link>
                    </template>
                </Menu> -->
                <button @click="onSettingsClick()" class="p-link layout-topbar-button">
                    <i class="pi pi-cog"></i>
                    <span>Settings</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>