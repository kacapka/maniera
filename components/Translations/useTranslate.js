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
            shop: 'sklep',
            book: 'umów wizytę',
            pricing: 'cennik',
            team: 'zespół',
            madeBy: 'realizacja',
            phone: 'tel.'
        },
        faq: {
            title: 'Najcześciej zadawane pytania',
            qa: [
                {
                    q: 'Czy możemy wykonywać dwie usługi w jednym czasie?',
                    a: 'Tak! Rozumiemy, że czas jest dla Ciebie ważny, więc oferujemy równoczesne wykonywanie manicure i pedicure, jak i pedicure oraz regulację i hennę brwi. Wyjdziesz od nas zadowolona, z pięknymi paznokciami w godzinę!'
                },
                {
                    q: 'Jaka jest różnica między manicurem klasycznym a Vinylux?',
                    a: 'Jeżeli nie jesteś fanką manicure hybrydowego, a potrzebujesz żeby Twój lakier utrzymywał się dłużej, polecamy Manicure Vinylux. Marka lakierów do paznokci CND stworzyła lakiery, które mają na celu pozostać na Twoich dłoniach dłużej, utrzymując lekkość manicure klasycznego.'
                },
                {
                    q: 'Dlaczego do przedłużania paznokci używamy żel, a nie akryl?',
                    a: 'Zależy nam na Twoim komforcie i zdrowiu! Mimo że obydwie metody przedłużania paznokci są obecnie popularne, w Manièrze stawiamy na żel. Ta decyzja oznacza naturalniej wyglądające paznokcie, mniejsze obciążenie Twojej naturalnej płytki jak i mniej oparów (które nieuchronnie wiążą się z metodą akrylową).'
                },
                {
                    q: 'Na czym polega zabieg IBX?',
                    a: 'Doskonałe rozwiązanie dla łamliwych i problematycznych paznokci. Zabieg IBX przebiega w etapach - początkowo nakładamy na paznokcie preparat zawierający kompleks olejków jojoba, awokado, witaminy oraz minerały, które pod wpływem ciepła wnikają w głąb płytki. Następnie nakładamy drugi preparat, który utwardzany jest pod lampą i służy jako powłoka ochronna płytki paznokcia. Zabieg IBX pomaga naprawić płytkę paznokcia, także w jej głębokich warstwach. Jest świetnym sposobem na to aby paznokcie rosły zdrowsze, dłuższe i mocniejsze.'
                },
                {
                    q: 'Jakie są zalety manicure japońskiego?',
                    a: 'Manicure japoński jest szybkim i trwałym sposobem na polepszenie stanu paznokci. Biorąc pod uwagę jego efekty, widoczne od razu po zabiegu, jest to też zabieg relatywnie niedrogi.'
                },
                // {
                //     q: 'Na czym polega usługa manicure ślubnego?',
                //     a: ''
                // },
                // {
                //     q: 'Jak długo utrzymuje się makijaż permanentny?',
                //     a: ''
                // },
                {
                    q: 'Na czym polega zabieg laminacji rzęs?',
                    a: 'Zabieg laminacji rzęs pozwala na wydłużenie, zagęszczenie i uniesienie (podkręcenie) rzęs i jest skuteczną alternatywą do przedłużania rzęs metodą 1 do 1. Zalecany szczególnie dla pań o długich i prostych rzęsach. Wizyta w salonie trwa 30-50 minut, a efekt utrzymuje się 4-6 tygodni.'
                }
            ]
        },
        pricingPage: {
            title: 'Cennik',
            button: 'Umów wizytę'
        },
        modal: {
            textTop: 'Na razie nie spotkamy się na Mokotowskiej,',
            textMiddle: "ale za to możecie odwiedzać nas",
            textBottom: "w butiku online!",
            button: "ZAPRASZAMY NA ZAKUPY"
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
            subtitle: 'We follow the newest trends.',
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
            shop: 'shop',
            book: 'book online',
            pricing: 'pricing',
            team: 'team',
            madeBy: 'made by',
            phone: 'phone:'
        },
        faq: {
            title: 'Frequently Asked Questions',
            qa: [
                {
                    q: 'Is it possible to have to services done at the same time?',
                    a: 'Yes! We understand how precious your time is and so we offer your manicure and pedicure to be done simultaneously (in-and-out in 60 minutes!). You could also get your pedi and eyebrow tint checked off the list.'
                },
                {
                    q: 'What’s the difference between Classic and Vinylux manicures?',
                    a: 'If you’re still not fond of gel (hybrid) manicure, but need your nail polish to last longer, we recommend you try Vinylux manicure. The CND brand has created a nail polish that will last longer and be as lightweight as regular nail polishes.'
                },
                {
                    q: 'Why gel extensions, but no acrylic?',
                    a: 'We care about your health! Even though both methods are well-known around the world, at Maniera we choose gel. It means more natural looking extensions, less strains for your natural nails and less harmful fumes (that come with the acrylic methods).'
                },
                {
                    q: 'What is IBX?',
                    a: 'It’s a perfect solution for weak and problematic nails. The procedure follows a few stages – first we apply a mixture of jojoba and avocado oils, vitamins, minerals onto the nail, that we later warm up so all the beneficial ingredients can sink deep into the nail structure. Secondly, we apply a lacquer that hardens under the UV light to keep all the vitamins locked in your nail and protects it. IBX helps to fix the nail, even deep in its structure. It’s a great way to help your nails grow longer, healthier and stronger.'
                },
                {
                    q: 'What are the benefits of a P.Shine manicure?',
                    a: 'P. Shine (or Japanese) manicure is a quick and efficient way to help your nails look healthier. It’s also very affordable, given the fast results it brings.'
                },
                // {
                //     q: 'Na czym polega usługa manicure ślubnego?',
                //     a: ''
                // },
                // {
                //     q: 'Jak długo utrzymuje się makijaż permanentny?',
                //     a: ''
                // },
                {
                    q: 'What is a lash lift?',
                    a: 'Lash lift helps to elongate, thicken, and lift (curl up) the lashes. It’s a good alternative to classic 1:1 eyelash extensions. It usually takes about 30-60 minutes and lasts for up to 4 weeks.'
                }
            ]
        },
        pricingPage: {
            title: 'Pricing',
            button: 'Book online'
        },
        modal: {
            textTop: "While we can't meet on Mokotowska,",
            textMiddle: "you can now visit our new online boutique!",
            textBottom: null,
            button: "CLICK HERE TO SHOP"
        }
    }

};