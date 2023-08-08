import chalk from 'chalk';

const TURMA = process.env.TURMA;
const BGCOLOR = process.env.BGCOLOR;
console.log(chalk[BGCOLOR || 'bgWhite'].bold(`Hello Turma ${TURMA}`));