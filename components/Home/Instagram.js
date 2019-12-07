import { useState, useEffect } from 'react';
import Footer from "../Footer";
import useMedia from '../MediaQuery/MediaQuery';
import Slider from "../Slider";

import axios from 'axios';

const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)

const fetchInstagramPhotos = async (accountUrl) => {
	const response = await axios.get(accountUrl);
	const str = response.data.match(instagramRegExp)[1];
	const json = JSON.parse(str.substring(0, str.length - 1));
	const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 6)
	const photos = edges.map(({ node }) => {
		return {
			url: `https://www.instagram.com/p/${node.shortcode}/`,
			thumbnailUrl: node.thumbnail_src,
			displayUrl: node.display_url,
			caption: node.edge_media_to_caption.edges[0].node.text
		}
	})
	return photos
}

const defaultPhotos = [
	{
		displayUrl: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/78705404_169553724152568_316209186571558230_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=100&oh=34ab59a6370ea63ae94c321a12edd14c&oe=5E867089",
		url: "https://www.instagram.com/p/B5kPXd1FAWN/"
	},
	{
		displayUrl: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/75243090_502847753662000_4126698198392708903_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=104&oh=72dd9012313b181caa90a5d1fdff937f&oe=5E680881",
		url: "https://www.instagram.com/p/B5VMwV0lx9n/"
	},
	{
		displayUrl: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/69521967_623140311553629_8080574775388254308_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=109&oh=05be024306a75dab2248c805143259fd&oe=5E746167",
		url: "https://www.instagram.com/p/B5Ku2GTF3xo/"
	},
	{
		displayUrl: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/74602331_1522596034570860_7243618209961706495_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=100&oh=a69f10db979d14893429ec4d66e31cf4&oe=5E72407B",
		url: "https://www.instagram.com/p/B5E31YRF53d/"
	},
	{
		displayUrl: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/73387305_439124823458273_5240247679780448581_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=105&oh=8aff5e958a111b46520b32886cb600f7&oe=5E77AA74",
		url: "https://www.instagram.com/p/B5AM7_UlEmi/"
	},
	{
		displayUrl: "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/73183450_216050759413913_6129261024756583440_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=105&oh=ea6bd790dd890445bc933a5d8ed699b8&oe=5E6FAA5F",
		url: "https://www.instagram.com/p/B44dhvfFenK/"
	}
]

const Instagram = () => {
	const { isSmallDesktop, isMobileOrTablet, isMobile, isSmallMobile } = useMedia();
	const [igPhotos, setIgPhotos] = useState(defaultPhotos);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetchPhotos();
	}, []);

	const fetchPhotos = async () => {
		try {
			const photos = await fetchInstagramPhotos('https://www.instagram.com/manieranailbar/')
			setIgPhotos(photos);
		} catch (e) {
			setError(true);
			console.error('Fetching Instagram photos failed');
		}
	};

	const renderPhotos = () => {
		let photos = igPhotos.slice(0, 5);
		if (isSmallDesktop) photos = igPhotos.slice(0, 4);
		if (isMobileOrTablet) photos = igPhotos.slice(0, 6);

		if (isMobileOrTablet) {
			return (
				<Slider isLight>
					<div className="instagram-photos__inner">
						<a href={photos[0].url} target="_blank" className="instagram-photos__item" style={{ backgroundImage: `url(${photos[0].displayUrl})` }} />
						<a href={photos[1].url} target="_blank" className="instagram-photos__item" style={{ backgroundImage: `url(${photos[1].displayUrl})` }} />
						<a href={photos[2].url} target="_blank" className="instagram-photos__item" style={{ backgroundImage: `url(${photos[2].displayUrl})` }} />
					</div>
					<div className="instagram-photos__inner">
						<a href={photos[3].url} target="_blank" className="instagram-photos__item" style={{ backgroundImage: `url(${photos[3].displayUrl})` }} />
						<a href={photos[4].url} target="_blank" className="instagram-photos__item" style={{ backgroundImage: `url(${photos[4].displayUrl})` }} />
						<a href={photos[5].url} target="_blank" className="instagram-photos__item" style={{ backgroundImage: `url(${photos[5].displayUrl})` }} />
					</div>
				</Slider>
			);
		} else {
			return photos.map(photo => (
				<a key={photo.url} href={photo.url} target="_blank" className="instagram-photos__item" style={{ backgroundImage: `url(${photo.displayUrl})` }} />
			));
		}
	};

	return (
		<section className="section">
			<div className="instagram">
				<div className="instagram-wrapper">
					<p className="instagram-title">- zainspiruj się -</p>
					<p className="instagram-text">Follow us <a href="https://www.instagram.com/manieranailbar/?hl=pl" target="_blank">@manieranailbar</a></p>
					<div className="instagram-photos">
						{renderPhotos()}
					</div>
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default Instagram;
