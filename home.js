
document.getElementById('studentName').addEventListener('input', function() {
    const inputText = document.getElementById('result');
    // Limit the input to a maximum of 20 characters
    const maxLength = 10;
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
        inputText.textContent = "Name cannot exceed 10 characters.";
    }
});
document.getElementById('studentName').addEventListener('keydown',function(e){
    if((e.keyCode >=45 && e.keyCode <= 60 ) || (e.keyCode >= 90 && e.keyCode <= 150)){
        e.preventDefault()
        alert('please input text not number')
    }
})

const calculateAverage = ()=>{
    
    // Get the student name and scores from the input fields
const studentName = document.getElementById('studentName').value || "Student";
const science = parseFloat(document.querySelector('#science').value)
const maths = parseFloat(document.querySelector('#maths').value)
const english = parseFloat(document.querySelector('#english').value)
const biology = parseFloat(document.querySelector('#biology').value)
const displayResult = document.querySelector('#result')
const averageScore = (science + maths + english + biology) / 3;

    if(averageScore >= 90) {
        displayResult.textContent =`${studentName} You have an A grade. with the score of ${averageScore.toFixed(2)};`
    } else if(averageScore >= 80) {
        displayResult.textContent =` ${studentName} You have  B grade. with the score of ${averageScore.toFixed(2)}`
    } else if(averageScore >= 70) {
        displayResult.textContent = `${studentName} You have  C grade. with the score of ${ averageScore.toFixed(2)}`;
    } else if(averageScore >= 60) {
        displayResult.textContent = `${studentName} You have  D grade. with the score of ${averageScore.toFixed(2)}`;
    } else {
        displayResult.textContent = studentName + ` failed. with the score of ${averageScore.toFixed(2)} please work harder next time.`;
    }
    if(isNaN(science) || isNaN(maths) || isNaN(english) || isNaN(biology)) {
        displayResult.textContent = "Please enter valid numbers for all subjects.";
    }   
    
// Clear the input fields after calculation
    document.getElementById('studentName').value = ''
    document.getElementById('science').value = ''
    document.getElementById('maths').value = ''
    document.getElementById('english').value = ''
    document.getElementById('biology').value = ''

}

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }
    return   document.body.style.backgroundColor = color;
  
}
setInterval(() => {
    randomColor()
}, 20000);
    
