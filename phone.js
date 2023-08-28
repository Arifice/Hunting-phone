const loadPhone= async()=>{
    const response=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data=await response.json();
    const phones=data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones=phones=>{
    // step-1: get container 
    const phoneContainer=document.getElementById('phone-container');
    phones.forEach(phone=>{
        console.log(phone);
        // step-2: Create a div
        const phoneCaard=document.createElement('div');
        // step-3: Add class
        phoneCaard.classList='card  bg-[#0D6EFD0D] p-8 shadow-xl';
        // step-4: set Inner Html
        phoneCaard.innerHTML=`
            <figure><img src="${phone.image}"></figure>
            <div class="card-body">
                <h1 class="card-title text-4xl font-[700]">${phone.phone_name}</h1>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>            
        `
        // step-5:Appened child
        phoneContainer.appendChild(phoneCaard);
    })

}

loadPhone();