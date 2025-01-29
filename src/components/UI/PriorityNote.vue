<template>
  <div class="priority-note">
    <div 
      v-for="item in priorities"
      :key="item"
      class="tab" 
      :class="{ active: tagActive === item }"
      @click="setActive(item)">
      <span>{{ item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    priorities: {
      type: Array,
      required: true
    },
    defaultPriority: {
      type: String,
      default: 'Standard'
    }
  },
  data() {
    return {
      tagActive: this.defaultPriority
    }
  },
  watch: {
    defaultPriority(val) {
      this.tagActive = val
    }
  },
  methods: {
    setActive(tag) {
      this.tagActive = tag;
      this.$emit('priorityChange', tag)
      this.$store.dispatch('setPriority', tag);
    }
  }
}
</script>

<style lang="scss" scoped>
.priority-note {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  .tab {
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 30px;
    cursor: pointer;
    transition: all .25s cubic-bezier(.02,.01,.47,1);
    background: #fff;
    box-shadow: 0 30px 30px rgba(0,0,0,.02);
    &:hover {
      box-shadow: 0 30px 30px rgba(0,0,0,.04);
      transform: translate(0,-6px);
      transition-delay: 0s !important;
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      border: 1px solid blue;
      background-color: lightblue;
      transition: all 0.3s ease;
    }
    &.reset {
      background-color: #fff;
      border: 1px solid transparent;
      transform: scale(1);
      transition: all 0.3s ease; 
    }
  }
}
</style>