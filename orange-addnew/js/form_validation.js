		// just for the demos, avoids form submit
		jQuery.validator.setDefaults({
		  debug: true,
		  success: "valid"
		});

		// exemplu
		// $( "#myform" ).validate({
		//   rules: {
		//     field: {
		//       required: true,
		//       digits: true
		//     }
		//   }
		// });
		$( "#form" ).validate({
		  rules: {
		    mail: {
		     required: true,
		     email: true 
		    },
		    phone: {
		     required: true,
		     digits: true 
		    }
		  }
		}),
		$( "#formToSend" ).validate({
		  rules: {
		    phone:{
		    	required: true,
		    	digits: true
		    }
		  }
		});