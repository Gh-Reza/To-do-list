import updateLocalStorage from './localStorage.js';
import taskManager from './taskManager.js';

jest.mock('./localStorage.js', () => jest.fn().mockImplementation(() => {}));

describe('Add task', () => {
  test('should add new task to the task list', () => {
    const tasksList = [];

    taskManager.addTask('New task', tasksList);
    expect(tasksList).toEqual([
      {
        description: 'New task',
        completed: false,
        index: 1,
      },
    ]);

    expect(updateLocalStorage).toHaveBeenCalledWith(tasksList);
  });
});

describe('Remove task', () => {
  test('should remove a task from the task list and update the index', () => {
    const tasksList = [
      {
        description: 'task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'task 2',
        completed: false,
        index: 2,
      },
      {
        description: 'task 3',
        completed: false,
        index: 3,
      },
    ];

    taskManager.removeTask(1, tasksList);

    expect(tasksList).toEqual([
      {
        description: 'task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'task 3',
        completed: false,
        index: 2,
      },
    ]);

    expect(updateLocalStorage).toHaveBeenCalledWith(tasksList);
  });
});