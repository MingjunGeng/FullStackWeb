console.log("test preinClassPractise_1");

// const URL = null
/// m1
// const URL = "https://api.thedogapi.com/v1/breeds/"
// const grabTheData = (event) => {
//     console.log('working');
//     axios.get(URL + 1)
//         .then(res => {
//             //debugger
//             console.log(res.data)
//             event.target.textContent = res.data.name
//         })
//         .catch(err => {
//             debugger
//         })
// }
// theButton.addEventListener('click', grabTheData) 

// /// m2 //
// const URL = "https://api.thedogapi.com/v1/breeds/"
// const grabTheData = (id) => (event) => {
//     console.log('working');
//     axios.get(URL + id)
//         .then(res => {
//             //debugger
//             console.log(res.data)
//             event.target.textContent = res.data.name
//         })
//         .catch(err => {
//             debugger
//         })
// }
// theButton1.addEventListener('click', grabTheData(1)) 
// theButton2.addEventListener('click', grabTheData(2)) 
// theButton3.addEventListener('click', grabTheData(3)) 

// /// m3 // await
// const URL = "https://api.thedogapi.com/v1/breeds/"
// const grabTheData = (id) => async (event) => {
//     console.log('about fetch data!');
//     const res = await axios.get(URL + id)
//     console.log(res.data)
//     event.target.textContent = res.data.name
// }
// theButton1.addEventListener('click', grabTheData(1)) 
// theButton2.addEventListener('click', grabTheData(2)) 
// theButton3.addEventListener('click', grabTheData(3)) 

/// m3 // try catch
const URL = "https://api.thedogapi.com/v1/breeds/"
const grabTheData = (id) => async (event) => {
    console.log('about fetch data!');
    try {
        const res = await axios.get(URL + id)
        console.log(res.data)
        event.target.textContent = res.data.name
    } catch (e) {
        debugger
    }
}
theButton1.addEventListener('click', grabTheData(1)) 
theButton2.addEventListener('click', grabTheData(2)) 
theButton3.addEventListener('click', grabTheData(3)) 