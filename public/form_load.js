const baseUrl = `http://localhost:8000`;

window.onload = async function() {
    try {
        let params = await (await fetch(`${baseUrl}/getParam`)).json();

        for (let i in params) {
            // let a = Object.values(params[is]);
            let a = params[i]
            let sourceOption = document.createElement("option");
            let destinationOptions = document.createElement("option");
            sourceOption.value = a;
            sourceOption.text = a;

            destinationOptions.value = a;
            destinationOptions.text = a;

            document.getElementById("sourceTime").add(sourceOption);
            document.getElementById("destinationTime").add(destinationOptions);
            // console.log(a);

            // console.log(params[is]);
        }
    } catch (e) {
        console.log(e);
    }
};



function convertTime() {
    document.getElementById("hello").innerHTML = " "
    let time = document.getElementById("time").value;
    let inputTimeZone = document.getElementById("sourceTime").value;
    let outputTimeZone = document.getElementById("destinationTime").value;

    let mainData = {
        time,
        inputTimeZone,
        outputTimeZone
    }
    fetch("http://localhost:8000/timeConvert", {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(mainData),

    }).then(async(data) => {
        let timeData = await data.json();
        // console.log(timeData.msg);

        let str = "";

        if (timeData.msg == "null") {
            console.log("hello")
            str += `<p><b>${timeData.sourceTimeZone} :- ${timeData.sourceTime}</b></p>`;
            str += `<p><b>${timeData.destinationTimeZone} :- ${timeData.destinationTime}</b></p>`
        } else {
            str += `<p><b>${timeData.msg}</b></p>`;
        }

        // document.getElementById("keyBody").innerHTML = str;
        document.getElementById("hello").insertAdjacentHTML("afterbegin", `<div class="time" style="padding-top: 20px;">
        <div class="card">
            <div class="card-body" id="keyBody">
                ${str}
            </div>
        </div>
        </div>`);



    }).catch((error) => console.log("FETCH ERROR:", error.message));
}