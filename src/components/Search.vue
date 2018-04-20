<template>
  <div :class="classSearch">
    <div class="input-group primary--text">
      <i class="material-icons">search</i>
      <input placeholder="Поиск" @focus="focused = true" @blur="focused = false">
      <!-- TODO Clear input X -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      focused: false
    }
  },
  computed: {
    classSearch () {
      return 'search' + (this.focused ? ' is--focused' : '')
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;
  position: relative;
  padding: 0;
  border-radius: 2px;
  background: #fff;
  border: 0;
  outline: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  &.is--focused {
    i {
      color: inherit !important;
    }
  }
  > .input-group {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 7px 16px;
    > i {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-width: 40px;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      color: rgba(0, 0, 0, 0.54);
    }
    > input {
      color: rgba(0, 0, 0, 0.87);
      box-shadow: none;
      flex: 1;
      height: 30px;
      font-size: 16px;
      border-style: none;
      margin: 0;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:focus {
        outline: none;
      }
    }
  }
}

// Dark

.dark {
  .search {
    &.is--focused i {
      color: rgba(255, 255, 255, .9) !important;
    }
    .input-group {
      color: rgba(255, 255, 255, .85);
      background: #4a4a4a;
      i {
        color: rgba(255, 255, 255, .5);
      }
      input {
        color: rgba(255, 255, 255, .85);
        background: #4a4a4a;
      }
    }
  }
}
</style>
