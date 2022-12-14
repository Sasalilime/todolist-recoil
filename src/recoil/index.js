import {atom, selector, selectorFamily} from 'recoil';
import {getTodoRequest, getTodosRequest} from '../api';

export const todosState = atom({
    key: 'todosState',
    default: getTodosRequest(),
});

export const filterState = atom({
    key: 'filterState',
    default: 'all',
});

export const selectFilteredTodos = selector({
    key: 'selectFilteredTodos',
    get: ({get}) => {
        const filter = get(filterState);
        const todos = get(todosState);
        switch (filter) {
            case 'done':
                return todos.filter((t) => t.done);
            case 'ongoing':
                return todos.filter((t) => !t.done);
            default:
                return todos;
        }
    },
});

export const selectTodosStats = selector({
    key: 'selectTodosStats',
    get: ({get}) => {
        const todos = get(todosState);
        const total = todos.length;
        const totalOnGoing = todos.filter((t) => !t.done).length;
        const totalDone = todos.filter((t) => t.done).length;
        return {
            total,
            totalOnGoing,
            totalDone,
            totalDonePercent: total > 0 ? Math.floor((totalDone / total) * 100) : 0,
        };
    },
});

export const selectTodoDetails = selectorFamily({
    key: 'selectTodoDetails',
    get:
        (_id) =>
        async ({get}) => {
            return _id && getTodoRequest(_id);
        },
});
