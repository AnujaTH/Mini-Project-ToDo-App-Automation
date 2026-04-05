# 🧪 Mini Project — To-do App Automation (Playwright)

## 🔗 Demo Application

👉 [https://todomvc.com/examples/react/dist/](https://todomvc.com/examples/react/dist/)

---

## 📌 Scenario

Automate core To-do application functionalities:

* ➕ Add new tasks
* ✅ Mark tasks as completed
* ❌ Delete tasks

---

## 📊 Project Goals (Measurable)

* Install Playwright and create test setup
* Add 3 todos
* Mark 1 todo as completed
* Delete a todo
* Generate HTML report
* Validate assertions and failures
* Capture screenshots & videos on failure
* Run tests in:

  * UI mode
  * Debug mode
  * Trace mode

---

## ⚙️ Implementation Details

This project includes:

* End-to-end UI automation using Playwright
* Validation of core user flows
* Screenshot & video capture on failure
* HTML reporting

---

## 🎯 Learning Outcomes

* Test setup and configuration
* Locator strategies (best practices)
* Assertions and validations
* UI interactions
* Debugging and tracing
* Test reporting

---

## 🛠️ Tools & Technologies

* Node.js
* Playwright
* VS Code

---

## 📁 Project Structure

```
📦 project-root
 ┣ 📂 tests
 ┃ ┗ 📜 todo.spec.js
 ┣ 📜 playwright.config.js
 ┣ 📜 package.json
```

---

## 🚀 How to Run the Project

### Install dependencies

```bash
npm install
```

### Run tests (headless)

```bash
npx playwright test
```

### Run tests (headed)

```bash
npx playwright test --headed
```

### Run UI mode

```bash
npx playwright test --ui
```

### Debug mode

```bash
npx playwright test --debug
```

### Run with trace

```bash
npx playwright test --trace on
```

### View report

```bash
npx playwright show-report
```

---

## 📸 Reporting

* HTML report generated after execution
* Screenshots on failure
* Video recordings
* Trace files for debugging

---

## ✅ Test Coverage

| Feature       | Status |
| ------------- | ------ |
| Add Todo      | ✅      |
| Complete Todo | ✅      |
| Delete Todo   | ✅      |
| Assertions    | ✅      |
| Reporting     | ✅      |

---


## 🧠 Key Takeaway

This project demonstrates practical QA automation skills including execution, validation, debugging, and reporting using Playwright.


