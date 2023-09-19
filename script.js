console.log("=================== BMI Updated==============================================================================================")

console.log("=================== Task No: 1 ========================")

let MarkMass=60;
let Markheight=1.828;
let JohnMass=55;
let JohnHeight=1.706;
let MarkBMI=MarkMass/(Markheight*Markheight);
let JohnBMI=JohnMass/(JohnHeight*JohnHeight);
console.log(`BMI of Mark = ${MarkBMI}`);
console.log(`BMI of John = ${JohnBMI}`);
if(MarkBMI>JohnBMI)
{
    console.log("Mark's BMI is higher than John's")
}
else{
    console.log("John's BMI is higer than Mark's.")
}

console.log("=================== Task No: 2 ========================")

if(MarkBMI>JohnBMI)
{
    console.log(`Mark's BMI ${MarkBMI} is higher than John's ${JohnBMI}`);
}
else{
    {
        console.log(`John's BMI ${JohnBMI} is higher than Mark's ${MarkBMI}`);
    }
}

console.log("=================== Qustion 2 ==============================================================================================")

console.log("=================== Task No: 1 ========================")

let age=18;
console.log("Age is "+age);
if(age>=18)
{
    console.log("Eligible for vote");
}
else{
    console.log("Not Eligible for vote");
}

console.log("=================== Task No: 2 ========================")

let char="C";
console.log(`Char is "${char}"`);
if(char==="A")
{
    console.log("Great Job!");
}
else if(char==="B")
{
    console.log("Better Job!");
}
else if(char==="C")
{
    console.log("Good Job!");
}
else if(char==="D")
{
    console.log("Bad Job!");
}
else if(char==="E")
{
    console.log("Worst JOb")
}


console.log("=================== Task No: 3 ========================")

let Age=3;
console.log(`Age is "${Age}"`);
if(Age>=0 && Age<=2)
{
    console.log("A Baby!");
}
else if(Age>=3 && Age<=5)
{
    console.log("A Toddler!");
}
else if(Age>=6 && Age<=12)
{
    console.log("A child!");
}
else if(Age>=13 && Age<=18)
{
    console.log("A Teenager!");
}
else if(Age>=19)
{
    console.log("An Adult!");
}

console.log("=================== Task No: 4 ========================")

let number=-1;
console.log(`The number is ${number}`);
if(number>0)
{
    console.log("The number is positive");

}
else if(number<0)
{
    console.log("The number is negative");
}
else{
    console.log("The number is Zero");
}






