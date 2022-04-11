import chalk from 'chalk'
import fs from 'fs'

function lerArquivo(path){
    const encoding = 'utf-8'
    fs.readFile(path,encoding,function(err,data){
        if (err){
            console.log(chalk.red('Algo deu errado: ', err))
        }
        console.log(chalk.green(data))
    })
}

/*function texto(string) {
  return string;
}

console.log(texto(paragrafo));*/

lerArquivo('./arquivos/texto1.md')