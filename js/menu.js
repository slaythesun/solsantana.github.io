$(document).mouseup(function(e){
   var menu = $('icon');
   if (!menu.is(e.target) // The target of the click isn't the container.
   && menu.has(e.target).length === 0) // Nor a child element of the container
   {
      menu.hide();
   }
});
