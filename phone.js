const loadPhone= async(searchText='13',isShowAll)=>{
    const response=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await response.json();
    const phones=data.data;
    // console.log(phones);
    displayPhones(phones,isShowAll);
}

const displayPhones=(phones,isShowAll)=>{    
    // step-1: get container 
    const phoneContainer=document.getElementById('phone-container');
    const showAllContainer=document.getElementById('show all-container');
    // display show all button
        // console.log(phones,phones.length);
        const length=phones.length;
        if(length>12 && !isShowAll){
            showAllContainer.classList.remove('hidden');
        }
        else{
            showAllContainer.classList.add('hidden');
        }
        // console.log('is show all',isShowAll);
    // display only first 12 phone if not show all
    if(!isShowAll){
        phones=phones.slice(0,12);
    }
    // clear container
    phoneContainer.textContent='';
    phones.forEach(phone=>{  
        // console.log(phone)      
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
                
                <div class="card-actions justify-center">
                    <button onclick="showDetails('${phone.slug}')" class="btn text-2xl font-[600] hover:bg-green-500 normal-case btn-secondary">Show Details</button>
                </div>
            </div>            
        `
        // step-5:Appened child
        phoneContainer.appendChild(phoneCaard);
    })
    toggoleLoadingDots(false);

}
const showDetails=async(id)=>{
    // console.log('show Details clicked',id);
    // load single phone data
    const response= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await response.json();
    console.log(data);
    const phone=data.data;
    showPhoneDetails(phone);
}
const showPhoneDetails=(phone)=>{    
    const showDetailContainer=document.getElementById('show-detail-container');
    const showImagecontainer=document.getElementById('show-image-container');
    showImagecontainer.innerHTML=`<img src="${phone.image}"/>`
    showDetailContainer.innerHTML=`
        <p >brand: <span class="text-xl text-gray-500 font-[500]"> ${phone?.brand || 'Not available'}</span></p>        
        <h3>Name: <span class="text-xl text-gray-500 font-[500]"> ${phone?.name || 'Not available'}</span></h3>
        <p>Storage: <span class="text-xl text-gray-500 font-[500]">${phone?.mainFeatures?.storage || 'Not available'}</span></p>
        <p>Display size: <span class="text-xl text-gray-500 font-[500]">${phone?.mainFeatures?.displaySize || 'Not available' }</span></p>
        <p>Memory: <span class="text-xl text-gray-500 font-[500]">${phone?.mainFeatures?.memory || 'Not available'}</span></p>
        <p>sensore: <span class="text-xl text-gray-500 font-[500]">${phone?.mainFeatures?.sensors[0] || 'Not available'}</span></p>
        <p><span class="text-xl text-gray-500 font-[500]">${phone?.releaseDate || 'Not available'}</span></p>
        <p>Bluetooth: <span class="text-xl text-gray-500 font-[500]">${phone?.others?.Bluetooth || 'Not available'}</span></p>
        <p>GPS: <span class="text-xl text-gray-500 font-[500]">${phone?.others?.GPS || 'Not available'}</span></p>
        <p>NFC: <span class="text-xl text-gray-500 font-[500]">${phone?.others?.NFC || 'Not available'}</span></p>
        <p>Radio: <span class="text-xl text-gray-500 font-[500]">${phone?.others?.Radio || 'Not available'}</span></p>
        <p>USB: <span class="text-xl text-gray-500 font-[500]">${phone?.others?.USB || 'Not available'}</span></p>
        <p>WLAN: <span class="text-xl text-gray-500 font-[500]">${phone?.others?.WLAN || 'Not available'}</span></p>


    `

    // show the modal
    show_details_modal.showModal();
    console.log(phone)

}
// search button handle
const searchButton=(isShowAll)=>{
    toggoleLoadingDots(true);
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    loadPhone(searchText,isShowAll);

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
// handle show all
const showAllButton=()=>{
    searchButton(true);
    
}

 loadPhone();