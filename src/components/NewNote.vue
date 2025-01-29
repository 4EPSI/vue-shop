<template>
  <div class="new-note">
    <label>Title</label>
    <input v-model="note.title" type="text">
    <label>Description</label>
    <textarea v-model="note.desc"></textarea>

      <priorityNote
        :key="note.priority" 
        :priorities="['Standard', 'Important', 'Very Important']"
        :defaultPriority="note.priority"
        @priorityChange="handlePriorityChange"
      />

    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
import priorityNote from './UI/PriorityNote.vue';
export default {
  components: {
    priorityNote
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    addNote() {
      this.$emit('addNote', this.note)
    },
    handlePriorityChange(priority) {
      this.note.priority = priority
    },
  }
}
</script>

<style lang="scss">
.btn {
  width: 50%;
}
.new-note {
  text-align: center;
  margin-bottom: 24px;
}
</style>