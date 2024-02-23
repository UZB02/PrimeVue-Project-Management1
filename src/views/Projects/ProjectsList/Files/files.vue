<template>
    <div>
        <h2>Kanban Board</h2>
        <div class="board">
            <div class="column" v-for="column in columns" :key="column.id">
                <h3>{{ column.title }}</h3>
                <div class="cards">
                    <div class="card" v-for="card in column.cards" :key="card.id">
                        {{ card.title }}
                    </div>
                </div>
                <form @submit.prevent="addCard(column.id)">
                    <input type="text" v-model="newCardTitle" placeholder="Enter a new card" />
                    <button>Add Card</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    data() {
        return {
            columns: [
                {
                    id: 1,
                    title: 'To Do',
                    cards: [
                        { id: 1, title: 'Task 1' },
                        { id: 2, title: 'Task 2' },
                        { id: 3, title: 'Task 3' }
                    ]
                },
                {
                    id: 2,
                    title: 'In Progress',
                    cards: [
                        { id: 4, title: 'Task 4' },
                        { id: 5, title: 'Task 5' }
                    ]
                },
                {
                    id: 3,
                    title: 'Done',
                    cards: [
                        { id: 6, title: 'Task 6' }
                    ]
                }
            ],
            newCardTitle: ''
        };
    },
    methods: {
        addCard(columnId) {
            const column = this.columns.find(col => col.id === columnId);
            if (column && this.newCardTitle.trim() !== '') {
                const newCard = {
                    id: Date.now(),
                    title: this.newCardTitle
                };
                column.cards.push(newCard);
                this.newCardTitle = '';
            }
        }
    }
};
</script>

<style>
.board {
    display: flex;
    gap: 20px;
}

.column {
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 5px;
}

.cards {
    margin-top: 10px;
}

.card {
    background-color: white;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
}
</style>