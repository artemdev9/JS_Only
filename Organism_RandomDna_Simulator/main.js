// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function for storing and manipulating DNA data
const pAequorFactory = (specimenNum, dna) => {
  return {
    // Data about specimen
    specimenNum,
    dna,
    // Selects a random dna from the dna array and changes in to a different random dna
    mutate() {
      const index = Math.floor(Math.random() * dna.length);
      randDna = dna[index];
      let newRandDna;
      do {
        newRandDna = returnRandBase();
      } while (randDna === newRandDna);
      dna[index] = newRandDna;
    },

    compareDNA(pAequor) {
      let percentageDiff;
      let sameElements = 0;
      for (let i = 0; i < pAequor.dna.length; i++) {
        if (pAequor.dna[i] === this.dna[i]) {
          sameElements++;
        }
      }
      percentageDiff = Math.floor((sameElements / pAequor.dna.length) * 100);
      console.log(
        `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentageDiff}% DNA in common`
      );
    },
    // Function to check if the specimen will likely survive, return true if yes and false if no
    willLikelySurvive() {
      // If the specimen contains at least 60% of C and G dna it will likely survive
      const onlyCDna = this.dna.filter(function (element) {
        return element === "C" || element === "G";
      });
      // This is the reference to the current pAequorFactory object
      return onlyCDna.length / this.dna.length >= 0.6 ? true : false;
    },
  };
};

// Returns an array length specified with specimen dna and unique number that are likely to survive
const specimenThatAreLikelyToSurvive = (numOfSpecimen) => {
  const pAequorInstancesThatAreLikelyToSurvive = [];
  let specimenNum = 1;
  while (pAequorInstancesThatAreLikelyToSurvive.length < numOfSpecimen) {
    const randomDna = Array.from({ length: 15 }, returnRandBase);
    const newpAequor = pAequorFactory(specimenNum, randomDna);
    if (newpAequor.willLikelySurvive()) {
      pAequorInstancesThatAreLikelyToSurvive.push(newpAequor);
      specimenNum++;
    }
  }
  return pAequorInstancesThatAreLikelyToSurvive;
};

// Logs 30 specimen that are likely to survive
console.log(JSON.stringify(specimenThatAreLikelyToSurvive(30)));
