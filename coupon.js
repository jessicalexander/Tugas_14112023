$(document).ready(function(){
    const gameid= $(".gameid")
    const code = $(".code")
    const button= $("button")

    button.click((e) => {
        if(gameid.val()===""){
            alert("Please insert a correct #game id")
        }
        else if(code.val()===""){
            alert("Please insert a coupon code!")
        }
        else if(code.val()!="WELCOMEGIFT"){
            alert("Please insert a code that works! \nMake sure the code is not expired")
        }
        else(alert("Code succesfully redeemed!\nRestart your game and check your in-game mail"))
    });
});
