///-Using Jquery for event Handling---//
$(document).ready(function(){
    $('#click,#click2,#click3').click(function(){
        $('#show').fadeToggle();
    });

    

});
//--- Input from user for pick/drop location--////
let pick_drop_location = () => {
    var pick = document.getElementById('pick').value;
    var drop = document.getElementById('drop').value;
    var cars = ['alto','Corolla','civic','BMW','Reborn','mira','City','Move','Dolphin'];
    var driver = [' Captain Mohsin','Captain Hasan','Captain Rizwan','Captain Hussian','Captain Abbas','Captain Ali'];
    var drive_random = Math.floor(Math.random()*driver.length);
    var random = Math.floor(Math.random()*cars.length);
    if(pick === '' || drop === ''){
        alert('Invalid')
    }
    else{
        
    console.log('Your PickUp Location is ' + pick);
    console.log('Your DropOf Location is ' + drop);
    console.log('Your Captain : ' +driver[random] + ' is Coming');
    console.log('Your car is :'+cars[random]);
         
}

}
//---Function of Submit button ---///
let sub = () => {
    var fname = document.getElementById('fname').value;
    var mail = document.getElementById('mail').value;

if(fname === ' ' || mail === ''){
    alert('Kindly Type your name and other info');
}
else {
    console.log('Your name is :',fname);
    console.log('Your email is :',mail);
    alert('Now click on car option for location');

}

}
