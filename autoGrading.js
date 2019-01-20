/*
Output:
  string of students and scores

Input:
  object

Constrains/Conditions:
  A teacher needs your help grading her class of students.Given a report of all student grades,
  return both the class average and the average of each student.

  NOTE: Round any calculations to the nearest 2 decimal places.

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
autograde = (report) => {
  const o = {all: 0};
  let r = report.split('\n');
  const pow = Math.pow(10, 2);
  r = r.map(student => student.split(' '));
  r.forEach(student => {
    if (!o[student[0]]) {
      let name = student[0];
      student.splice(0, 1);
      let length = student.length;
      student = student.reduce((acc, cur) => {
        return acc += parseInt(cur);
      }, 0);
      student = student / length;
      o[name] = Math.round(student * pow) / pow;

    }
    
  });
  o.all = Object.values(o).reduce((acc, cur) => {
    return acc += cur;
  });
  o.all = o.all / r.length;
  o.all = Math.round(o.all * pow) / pow;
  return o;
};
// -End of Code-                                                   ===

// given tests:

const input = 'Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18';

console.log(autograde(input));