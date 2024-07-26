# Predictable State Container
### Why Redux is called Predictable

### Why Redux is called a Predictable State Container?
- Important Job Interview question

### Key principles of Redux
- State is an immutable object
- We can't mutate application state, we will always return a new, modified state
- All state changes are initiated through actions
- Reducers take current state, action as arguments & returns a new state ((state, action) => newState)
- Redux is inspired by Elm architecture that encourages functional programming principles like Pure functions
- That means pure functions' output is always same for same input
- Every single state change in reducers has to be taken care of by developers explicitly
- Reducers are supposed to be pure & that's where the predictability comes from

### Unidirectional Data flow
- state -> action -> reducer -> state -> action -> reducer

### Why Redux is predictable
- because using Redux you'll know what every single action in application will do and how state will change