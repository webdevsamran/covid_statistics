$.ajax({
    type:'get',
    url:'http://api.covid19api.com/summary',
    success: function(response){
        console.log(response);
    },
    error: function(error){
        console.log(error);
    }
});