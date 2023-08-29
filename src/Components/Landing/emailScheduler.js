const sendBiddingResultsEmail = (usersBidding, listingsBiddings) => {

		const mailOptions = {
			from: 'sender@example.com',
			to: 'recipient@example.com',
			subject: 'Bidding Results Update',
			text: `Hi ${userName},
		  
		  The full list of the bidding results is now updated.
		  
		  You won:
		  Congratulations! You have placed the highest bid on the following companies:
		  
		  Switchboard Software, From the team that launched Google BigQuery, Switchboard’s data engineering automation turns disparate data into a single source of truth.
		  You have won with 16 points
		  
		  You lost:
		  You didn't place any unsuccessful bid this week.
		  
		  Complete Bidding Results:
		  · Croissant, Croissant is an application that resales products on behalf of customers.
		  cchow@battery.com won with 3 points
		  
		  · Stylib, Stylib is a platform enabling architects to discover products using AI.
		  cchow@battery.com won with 12 points
		  
		  · Switchboard Software, From the team that launched Google BigQuery, Switchboard’s data engineering automation turns disparate data into a single source of truth.
		  dallin@battery.com won with 16 points
		  
		  · Helpful, Helpful simplifies family caregiving by combining your loved one's insurance benefits and medical records into one user-friendly platform.
		  marcus@battery.com won with 3 points
		  
		  · Effectiv, Fraud detection platform for financial institutions
		  mhoeksema@battery.com won with 5 points
		  
		  · Frigade, Frigade is a developer tool that makes it easy for developers to build better product onboarding and education.
		  mhoeksema@battery.com won with 5 points
		  
		  · Solink, Solink is a provider of video security and business analytics solutions for companies.
		  marcus@battery.com won with 5 points
		  
		  · MSPbots.ai, MSPbots.ai is an IT service company that offers process automation, business intelligence, email support, and concierge service.
		  marcus@battery.com won with 2 points
		  
		  · ReflexAI, ReflexAI provides organizations with tools that transform how they train, develop, and empower their frontline teams.
		  marcus@battery.com won with 2 points
		  
		  Points remaining:
		  You finished this week with 84 bidding points.
		  The points balance will reset back to 100 in 61 days.`
		  };
		  
		  transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
			  console.log('Error sending email:', error);
			} else {
			  console.log('Email sent:', info.response);
			}
		  });
		  
	  };

	const checkAndSendEmail = () => {
		const currentTime = new Date();
	
		if (currentTime >= endTime) {
		// Call the sendBiddingResultsEmail function with current time and end time
		sendBiddingResultsEmail(users, listings);
	
		// Stop checking by clearing the interval
		clearInterval(emailCheckInterval);
		}
	};
	