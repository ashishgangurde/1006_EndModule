var express = require('express');
var app = express();

app.get('/feedback', function(req, res){
   
    var customers=[
              {CustomerName:'Akshay',ProductName:'Mobile',Feedback:'good',ProductRating:3.5},
            {CustomerName:'Manoj',ProductName:'Car',Feedback:'Very good',ProductRating:3.0},
            {CustomerName:'Santosh',ProductName:'Ipad',Feedback:'good',ProductRating:4.5},
            {CustomerName:'Atul',ProductName:'Mobile',Feedback:'good',ProductRating:4.0},
            {CustomerName:'Ravindra',ProductName:'Laptop',Feedback:'bad',ProductRating:2.0}
      ];
  res.send(customers);
   
   
});

app.listen(3000);