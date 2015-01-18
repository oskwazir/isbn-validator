var test = require('tape');
var isbnValidator = require('../index');

test('should ignore dashes in isbn code', function (t){
  t.equal(isbnValidator("04-706-657-69"), true);
  t.equal(isbnValidator("047---06-6576-9"), true);
  t.end();
})

test('get true for valid isbn', function (t) {
    t.equal(isbnValidator("032157351X"), true);
    t.equal(isbnValidator("0262033844"), true);
    t.equal(isbnValidator("0-7475-3269-9"), true);
    t.equal(isbnValidator("156881111X"), true);
    t.equal(isbnValidator("1565923065"), true);
    t.equal(isbnValidator("059600298X"), true);
    t.equal(isbnValidator("193-6-493934"), true);
    t.equal(isbnValidator("0-7475-3269-9"), true);
    t.equal(isbnValidator("0-----714862533"), true);
    t.equal(isbnValidator("0789434806"), true);
    t.end();
});

test('get false if isbn is not a string', function (t) {   
    t.equal(isbnValidator(015), false);
    t.equal(isbnValidator(["abc"]), false);
    t.equal(isbnValidator({isbn:"4050"}), false);
    t.equal(isbnValidator([0,2,62,03,38,44]), false);
    t.end();
});

test('get false if isbn is not valid', function (t) {
    t.equal(isbnValidator("01234567"), false);
    t.equal(isbnValidator("01234567","0123456789XXX"), false);
    t.equal(isbnValidator("0123456789XXX"), false);
    t.equal(isbnValidator("15681111Y"), false);
    t.equal(isbnValidator("1-25681111X"), false);
    t.equal(isbnValidator("B0050SVMYA"), false);
    t.equal(isbnValidator("B00K-848IH0"), false);
    t.equal(isbnValidator("15681111Y"), false);
    t.equal(isbnValidator("B00HLT0YT0"), false);
    t.equal(isbnValidator("01234567"), false);
    t.end();
});
