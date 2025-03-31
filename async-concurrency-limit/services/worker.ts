const CONCURRENT_LIMIT = 3;

const sleep = (milliseconds = 1) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const worker = async (id: string) => {
    console.log(`working on ${id}`);
    await sleep(1000 * Math.random());
    console.log(`${id} is completed`);
};

export const run = async (tasks: string[]) => {
    const totalTasks = tasks.length;
    let currentIndex = 0;

    const runTask = async () => {
        if (currentIndex < totalTasks) {
            const taskId = tasks[currentIndex++];

            await worker(taskId);
            await runTask();
        }
    };

    for (let i = 0; i < CONCURRENT_LIMIT; i++) {
        runTask();
    }
};
