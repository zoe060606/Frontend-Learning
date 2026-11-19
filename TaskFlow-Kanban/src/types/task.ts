
export type TaskStatus = 'todo' | 'doing' | 'done';

export type Priority = 'low' | 'medium' | 'high';


export interface Task {
  id: string;            // 任务唯一标识
  title: string;         // 标题
  content: string;       // 详细描述
  status: 'todo' | 'doing' | 'done'; // 任务状态
  priority: Priority;//  优先级
  createdAt: number;   // 创建时间戳
  updatedAt: number;   // 最后更新时间戳
  
}