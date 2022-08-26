import {ToDoProvider} from './todo';
import {CatsProvider} from './cats';
import {DogsProvider} from './dogs';
export const providers = [ToDoProvider, CatsProvider, DogsProvider];

export {useToDo} from './todo';
export {useCats} from './cats';
export {useDogs} from './dogs';
