for(i = 2; i < 5; i++){
    for(j = 1; j < 6; j++){
        process.stdout.write(`${i} * ${j} = ${(i*j).toFixed().padStart(2)}   `);
    }
    console.log();
}