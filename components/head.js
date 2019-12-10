import NextHead from "next/head";

const Head = props => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || ""}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="robots" content="index, follow"></meta>
		<meta
			name="keywords"
			content="Manièra, nail bar, stylizacja paznokci, stylizacja rzęs, zabiegi kosmetyczne, manicure, pedicure, mokotwoska"
		></meta>
		<meta
			name="description"
			content="Manièra nail bar to miejsce jedyne w swoim rodzaju. Zlokalizowane w zacisznym podwórku, w samym sercu Warszawy."
		/>
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/static/apple-touch-icon.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="/static/favicon-32x32.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/static/favicon-16x16.png"
		/>

		<link rel="canonical" href="https://www.maniera.pl/" />
		<link rel="manifest" href="/static/site.webmanifest"></link>
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />

		<meta
			property="og:image"
			content="https://maniera.s3.eu-central-1.amazonaws.com/maniera_main_desktop_standard.jpg"
		/>

		<meta property="og:description" content="Maniera" />

		<meta property="og:url" content="https://www.maniera.pl/" />

		<meta property="og:title" content="Maniera" />

		<meta name="google-site-verification" content="sXaAUXlMVJRJLB7enpyrDeH_Tedgvf3gLXAJHL7VFv8" />

		<link rel="stylesheet" href="https://use.typekit.net/fjn7dcc.css"></link>
	</NextHead>
);


export default Head;