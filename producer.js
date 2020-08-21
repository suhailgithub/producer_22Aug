const axios = require('axios')
const express = require('express')
const app = express();
const data = require('./data-file')

app.get('/produceData/:startIndex/:offset',(request, response) =>{
  var startIndex = request.params.startIndex;
  var endIndex = parseInt(startIndex) + parseInt(request.params.offset);
  console.log(startIndex)
  console.log(endIndex)
    if(data.length < startIndex){
        response.status(500);
        let message = `start index ${startIndex} is out of range`
        return response.send(message);
    }

    endIndex = endIndex < data.length ? endIndex : data.length;
    const dataSlice = data.slice(startIndex, endIndex);

    response.status(200);
    return response.send(dataSlice);
  
});

app.listen(3000, ()=>{
    console.log('server for producer started at 3000');
})


