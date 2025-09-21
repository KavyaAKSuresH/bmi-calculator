function yourbmi() {
    
    const username = document.getElementById('username');
    const uname = document.getElementById('uname');
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const result = document.getElementById('result');
    const condition = document.getElementById('condition');
    const remedy= document.getElementById('remedy');
    const butn2= document.getElementById('butn2');
    console.log(weight);
    console.log(height);
    


    //  if (username.value === "" || weight === "" || height === "" || age === "") {
    //     alert("Please fill in all fields before submitting.");
    //     return; 
    // }


    bmi=weight/((height/100)**2)
    console.log(bmi);

  
    if (bmi < 18.5) {
        condition.textContent = "Underweight";
        remedy.textContent="When your body mass index is less than 18.5, it could indicate that you do not have enough body fat to sustain good health."
        butn2.innerHTML = `<button onclick="location.href='#weight-gain'">Weight Gain Tips</button>`;
      
    } else if (bmi < 25) {
        condition.textContent = "Healthy";
        remedy.textContent="Congratulations! You appear to have an optimal amount of body fat. Our bodies use fat to maintain healthy emotional, mental and physical processing."
       
    
      } else if (bmi < 30) {
        condition.textContent = "Overweight";
        remedy.textContent="When your body mass index number is 25 or higher, it may indicate that you have too much weight in relation to your height."
        butn2.innerHTML = `<button onclick="location.href='#weight-loss'">Weight Loss Tips</button>`;
       

    } else {
        condition.textContent = "Obese";
        remedy.textContent="Based upon your BMI score, you are possibly obese. You are at a much higher risk of developing chronic diseases and shortening your lifespan."
       butn2.innerHTML = `<button onclick="location.href='#weight-loss'">Weight Loss Tips</button>`;
       

    }
 

    
    
    


    uname.textContent = `Hi, ${username.value}`;
     document.getElementById('uname').style.color = 'white';
     document.getElementById('condition').style.color = 'white';
     document.getElementById('results').style.backgroundColor = 'black';
            


    result.textContent= `Your BMI is ${bmi}`
    image.innerHTML='<img src="./images/doctor.webp" width="150px" height="150px" alt="">'
   // Show BMI line and ticks after submit
document.getElementById("line").style.display = "flex";
document.querySelector(".ticks").style.display = "flex";

    updateBMIline(bmi);
}
function updateBMIline(bmi) {
  const line = document.getElementById("line");
  const point = document.getElementById("point");
  const width = line.offsetWidth;

  // Tick marks must match your displayed labels
  const ticks = [0, 18.5, 25, 30, 40];

  // Clamp BMI inside valid range
  const clamped = Math.max(0, Math.min(bmi, 40));

  let pos = 0;
  for (let i = 0; i < ticks.length - 1; i++) {
    if (clamped >= ticks[i] && clamped <= ticks[i + 1]) {
      const segmentStart = ticks[i];
      const segmentEnd = ticks[i + 1];

      const segmentWidth = width / (ticks.length - 1); // 4 equal visual segments
      const offset = (clamped - segmentStart) / (segmentEnd - segmentStart);

      pos = i * segmentWidth + offset * segmentWidth;
      break;
    }
  }

  point.style.left = pos + "px";
  point.textContent = clamped.toFixed(1);
}

