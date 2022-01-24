const culculatePay = (yearSalary, bouns = {
  teamBouns: 0,
  employeeBonus: 0
}) => {
  return yearSalary + bouns.teamBouns + bouns.employeeBonus;
    }

console.log(culculatePay(2000, {teamBouns: 12, employeeBonus: 12}));
