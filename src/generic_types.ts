const element = document.getElementById("runExample");

function getFirstItem<T>(items: T[]): T {
    if(items[0] === undefined) {
        throw new Error("Array is empty");
    }
    return items[0];
}
element?.addEventListener("click", () => {
    const choiceElement = document.getElementById("typeSelect") as HTMLSelectElement | null;
    const choice = choiceElement?.value;
    const numbers = [10, 20, 30];
    const strings = ["apple", "banana", "cherry"];
    const booleans = [true, false, true]
    let result;
    if (choice === "numbers") {
        result = getFirstItem(numbers);
    } else if (choice === "booleans") {
        result = getFirstItem(booleans);
    } else {
        result = getFirstItem(strings);
    }

    const outputElement = document.getElementById("exampleOutput");
    if (outputElement) {
        outputElement.textContent = "Result: " + result;
    }
});
