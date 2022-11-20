import {atom, selector} from 'recoil';

export const todosState = atom({
    key: 'todosState',
    default: [],
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
