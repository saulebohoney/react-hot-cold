import {MAKE_GUESS} from '..actions';

const initialState = {
    feedback: 'Make Your Guess!',
    correctAnswer: Math.round(Math.random() * 100),
    guesses: []
}
export const guessReducer= (state = initialState, action) => {
    if(action.type === MAKE_GUESS){
        return Object.assign({}, state, {
            feedback: action.feedback,
            guesses: [...state.guesses, action.guess],
            correctAnswer: state.correctAnswer
        })
    }
    return state;
};