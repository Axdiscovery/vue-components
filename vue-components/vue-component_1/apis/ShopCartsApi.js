import {SCURL} from "../constants/ShopCartsConst";

module.exports={
    getShopCartsList:function (cb) {
        fetch(SCURL).then((data)=>{
            data.json().then((data)=>{
                cb(data)
            })
        })

    }
};