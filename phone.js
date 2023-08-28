const loadPhone= async(searchText)=>{
    const response=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await response.json();
    const phones=data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones=phones=>{    
    // step-1: get container 
    const phoneContainer=document.getElementById('phone-container');
    const showAllContainer=document.getElementById('show all-container');
    // display show all button
        console.log(phones,phones.length);
        const length=phones.length;
        if(length>12){
            showAllContainer.classList.remove('hidden');
        }
        else{
            showAllContainer.classList.add('hidden');
        }
    // display only first 12 phone
    phones=phones.slice(0,12);
    // clear container
    phoneContainer.textContent='';
    phones.forEach(phone=>{  
        console.log(phone)      
        // step-2: Create a div
        const phoneCaard=document.createElement('div');
        // step-3: Add class
        phoneCaard.classList='card  bg-[#0D6EFD0D] p-8 shadow-xl';
        // step-4: set Inner Html
        phoneCaard.innerHTML=`
            <figure><img src="${phone.image}"></figure>
            <div class="card-body">
                <h1 class="card-title text-2xl font-[600]">Brand: ${phone.brand}</h1>
                <h1 class="card-title text-4xl font-[700]">${phone.phone_name}</h1>
                <p class="text-2xl">${phone.slug}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>            
        `
        // step-5:Appened child
        phoneContainer.appendChild(phoneCaard);
    })
    toggoleLoadingDots(false);

}
// search button handle
const searchButton=()=>{
    toggoleLoadingDots(true);
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    loadPhone(searchText);

}
// handle searce recap
// const searchButton2=()=>{
//     toggoleLoadingDots(true);
//     const searchField2=document.getElementById('search-field2');
//     const searchText2=searchField2.value;
//     loadPhone(searchText2);
// }

const toggoleLoadingDots=(isLoading)=>{
    const loadingDots=document.getElementById('loading-dots');
    if(isLoading){
        loadingDots.classList.remove('hidden');
    }
    else{
        loadingDots.classList.add('hidden');
    }
}
// loadPhone();