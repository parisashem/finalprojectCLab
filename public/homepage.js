let forms = [{ time: "settings", question: "name-label", option1: "Name", option2: "string" },
{ time: 'age-settings', question: 'age-label', option1: 'Age', option2: 'number' },
{ time: 'age-settings', question: 'age-label', option1: 'Age', option2: 'number' },
{ time: 'age-settings', question: 'age-label', option1: 'Age', option2: 'number' },
{ time: 'age-settings', question: 'age-label', option1: 'Age', option2: 'number' },
{ time: 'age-settings', question: 'age-label', option1: 'Age', option2: 'number' },
{ time: 'age-settings', question: 'age-label', option1: 'Age', option2: 'number' },
{ time: 'age-settings', question: 'age-label', option1: 'Age', option2: 'number' },
{ time: 'age-settings', question: 'age-label', option1: 'Age', option2: 'number' },
{ time: 'age-settings', question: 'age-label', option1: 'Age', option2: 'number' }
]

let tablebody = document.getElementById("tablebody");

forms.map((d, i) => {
    let row = document.createElement("tr");
    let rowID = document.createElement("th");
    let rowIDText = document.createTextNode(i);
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


// console.log(array);

// let tablebody = document.getElementById("tablebody");

// tablebody.append(createElement(array[0]));
// tablebody.createElement(array[1]);
// tablebody.createElement(array[2]);
// tablebody.createElement(array[3]);

// row.innerHTML(array[4]);
// row.innerHTML(array[5]);
// row.innerHTML(array[6]);
// row.innerHTML(array[7]);
// row.innerHTML(array[8]);
// row.innerHTML(array[9]);