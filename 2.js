// Фабрика (Factory) — це патерн програмування, який надає загальний клас для створення об'єктів, який враховує
// передані аргументи та вирішує який клас повинен мати об’єкт при створенні
// Клас Book описує книгу в магазині
class Book {
  constructor(title, author, coverColor) {
    this.title = title;
    this.author = author;
    this.coverColor = coverColor;
  }
  describe() {
    return `Книга: ${this.title}, автор: ${this.author}, колір обкладинки: ${this.coverColor}`;
  }
}
// Клас AudioBook описує аудіокнигу в магазині
class AudioBook {
  constructor(title, author, audioLength) {
    this.title = title;
    this.author = author;
    this.audioLength = audioLength;
  }
  describe() {
    return `Аудіокнига: ${this.title}, автор: ${this.author}, тривалість: ${this.audioLength}`;
  }
}

// Клас ProductFactory використовується для створення об'єктів-продуктів.
class ProductFactory {

  static TYPE = {
    BOOK: "book",
    AUDIOBOOK: "audiobook",
  };
  /**
   * Статичний метод createProduct використовується для створення об'єктів-продуктів, отримує
   * type - тип продукту, що має бути створений. Має бути одним зі значень властивості TYPE.
   * options - об'єкт з параметрами для конструктора продукту.
   *
   * В залежності від типу, повертає або екземпляр класу Book, або AudioBook.
   *
   *  Кидає помилку, якщо переданий тип не підтримується `Такого типу продукту не існує: ${type}`.
   */
  static createProduct(type, options) {
    if (options.coverColor) return new Book(options.title, options.author, options.coverColor);
    else if (options.audioLength) return new AudioBook(options.title, options.author, options.audioLength);
    throw new Error(`Такого типу продукту не існує: ${type}`);
  }
}
console.log("Завдання 2 ====================================");
// Після виконання розкоментуйте код нижче

// Використовуємо ProductFactory для створення нової книги
const factoryBook = ProductFactory.createProduct(ProductFactory.TYPE.BOOK, {
  title: "Назва книги",
  author: "Автор книги",
  coverColor: "Синій",
});

// Виводимо в консоль опис нової книги
console.log(factoryBook.describe());

// Використовуємо ProductFactory для створення нової аудіокниги
const factoryAudiobook = ProductFactory.createProduct(ProductFactory.TYPE.AUDIOBOOK, {
  title: "Назва аудіокниги",
  author: "Автор аудіокниги ",
  audioLength: "5 годин",
});
// );

// Виводимо в консоль опис нової аудіокниги
console.log(factoryAudiobook.describe());

// Спробуємо створити продукт непідтримуваного типу
try {
  const factoryUnknown = ProductFactory.createProduct("comics", {});
} catch (error) {
  //   // Виводимо помилку в консоль
  console.error(error.message);
}
