function getJson(){
                                                                                    //fetch the contents from Server
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=12&apiKey=9bd223092d1f4a38b4d4911a6f78591a')
    .then(res => res.json())
    .then(data => {
        var article=data.articles;
        console.log(article);
        var i=0;
        var content='';                                                       // Loop through the content
       for(i=0;i<6;i++){
           content+='<div class="container">';                                // create dynamic Html content
            for(j=0;j<2;j++){
                content+='<div class="row">';                                     
                content+='<div class="col-sm-6"><div class="panel panel-primary">';
                content+=' <div class="panel-heading">'+article[i*2+j].title+'</div>';
                content+=' <div class="panel-body"><img src="'+article[i*2+j].urlToImage;
                content+='" class="img-responsive"  alt="Image" width="150px" height="80px"></div>';
                content+=' <div class="panel-footer">'+article[i*2+j].description+'</div></div>';
                content+='</div><br>';
            }
           content+='</div>';
            console.log(content);                                           // apend the content to Main Page
            document.getElementById("mainContent").innerHTML=content;
       }
    } )
    .catch(err => console.log(err));
};
getJson();
