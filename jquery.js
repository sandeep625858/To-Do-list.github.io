$(document).ready(function()
{
   
   $('#add-btn').click(function()
   {
      var input =$('#input').val();
      if(input!=""){
         $('ul').append("<li>" + input + '<i class="fas fa-check fa-trash "> </li>');
         $(this).val('');
      }
   });
   $("#input").change(function () {
      var input =$('#input').val();
      if(input!=""){
      $('ul').append("<li>" + input + '<i class="fas fa-check fa-trash "> </li>');
      $(this).val('');
      }
    });

      $('ul').on('click' , '.fa-trash',function()
               {
      $(this).parent('li').fadeOut(200);
      });
});
