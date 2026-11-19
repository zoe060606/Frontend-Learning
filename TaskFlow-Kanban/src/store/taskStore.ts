import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { Task, TaskStatus } from '../types/task';


export const useTaskStore = defineStore('task-store', () => {
  

  const tasks = ref<Task[]>([]);


  const initializeStore = () => {
    const savedData = localStorage.getItem('TASK_FLOW_DATA');
    if (savedData) {
      tasks.value = JSON.parse(savedData);
    }
  };


  initializeStore();


  watch(tasks, (newTasks) => {
    localStorage.setItem('TASK_FLOW_DATA', JSON.stringify(newTasks));
  }, { deep: true });


 // 创建任务 (Create)
  const addTask = (title: string, content: string, priority: Task['priority']) => {
    const newTask: Task = {
      id: crypto.randomUUID(), // 使用浏览器自带的 API 生成唯一 ID
      title,
      content,
      status: 'todo',
      priority,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      
    };
    tasks.value.push(newTask);
    
  };

  // 更新任务状态 (Update - 移动看板列)
  const updateTaskStatus = (id: string, newStatus: TaskStatus) => {
    const task = tasks.value.find(t => t.id === id);
    if (task) {
      task.status = newStatus;
      task.updatedAt = Date.now();
    }
  };

  // 删除任务 (Delete)
  const deleteTask = (id: string) => {
  tasks.value = tasks.value.filter(t => t.id !== id);
 
};

const updateTask = (id: string, updatedData: { title: string; content: string; priority: any }) => {
  const task = tasks.value.find(t => t.id === id); 
  if (task) {
    task.title = updatedData.title;
    task.content = updatedData.content;
    task.priority = updatedData.priority;
    task.updatedAt = Date.now(); // 记录更新时间
  }
};

  // 暴露给组件使用
  return {
    tasks,
    addTask,
    updateTaskStatus,
    deleteTask,
    updateTask
  };



});

