import chalk from 'chalk';
const init = async () => {
    console.log(chalk.yellow.bold(`
| $$ |          |$$|                  |$$|                  |$$|              |$$|         |$$|
| $$ |        |$$|                 |$$|  |$$|               |$$$$|          |$$$$|         |$$|
| $$ |      |$$|                 |$$|      |$$|             |$$|$$|        |$$|$$|         |$$|
| $$ |    |$$|                  |$$|        |$$|            |$$||$$|      |$$||$$|         |$$| 
| $$ |  |$$|                   |$$|         |$$|            |$$| |$$|    |$$| |$$|         |$$|  
| $$ |$$|                      |$$|         |$$|            |$$|  |$$|  |$$|  |$$|         |$$|    
| $$ |  |$$|                   |$$|         |$$|            |$$|   |$$||$$|   |$$|         |$$|     
| $$ |    |$$|                 |$$$$$$$$$$$$$$$|            |$$|    |$$$$|    |$$|         |$$|     
| $$ |      |$$|               |$$|         |$$|            |$$|              |$$|         |$$|     
| $$ |        |$$|             |$$|         |$$|            |$$|              |$$|         |$$|  
| $$ |          |$$|           |$$|         |$$|            |$$|              |$$|         |$$| 

    `))
    console.log(chalk.green.bold('                 https://discord.gg/zKpsrghxrU'));
    console.log(chalk.blue.bold(`               Uygulama geliştiricisi: @onlyrespect`));
}

export default {
    init
}
