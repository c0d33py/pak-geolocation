// Event listener
document.querySelector('#zipForm').addEventListener('click', getGeoLocation);
document.querySelector('#output').addEventListener('click', deleteGeoLocation);


//get GeoLocation func

function getGeoLocation(){

    const zip = document.querySelector('.zip').value;

    fetch(`https://api.zippopotam.us/PK/54000`)
    .then(res => {
        if (res.status != 200) {
            showIcon("times");
            document.querySelector("#output").innerHTML = `
              <article class="message is-danger">
              <div class="message-body">Invalid Zipcode, please try again</div></article>
            `;
            throw Error(response.statusText);
        } else {
            showIcon("check");
            return res.json();
        }
    })
}

getGeoLocation()

function showIcon(icon){
    // clear icon
    document.querySelector('.fa-check').style.display = 'none';    
    document.querySelector('.fa-times').style.display = 'none';    
    // show correct icon
    document.querySelector(`.fa-${icon}`).style.display = 'inline-flex';    
}

function deleteGeoLocation(){

}
