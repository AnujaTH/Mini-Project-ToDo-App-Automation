🧪 Mini Project — To-do App Automation (Playwright)
🔗 Demo Application

https://todomvc.com/examples/react/dist/

📌 Scenario

Automate core To-do application functionalities:

Add new tasks
Mark tasks as completed
Delete tasks
📊 Project Goals (Measurable)
Install Playwright and create test setup
Automate:
Add 3 todos
Mark 1 todo as completed
Delete a todo
Generate Playwright HTML report and open it
Add assertions and validate failures in report
Capture screenshots and video on failure and attach to report
Execute tests using interactive UI mode
Run tests in debug mode
Execute tests with trace enabled
⚙️ Implementation Details

This project includes:

End-to-end UI test automation using Playwright
Validation of core user flows
Failure handling with screenshots and video capture
HTML reporting for test execution insights
🎯 Learning Outcomes

This project demonstrates:

Test setup and configuration
Locator strategies (best practices)
Assertions and validations
UI interactions
Debugging and tracing
Test reporting and analysis
🛠️ Tools & Technologies
Node.js
Playwright (latest version)
VS Code
📁 Project Structure
tests/
  └── todo.spec.js
playwright.config.js
package.json
🚀 How to Run the Project
1. Install dependencies
npm install
2. Run tests (headless)
npx playwright test
3. Run tests (headed)
npx playwright test --headed
4. Run in UI mode
npx playwright test --ui
5. Run in debug mode
npx playwright test --debug
6. Run with trace enabled
npx playwright test --trace on
7. View HTML report
npx playwright show-report
📸 Reporting & Artifacts
HTML report generated after test execution
Screenshots captured on failure
Video recording of test execution
Trace files for debugging
✅ Test Coverage
Feature	Status
Add Todo	✅
Complete Todo	✅
Delete Todo	✅
Assertions	✅
Reporting	✅
⚠️ Notes
Ensure Node.js is installed before running tests
Use latest Playwright version for best results
Do not commit unnecessary files (node_modules, reports, etc.)
