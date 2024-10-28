// Завдання 6

// Створіть інтерфейс User для типізації об'єктів, які містять такі властивості. Зверніть увагу, що адреса є необов'язковою властивістю.

// const mango = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com',
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };

// const poly = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com'
// };

interface Person {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  }; // Необов'язкове поле
}

const mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
