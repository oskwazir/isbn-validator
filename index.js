module.exports = isbnValidator;

function isbnValidator(isbnCode){

  var self = this;

  if (typeof(isbnCode) !== "string") return false;

  self.replaceDashes = function format(sequence){
      return sequence.replace(/\-/g, '');
  }

  self.sumOfSequence = function hasRemainder(sequence){
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

  self.isCorrectFormat = function correctFormat(isbn){
    return isbn.match(/\d\d\d\d\d\d\d\d\d[0-9|xX]$/);
  };

  self.validate = function validate(sequence){
    var isValid = (sumOfSequence(sequence) % 11 === 0) ? true : false;
    return isValid;
  }

  self.isbn = self.replaceDashes(isbnCode);

  if(self.isCorrectFormat(self.isbn)) {
    return self.validate((self.isbn));
  } else {
    return false;
  }
};


