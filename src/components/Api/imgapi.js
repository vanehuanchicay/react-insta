import React from 'react';
import $ from "jquery";
import Icons from "./../../components/Icons/";
import '../../components/Pictures/style.css';




const token = '422638274.be971ce.78801f6b2b92445fb06944f18fe67193';
const id = 422638274;
const num_photos = 20;

$.ajax({
  url:`https://api.instagram.com/v1/users/${id}/media/recent/`,
  datatype: 'json',
  type:'GET',
  data:{ 
    access_token: token,
    count: num_photos
  }

})
.done(function(response){
  console.log(response);
  showInfo(response);
})
.fail(function(error){
  console.log('esto es un error');
})



function showInfo(info){
  for(let i = 0; i < info.data.length; i++){
    $('.photos').append(`<li className="cont-img"><img className="img-responsive activator" src="${info.data[i].images.standard_resolution.url}"></li>`);
  }
}

//export default Imgapi;
