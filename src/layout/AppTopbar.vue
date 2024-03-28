<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();
const sellectvalue = ref(null);
const projects = ref([
    { name: 'Project Management', code: 'PM' },
    { name: 'Pharmacy', code: 'PH' },
    { name: 'Ichki Ishlar', code: 'II' },
    { name: 'MCHS', code: 'MCHS' },
    { name: 'RRR', code: 'RRR' }
]);
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
                label: 'Logout',
                icon: 'pi pi-sign-out',
                command:
                ()=>{
                    localStorage.removeItem('token');
                    router.push('/auth/login');
                }
    //              async () => {
    //     try {
    //         const response = await axios.delete('https://pm-api.essential.uz/api/logout',{
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem('token')}`
    //             }
    //         });
    //         console.log(response);
    //         localStorage.removeItem('token');
    //         router.push('/auth/login');
    //     } catch (err) {
    //         console.log(err.response.data.errors);
    //     } finally {
    //     }
    // }
            }
        ]
    }
]);
const menu = ref();

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
                <Dropdown id="dropdown" v-model="sellectvalue" :options="projects" optionLabel="name"
                    class="p-invalid border w-1/3" placeholder="Project Management" />
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