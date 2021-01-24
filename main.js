// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num,bases) => {
  return {
      specimenNum: num,
      dna: bases,
      mutate(){
      let idx = Math.floor(Math.random() * 15);
      let x = this.dna[idx]; //randomly select base in DNA prop
      //change the X base on index IDX to random base Y in DNA and then return DNA
      let y = '';
      do {
        y = returnRandBase();
      } while (x === y);
      if (x !== y) {
        this.dna.splice(idx, 1, y);
      }
      return this.dna;
    },

   compareDNA(obj) {
      let match = 0
      for (x = 0; x < this.dna.length; x++) {
        if (this.dna[x] === obj[x]) {
          match++;
        }
      }
        let percenti = match/obj.length * 100
        let percent = (match/obj.length * 100).toFixed(2);
        return `The two DNA strands have ${percent}% DNA in common.`
      },

      willLikelySurvive(){
      let match = 0
      for (x = 0; x < this.dna.length; x++) {
        if (this.dna[x] === 'C' || this.dna[x] === 'G') {
          match++;
        } 
      }
      let percent = match/this.dna.length * 100;
      if (percent < 60) {
        return false;
      }
      return true;
    }

        }
      }


let arr = [];
let count = 0
let match = 0;
do {
  let test10 = pAequorFactory(1, mockUpStrand());
  test10 = test10.willLikelySurvive();
  console.log(test10);
  count++;
  if (test10 === true) {
    match++;
  }
} while (match < 30);
console.log(match)
console.log(count)





