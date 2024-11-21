
function randomName() {
    const names = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Frank",
        "Grace",
        "Hannah",
        "Ivy",
        "Jack",
    ];
    return names[Math.floor(Math.random() * names.length)];
}

function randomSurname() {
    const surnames = [
        "Smith",
        "Johnson",
        "Williams",
        "Jones",
        "Brown",
        "Davis",
        "Miller",
        "Wilson",
        "Moore",
        "Taylor",
    ];
    return surnames[Math.floor(Math.random() * surnames.length)];
}

function randomTitle() {
    const titles = [
        "To Kill a Mockingbird",
        "1984",
        "The Great Gatsby",
        "The Catcher in the Rye",
        "The Hobbit",
        "Fahrenheit 451",
        "Pride and Prejudice",
        "The Lord of the Rings",
        "Jane Eyre",
        "Animal Farm",
        "Moby-Dick",
        "War and Peace",
        "The Odyssey",
        "Crime and Punishment",
        "Wuthering Heights",
        "Brave New World",
        "The Iliad",
        "The Brothers Karamazov",
        "Les Misérables",
        "Great Expectations",
        "Little Women",
        "Dracula",
        "The Adventures of Huckleberry Finn",
        "The Scarlet Letter",
        "Frankenstein",
        "The Grapes of Wrath",
        "Alice's Adventures in Wonderland",
        "The Picture of Dorian Gray",
        "The Count of Monte Cristo",
        "Don Quixote",
    ];
    return titles[Math.floor(Math.random() * titles.length)];
}

function randomYear() {
    return 1900 + Math.floor(Math.random() * 121);
}

function randomCategory() {
    const categories = [
        "Fiction",
        "Non-Fiction",
        "Science Fiction",
        "Fantasy",
        "Mystery",
        "Thriller",
        "Romance",
        "Historical",
        "Biography",
        "Self-Help",
    ];
    return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomCategories() {
    const categories = [
        "Fiction",
        "Non-Fiction",
        "Science Fiction",
        "Fantasy",
        "Mystery",
        "Thriller",
        "Romance",
        "Historical",
        "Biography",
        "Self-Help",
    ];
    const randomCategories = [];
    const category = categories[Math.floor(Math.random() * categories.length)];
    randomCategories.push(category);
    if (Math.random() > 0.5) {
        const secondCategory =
            categories[Math.floor(Math.random() * categories.length)];
        if (secondCategory !== category) {
            randomCategories.push(secondCategory);
        }
    }
    return randomCategories;
}

// Function which create unique ID for book. Search for the biggest ID in the booksList and add 1.
function createId(collection) {
    let maxId = 0;
    for (const item of collection) {
        if (item.id > maxId) {
            maxId = item.id;
        }
    }
    return maxId + 1;
}

function createRandomBook(collection) {
    return {
        id: createId(collection),
        title: randomTitle(),
        author: `${randomName()} ${randomSurname()}`,
        year: randomYear(),
        categories: getRandomCategories(),
    };
}

module.exports = {
    randomName,
    randomSurname,
    randomTitle,
    randomYear,
    randomCategory,
    getRandomCategories,
    createRandomBook,
    createId,
};