function upload(){
  
    var image=document.getElementById('image').files[0];
   
    var post=document.getElementById('post').value;
    var myName=document.getElementById('myName').value;
    var link=document.getElementById('link').value;
    var sp=document.getElementById('sp').value;

    var imageName=image.name;
   
    var storageRef=firebase.storage().ref('images/'+imageName);
    
    var uploadTask=storageRef.put(image);

    
    
    uploadTask.on('state_changed',function(snapshot){
        
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
     
      console.log(error.message);
    },function(){
     
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           
           firebase.database().ref('blogs/').push().set({
                 text:post,
                 imageURL:downloadURL,
                 sender:myName,
                 link: link,
                 sp: sp
           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                  
                   document.getElementById('post-form').reset();
                   getdata();
               }
           });
        });
    });

}

window.onload=function(){
    this.getdata();
}


function getdata(){
    firebase.database().ref('blogs/').once('value').then(function(snapshot){
     
      var posts_div=document.getElementById('posts');
      
      posts.innerHTML="";
     
      var data=snapshot.val();
      console.log(data);
      
      for(let[key,value] of Object.entries(data)){
        posts_div.innerHTML="<div class='col-sm-4 mt-2 mb-1'>"+
        "<div class='card'>"+
        "<img src='"+value.imageURL+"' style='height:250px;'>"+
        "<div class='card-body'><h2 class='card-text'>"+value.sender+"</h2>"+
        "<p>"+"<h5>Specialization</h5>"+value.sp+"</p>"+
        "<p>"+"<h5>Description</h5>"+value.text+"</p>"+
        "<p>"+"<h5>Linkedin Link</h5>"+value.link+"</p>"+
        "</div></div></div>"+posts_div.innerHTML;
      }
    
    });
}

function delete_post(key){
    firebase.database().ref('blogs/'+key).remove();
    getdata();

}