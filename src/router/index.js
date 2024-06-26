import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/addUserRols',
                    name: 'AddUserRols',
                    component: () => import('@/views/AddUserRols/addUserRols.vue')
                },
                {
                    path: '/addUser',
                    name: 'AddUser',
                    component: () => import('@/views/AddUser/addUser.vue')
                },
                {
                    path: '/:id',
                    name: 'dashboard',
                    component: () => import('@/views/dashboards/dashboard_developer/Dashboard.vue')
                },
                {
                    path: '/',
                    name: 'dashboard_manager',
                    component: () => import('@/views/dashboards/dashboard_manager/Dashboard.vue')
                },
                {
                    path: '/dashboard_analyst',
                    name: 'dashboard_analyst',
                    component: () => import('@/views/dashboards/dashboard_analyst/Dashboard.vue')
                },
                {
                    path: '/projects_list',
                    name: 'projects_list',
                    component: () => import('@/views/Projects/ProjectsList/ProjectsList.vue')
                },
                {
                    path: '/projects_list/:id/clients',
                    name: `Project's client`,
                    component: () => import('@/views/Clients/clients.vue')
                },
                {
                    path: '/all_clients',
                    name: `Allclient`,
                    component: () => import('@/views/Clients/allClients.vue')
                },
                {
                    path: '/addClient',
                    name: `Addclient`,
                    component: () => import('@/views/Clients/addClient.vue')
                },
                {
                    path: '/editClient/:id',
                    name: `Editclient`,
                    component: () => import('@/views/Clients/editClient.vue')
                },
                {
                    path: '/companys',
                    name: `Companys`,
                    component: () => import('@/views/Companys/companys.vue')
                },
                {
                    path: '/add_companys',
                    name: `Add Companys`,
                    component: () => import('@/views/Companys/addCompany.vue')
                },
                {
                    path: '/edit_companys/:id',
                    name: `Edit Companys`,
                    component: () => import('@/views/Companys/editCompany.vue')
                },
                {
                    path: '/projects_list/:id/melistone',
                    name: 'Melistone',
                    component: () => import('@/views/Projects/ProjectsList/Stages/melistone.vue')
                },
                {
                    path: '/projects_list/:id/melistone/:slug/sprint',
                    name: 'Sprint',
                    component: () => import('@/views/Projects/ProjectsList/Sprint/Sprint.vue')
                },
                {
                    path: '/projects_list/:id/melistone/addMilestones',
                    name: 'addMilestones',
                    component: () => import('@/views/Projects/ProjectsList/AddMilestones.vue')
                },
                {
                    path: '/projects_list/:id/melistone/:slug/addSprint',
                    name: 'addSprint',
                    component: () => import('@/views/Projects/ProjectsList/AddSprint.vue')
                },
                {
                    path: '/projects_list/:id/general_information',
                    name: 'general_information',
                    component: () => import('@/views/Projects/ProjectsList/GeneralInformation/General_information.vue')
                },
                {
                    path: '/projects_list/:id/files',
                    name: 'files',
                    component: () => import('@/views/Projects/ProjectsList/Files/files.vue')
                },
                {
                    path: '/projects_list/:id/performers',
                    name: 'performers',
                    component: () => import('@/views/Projects/ProjectsList/Performers/performers.vue')
                },
                // {
                //     path: '/projects_list/:id/melistone/:slug/performers',
                //     name: 'performers',
                //     component: () => import('@/views/Projects/ProjectsList/Stages/performers.vue')
                // },
                {
                    path: '/projects_list/:id/melistone/:slug/sprint/:sprint_id/kanban',
                    name: 'Kanban',
                    component: () => import('@/views/Projects/ProjectsList/Kanban_Board/Kanban.vue')
                },
                {
                    path: '/projects_list/:id/melistone/:slug/sprint/:sprint_id/kanban/:url',
                    name: 'URL',
                    component: () => import('../views/unikalURL/url.vue')
                },
                {
                    path: '/rols',
                    name: 'Rols',
                    component: () => import('@/views/Rols/rols.vue')
                },
                {
                    path: '/addrols',
                    name: 'AddRols',
                    component: () => import('@/views/Rols/addRols.vue')
                },
                {
                    path: '/rols/:id/editrols',
                    name: 'EditRols',
                    component: () => import('@/views/Rols/editRols.vue')
                },
                {
                    path: '/rols/:id/users',
                    name: 'Users',
                    component: () => import('@/views/Users/user.vue')
                },
                {
                    path: '/rols/:id/users/:slug/editUser',
                    name: 'EditUser',
                    component: () => import('@/views/Users/editUser.vue')
                },
                {
                    path: '/rols/:id/users/addUsers',
                    name: 'AddUsers',
                    component: () => import('@/views/Users/addUsers.vue')
                },
                {
                    path: '/projects_list/:id/performers/:performers_id/performersinfo',
                    name: 'performersInfo',
                    component: () => import('@/views/Projects/ProjectsList/Performers/PerformersInfo.vue')
                },
                {
                    path: '/projects_list/:id/financial',
                    name: 'Financial',
                    component: () => import('@/views/Projects/ProjectsList/Financial/financial.vue')
                },
                {
                    path: '/projects_list/:id/performers/addPerformers',
                    name: 'AddPerformers',
                    component: () => import('@/views/Projects/ProjectsList/Performers/addPerformers.vue')
                },
                {
                    path: '/sprint_info',
                    name: 'Sprint_info',
                    component: () => import('@/views/Projects/ProjectsList/Sprint/Sprint_info.vue')
                },
                {
                    path: '/tasks',
                    name: 'Tasks',
                    component: () => import('@/views/Projects/ProjectsList/Tasks/tasks.vue')
                },
                {
                    path: '/timeline_information',
                    name: 'TimelineInformation',
                    component: () => import('@/views/Projects/ProjectsList/TimelineInformation/timelineInformation.vue')
                },
                {
                    path: '/part_projects',
                    name: 'PartProjects',
                    component: () => import('@/views/Projects/ProjectsList/PartProjects/partProjects.vue')
                },
                {
                    path: '/addProject',
                    name: 'addProject',
                    component: () => import('@/views/Projects/ProjectsList/AddProject.vue')
                },
                {
                    path: '/analyst',
                    name: 'Analyst',
                    component: () => import('@/views/Projects/ProjectsList/Analyst.vue')
                },
                {
                    path: '/developer',
                    name: 'Developer',
                    component: () => import('@/views/Projects/ProjectsList/Developer.vue')
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/Input.vue')
                },
                {
                    path: '/uikit/floatlabel',
                    name: 'floatlabel',
                    component: () => import('@/views/uikit/FloatLabel.vue')
                },
                {
                    path: '/uikit/invalidstate',
                    name: 'invalidstate',
                    component: () => import('@/views/uikit/InvalidState.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/Button.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/Table.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/List.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/Tree.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/Panels.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/Overlay.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/Media.vue')
                },
                {
                    path: '/uikit/menu',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '/uikit/menu',
                            component: () => import('@/views/uikit/menu/PersonalDemo.vue')
                        },
                        {
                            path: '/uikit/menu/seat',
                            component: () => import('@/views/uikit/menu/SeatDemo.vue')
                        },
                        {
                            path: '/uikit/menu/payment',
                            component: () => import('@/views/uikit/menu/PaymentDemo.vue')
                        },
                        {
                            path: '/uikit/menu/confirmation',
                            component: () => import('@/views/uikit/menu/ConfirmationDemo.vue')
                        }
                    ]
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/Messages.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/File.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/Chart.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/Misc.vue')
                },
                {
                    path: '/blocks',
                    name: 'blocks',
                    component: () => import('@/views/utilities/Blocks.vue')
                },
                {
                    path: '/utilities/icons',
                    name: 'icons',
                    component: () => import('@/views/utilities/Icons.vue')
                },
                {
                    path: '/pages/timeline',
                    name: 'timeline',
                    component: () => import('@/views/pages/Timeline.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/utilities/Documentation.vue')
                }
                // {
                //     path: '/pages/project',
                //     name: 'project',
                //     component: () => import('@/views/pages/Error.vue')
                // }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
