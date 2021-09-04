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
                   alert("Successfully uploaded your profile to the doctors profile page. Thank You! You may now click on the Login / Signup and continue.");
              
                   document.getElementById('post-form').reset();
                   getdata();
               }
           });
        });
    });

}
