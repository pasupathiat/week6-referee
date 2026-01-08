function compare() {
    const priority = document.getElementById("priority").value;
    let output = "";

    if (priority === "cost") {
        output = `
        <h3>Recommended: IR Sensor</h3>
        <p><b>Pros:</b> Very low cost, easy to install.</p>
        <p><b>Cons:</b> Can give false counts, less accurate.</p>
        <p><b>Best for:</b> Small institutions with tight budgets.</p>
        `;
    } 
    else if (priority === "accuracy") {
        output = `
        <h3>Recommended: RFID System</h3>
        <p><b>Pros:</b> High accuracy, reliable attendance.</p>
        <p><b>Cons:</b> Requires students to tap cards.</p>
        <p><b>Best for:</b> Colleges needing precise attendance records.</p>
        `;
    } 
    else {
        output = `
        <h3>Recommended: Camera-Based System</h3>
        <p><b>Pros:</b> Fully automatic, no manual action required.</p>
        <p><b>Cons:</b> High cost, complex maintenance.</p>
        <p><b>Best for:</b> Large institutions with high automation needs.</p>
        `;
    }

    document.getElementById("result").innerHTML = output;
}
