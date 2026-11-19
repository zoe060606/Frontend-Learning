<script setup lang="ts">
import { useTaskStore } from './store/taskStore';
import { storeToRefs } from 'pinia';
import { ref, reactive } from 'vue';
import type { Priority } from './types/task';
import { ElMessage } from 'element-plus'
import { Delete, Edit } from '@element-plus/icons-vue'
import draggable from 'vuedraggable';

const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);


const COLUMNS = [
  { label: 'Backlog', status: 'todo' },
  { label: 'In Progress', status: 'doing' },
  { label: 'Designed', status: 'done' }
];

// 弹窗状态
const dialogVisible = ref(false);
const isEdit = ref(false); 
const currentEditId = ref<string | null>(null);

const taskForm = reactive({
  title: '',
  content: '',
  priority: 'medium' as Priority
});

const closeDialog = () => {
  dialogVisible.value = false;
  isEdit.value = false;
  currentEditId.value = null;
  taskForm.title = '';
  taskForm.content = '';
  taskForm.priority = 'medium';
};

const handleQuickAdd = () => {
  isEdit.value = false;
  dialogVisible.value = true;
};

const handleEdit = (task: any) => {
  isEdit.value = true;
  currentEditId.value = task.id;
  taskForm.title = task.title;
  taskForm.content = task.content;
  taskForm.priority = task.priority;
  dialogVisible.value = true;
};

const handleConfirm = () => {
  if (!taskForm.title) return;
  if (isEdit.value && currentEditId.value) {
    taskStore.updateTask(currentEditId.value, { ...taskForm });
    ElMessage.success('任务更新成功');
  } else {
    taskStore.addTask(taskForm.title, taskForm.content, taskForm.priority);
    ElMessage.success('任务添加成功');
  }
  closeDialog();
};

const getPriorityColor = (priority: string) => `priority-${priority}`;

const formatTime = (timestamp: number) => {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toLocaleString('zh-CN', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false
  });
};

interface VuedraggableChangeEvent {
  added?: {
    element: any; 
    newIndex: number;
  };
  removed?: {
    element: any;
    oldIndex: number;
  };
  moved?: {
    element: any;
    newIndex: number;
    oldIndex: number;
  };
}


const handleMove = (evt: VuedraggableChangeEvent, newStatus: string) => {
  if (evt.added) {
    const task = evt.added.element;
    taskStore.updateTaskStatus(task.id, newStatus as any);
    ElMessage.success(`任务已移至 ${newStatus}`);
  }
};

</script>

<template>
  <div class="app-container">
    <header>
      <h1>Roadmap</h1>
      <el-button type="primary" @click="handleQuickAdd">快速新增</el-button>
    </header>

    <main> 
      <el-row :gutter="20">
        <el-col 
          :span="8" 
          v-for="col in COLUMNS" 
          :key="col.status"
        >
          <div class="kanban-column">
            <h3>{{ col.label }} <span>({{ tasks.filter(t => t.status === col.status).length }})</span></h3>
            
            <draggable 
              :list="tasks.filter(t => t.status === col.status)" 
              group="tasks" 
              item-key="id"
              class="task-list-wrapper"
              :animation="300"
              ghost-class="ghost"
              @change="(evt: any) => handleMove(evt, col.status)" 
            >
              <template #item="{ element: task }">
                <div class="task-card">
                  <el-card shadow="never" :class="['custom-card', getPriorityColor(task.priority)]">
                    <div class="card-header-row">
                      <h4>{{ task.title }}</h4>
                      <el-button type="primary" :icon="Edit" circle size="small" @click.stop="handleEdit(task)"></el-button>
                    </div>
                    
                    <p>{{ task.content }}</p>
                    
                    <div class="card-footer">
                      <div class="time-stamp">更新于: {{ formatTime(task.updatedAt) }}</div>
                      <el-button size="small" type="danger" :icon="Delete" circle @click.stop="taskStore.deleteTask(task.id)"></el-button>
                    </div>
                  </el-card>
                </div>
              </template>
            </draggable>
          </div>
        </el-col>
      </el-row>
    </main>

    <el-dialog v-model="dialogVisible" :title="isEdit ? '编辑任务' : '新增任务'" width="500px" @closed="closeDialog">
      <el-form :model="taskForm" label-width="100px">
        <el-form-item label="任务标题">
          <el-input v-model="taskForm.title" />
        </el-form-item>
        <el-form-item label="任务描述">
          <el-input v-model="taskForm.content" type="textarea" />
        </el-form-item>
        <el-form-item label="优先级">
          <el-select v-model="taskForm.priority" style="width: 100%">
            <el-option label="高" value="high" />
            <el-option label="中" value="medium" />
            <el-option label="低" value="low" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="handleConfirm">{{ isEdit ? '保存修改' : '确定添加' }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.app-container { padding: 20px; background-color: #1a1a1a; min-height: 100vh; color: white; }
header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.kanban-column { background-color: #262626; padding: 20px; border-radius: 8px; min-height: 80vh; }
.kanban-column h3 { color: #FFFFFF; font-size: 24px; font-weight: bold; margin: 0 0 20px 0; }
.kanban-column h3 span { font-size: 18px; opacity: 0.6; margin-left: 8px; }

.task-list-wrapper { min-height: 200px; padding-bottom: 50px; }
.task-card { margin-bottom: 16px; }

.custom-card { border: none !important; border-radius: 12px !important; transition: transform 0.2s; cursor: grab; }
.custom-card:active { cursor: grabbing; }

.card-header-row { display: flex; justify-content: space-between; align-items: center; }
.custom-card h4 { color: #ffffff !important; font-size: 16px; font-weight: 700; margin: 0; }
.custom-card p { color: rgba(255, 255, 255, 0.9) !important; font-size: 13px; line-height: 1.5; word-break: break-word; margin: 10px 0; }

.priority-high { background-color: #D93535 !important; }
.priority-medium { background-color: #C340A1 !important; }
.priority-low { background-color: #6A6DCD !important; }

.card-footer { margin-top: 12px; display: flex; justify-content: space-between; align-items: center; }
.card-footer .el-button { background: rgba(255, 255, 255, 0.2); border: none; color: white; }
.time-stamp { font-size: 10px; color: rgba(255, 255, 255, 0.5); }

/* 拖拽中的占位符样式 */
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>