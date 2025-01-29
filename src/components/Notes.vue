<template>
  <div class="notes">
    <div 
      class="note" 
      :class="{ full: !grid, standard: note.priority === 'Standard', important: note.priority === 'Important', 'very-important': note.priority === 'Very Important' }" 
      v-for="(note, index) in notes" :key="index"
    >
      <div class="note-header" :class="{ full: !grid }">
        <p v-if="!note.isEditingTitle" @click="enableEditing(note, 'title')">{{ note.title}}</p>

        <input 
          v-else 
          type="text" 
          v-model="note.title" 
          @blur="disableEditing(note, 'title')" 
          @keyup.enter="disableEditing(note, 'title')"
        />

        <p @click="removeNote(index)" style="cursor: pointer;">x</p>
      </div>
      <div class="note-body">
        <p v-if="!note.isEditingDesc" @click="enableEditing(note, 'desc')">{{ note.desc }}</p>
        <textarea 
          v-else 
          v-model="note.desc" 
          @blur="disableEditing(note, 'desc')" 
          @keyup.enter="disableEditing(note, 'desc')"
        ></textarea>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      notes: {
        type: Array,
        required: true
      },
      grid: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      enableEditing(note, field) {
        if (field === 'title') {
          note.isEditingTitle = true;
        } else if (field === 'desc') {
          note.isEditingDesc = true;
        }
      },
      disableEditing(note, field) {
        if (field === 'title') {
          note.isEditingTitle = false;
        } else if (field === 'desc') {
          note.isEditingDesc = false;
        }
      },
      removeNote(index) {
        this.$emit('remove', index)
        console.log(index)
      }
    }
  }
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,.04);
    transform: translate(0,-6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
  &.standard {
    background-color: white;
  }
  &.important {
    background-color: yellow;
  }
  &.very-important {
    background-color: red;
    color: white;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color: #402caf;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    cursor: pointer;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.note-body{
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
</style>