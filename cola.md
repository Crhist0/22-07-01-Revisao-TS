npm init -y                             // cria package.json
npm i -D typescript                // instala TS em desenvolvimento
npx tsc --init                           // inicia TS
    "target": "ES2020"               //
    "module": "ES2020"            //
    "rootDir": "./src"                  // dos arquivos TS
    "outDir": "./public/js"          // vão arquivos TS transpilados
.gitignore                                // arquivo
    /node_modules                  // serão baixadas no 'npm i'
    package-lock.json              // gerado automaticamente