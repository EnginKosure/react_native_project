import { ADD_TASK, DELETE_TASK } from './types';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const deleteTask = (key) => ({
    type: DELETE_TASK,
    payload: key,
});
