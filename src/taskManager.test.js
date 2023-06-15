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
