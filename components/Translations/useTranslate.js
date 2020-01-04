import { useContext } from 'react';
import LangContext from '../Context/langContext';

const useTranslate = (page) => {
    const { lang } = useContext(LangContext);

    return translations[lang][page];
};

export default useTranslate;

const translations = {
    pl: {
        main: {
            welcome: 'Witaj',
            maniera: 'w Manièrze'
        },
        hero: {
            top: 'Poczuj się jak w mieszkaniu przyjaciółki, odpręż się w dziewczyńskiej atmosferze i zrelaksuj jak w SPA przy kieliszku prosecco.',
            visit: 'Odwiedź Manièrę',
            bottom: 'z przyjaciółką, mamą, siostrą lub mężem.'
        },
        services: {
            title: 'Zajmiemy się Tobą.',
            subtitleLeft: 'Stylizacja paznokci',
            descLeft: 'Wykonujemy stylistykę paznokci naturalnych oraz przedłużanych. U nas umówisz się na manicure japoński, SPA, a także hybrydowy i żelowy. Możesz być pewna, że używamy produktów najwyższej jakości.',
            subtitleMiddle: 'Stylizacja rzęs',
            descMiddle: 'Oferujemy przedłużanie rzęs metodami 1:1, 2:1 oraz objętościowymi big volume. Połóż się wygodnie i pozwól naszym stylistkom działać cuda.',
            subtitleRight: 'Zabiegi kosmetyczne',
            descRight: 'Nasz gabinet kosmetyczny oferuje gamę zabiegów pielęgnacyjnych przy użyciu luksusowych preparatów marki Sothys, a także urządzeń najnowszej generacji Geneo+.',
            bottom: 'Dbamy o Twoje bezpieczeństwo – używamy tylko atestowanych urządzeń i narzędzi.'
        },
        pricing: {
            circle: 'Wiemy jak cenny jest Twój czas.',
            maniPedi: 'MANI + PEDI',
            make: 'WYKONUJEMY',
            minutes: 'W 60 MINUT.',
            button: 'sprawdź nasze ceny'
        },
        nails: {
            title: 'STYLED BY MANIERA',
            subtitle: 'Śledzimy najnowsze trendy.',
            button: 'umów wizytę'
        },
        hands: {
            circle: 'Twój komfort i perfekcyjna jakość są dla nas najważniejsze.'
        },
        team: {
            role: 'Główna konspiratorka',
            desc: 'Zawsze trochę zaganiana i roztargniona, ale z ręką na pulsie. Ma milion pomysłów na minutę, uwielbia wyzwania, a przy tym wszystkim towarzyszy jej słodki piesek Tony.'
        },
        contact: {
            title: 'Czekamy na Ciebie!',
            book: 'Rezerwacja telefoniczna',
            button: 'REZERWACJA ONLINE',
            faqTitle: 'Z przyjemnością odpowiemy na Twoje pytania.'
        },
        instagram: {
            title: 'zainspiruj się'
        },
        nav: {
            book: 'umów wizytę',
            pricing: 'cennik',
            team: 'nasz zespół',
            madeBy: 'realizacja',
            phone: 'tel.'
        }
    },

    en: {
        main: {
            welcome: 'Welcome',
            maniera: 'to Manièra'
        },
        hero: {
            top: 'We’d love you to feel here as if you visited your best friend – put your feet up and relax while sipping on a glass of prosecco.',
            visit: 'Visit Manièra',
            bottom: 'with your bff, mom, sister, or maybe even your husband.'
        },
        services: {
            title: 'We’ll take care of you.',
            subtitleLeft: 'Nail Styling',
            descLeft: 'We will wow your nails – whether natural or extensions. Here you can schedule a P. Shine and SPA manicure, get your gel extensions or gel manicure. We make sure to use the best products on the market.',
            subtitleMiddle: 'Eye lash extensions',
            descMiddle: 'We offer extensions using 1:1, 2:1 or big volume methods. You can also get a lash lift.  Lay down and let our stylists work their magic.',
            subtitleRight: 'Facial treatments',
            descRight: 'Our spa offers facial treatments using high-end products such as Sothy’s, Image Skincare and Holy Land cosmetics. We also offer treatments using revolutionary Geneo+ technology.',
            bottom: 'We value your comfort and safety – we only use certified tools and products.'
        },
        pricing: {
            circle: 'We know how precious your time is.',
            maniPedi: 'MANI + PEDI',
            make: '',
            minutes: 'IN 60 MINUTES.',
            button: 'Price List'
        },
        nails: {
            title: 'STYLED BY MANIERA',
            subtitle: 'Śledzimy najnowsze trendy.',
            button: 'Book your visit'
        },
        hands: {
            circle: 'Your comfort and perfect quality of service are of upmost importance.'
        },
        team: {
            role: 'Head conspirator',
            desc: 'Magdalena may seem all over the place, but she keeps her eye on the prize. With a head full of ideas, she loves taking on new challenges – with her sweet dog Tony always by her side.'
        },
        contact: {
            title: 'We’re waiting for you!',
            book: 'Book',
            button: 'Book online',
            faqTitle: 'We’d love to answer your questions.'
        },
        instagram: {
            title: 'get inspired'
        },
        nav: {
            book: 'book online',
            pricing: 'pricing',
            team: 'team',
            madeBy: 'made by',
            phone: 'phone:'
        }
    }

};