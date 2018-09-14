window.jQuery =function(nodeOrSelector){
    let node = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}
window.$ =window.jQuery

window.jQuery.ajax = function(url,method,body,success,fail){
    let request =new XMLHttpRequest()
    request.open(method,url)    //初始化request    
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status<300 ){
               success.call(undefined,request.responseText)
               fail.call(undefined,request)
            }
  
        }
    }
    request.send(body)
}
function f1(responseText){}
function f2(responseText){}

button.addEventListener('click',(e)=>{  
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    success:(x)=>{
        f1.call(undefined,x)
        f2.call(undefined,x)
    },
    fail:(x) =>{
        console.log(x)
        console.log(x.status)
        console.log(x.responseText)
    }
  })
 

})