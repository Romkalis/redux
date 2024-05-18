import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        // Свойство counter будет внутри объекта общего состояния: state.counter
        // здесь могу  назодиться другие редьюсеры:
        
        // tasks: tasksReducer,
    },
});
