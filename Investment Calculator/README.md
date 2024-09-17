# Investment Calculator

This project is a simple **Investment Calculator** built using **React**. The app takes user inputs such as initial investment, annual investment, expected return rate, and investment duration. Based on these inputs, it calculates the investment value, yearly interest, total interest earned, and the total amount invested over the specified duration.

## Features

- Calculate the future value of investments.
- Input fields for initial investment, annual investment, expected return rate, and duration.
- Displays results in a table format showing investment value per year, interest, total interest, and invested capital.
- Basic validation: Ensures that the duration is greater than zero.

## Project Structure

```bash
src
├── Components
│   ├── Header.jsx
│   ├── InputField.jsx
│   ├── InvestmentResults.jsx
│   └── UserInput.jsx
├── util
│   └── investment.js
├── App.jsx
├── assets
│   └── investment-calculator-logo.png
Output
    ├── Testing until finding the result.png
    ├── Testing the calculations when user inputs.png
    └── when duration set to zero.png
    ├── when all values are zero.png
    ├── All the values are negative except duration.png
    └── Final Output.png
```
## Components Breakdown
1. App.jsx

- The main component that manages the state of the investment input fields and renders the Header, UserInput, and InvestmentResults components.
- Handles state updates and ensures that the input duration is valid before displaying results.

2. Header.jsx

- Displays the application header with a logo and title.

3. InputField.jsx

- A reusable input component that renders a label and input box, taking in label, value, and onChange props for dynamic usage.

4. UserInput.jsx

- Renders the input fields for Initial Investment, Annual Investment, Expected Return, and Duration.
- Passes the input values and state management handler (onChangeInput) to each input field.

5. InvestmentResults.jsx

- Displays a table containing the investment results over the specified duration.
- Fetches the calculated results from the calculateInvestmentResults function and renders the investment details for each year.
## Utility Functions
<strong><code> investment.js</code></strong>
</br>
- Contains the calculateInvestmentResults function that calculates the investment value, interest per year, and total interest based on the user inputs.
-<code>formatter</code> function is used to format the displayed values (e.g., currency formatting).

## How It Works

1. <strong>Input Fields:</strong> The user provides values for the initial investment, annual investment, expected return percentage, and duration in years.
2. <strong>Calculation:</strong>  Once all fields are filled and the duration is valid, the app calculates the end-of-year investment value, interest for each year, total interest, and invested capital.
3. <strong>Results Display:</strong> The results are presented in a tabular format, showing how the investment grows over the specified period.

## Technologies Used

- React: For building the user interface.
- JavaScript (ES6): Core logic and calculations.
- CSS: Basic styling for layout and design.
### Future Enhancements
- Add more input validation and error handling.
- Enhance the user interface with more detailed visual elements (e.g., graphs).
- Add a feature to handle different compounding periods (e.g., monthly, quarterly).
## License
This project is open-source and available under the MIT License.