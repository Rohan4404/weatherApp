const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer')
const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityname.value;
     if(cityVal==""){
         city_name.innerText =`please write the name before search`;
         datahide.classList.add('data_hide');
        }
   else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=6fecd0f167f3088b4a1ac857c84c5c24`;
    const response = await fetch(url);
    const data = await response.json();
    const arrData = [data];
    
    city_name.innerText = ` ${arrData[0].name}, ${arrData[0].sys.country} `;
    // temp_real_val.innerText=arrData[0].main.temp;
     let Temp_k=arrData[0].main.temp;
     let Temp_c = Temp_k-273.15;
     temp_real_val.innerText=Temp_c.toFixed(2);
    // temp_status.innerText=arrData[0].weather[0].main;
   const tempStatus= arrData[0].weather[0].main;


    if(tempStatus=="clear"){
        weathercon.innerHTML="<i class='fa-solid fa-sun' style='color: yellow;'>"
    }
    if(tempStatus=="Sunny"){
        weathercon.innerHTML="<i class='fa-solid fa-sun' style='color: yellow;'>"
    } 
    else if (tempStatus=="Clouds"){
        weathercon.innerHTML="<i class='fa-solid fa-cloud' style='color: #fcfdff;'>"
    }
    else if (tempStatus=="Rainy"){
        weathercon.innerHTML="<i class='fa-solid fa-cloud-rain' style='color: #a4b0be;'>"
    }
    else{
        weathercon.innerHTML="<i class='fa-solid fa-sun' style='color: yellow;'>"
    }
    datahide.classList.remove('data_hide');

    }
    catch{
        datahide.classList.add('data_hide');
        // city_name.innerText =`please Enter City name properly`;   
    }
}

}
submitbtn.addEventListener('click',getInfo);

const getCurrentDay=() => {
    var weekday = new Array(7);
    weekday[0]="Sun";
    weekday[1]="Mon";
    weekday[2]="Tue";
    weekday[3]="Wed";
    weekday[4]="Thu";  
    weekday[5]="Fri";
    weekday[6]="Sat";
     let currentTime = new Date();
     let days = document.getElementById('day');
    let day= weekday[currentTime.getDay()];
    
    // console.log(day)
    days.innerText=day;
};
getCurrentDay();

const getCurrentMonth=() => {
    var Month = new Array(12);
    Month[0]="Jan";
    Month[1]="Feb";
    Month[2]="Mar";
    Month[3]="Apr";
    Month[4]="May";  
    Month[5]="Jun";
    Month[6]="Jul";
    Month[7]="Aug";
    Month[8]="Sep";
    Month[9]="Oct";
    Month[10]="Nov";
    Month[11]="Dec";
    
    let currentTime = new Date();
    let today_date = document.getElementById('today_date');
    let dates = currentTime.getDate();
    let Months = Month[currentTime.getMonth()];
    today_date.innerText= dates+" "+Months;
}

getCurrentMonth();