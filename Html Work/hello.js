
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getDatabase, ref, set ,get, child, push, update }from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAQdUpewhTyma80fWMHJPFBYU7LpqYZQo",
    authDomain: "smart-shop-admin-4d035.firebaseapp.com",
    databaseURL: "https://smart-shop-admin-4d035-default-rtdb.firebaseio.com",
    projectId: "smart-shop-admin-4d035",
    storageBucket: "smart-shop-admin-4d035.appspot.com",
    messagingSenderId: "1055758116333",
    appId: "1:1055758116333:web:18ff166d5c9329e1a9b3e4",
    measurementId: "G-L5SN7S6D4K"
  };

 // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);












const userId = "Bhushan Shinde"
var keys;
var value;
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/`)).then((snapshot) => {
    if (snapshot.exists()) {
        var dataFor = snapshot.val();
       
        

          
        const valuesArr = Object.values(Object.values(dataFor)[0]);
        const keysArr = Object.keys(Object.values(dataFor)[0]);

       
        console.log(valuesArr)
        //Bhushan Shop
        let ch = 1;
        
        let prod = "productNm1"
        let price = "price1"
        for(let i=0;i<keysArr.length;i++)
        {
            
            if(keysArr[i]=="UserName")
            {
                document.getElementById("SHNM1").innerHTML=valuesArr[i];
            }
           else if(keysArr[i]=="MobileNo")
            {
               
                document.getElementById("Contact1").innerHTML=valuesArr[i];
            }
            else
            {
                document.getElementById(prod.concat(ch.toString())).innerHTML=keysArr[i];
                document.getElementById(price.concat(ch.toString())).innerHTML="Rs : ".concat(valuesArr[i]);
                console.log(keysArr[i])
                console.log(valuesArr[i])
                Math.floor(ch)
            
            
                ch++;
            }
            
            // document.getElementById("price3").innerHTML=valuesArr[i];
        }
        // document.getElementById("productNm3").innerHTML=keysArr[0];
        
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });




// ------------------------------------------------------------------------------------

// const userId2 = "Bhushan Shinde"
var keys2;
var value2;
  const dbRef2 = ref(getDatabase());
  get(child(dbRef2, `users/`)).then((snapshot) => {
    if (snapshot.exists()) {
        var dataFor = snapshot.val();
       
        

          
        const valuesArr = Object.values(Object.values(dataFor)[1]);
        const keysArr = Object.keys(Object.values(dataFor)[1]);

       
        console.log(valuesArr)
        //Bhushan Shop
        let ch = 1;
        
        let prod = "productNm2"
        let price = "price2"
        for(let i=0;i<keysArr.length;i++)
        {
            
            if(keysArr[i]=="UserName")
            {
                document.getElementById("SHNM2").innerHTML=valuesArr[i];
            }
           else if(keysArr[i]=="MobileNo")
            {
               
                document.getElementById("Contact2").innerHTML=valuesArr[i];
            }
            else
            {
                document.getElementById(prod.concat(ch.toString())).innerHTML=keysArr[i];
                document.getElementById(price.concat(ch.toString())).innerHTML="Rs : ".concat(valuesArr[i]);
                console.log(keysArr[i])
                console.log(valuesArr[i])
                Math.floor(ch)
            
            
                ch++;
            }
            
            // document.getElementById("price3").innerHTML=valuesArr[i];
        }
        // document.getElementById("productNm3").innerHTML=keysArr[0];
        
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });













// -----------------------------------------------------------------------------


var keys2;
var value2;
  const dbRef3 = ref(getDatabase());
  get(child(dbRef3, `users/`)).then((snapshot) => {
    if (snapshot.exists()) {
        var dataFor = snapshot.val();
       
        

          
        const valuesArr = Object.values(Object.values(dataFor)[2]);
        const keysArr = Object.keys(Object.values(dataFor)[2]);

       
        console.log(valuesArr)
        //Bhushan Shop
        let ch = 1;
        
        let prod = "productNm3"
        let price = "price3"
        for(let i=0;i<keysArr.length;i++)
        {
            
            if(keysArr[i]=="UserName")
            {
                document.getElementById("SHNM3").innerHTML=valuesArr[i];
            }
           else if(keysArr[i]=="MobileNo")
            {
               
                document.getElementById("Contact3").innerHTML=valuesArr[i];
            }
            else
            {
                document.getElementById(prod.concat(ch.toString())).innerHTML=keysArr[i];
                document.getElementById(price.concat(ch.toString())).innerHTML="Rs : ".concat(valuesArr[i]);
                console.log(keysArr[i])
                console.log(valuesArr[i])
                Math.floor(ch)
            
            
                ch++;
            }
            
            // document.getElementById("price3").innerHTML=valuesArr[i];
        }
        // document.getElementById("productNm3").innerHTML=keysArr[0];
        
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });




  


