function multiply(num1, num2, callback)
{
    product = num1 * num2;
    console.log("Product : ", product);
    callback();
}

multiply(4, 5, () => {
    console.log("Operation complete")
})