Here’s a sample README file for your project on **Test Doubles concepts**. This README includes an overview of test doubles, their types, examples, and how to use them in a project.

---

# 📘 Test Doubles in Unit Testing

## 📝 Introduction
Test doubles are objects that **mimic the behavior** of real objects in controlled ways. They are used in unit testing to **isolate** the unit under test, allowing you to focus on testing specific components without relying on external systems.

Test doubles are essential for creating **reliable** and **repeatable** tests, especially when dealing with dependencies such as APIs, databases, or other services.

## 🛠️ Types of Test Doubles
There are **5 main types** of test doubles:

### 1. **Dummy**
A **dummy** object is created but **not used** in the test. It only satisfies method signatures.

#### Example
```typescript
class DummyUser {
  constructor(public id: number, public name: string) {}
}
```

In this example, `DummyUser` is passed only to fulfill the parameter requirement without being used in the test logic.

### 2. **Fake**
A **fake** object has a working implementation but is simpler than the real object. It often uses an in-memory database or a mock service.

#### Example
```typescript
class FakeDatabase {
  private data: Record<string, string> = {};

  save(key: string, value: string) {
    this.data[key] = value;
  }

  get(key: string) {
    return this.data[key];
  }
}
```

In this example, `FakeDatabase` mimics a real database but stores data in memory.

### 3. **Stub**
A **stub** provides pre-defined responses to method calls. It does not have real behavior but is used to control the test flow.

#### Example
```typescript
const userApiStub = {
  getUser: jest.fn().mockReturnValue({ id: 1, name: "John Doe" }),
};
```

In this example, `userApiStub` always returns a static user object when `getUser` is called.

### 4. **Spy**
A **spy** records the interactions with the object. It tracks method calls, arguments, and even the number of times a method was called.

#### Example
```typescript
const loggerSpy = jest.spyOn(console, 'log');

myFunction();
expect(loggerSpy).toHaveBeenCalledWith("Hello World");
```

In this example, `loggerSpy` tracks the `console.log` calls.

### 5. **Mock**
A **mock** is a fully controlled object with expectations set before the test is run. It verifies the behavior of the test subject by checking if methods were called as expected.

#### Example
```typescript
const apiMock = {
  fetchData: jest.fn(),
};

apiMock.fetchData();
expect(apiMock.fetchData).toHaveBeenCalledTimes(1);
```

In this example, `apiMock` verifies that the `fetchData` method was called once.

## 💡 When to Use Each Test Double
| Type   | Use Case                                           |
|--------|----------------------------------------------------|
| Dummy  | When an object is required but not used in the test |
| Fake   | When a lightweight implementation is sufficient     |
| Stub   | When you need specific responses for testing        |
| Spy    | When you want to verify method calls and arguments  |
| Mock   | When you need full control over object behavior     |

## 🔍 How to Implement Test Doubles in Your Project
### Using Jest (JavaScript/TypeScript)
Jest is a powerful testing library that provides built-in support for creating test doubles like mocks, stubs, and spies.

#### Example
```typescript
// myService.ts
export class MyService {
  constructor(private api: any) {}

  async getData() {
    const response = await this.api.fetchData();
    return response.data;
  }
}

// myService.test.ts
import { MyService } from './myService';

const apiMock = {
  fetchData: jest.fn().mockResolvedValue({ data: "test data" }),
};

test("getData returns the correct data", async () => {
  const service = new MyService(apiMock);
  const result = await service.getData();
  expect(result).toBe("test data");
  expect(apiMock.fetchData).toHaveBeenCalled();
});
```

## 🚀 Running the Tests
To run the tests, use the following command:

```bash
npm test
```

Ensure you have Jest installed in your project:

```bash
npm install jest --save-dev
```

## 📚 References
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Test Double Patterns](https://martinfowler.com/bliki/TestDouble.html)
- [Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html)

## 🛠️ Contributing
If you would like to contribute, please fork the repository and submit a pull request. We welcome all improvements and suggestions!

## 📄 License
This project is licensed under the MIT License.

