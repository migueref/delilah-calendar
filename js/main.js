;(function(){
  let currentPosition = 0
  let actualMonth = "January"
  const imageCounter= 11
  function getMonth(){
    console.log(currentPosition)
    if(currentPosition==0)
      actualMonth = "January"
    if(currentPosition==1)
      actualMonth = "February"
    if(currentPosition==2)
      actualMonth = "March"
    if(currentPosition==3)
      actualMonth = "April"
    if(currentPosition==4)
      actualMonth = "May"
    if(currentPosition==5)
      actualMonth = "June"
    if(currentPosition==6)
      actualMonth = "July"
    if(currentPosition==7)
      actualMonth = "August"
    if(currentPosition==8)
      actualMonth = "September"
    if(currentPosition==9)
      actualMonth = "October"
    if(currentPosition==10)
      actualMonth = "November"
    if(currentPosition==11)
      actualMonth = "December"

  }
    $(".next").on("click",function(){
      if(currentPosition<imageCounter)
        currentPosition++

      else
        currentPosition = 0
        getMonth()
        $("#gallery .inner").css({
          left: "-"+currentPosition*100+"%"
        })
        document.getElementById("actual-month").innerHTML = actualMonth;

    })
    $(".back").on("click",function(){
      if(currentPosition>0)
        currentPosition--
      else
        currentPosition = 0
        getMonth()
        $("#gallery .inner").css({
          left: "-"+currentPosition*100+"%"
        })
        document.getElementById("actual-month").innerHTML = actualMonth;

    })
})()
