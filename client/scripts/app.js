var app = {
   messagesSent: [],
  messagesReceived: [],

  init: function (data){
    //add psuedoclassical here
  },

  send: function (data) {$.ajax({
  // This is the url you should use to communicate with the parse API server.
        url: 'https://api.parse.com/1/classes/chatterbox',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function (data) {
        console.log('chatterbox: Message sent');
         },
        error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message');
        }
        });
        },
  fetch: function(data){
          $.ajax({
            //url: 'https://api.parse.com/1/classes/chatterbox',
            data: JSON.stringify(data),
            dataType: 'text',
            complete : function(){
                alert(this.url);
            },
            success: function(){
            }
          })
          }, 

  addMessage: function(message){     
      console.log(message);   
      $('#chats').append('<p>'+message.text+'</p>');

  },

  clearMessages: function(message){
    $('#chats').children().remove();
  },

  addRoom: function(roomName){
    $('#roomSelect').append('<div>roomName</div>');
  },

  addFriend: function(m){
    $(message.name).click(function(){})
    }



}





// // YOUR CODE HERE:
// var app = {};
//   $(document).ready(function () {
//     $.ajax({ 
//         type: 'GET', 
//         url: 'https://api.parse.com/l/classes/chatterbox', 
//         data: { }, 
//         success: function (data) { 
//             var names = data
//             console.log(names)
//         error: function (data){
//             alert('no go on the get request')
//         }
//         }
//     });
// });