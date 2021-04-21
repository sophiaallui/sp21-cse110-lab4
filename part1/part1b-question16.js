let statistics = {
    redCars:21, 
    blueCars:45, 
    greenCars:12, 
    raceCars:5, 
    blackCars:40, 
    rareCars:2
}; 

// print out the values if they start with r or is the value is odd 

for(const cars in statistics){
    if((statistics[cars]%2!=0)|| cars.startsWith("r")){
        console.log(statistics[cars]);
    }
}

