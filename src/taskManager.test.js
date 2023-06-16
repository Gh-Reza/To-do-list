import updateLocalStorage from './localStorage.js';
import taskManager from './taskManager.js';
import updateStatus from './status.js';

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

describe('Edit task', () => {
  test('One or more tasks should be edited', () => {
    const tasksList = [
      {
        description: 'Added',
        completed: false,
        index: 1,
      },
      {
        description: 'Another',
        completed: false,
        index: 2,
      },
      {
        description: 'One more',
        completed: false,
        index: 3,
      },
    ];

    taskManager.updateTask('Another one', 1, tasksList);
    taskManager.updateTask('Added edited', 0, tasksList);
    taskManager.updateTask('Delete the value', 2, tasksList);

    expect(tasksList).toEqual([
      {
        description: 'Added edited',
        completed: false,
        index: 1,
      },
      {
        description: 'Another one',
        completed: false,
        index: 2,
      },
      {
        description: 'Delete the value',
        completed: false,
        index: 3,
      },
    ]);

    expect(updateLocalStorage).toHaveBeenCalledWith(tasksList);
  });
});

describe('Update Status', () => {
  test('Status should be updated', () => {
    const tasksList = [
      {
        description: 'Added',
        completed: false,
        index: 1,
      },
      {
        description: 'Another',
        completed: false,
        index: 2,
      },
      {
        description: 'One more',
        completed: false,
        index: 3,
      },
    ];

    updateStatus(0, true, tasksList);
    updateStatus(1, true, tasksList);

    expect(tasksList).toEqual([
      {
        description: 'Added',
        completed: true,
        index: 1,
      },
      {
        description: 'Another',
        completed: true,
        index: 2,
      },
      {
        description: 'One more',
        completed: false,
        index: 3,
      },
    ]);
    expect(updateLocalStorage).toHaveBeenCalledWith(tasksList);
  });
});

describe('Clear completed tasks', () => {
  test('The completed tasks should be eliminated', () => {
    const tasksList = [
      {
        description: 'Added edited',
        completed: true,
        index: 1,
      },
      {
        description: 'Another one',
        completed: false,
        index: 2,
      },
      {
        description: 'Delete the value',
        completed: true,
        index: 3,
      },
    ];

    taskManager.clearCompleted(tasksList);

    expect(tasksList).toEqual([
      {
        description: 'Another one',
        completed: false,
        index: 1,
      },
    ]);
    expect(updateLocalStorage).toHaveBeenCalledWith(tasksList);
  });
});
