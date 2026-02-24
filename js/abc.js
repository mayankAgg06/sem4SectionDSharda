function step1() {
    return new Promise((resolve,reject)=>{
        resolve('Clicking the image');
    })
}
function step2(image) {
    return new Promise((resolve,reject)=>{
        resolve('Adding the filters');
    })
}
function step3() {
    return new Promise((resolve,reject)=>{
        resolve('Updating captions');
    })
}
function step4() {
    return new Promise((resolve,reject)=>{
        resolve('Sharing the image');
    })
}

step1()
.then((data)=>{
    console.log(data);
    return step2();
})
.then((data)=>{
    console.log(data);
    return step3();
})
.then((data)=>{
    console.log(data);
    return step4();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{console.log("Something Went wrong",err)})


async function runningProject()
{
    const image = await step1();
    console.log(image);
    const filtered = await step2(image);
    console.log(filtered);
    const captioned = await step3(filtered);
    console.log(captioned);
    const posted = await step4(captioned);
    console.log(posted);
}