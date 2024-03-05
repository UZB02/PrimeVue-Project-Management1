<template>
    <div>
        <h1>
            Gant diogramma
        </h1>
    </div>
</template>
<script setup>
</script>
<style scoped>
    
</style>


<!-- <template>
    <div>
        <div class="control-section">
            <div class="content-wrapper">
                <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :dateFormat="dateFormat"
                    :taskFields="taskFields" :editSettings="editSettings" :toolbar="toolbar" :allowSelection="true"
                    :gridLines="gridLines" :height="height" :treeColumnIndex="1" :resourceFields="resourceFields"
                    :resources="resources" :highlightWeekends="true" :timelineSettings="timelineSettings" :columns="columns"
                    :eventMarkers="eventMarkers" :labelSettings="labelSettings" :editDialogFields="editDialogFields"
                    :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"
                    :splitterSettings="splitterSettings">
                </ejs-gantt>
                <div style="float: right; margin: 10px;">Source:
                    <a href="https://en.wikipedia.org/wiki/Construction" target='_blank'>https://en.wikipedia.org/</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { GanttComponent, Edit, Selection, Toolbar, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { editingData, editingResources } from './data-source';/

const data = ref(editingData);
const dateFormat = ref('MMM dd, y');
const taskFields = ref({
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks',
    notes: 'info',
    resourceInfo: 'resources'
});
const editSettings = ref({
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
});
const toolbar = ref(['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent']);
const gridLines = ref('Both');
const height = ref('450px');
const resourceFields = ref({
    id: 'resourceId',
    name: 'resourceName'
});
const resources = ref(editingResources);
const timelineSettings = ref({
    topTier: {
        unit: 'Week',
        format: 'MMM dd, y',
    },
    bottomTier: {
        unit: 'Day',
    },
});
const columns = ref([
    { field: 'TaskID', width: 90 },
    { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' },
    { field: 'StartDate' },
    { field: 'Duration' },
    { field: 'Progress' },
    { field: 'Predecessor' }
]);
const eventMarkers = ref([
    { day: '4/17/2019', label: 'Project approval and kick-off' },
    { day: '5/3/2019', label: 'Foundation inspection' },
    { day: '6/7/2019', label: 'Site manager inspection' },
    { day: '7/16/2019', label: 'Property handover and sign-off' },
]);
const labelSettings = ref({
    leftLabel: 'TaskName',
    rightLabel: 'resources'
});
const editDialogFields = ref([
    { type: 'General', headerText: 'General' },
    { type: 'Dependency' },
    { type: 'Resources' },
    { type: 'Notes' },
]);
const projectStartDate = ref(new Date('03/25/2019'));
const projectEndDate = ref(new Date('07/28/2019'));
const splitterSettings = ref({
    position: "35%"
});
</script> -->
