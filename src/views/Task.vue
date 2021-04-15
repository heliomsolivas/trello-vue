<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input
        type="text"
        :value="task.name"
        class="p-2 w-full mr-2 mb-2 flex-grow text-xl font-bold"
        @change="updateTaskProperty($event, 'name')"
        @keyup.enter="updateTaskProperty($event, 'name')"
      />

      <div class="px-2 w-full">
        <label>Description:</label>
        <textarea
          class="relative w-full bg-white p-2 border mt-2 h-64 leading-normal"
          placeholder="Insert your task description"
          :value="task.description"
          @change="updateTaskProperty($event, 'description')"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTask"]),
    task() {
      return this.getTask(this.$route.params.id);
    }
  },
  methods: {
    updateTaskProperty(event, key) {
      this.$store.commit("UPDATE_TASK", {
        task: this.task,
        key,
        value: event.target.value
      });
    }
  }
};
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
