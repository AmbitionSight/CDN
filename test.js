var n = 0,j=0;    
 setInterval(function () {
        var video = document.querySelector("#J_prismPlayer").children[0]        
if (video.paused) {
          if (video.currentTime >= video.duration) {
            var next = document.querySelector(".next_button___YGZWZ");
            next.click();
				n++
				console.log('点击了'+n+'次下一节')

          } else {
            var btn = document.querySelector(".ant-btn-primary");
            if (btn) {
              btn.click();
					j++
				   console.log('点击了'+j+'次确定')

            } else {
              video.play();
					console.log('开始了')

            }
          }

        }
      }, 5000)
