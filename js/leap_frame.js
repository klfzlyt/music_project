//得在leapjs之后引用


			
				
				function start_leap(callback){
					var controller = new Leap.Controller({enableGestures: true});
					controller.connect();
				controller.on('frame', callback);	
				}
				