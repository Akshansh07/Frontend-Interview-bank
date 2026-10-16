// How would you cancle a fetch request?

/*  You can cancle fetch() request using AbortController and its abort() method.

AbortController lets you signal that an ongoing request should be cancelled. You pass its signal to fetch() and call controller.abort()
When you want to stop waiting for the request.

*/

const controller = new AbortController();

fetch("---" , {
    signal: controller.signal
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => {
    if(error.name === "AbortError"){
        cosole.log("Request cancell");
    }else {
        cosole.log("Request", error);
    }
});

controller.abort();