export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guesses, feedback) => ({
    type: MAKE_GUESS,
    guesses,
    feedback

})