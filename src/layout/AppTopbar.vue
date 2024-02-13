<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();
const sellectvalue = ref(null);
const time = ref([
    { name: 'To day', code: 'TD' },
    { name: 'This week', code: 'TW' },
    { name: 'Last week', code: 'LW' },
    { name: 'This year', code: 'TY' },
    { name: 'Last year', code: 'LY' }
]);
const items = ref([
    {
        label: 'Users',
        items: [
            // {
            //     label: 'New',
            //     icon: 'pi pi-plus'
            // },
            {
                label: 'Developer',
                icon: 'pi pi-user'
            },
            {
                label: 'Project managers',
                icon: 'pi pi-user'
            },
            {
                label: 'Data analyzers',
                icon: 'pi pi-user'
            },
            // {
            //     label: 'Search',
            //     icon: 'pi pi-search'
            // }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out'
            }
        ]
    }
]);
const menu = ref();
const profil = ref([
    {
        label: 'Profil',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Export',
                icon: 'pi pi-upload'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

// const modalProfil = ref(false)
// const onmodalProfil = (() => {
//     modalProfil.value=!modalProfil.value
// })

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
                <span>SAKAI</span>
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
                <Dropdown id="dropdown" v-model="sellectvalue" :options="time" optionLabel="name" class="p-invalid border w-1/3" placeholder="This week" />
            </div>
            <div class="layout-topbar-menu" :class="topbarMenuClasses">
                <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                    <i class="pi pi-calendar"></i>
                    <span>Calendar</span>
                </button>
                <button type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"  class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                    <Menu ref="menu" id="overlay_menu" :model="profil" :popup="true" />
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
                </button> 
                <button @click="onSettingsClick()" class="p-link layout-topbar-button">
                    <i class="pi pi-cog"></i>
                    <span>Settings</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
