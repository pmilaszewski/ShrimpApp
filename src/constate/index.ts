import {ToDoProvider} from './todo';
import {CatsProvider} from './cats';
import {DogsProvider} from './dogs';
import {NotesProvider} from './notes';
export const providers = [
  ToDoProvider,
  CatsProvider,
  DogsProvider,
  NotesProvider,
];

export {useToDo} from './todo';
export {useCats} from './cats';
export {useDogs} from './dogs';
export {useNotes} from './notes';
