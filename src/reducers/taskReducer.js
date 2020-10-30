import { ADD_TASK, DELETE_TASK } from "../actions/types";


// const initialState = {
//     taskList: [
//         {
//             id: Math.random.toString(),
//             taskName: "Do the dishes",
//             created: new Date(),
//             completed: false,
//         },
//         {
//             id: Math.random.toString(),
//             taskName: "Make app",
//             created: new Date(),
//             completed: true,
//         },
//     ],
//     totalDone: 1,
//     totalUndone: 1,
// };
export const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                taskList: ...state.taskList, {
                id: action.id,
                    title: action.title,
                        created: new Date(),
                            completed: false
            }
    }
}
};
