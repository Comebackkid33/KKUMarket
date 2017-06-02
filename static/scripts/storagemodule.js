function setOption (ip,option) {
    var order = {
        ip: ip,
        date: new Date().toLocaleString(),
        option: option,
        weight: "",
        city:"",
        address: "",
        shipment: "",
        shipTime: "",
        sum: "",

    }
    localStorage.setItem (order.ip, JSON.stringify(order));
}

function getSum(ip){
    var order = JSON.parse(localStorage.getItem(ip));
    return order.sum
}

function setSum(ip,sum){
    var order = JSON.parse(localStorage.getItem(ip));
    order.sum = sum;
    localStorage.setItem (order.ip, JSON.stringify(order));
}

function setWeight (ip,weight,type) {
    var order = JSON.parse(localStorage.getItem(ip));
    order.option +=  " " +type;
    order.weight = weight;
    localStorage.setItem (order.ip, JSON.stringify(order));
}

function setAddress (ip,address,shipment,shipTime,sum,city) {
    var order = JSON.parse(localStorage.getItem(ip));
    order.address = address;
    order.shipment  = shipment;
    order.shipTime = shipTime;
    order.sum = sum;
    order.city = city;
    localStorage.setItem (order.ip, JSON.stringify(order));

    //send email
    $.post('/sayHello',JSON.parse(localStorage.getItem(IP)));
    //clean lS
    localStorage.removeItem(IP);

}

//notifying about user activity
/*window.onbeforeunload = function() {
    $.post('/sayHello',JSON.parse(localStorage.getItem(IP)));
    localStorage.removeItem(IP);
};*/
