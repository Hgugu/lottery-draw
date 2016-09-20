/**
 * Created by babby on 2016/9/13.
 */
window.onload=function(){
///////////////////////////////////////
    var inputNode=$("input");
    var tableNode=$(".table");
    var alertVal;
    var bool=false;
    console.log(inputNode.tap);
    inputNode.tap(function goAround(){
        console.log(bool);
        if(bool){
            return alert("每人只有抽奖一次！\n您的奖品是“"+alertVal+"”。");
        }
        $.ajax({
            type:"get",
            url:"index.html",
            success:function(deg){
                var oodsNum=Math.floor(Math.random()*8+1);//随机从1-8抓取
                console.log(oodsNum);
                if(oodsNum==1){
                    alertVal="再接再励";
                    deg=1080;//360
                }
                else if(oodsNum==2){
                    deg=1030;//310
                    alertVal="50元";
                }
                else if(oodsNum==3){
                    deg=940;//220
                    alertVal="10元";
                }
                else if(oodsNum==4){
                    deg=760;//40
                    alertVal="集分宝";
                }
                else if(oodsNum==5){
                    deg=800;//80
                    alertVal="精美礼品";
                }
                else if(oodsNum==6){
                    deg=990;//270
                    alertVal="祝你好运";
                }
                else if(oodsNum==7){
                    deg=850;//130
                    alertVal="集分宝";
                }
                else if(oodsNum==8){
                    deg=895;//175
                    alertVal="再来一次";
                }
                tableNode.css({"transition":"all 5s","-webkit-transition":"all 5s","transform":"rotate("+deg+"deg)","-webkit-transform":"rotate("+deg+"deg)"});
                if(window.localStorage){//本地储存
                    localStorage.alertVal=alertVal;
                }
                console.log(localStorage.alertVal);
                bool=true;
            },
            error:function(){
                alert("服务忙，请稍后重试");
            }
        });
    });
};
