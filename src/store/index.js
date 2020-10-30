const initialState = {
    taskList: [
        {
            id: Math.random.toString(),
            taskName: "Do the dishes",
            created: new Date(),
            completed: false,
        },
        {
            id: Math.random.toString(),
            taskName: "Make app",
            created: new Date(),
            completed: true,
        },
    ],
};
