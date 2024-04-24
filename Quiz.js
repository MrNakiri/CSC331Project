document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      // Retrieve user answers
      const q1Answer = document.querySelector('input[name="q1"]:checked');
      const q2Answer = document.getElementById('q2').value.trim().toLowerCase();
      const q3Answer = document.querySelector('input[name="q3"]:checked');
      const q4Answer = document.querySelector('input[name="q4"]:checked');
      const q5Answer = document.getElementById('q5').value.trim().toLowerCase();


  
      // Calculate score
      let score = 0;
      if (q1Answer && q1Answer.value === 'paris') {
        score += 1;
      }
      if (q2Answer === '7' || q2Answer === 'seven') {
        score += 1;
      }
      if (q3Answer && q3Answer.value === 'George Washington') {
        score += 1;
      }
      if (q4Answer && q4Answer.value === 'Heat') {
        score += 1;
      }
      if (q5Answer === 'Alexander Fleming' || q5Answer === 'Fleming') {
        score += 1;
      }



      
      


  
      // Display result
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `<h2>Your score is: ${score}/5</h2>`;
    });
  });
  
