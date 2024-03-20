const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function getInput() {
    //prompts the user to enter their salary
    rl.question("Please your income: ", function(income) {
        const r2= parseFloat(income);
        console.log(`Gross income is: ${r2}`);

        // PAYEEE
        function paye(){
            //if statement to determine amount of PAYE oweable
            if (r2 > 500000 && r2 <=100000000) {
                let myIncome= r2*0.35;
                console.log(myIncome);
                return                
            } 
            else if(r2>=250000 && r2 < 500000){
                       let myIncome= r2*0.30;
                        return myIncome
                    }
                    else if(r2>=100000 && r2<250000){
                              let myIncome = r2*0.25;
                               return myIncome
                           }
                           else if(r2>=50000 && r2<100000){
                                  let myIncome = r2*0.20;
                                  return myIncome
                              }
                              else if (r2>=30000 && r2<50000){
                                      let myIncome = r2*0.15;
                                       return myIncome
                                  }

            else {
                console.log('invalid');
            }
        }
        const Tax = paye()
        console.log(`My tax is : ${Tax}`);

        // nhif
        function nhif(){
            //if statement to determine amount of NHIF contribution deducted
            if (r2 > 500000 && r2 <=100000000) {
                let myContribution= r2*0.25;
                console.log(myContribution);
                return                
            } 
            else if(r2>=250000 && r2 < 500000){
                       let myContribution= r2*0.20;
                        return myContribution
                    }
                    else if(r2>=100000 && r2<250000){
                              let myContribution = r2*0.15;
                               return myContribution
                           }
                           else if(r2>=50000 && r2<100000){
                                  let myContribution = r2*0.10;
                                  return myContribution
                              }
                              else if (r2>=30000 && r2<50000){
                                      let myContribution = r2*0.05;
                                       return myContribution
                                  }

            else {
                console.log('invalid');
            }
        }
        const NHIF = nhif()
        console.log(`My NHIF deduction  is : ${NHIF}`);


        //nssf
        //calculates NSSF payable
        function nssf(){
            let myDeduction= r2*0.06
            return myDeduction;
        
        }
        const NSSF = nssf()
        console.log(`My NSSF deduction is : ${NSSF}`);

        //housing levy
        //calculates how much housing levy will cost the user
        function levy(){
            let housing= r2*0.015
            return housing;
        }
        const LEVY = levy()
        console.log(`My housing levy deduction is : ${LEVY}`);

        //net salary
        function salary(){
            //we calculate the net salary after deducting all the taxes,contributions and levies
        let netSalary= r2-(Tax+NHIF+NSSF+LEVY);
        return netSalary;
        }
        const SALARY= salary();
        console.log(`Net Salary is : ${SALARY}`);
// the program closes 
         rl.close()
        } 
        )
    }
getInput();

 