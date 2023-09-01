# Credit Card Validator

This JavaScript code is a credit card validator that uses the Luhn algorithm to determine the validity of credit card numbers. It can also identify the companies that have produced invalid cards.

## Usage

1. **Data**: The code includes sample credit card numbers categorized as valid, invalid, or cards of unknown status. These arrays serve as the input data.

2. **validateCred() Function:**

- This function takes an array representing a credit card number and checks if it's valid using the Luhn algorithm.
- It calculates the checksum and returns true for valid cards and false for invalid cards.

3. **findInvalidCards() Function:**

- This function takes an array of credit card number arrays and identifies which ones are invalid using validateCred().
- It returns an array of invalid credit card numbers.

4. **idInvalidCardCompanies() Function:**

- This function takes an array of invalid credit card numbers and determines the companies that produced them based on the first digit of each card number.
- It returns an array of unique company names for the invalid cards.

5. **Running the Program:**

- The code runs the findInvalidCards() then the idInvalidCardCompanies() functions on the batch array to find and list the companies that have produced invalid cards.
- The results are logged to the console.

## Sample Data

- The provided code includes sample data categorized as valid, invalid, or unknown cards.
- You can modify the batch array to include your own card numbers for testing.

## Note

- This code can be used to validate and identify companies for a batch of credit card numbers.
- It serves as a basic credit card validation and identification tool.
- Additional credit card validation checks, such as expiration date and CVV, are not implemented in this code.
