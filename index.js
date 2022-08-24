var params = (new URL(document.location)).searchParams;
var key = params.get('key');

let daytime2 = document.getElementById("textArea").value.trim();

$(function () {
    // 送信
    $('form').submit(function () {
        
        var num1 = $('select[name="qty1"]').val();
        var breed1 = $('input[name="breed1"]').val();      
        
        var num2 = $('select[name="qty2"]').val();
        var breed2 = $('input[name="breed2"]').val();
        
        var num3 = $('select[name="qty3"]').val();
        var breed3 = $('input[name="breed3"]').val();
        
        var num4 = $('select[name="qty4"]').val();
        var breed4 = $('input[name="breed4"]').val();        
        
        var num5 = $('select[name="qty5"]').val();
        var breed5 = $('input[name="breed5"]').val();
        
        var num6 = $('select[name="qty6"]').val();
        var breed6 = $('input[name="breed6"]').val();   
        
        var daytime = $('input[name="daytime"]').val();
        


        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});

    
        
        
    let msg={};
        
        var [price1,price2,price3,price4,price5,price6] = [200,200,400,600,800,1000];    //　メダカの値段 spread sheet medakaの値と一致させてください
        
        var kk = [[breed1,num1,price1],
              [breed2,num2,price2],
              [breed3,num3,price3],
              [breed4,num4,price4],
              [breed5,num5,price5],
              [breed6,num6,price6]];
        
      
 msg =["【注文内容】" + "\n"+ "============================="+ "\n"]


let ppn=[]

for(var i=0;i<kk.length;i++){
           if(kk[i][1] >= 1) {
               
  msg =msg + ["種類："+ kk[i][0] + "\n数量：" + kk[i][1] + "\n価格：" + kk[i][2] + " 円"　] + "\n"+ "============================="+ "\n"  
           }else{
    }
  }  
       let sum_char = Number(num1*price1)+Number(num2*price2)+Number(num3*price3)+Number(num4*price4)+Number(num5*price5)+Number(num6*price6);
       
      msg = msg + ["代金合計：" + sum_char + "円"　]  + "\n"+ "============================="+ "\n"
       msg = msg + ["受取日：" + daytime2] ;

        
        
        sendText(String(msg)); 
      
        return false;
        
    });
});





