window.onload = function(){
        //canvas init
        var imgTag = new Image();
        imgTag.src = "https://2.bp.blogspot.com/-1vkbPX-Fr5c/XJXa9ZcXiJI/AAAAAAAABMA/MdwbZaGrx9c-LimgjORDcc3JRrElsGmFQCLcBGAs/s1600/flowers-1231678_960_720%2B%25282%2529.png";   // flower image
   
        var canvas = document.getElementById("canvasId");
        var ctx = canvas.getContext("2d");
         document.body.appendChild(canvas);

        //canvas dimensions
        var W = 300;
        var H = 200;
        canvas.width = W;
        canvas.height = H;

        //snowflake particles
        var mp = 25; //max particles
        var particles = [];
        for(var i = 0; i < mp; i++)
        {
            particles.push({
                x: Math.random()*W, //x-coordinate
                y: Math.random()*H, //y-coordinate
                r: Math.random()*  50, //width
                d: Math.random()*  50//height
            })
        }

        //Lets draw the flakes
        function draw()
        {
            ctx.clearRect(0, 0, W, H);

           
            for(var i = 0; i < mp; i++)
            {
                var p = particles[i];
                
                ctx.drawImage(imgTag,p.x, p.y, p.r, p.d);
            }
            
            update();
        }

       
        var angle = 0;
        function update()
        {
            angle += 0.01;
            for(var i = 0; i < mp; i++)
            {
                var p = particles[i];
               
                p.y += Math.cos(angle+p.d) + 1 + p.r/25;
                p.x += Math.sin(angle) * 2;

              
                if(p.x > W+5 || p.x < -5 || p.y > H)
                {
                    if(i%3 > 0) //66.67% of the flakes
                    {
                        particles[i] = {x: Math.random()*W, y: -5, r: p.r, d: p.d};
                    }
                    else
                    {
                       
                        if(Math.sin(angle) > 0)
                        {
                            
                            particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                        }
                        else
                        {
                            
                            particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                        }
                    }
                }
            }
        }

        //animation loop
        setInterval(draw, 30);
    };