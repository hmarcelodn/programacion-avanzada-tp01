const { Tree } = require('./tree');

const buildTree = (samples) => {
    const tree = new Tree();
    for (sample of samples) {
        tree.addValue(sample);
    }

    return tree;
};

const sample01 = () => {
    const samples = [
        45, 12, 88, 7, 39, 101, 3, 67, 21, 94,
        56, 29, 62, 80, 15, 37, 91, 19, 33, 60,
        73, 98, 70, 44, 5, 26, 58, 31, 85, 1,
        74, 13, 46, 92, 76, 68, 24, 90, 40, 2,
        100, 86, 10, 27, 52, 9, 50, 28, 43, 11,
        14, 35, 16, 93, 8, 71, 66, 32, 22, 41,
        84, 57, 87, 6, 18, 30, 75, 69, 23, 48,
        4, 25, 36, 34, 38, 49, 17, 59, 55, 79,
        64, 53, 20, 83, 63, 65, 82, 77, 47, 89,
        73, 42, 95, 61, 51, 96, 72, 78, 99, 97
    ];
    const tree = buildTree(samples);
    const startTime = process.hrtime();
    const node = tree.findValue(101);
    const endTime = process.hrtime(startTime);
    console.log(`Tiempo de ejecución: ${endTime[1]}`, node);
};

const sample02 = () => {
    const samples = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
        91, 92, 93, 94, 95, 96, 97, 98, 99, 100
    ];
    const tree = buildTree(samples);    
    const startTime = process.hrtime();
    const node = tree.findValue(102);
    const endTime = process.hrtime(startTime);
    console.log(`Tiempo de ejecución: ${endTime[1]}`, node);
};

sample01();
sample02();

