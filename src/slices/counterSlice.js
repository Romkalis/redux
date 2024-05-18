import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // Редьюсеры в слайсах меняют состояние и ничего не возвращают
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Пример с данными
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
});

// Слайс генерирует действия - actions, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров

export const { increment, decrement, incrementByAmount} = counterSlice.actions;
// по умолчанию экспортируется редьюсер сгенерированный слайсом
export default counterSlice.reducer;

// чтобы создался редьюсер созданем началаьное состояние, initialState 