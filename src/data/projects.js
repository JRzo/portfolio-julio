// Import images
import WebImage1 from '../images/Screenshot 2025-05-07 185713.png';
import WebImage2 from '../images/nbapredictions.png';
import MobileImage1 from '../images/resourceTracker.png';
import MobileImage2 from '../images/contactBook.png';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/weatherApp.png';

export const projectsData = [
	{
		id: 1,
		title: 'Roomie Link',
		category: 'Web Application',
		img: WebImage1,
		ProjectHeader: {
			title: 'Full stack',
			publishDate: 'Currently',
			tags: 'UI / Frontend',
		},
		link: "https://github.com/JRzo/roomie-link"
	},
	{
		id: 2,
		title: 'Contact Book',
		category: 'Full Stack',
		img: MobileImage2,
		link: "https://contact-book-app-65fbe047d847.herokuapp.com/"
	},
	{
		id: 3,
		title: 'Weather App',
		category: 'Front End + UI/UX Design',
		img: UIImage2,
		link: "https://github.com/JRzo/Weather-App"
	},
	{
		id: 4,
		title: 'Resources Tracker',
		category: 'Full Stack Application',
		img: MobileImage1,
		link: "https://resource-tracker-1574ccab6559.herokuapp.com/"
	},
	{
		id: 5,
		title: 'NBA Playoffs Prediction',
		category: 'Full Stack Application',
		img: WebImage2,
		link: "https://basketball-prediction-b13e6353873b.herokuapp.com/"
	},
];
