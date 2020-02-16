var i=0;
var a=new Array[64];
let queen=
{
    direction :'NE',
    position :{
             x-coordinate :0,
             y-coordinate :0 
              };,
            
};
/*turning the queen */
function changeDirection (x)
{
    switch(x)
    {
        case 'N' : queen.direction='x';
                    break;
               
        case 'S' :queen.direction='x';
                   break;

        case 'E' :queen.direction='x';
                   break;

        case 'W' :queen.direction='x';
                    break;

        case 'NE' :queen.direction='x';
                     break;

        case 'NW' :queen.direction='x';
                     break;

        case 'SE' :queen.direction='x';
                    break;

         case 'SW' :queen.direction='x';
                     break;

    }
}
/*Moving the queen */
function moveForward(n)
{
   var x= queen.position.x-coordinate;
   var y=queen.position.y-coordinate;
   var x=queen.position;
   switch(x)
    {
        case 'N' :
                  for(var i=0;i<n;i++)
                  {    if(y<8)
                       queen.direction.y-coordinate=y+1;
                       updatePosition();
                  }
                  break;

               
        case 'S' :for(var i=0;i<n;i++)
                  {    if(y>0)
                    queen.direction.y-coordinate=y-1;
                    updatePosition();
                  }
                   break;

        case 'E' : for(var i=0;i<n;i++)
                  {  
                      if(x<8)
                   queen.direction.x-coordinate=x+1;
                  }
                   break;

        case 'W' : for(var i=0;i<n;i++)
                  {    if(x>0)
                   queen.direction.x-coordinate=x-1;
                   updatePosition();
                  }
                    break;

        case 'NE' :for(var i=0;i<n;i++)
                  {   
                     if(y<8&&x<8)
                     {
                   queen.direction.x-coordinate=x+1;
                   queen.direction.y-coordinate=y+1;
                   updatePosition();
                     }
                    }
                     break;

        case 'NW' : for(var i=0;i<n;i++)
                   {   
                        if(y<8&&x>0)
                        {
                    
                     queen.direction.x-coordinate=x-1;
                   queen.direction.y-coordinate=y+1;
                   updatePosition();
                   }
                  }
                     break;

        case 'SE' :for(var i=0;i<n;i++)
                   {   
                        if(x<8&&y>0)
                        {
                    queen.direction.x-coordinate=x+1;
                   queen.direction.y-coordinate=y-1;
                   updatePosition();
                        }
                    }
                    break;

         case 'SW' :for(var i=0;i<n;i++)
                   {  
                         if(x>0&&y>0)
                         {
                    queen.direction.x-coordinate=x-1;
                    queen.direction.y-coordinate=y-1;
                    updatePosition();
                         }
                        }
                     break;

    }
}
function updatePosition()
{
  a[i]="queen.x-coodinate"+queen.y-coordinate;
  i++;

}
