# DNA Sequence Simulator

This JavaScript code simulates the creation and analysis of DNA sequences using various methods and arrays. It includes a factory function to generate DNA specimens, mutate them, compare their DNA, and determine if they are likely to survive based on their DNA composition.

## Code Components

1. **returnRandBase() Function:**

- This function returns a random DNA base from the array of DNA bases (A, T, C, G).

2. **mockUpStrand() Function:**

- This function generates a random single strand of DNA containing 15 bases by repeatedly calling returnRandBase().

3. **pAequorFactory() Function:**

- This factory function creates DNA specimens with the following methods and properties:
- specimenNum: A unique identifier for the specimen.
- dna: An array containing the DNA sequence of the specimen.
- mutate(): A method that selects a random base in the DNA sequence and mutates it to a different random base.
- compareDNA(pAequor): A method that compares the DNA of two specimens and calculates the percentage of DNA in common.
- willLikelySurvive(): A method that checks if the specimen is likely to survive, based on the presence of at least 60% of C and G bases in the DNA.

4. **specimenThatAreLikelyToSurvive(numOfSpecimen) Function:**

- This function generates an array of specimens that are likely to survive by creating random DNA sequences and using the willLikelySurvive() method. It takes the number of specimens to generate as a parameter.

5. **Logging Specimens:**

- The code logs 30 specimens that are likely to survive to the console.

## Usage

- You can use this code to simulate and analyze DNA sequences, including mutation and survival likelihood. The provided functions and methods allow you to create, mutate, compare, and filter DNA specimens based on specific criteria.

## Note

- This code is a simplified simulation and does not represent real DNA analysis.
- It is designed for educational and portfolio purposes to demonstrate JavaScript methods and arrays in action.
