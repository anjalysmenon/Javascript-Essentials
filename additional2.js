function display(buses) {
    totalData = "";
    buses.forEach(function(bus, index) {
        let currentrow = `<tr>
        <td>${index+1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.number}</td>
        <td>${bus.capacity}</td>
        </tr>`;
        totalData += currentrow;
    });
    document.getElementsByTagName('tbody')[0].innerHTML = totalData;
}


let buses = [];
window.onload = function() {
    let storedbuses = localStorage.getItem("buses");
    if (storedbuses != null) {
        buses = JSON.parse(storedbuses);
        display(buses);
    }
}


function addbus(e) {
    e.preventDefault();
    console.log(buses);
    let newname = document.getElementById('name').value;
    let newsource = document.getElementById('source').value;
    let newdestination = document.getElementById('destination').value;
    let newnumber = document.getElementById('number').value;
    let newcapacity = document.getElementById('capacity').value;
    buses.push({
        name: newname,
        source: newsource,
        destination: newdestination,
        number: newnumber,
        capacity: newcapacity
    });
    console.log(buses);
    localStorage.setItem("buses", JSON.stringify(buses));
    display(buses);




    document.getElementById('name').value = "";
    document.getElementById('source').value = "";
    document.getElementById('destination').value = "";
    document.getElementById('number').value = "";
    document.getElementById('capacity').value = "";
}




function searchbySource() {
    let name = document.getElementById("searchsource").value;
    let newbuses = buses.filter(function(bus) {
        return (bus.source.toUpperCase().indexOf(name.toUpperCase()) != -1);
    });
    display(newbuses);
}

function searchbyDestination() {
    let name = document.getElementById("searchdestination").value;
    let newbuses = buses.filter(function(bus) {
        return (bus.destination.toUpperCase().indexOf(name.toUpperCase()) != -1);
    });
    display(newbuses);
}