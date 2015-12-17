function updateUserCount(count){
  $('#user-count').text(count); 
}

SocketController.registerListener('user-count-update', updateUserCount);





