import React from 'react'

 export const User=()=>{

     const users = [{
         name: 'Vadim',
         age: 22,
         address: {
             city: 'Kopyl',
             numberHouse: 25,
         }
     },
         {
             name: 'Piter',
             address: {
                 city: 'Kopyl',
                 numberHouse: 252,
             }
         },{
             name: 'Piter',
             address: {
                 city: 'Kopyl',
                 numberHouse: 252,
             }
         },{
             name: 'Piter',
             address: {
                 city: 'Kopyl',
                 numberHouse: 252,
             }
         }];

     const [
         { name:name1, age: age1, address: {city: city1, numberHouse: numberHouse1}},
         {name:name2, age: age2 = 200, address: {city: city2, numberHouse: numberHouse2}}, ...tail] = users;

     // const user ={
     //         name: 'Vadim',
     //         age: 22,
     //         address: {
     //             city: 'Kopyl',
     //             numberHouse: 25,
     //         }
     //     }
     //
     //     const {name,age, address:{city='Slytsk', numberHouse=25}}= user
     console.log(tail);
    return(
        <div>{age2}</div>
    )
 }