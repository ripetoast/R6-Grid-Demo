let outputArr = [];
let output = "<h2>Attackers</h2>";
fetch("../json/data.json")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    let attackers = Object.keys(data.attackers);
    console.log(attackers);
    for (let i = 0; i < attackers.length; i++){
        // console.log(data.attackers[attackers[i]]);
        $('#operators').append(
                 `<div class="col-lg-2 col-md-3 col-sm-4 col-6 m-1 op">
                    <div id="${attackers[i]}" class="imgdiv"></div >
                    <div class="d-flex flex-column justify-content-end box">
                        <p class="opname">${attackers[i]}</p>
                    </div>
                  </div >`
        );
        let myElement = document.querySelector(`#${attackers[i]}`);
        myElement.style.backgroundImage = `url(${data.attackers[attackers[i]].imgURL})`;
        console.log(myElement.style);
        //console.log(data.attackers[attackers[i]].imgURL);
    }
});


// $('#operators').append(output);

