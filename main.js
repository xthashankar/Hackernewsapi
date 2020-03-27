
let URL='https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
fetch(URL)
.then(function(response){
    return response.json();
})
.then(function(data){
    data.map(function(id){
        let URL ='https://hacker-news.firebaseio.com/v0/item/'+id+'.json?print=pretty'
        fetch(URL)
        .then(function(response){
            return response.json()
        })
        .then(function(hackerdata){
            console.log('1',hackerdata) 
            let hacker=document.createElement('a')
            hacker.innerHTML=hackerdata.title;
            hacker.href=hackerdata.url;
            hacker.style.backgroundColor='#ededed';
            hacker.style.display='flex';
            hacker.style.width='65%';
            hacker.style.height='20px';
            hacker.style.padding = '10px';
            hacker.style.margin = '5px auto'
            hacker.style.textDecoration='none';
            document.body.appendChild(hacker);

        })
    })
})


