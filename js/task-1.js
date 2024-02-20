const categories = document.querySelectorAll(".item");
console.log(`Number of categories ${categories.length}`);

for (const category of categories) {
    const categoryName = category.firstElementChild;
    console.log(`Category: ${categoryName.textContent}`);

    const categoryList = category.querySelectorAll('li');
    console.log(`Elements: ${categoryList.length}`)
}