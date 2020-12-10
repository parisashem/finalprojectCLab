let forms = [
{ time: '10 seconds', question: 'Where will the character walk out of?',option1: "Supermarket", option2: "School" },
{ time: '10 seconds', question: 'How many people will talk in this scene?', option1: '2', option2: '3+' },
{ time: '10 seconds', question: 'What will Luke accuse Jess of? ', option1: 'Stealing money', option2: 'Stealing a car' },
{ time: '10 seconds', question: 'What happens at the end?', option1: 'Jess trips on a foot', option2: 'Any other result'  },
{ time: '10 seconds', question: 'Why did the perp get away?', option1: "Forgot to bring handcuffs", option2: "Any other reason" },
    { time: '10 seconds', question: 'How does Schmidt injure himself?', option1: 'Sprained pinky', option2: 'Scraped elbow' },
    { time: '10 seconds', question: 'What does Jenko say you have a right to?', option1: 'Be whatever you want', option2: 'Any other result' },
    { time: '10 seconds', question: 'How many times will the phrase “Miranda rights” be said?', option1: '2', option2: '4'  }
]

let tablebody = document.getElementById("tablebody");

forms.map((d, i) => {
    let row = document.createElement("tr");
    let rowID = document.createElement("th");
    let rowIDText = document.createTextNode(i + 1);
    rowID.append(rowIDText);
    let col1 = document.createElement("td");
    let col1Text = document.createTextNode(d.time);
    col1.append(col1Text);

    let col2 = document.createElement("td");
    let col2Text = document.createTextNode(d.question);
    // col2Text.setAttribute("id", "decisionText");
    col2.append(col2Text);

    let col3 = document.createElement("td");
    let col3Radio = document.createElement("input");
    col3Radio.setAttribute("type", "radio");
    col3Radio.setAttribute("id", "choice" + i);
    col3.append(col3Radio);
    let col3Option = document.createElement("label");
    col3Option.innerHTML = d.option1;
    // col3Option.setAttribute("id", "decisionText");
    col3.append(col3Option);
    
    // let col4 = document.createElement("td");
    let col4Area = document.createElement("div");
    let col4Radio = document.createElement("input");
    col4Radio.setAttribute("type", "radio");
    let count = i + 1;
    col4Radio.setAttribute("id", "choice" + count);
    col4Area.append(col4Radio);
    col3.append(col4Radio);
    // col4.setAttribute("type", "radio");
    // col4.setAttribute("id", i + "choice");
    let col4Option = document.createElement("label");
    col4Option.innerHTML = d.option2;
    col3.append(col4Option);

    row.append(rowID);
    row.append(col1);
    row.append(col2);
    row.append(col3);
    // row.append(col4);

    tablebody.append(row);
})




window.addEventListener('load', function () {
    let radioinput1 = document.getElementById("choice0");
    let radioinput2 = document.getElementById("choice1");
    radioinput1.addEventListener('change', startinputdisable);
    radioinput2.addEventListener('change', startinputdisable);

    let radiochosen = false;

    function startinputdisable(event) {
        console.log("chosen");
        if (radiochosen === false) {

            // disable selection
            setTimeout(() => {
                radioinput1.disabled = true;
                radioinput2.disabled = true;
            }, 5000); // 5 seconds
            radiochosen = true;

            // show answer
            setTimeout(() => {
                analyze(radioinput1, radioinput2);
            }, 10000); // 10 seconds. Change to longer when done testing
        }
    }

    let answers = [2, 1, 1, 2, 2, 2, 2, 1];
    function analyze(r1, r2) {
        let answer = answers[0];
        let firstChoiceResult = document.getElementById("first-choice-result");
        let secondChoiceResult = document.getElementById("second-choice-result");

        if (r1.checked) {
            firstChoiceResult.hidden = false;
            firstChoiceResult.innerHTML = (answer === "1") ? "<span>&#9989;</span>" : "<span>&#x274C;</span>";
        } else {
            secondChoiceResult.hidden = false;
            secondChoiceResult.innerHTML = (answer === "2") ? "<span>&#9989;</span>" : "<span>&#x274C;</span>";
        }
    }
    
});


var barChartData = {
    labels: [
      "First Question",
      "Second Question",
      "Third Question",
      "Fourth Question",
      "Fifth Question",
      "Sixth Question",
      "Seventh Question",
      "Eigth Question"
    ],
    datasets: [
      {
        label: "First Choice",
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 1,
        data: [3, 5, 6, 7,3, 5, 6, 7]
      },
      {
        label: "Second Choice",
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        data: [4, 7, 3, 6, 10,7,4,6]
      },
    ]
  };
  
  var chartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Results"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
  
  window.onload = function() {
    var ctx = document.getElementById("myChart").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: chartOptions
    });
  };




// let forms2 = [
//     { time: '10 seconds', question: 'Why did the perp get away?', option1: "Forgot to bring handcuffs", option2: "Any other reason" },
//     { time: '10 seconds', question: 'How does Schmidt injure himself?', option1: 'Sprained pinky', option2: 'Scraped elbow' },
//     { time: '10 seconds', question: 'What does Jenko say you have a right to?', option1: 'Be whatever you want', option2: 'Any other result' },
//     { time: '10 seconds', question: 'How many times will the phrase “Miranda rights” be said?', option1: '2', option2: '4'  }
//     ]


// window.addEventListener('load', function () {
//     let radioinput1 = document.getElementById("choice1");
//     let radioinput2 = document.getElementById("choice2");
//     let radioinput3 = document.getElementById("choice3");
//     let radioinput4 = document.getElementById("choice4");
//     let radioinput5 = document.getElementById("choice5");
//     let radioinput6 = document.getElementById("choice6");
//     let radioinput7 = document.getElementById("choice7");
//     let radioinput8 = document.getElementById("choice8");
//     let radioinput9 = document.getElementById("choice9");
//     let radioinput10 = document.getElementById("choice10");
//     radioinput1.addEventListener('change', startinputdisable);
//     radioinput2.addEventListener('change', startinputdisable);
//     radioinput3.addEventListener('change', startinputdisable);
//     radioinput4.addEventListener('change', startinputdisable);
//     radioinput5.addEventListener('change', startinputdisable);
//     radioinput6.addEventListener('change', startinputdisable);
//     radioinput7.addEventListener('change', startinputdisable);
//     radioinput8.addEventListener('change', startinputdisable);
//     radioinput9.addEventListener('change', startinputdisable);
//     radioinput10.addEventListener('change', startinputdisable);

//     let radiochosen = false;

//     function startinputdisable(event) {
//         console.log("chosen");
//         if (radiochosen === false) {

//             // disable selection
//             setTimeout(() => {
//                 radioinput1.disabled = true;
//                 radioinput2.disabled = true;
//                 radioinput3.disabled = true;
//                 radioinput4.disabled = true;
//                 radioinput5.disabled = true;
//                 radioinput6.disabled = true;
//                 radioinput7.disabled = true;
//                 radioinput8.disabled = true;
//                 radioinput9.disabled = true;
//                 radioinput10.disabled = true;
//             }, 10000); // 5 seconds
//             radiochosen = true;

//             // show answer
//             setTimeout(() => {
//                 analyze(radioinput1, radioinput2);
//             }, 10000); // 10 seconds. Change to longer when done testing
//         }
//     }

//     let finAnswers = [2, 1, 1, 2, 2, 2, 2, 1];
//     function analyze(r1, r2) {
//         let firstChoiceResult = document.getElementById("choice0");
//         let secChoiceResult = document.getElementById("choice1");
//         let thirdChoiceResult = document.getElementById("choice2");
//         let fourChoiceResult = document.getElementById("choice3");
//         let fiveChoiceResult = document.getElementById("choice4");
//         let sixChoiceResult = document.getElementById("choice5");
//         let sevenChoiceResult = document.getElementById("choice6");
//         let eightChoiceResult = document.getElementById("choice7");

//         // user picked first option
//         if (r1.checked) {
//             firstChoiceResult.hidden = false;
//             // first option, user is correct, else user is wrong
//             firstChoiceResult.innerHTML = (answer === "1") ? "<span>&#9989;</span>" : "<span>&#x274C;</span>";
//         }
//         // user picked second option 
//         else {
//             secondChoiceResult.hidden = false;
//             // first option, user is correct, else user is wrong
//             secondChoiceResult.innerHTML = (answer === "2") ? "<span>&#9989;</span>" : "<span>&#x274C;</span>";
//         }

//         // dev only
//         if (answer === "1") {
//             console.log(r1.checked ? "correct" : "incorrect");
//         } else {
//             console.log(r2.checked ? "correct" : "incorrect");
//         }
//     }
// )};