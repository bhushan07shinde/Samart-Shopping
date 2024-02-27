
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


//Buttons
    
const add = document.getElementById("add");
const upgrade = document.getElementById("update");
// const remove = document.getElementById("remove");

console.log("REd")
// console.log(Redmi10A);
const database = getDatabase();
add.addEventListener('click',(e) =>{

    const UserName = document.getElementById("UserName").value;
    const MobileNo = document.getElementById("MobileNo").value;
    const Redmi10A = document.getElementById("Redmi10A").value;
    const RedmiN11T = document.getElementById("RedmiN11T").value;
    const RedmiN12 = document.getElementById("RedmiN12").value;
    const RedmiA1 = document.getElementById("RedmiA1").value;
    const Redmi9A = document.getElementById("Redmi9A").value;
    
    // Samsung
    const SamsungM13 = document.getElementById("SamsungM13").value;
    const SamsungM32 = document.getElementById("SamsungM32").value;
    const SamsungM53 = document.getElementById("SamsungM53").value;
    const SamsungS21 = document.getElementById("SamsungS21").value;
    const SamsungA23 = document.getElementById("SamsungA23").value;
    
    //OnePlus
    const OnePlusNord = document.getElementById("OnePlusNord").value;
    const OnePlus2T = document.getElementById("OnePlus2T").value;
    const OnePlus10R = document.getElementById("OnePlus10R").value;
    const OnePlus10T = document.getElementById("OnePlus10T").value;
    
    //Iphone
    const Iphone13 = document.getElementById("Iphone13").value;
    const Iphone12 = document.getElementById("Iphone12").value;
    const Iphone14pr = document.getElementById("Iphone14pr").value;
    const Iphone13M = document.getElementById("Iphone13M").value;
    
    //Watches
    const Bolt = document.getElementById("Bolt").value;
    const SamsungW = document.getElementById("SamsungW").value;
    const RealmePr = document.getElementById("RealmePr").value;
    const RealmeS = document.getElementById("RealmeS").value;
    const Amazefit = document.getElementById("Amazefit").value;
    
    // //Shoes
    const NikeNN = document.getElementById("NikeNN").value;
    const PumaNxt = document.getElementById("PumaNxt").value;
    const AdidasCri = document.getElementById("AdidasCri").value;
    const NiviaAir = document.getElementById("NiviaAir").value;
    
    
    
    
    e.preventDefault();
    writeUserData(UserName,MobileNo, Redmi10A, RedmiN11T
        ,RedmiN12,RedmiA1, Redmi9A,SamsungM32,
        SamsungM13,SamsungM53,SamsungS21,SamsungA23,OnePlusNord,OnePlus2T,OnePlus10R,
        OnePlus10T,Iphone13,Iphone12,Iphone14pr,Iphone13M,Bolt,SamsungW,RealmePr,
        RealmeS,Amazefit,NikeNN,PumaNxt,AdidasCri,NiviaAir);
    console.log(UserName)
    console.log(Redmi10A)

   
});

function writeUserData(UserName,MobileNo,Redmi10A,RedmiN11T
    ,RedmiN12,RedmiA1, Redmi9A,SamsungM32,
    SamsungM13,SamsungM53,SamsungS21,SamsungA23,OnePlusNord,OnePlus2T,OnePlus10R,
        OnePlus10T,Iphone13,Iphone12,Iphone14pr,Iphone13M,Bolt,SamsungW,RealmePr,
        RealmeS,Amazefit,NikeNN,PumaNxt,AdidasCri,NiviaAir)
{



    const db = getDatabase();
    set(ref(db, 'users/' + UserName),{
                UserName:UserName,
                MobileNo:MobileNo,
                Redmi_10_A: Redmi10A,
                Redmi_Note_11T_5G: RedmiN11T,
                Redmi_Note_12_5G: RedmiN12,
                Redmi_A1: RedmiA1,
                Redmi_9A_Sport: Redmi9A,
                Samsung_Galaxy_M32_5G: SamsungM32,
                Samsung_Galaxy_M13_5G: SamsungM13,
                Samsung_Galaxy_M53_5G: SamsungM53,
                Samsung_Galaxy_S21_5G: SamsungS21,
                Samsung_Galaxy_A23: SamsungA23,
                
                Oneplus_Nord_Ce_2_Lite_5G: OnePlusNord,
                Oneplus_Nord_2T_5G: OnePlus2T,
                Oneplus_10R_5G: OnePlus10R,
                Oneplus_10T_5G: OnePlus10T,
                
                Iphone_13: Iphone13,
                Iphone_12: Iphone12,
                Iphone_14_Pro_Max: Iphone14pr,
                Iphone_13_Mini: Iphone13M,
        
        
                Fire_bolt_Ninja_Calling_Pro: Bolt,
                Samsung_Galaxy_Watch_4_Classic: SamsungW,
                Realme_Smart_Watch_2_Pro: RealmePr,
                Realme_Smart_Watch_S_1_3: RealmeS,
                Amazefit_Bip_3_Pro: Amazefit,
        
                NK_REVOLUTION: NikeNN,
                Softride_Enzo_NXT: PumaNxt,
                Cricup_21_Cricket_Shoes: AdidasCri,
                AIR_STRIKE_Football_Shoes: NiviaAir

                
    });


  }

