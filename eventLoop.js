// function a(){
//     console.log("a");
// }
// a()
// console.log("end");
// console.log("start");
// setTimeout(()=>{
//     console.log('hello!');
// }, 5000);

// console.log("end");


// To use a async and await, function must return a promise. 

function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello !');
            console.log('hello from console !');
            reject('An error occurred !');
            // resolve('hello');
        }, 2000);
    }
    );
}

const  b  = (p1, p2)=>{
    return p1 + p2;
}

async function a(){

    console.log("start");
    const result =  await fn();
    console.log(result);
    console.log(b(1,2));;
    console.log('end');
}

a();
