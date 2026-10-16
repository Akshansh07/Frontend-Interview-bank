// How do you handle error with async/await?

/* I handle errorin async/await using try...catch...finally. I put await asynchronous operation inside the try block and handle failures in
catch. I use finally for cleanup, such as resetting loding state. */ 

// async/await 

async function loadData() {
    setLoading(true);
    try{
        const response = await fetch('/api/data');
        if(!response.ok){
            throw new Error("Failed to load data");
        }
        return await response.json();

    }
    catch(error){
        console.log(error.message);
    } finally{
        setLoading(false);
    }
}