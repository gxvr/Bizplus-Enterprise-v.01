app.filter("total", () => {
    return function (input, property) {
        var i = input.length;
        var total = 0;
        while (i--)
            total += input[i][property];
        return total;
    }
});
