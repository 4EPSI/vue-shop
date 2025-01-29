<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        
        <message v-if="message" :message="message" />

        <newNote :note="note" @addNote="addNote" />

        <div class="note-header">
          <h1>{{ title }}</h1>

          <search @search="search = $event" :value="search" />

          <div class="icons">
            <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
          </div>
        </div>

        <notes @remove="removeNote" :notes="notesFilter" :grid="grid" />
      </div>
    </section>
  </div>
</template>

<script>
import message from '@/components/Message.vue';
import newNote from '@/components/NewNote.vue';
import notes from '@/components/Notes.vue';
import search from '@/components/Search.vue';

export default {
  components: {
    message,
    newNote,
    notes,
    search
  },
  data() {
    return {
      title: 'Notes App',
      search: '',
      grid: true,
      note: {
        title: '',
        desc: '',
        priority: 'Standard'
      }
    };
  },
  computed: {
    notesFilter() {
      const array = this.$store.getters.getNotes;
      const search = this.search.trim().toLowerCase();
      return search
        ? array.filter(item => item.title.toLowerCase().includes(search))
        : array;
    },
    message() {
      return this.$store.getters.getMessage;
    }
  },
  methods: {
    addNote() {
      const { title, desc, priority } = this.note;

      if (title.trim() === '' || desc.trim() === '') {
        this.$store.dispatch('setMessage', 'Title and description can\'t be empty');
        return;
      }

      const newNote = {
        title,
        desc,
        priority: priority || 'Standard',
        date: new Date().toLocaleString()
      };

      this.$store.dispatch('addNote', newNote);

      this.note = {
        title: '',
        desc: '',
        priority: 'Standard'
      };

      this.$store.dispatch('clearMessage');
    },
    removeNote(index) {
      const noteToRemove = this.notesFilter[index];
      this.$store.dispatch('removeNote', noteToRemove);
    }
  }
};
</script>
