button.addEventListener('click',(e)=>{  //点击button 发送Ajax 请求
  let request =new XMLHttpRequest()
  request.open('get','https://www.baidu.com/') //初始化request
  request.send()
  request.onreadystatechange = ()=>{
      if(request.readyState === 4){
          if(request.status >=200 && request.status<300 ){
              let string = request.responseText
              let object = window.JSON.parse(string)  
          }

      }
  }

})