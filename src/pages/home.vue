<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-primary mb-4">欢迎使用 Xiuxian</h1>

    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <div class="flex items-center gap-4 mb-4">
        <span class="text-2xl">计数器: {{ counterStore.count }}</span>
        <button class="btn-primary" @click="counterStore.increment">
          增加
        </button>
        <button class="btn-secondary" @click="counterStore.decrement">
          减少
        </button>
        <button class="btn-secondary" @click="counterStore.reset">重置</button>
      </div>

      <p class="text-lg text-gray-600">
        双倍计数: {{ counterStore.doubleCount }}
      </p>
    </div>

    <div class="flex gap-4">
      <router-link to="/" class="btn-primary">首页</router-link>
      <router-link to="/about" class="btn-secondary">关于</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { useRouter } from 'vue-router';

const counterStore = useCounterStore();
const router = useRouter();
</script>
