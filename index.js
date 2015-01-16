module.exports = isbnValidator;

function isbnValidator(isbnCode){

  var self = this;

  if (typeof(isbnCode) !== "string") return false;

  self.replaceDashes = function format(sequence){
      return sequence.replace(/\-/g, '');
  }

  self.sumOfSequence = function hasRemainder(sequence){
    console.log('inside sumOfSequence');
    var numberTenInISBN = "X";
    var sum = 0;
    var factor = 10;
    var characterIndex = 0;
    var isValid = undefined;
    var sequenceEnd = sequence.length - 1;

    for(; factor > 0; factor--, characterIndex++){
      if (characterIndex === sequenceEnd && 
        sequence.charAt(characterIndex) === numberTenInISBN){
        sum += 10 * factor;
      } else {
        sum += sequence.charAt(characterIndex) * factor;
      }
    }
    return sum;
  };

  self.isCorrectLength = function correctFormat(isbn){
    return (isbn.length === 10) ? true : false;
  };

  self.validate = function validate(sequence){
    //The sum of values in a valid ISBN code must be divisble by 11 without a remainder
    var isValid = (sumOfSequence(sequence) % 11 === 0) ? true : false;
    return isValid;
  }

  self.isbn = self.replaceDashes(isbnCode);

  if(self.isCorrectLength(self.isbn)) {
    return self.validate((self.isbn));
  } else {
    return false;
  }
};


