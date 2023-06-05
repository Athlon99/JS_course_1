function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
        for (let i=data.length-1; i>=0; i--) {
            result [data.length-i-1]=data[i];
        }
    console.log (result);
    // Не трогаем
    return result;
}
thirdTask();