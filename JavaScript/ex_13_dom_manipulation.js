function createelement(title,channel_name,numberofviews,utime,thumbnail,duration)
{
    

let html = `<div class="card">
            <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">
                    ${duration}
                </div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>
                ${channel_name}. ${numberofviews} ${utime}
            </p>`
            
}