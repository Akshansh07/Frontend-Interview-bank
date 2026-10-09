// Give me real-word use case for closure ?

// search input debouncing 

function debounce(callback, delay){
    let timeId;

    return function(...args){
        clearTimeout(timeId);

        timerId = setTimeout (() => {
            callback(...args);
        },delay);
    };
}

const search = debounce((args) => {
    console.log('searching API for: ', query);
}, 500);

search('j');
search('ja');
search('java');
search('javascript');

// ecommerce 
// bank account  =  store users balance but prevent other code from directlly change it 