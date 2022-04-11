import chalk from 'chalk'
import fs from 'fs'

async function lerArquivo(path){
    const encoding = 'utf-8'
    try{
        const file = await fs.promises.readFile(path,encoding)
        console.log(chalk.green(file))    
    }
    catch (err)
    {
        console.log(chalk.red(err))
    }

}

/*function texto(string) {
  return string;
}

console.log(texto(paragrafo));*/

lerArquivo('./arquivos/texto1.md')