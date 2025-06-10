// const { createElement } = require("react")

// const email = document.querySelector('#email')
// const password = document.querySelector('#password')
// const form = document.querySelector('form')

// const users = []
// const onHandleSubmit = (event) => {
//     event.preventDefault()
//     const user = {
//         email:email.value,
//         password:password.value
//     }
//     users.push(user) 
//     localStorage.setItem('users', JSON.stringify(users))
//     const display = document.createElement('div')
//     document.body.appendChild(display)
//     display.innerHTML = `<h2>User Details</h2>
//     <p>Email: ${user.email}</p>
//     <p>Password: ${user.password}</p>`
    
                         
// }
// form.addEventListener('submit', onHandleSubmit)
//  const hexa = ()=> {
//     const str = '0123456789abcdef'
//     let hex = ''
//     for (let i = 0; i < 6; i++) {
//         hex += str[Math.floor(Math.random() * str.length)]
//     }   
//     return hex
//  }
// console.log(hexa());



    
  
    
  const calculateAverage = () => {

    const math = parseFloat(document.getElementById("math").value )
    const english = parseFloat(document.getElementById("english").value);
    const science = parseFloat(document.getElementById("science").value);
    const displayScores = document.getElementById("result");
    const usersDetails = []
    // const addUser = (event) => {
    //     event.preventDefault()
    //     const newUser = {
    //         name: document.getElementById("studentName").value,
    //         math: math,
    //         english: english,
    //         science: science,
    //         displayScores: displayScores
    //     };
    //     usersDetails.push(newUser);
    //     console.log(usersDetails);
    //   }
    //   addUser();
    if (isNaN(math) || isNaN(english) || isNaN(science)) {
        setTimeout(() => {
            document.getElementById("result").innerText = "";
        }, 3000);
        document.getElementById("result").innerText = "Please enter valid numbers for all scores";
        return ;
    }
    math
    const average = (math + english + science) / 3;
    if (average < 0 || average > 100) {
        setTimeout(() => {
            document.getElementById("result").innerText = "pass";
        }, 3000);
        document.getElementById("result").innerText = "Scores must be between 0 and 100";
        return ;
    }
    // const studentName = document.getElementById("studentName").value || "Student";
    // document.getElementById("result").innerText =`${studentName}'s average score is: ${average.toFixed(2)}`;
    // console.log(document.getElementById("result").innerText =`${studentName}'s average score is: ${average.toFixed(2)}`);
    
    // Resetting the input fields to empty strings  
    document.getElementById("math").value = "";
    document.getElementById("english").value = "";
    document.getElementById("science").value = "";
    document.getElementById("studentName").value = "";
  }


  // const 