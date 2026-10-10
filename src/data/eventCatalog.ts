export interface GalleryItem {
  id: string | number;
  src: string;
  title: string;
  caption: string;
  tag?: string;
  sport?: string;
}

export interface ServiceDefinition {
  id: string;
  slug: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  description: string;
  coverImage: string;
  features: string[];
  customOptions?: string[];
  gallery: GalleryItem[];
  sportType?: string; // for sports services if applicable
}

export interface SportSubcategory {
  id: string;
  name: string;
  hindiName: string;
  icon: string;
  description: string;
}

export interface EventCategoryDefinition {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  tagline: string;
  description: string;
  heroImage: string;
  accentColor: string;
  badgeText: string;
  sports?: SportSubcategory[];
  services: ServiceDefinition[];
}

export const EVENT_CATEGORIES: EventCategoryDefinition[] = [
  {
    id: "weddings",
    slug: "weddings",
    name: "Wedding Management",
    hindiName: "विवाह व मांगलिक उत्सव",
    tagline: "Timeless Grandeur, Royal Florals & Cherished Memories",
    description:
      "From dazzling home facade fairy lighting and vibrant Haldi-Mehndi canopies to regal palace mandaps, energetic Sangeet stages, and intimate honeymoon suites. Explore each ritual with its dedicated craft.",
    heroImage: "/events/event-28.png",
    accentColor: "#f59e0b",
    badgeText: "Royal Wedding Collection",
    services: [
      {
        id: "home-decoration",
        slug: "home-decoration",
        title: "Home Decoration",
        hindiTitle: "शादी में घर की भव्य सजावट",
        tagline: "Transform Your Ancestral Family Home into an Illuminated Palace",
        description:
          "Multi-tier facade lighting, cascading fresh marigold and rose garlands, designer entrance archways, royal fabric canopies, and fairy-light curtains that welcome guests with genuine warmth.",
        coverImage: "/events/event-1.png",
        features: [
          "Full house facade warm fairy light net & pillar draping",
          "Fresh Kolkata marigold & rose flower gate arches",
          "Balcony, terrace & railing silk canopy hangings",
          "Night ambience warm golden LED glow & spotlights",
          "Timely delivery guaranteed 24 hours prior to wedding functions",
          "Custom entrance welcome name boards & torans",
        ],
        customOptions: [
          "Color draping palette (Royal Gold / Blush Pink / Crimson)",
          "Fresh vs. Silk exotic florals",
          "Heritage carved wooden gate arch",
          "Rooftop fairy canopy with chandeliers",
        ],
        gallery: [
          {
            id: "wh-1",
            src: "/events/event-1.png",
            title: "Grand Rose & Fairy Light House Facade",
            caption: "Two-tier villa decorated with warm fairy lights and fresh rose floral accents.",
            tag: "House Lighting",
          },
          {
            id: "wh-2",
            src: "/events/event-2.png",
            title: "Festive Punjabi Canopy Home Decor",
            caption: "Vibrant yellow and orange fabric canopies with traditional umbrella ceiling.",
            tag: "Canopy & Drapery",
          },
          {
            id: "wh-3",
            src: "/events/event-9.png",
            title: "Multi-tier Villa Warm Fairy Light Net",
            caption: "Dense fairy lights illuminating the rooftop and facade terraces.",
            tag: "Night Illumination",
          },
          {
            id: "wh-4",
            src: "/events/event-12.png",
            title: "Grand Palace Gate Illumination & Toran",
            caption: "Majestic arched entrance gate with fresh flower malas and ambient lanterns.",
            tag: "Entrance Arch",
          },
          {
            id: "wh-5",
            src: "/events/event-14.png",
            title: "Designer Passage with Brass Lanterns",
            caption: "Illuminated pathway lined with brass urli lamps and marigold rangolis.",
            tag: "Passage Walkway",
          },
          {
            id: "wh-6",
            src: "/events/event-19.png",
            title: "Illuminated Courtyard Celebration",
            caption: "Courtyard seating and facade glow tailored for pre-wedding dinner nights.",
            tag: "Courtyard Decor",
          },
        ],
      },
      {
        id: "reception-decoration",
        slug: "reception-decoration",
        title: "Reception Decoration",
        hindiTitle: "शाही वैवाहिक रिसेप्शन सजावट",
        tagline: "Bespoke Fairytale Settings Tailored for Your Signature Night",
        description:
          "Spectacular entrance tunnels, crystal chandeliers, imported velvet draping, royal lounge setups, and ambient architectural illumination that create stunning photographs.",
        coverImage: "/events/event-28.png",
        features: [
          "Walkway entrance tunnel with crystal chandeliers & floral arches",
          "Grand couple sofa stage with velvet backdrop & carved pillars",
          "VIP family lounge seating with velvet couches & coffee tables",
          "Architectural uplighting, warm halos & ambient dimming",
          "Photogenic selfie booth backdrop with 3D monogram lettering",
          "Red carpet entryway with brass stanchions & velvet ropes",
        ],
        customOptions: [
          "Pastel rose floral theme",
          "Royal golden mirror-work stage",
          "Glass walkway with under-floor floral beds",
          "Dry-ice low fog & cold pyro entry sparkle",
        ],
        gallery: [
          {
            id: "rc-1",
            src: "/events/event-28.png",
            title: "Vedic Palace Mandap with Orchids & Hydrangeas",
            caption: "Signature blush pink and gold mandap backdrop with imported orchids.",
            tag: "Grand Mandap",
          },
          {
            id: "rc-2",
            src: "/events/event-7.png",
            title: "Crystal Chandelier Luxury Stage",
            caption: "Multi-tiered stage backdrop featuring hand-hung crystals and pastel roses.",
            tag: "Stage Backdrop",
          },
          {
            id: "rc-3",
            src: "/events/event-8.png",
            title: "Velvet Draped Mandap with Rose Hangings",
            caption: "Heavy royal silk drapes with cascading crimson rose strings.",
            tag: "Velvet Mandap",
          },
          {
            id: "rc-4",
            src: "/events/event-13.png",
            title: "Pastel Rose Luxury Reception Stage",
            caption: "Soft blush pink floral wall with couple throne sofa seating.",
            tag: "Couple Stage",
          },
          {
            id: "rc-5",
            src: "/events/event-23.png",
            title: "Grand Floral Entrance Walkway",
            caption: "60-foot illuminated tunnel lined with fresh blooms and chandelier arches.",
            tag: "Walkway Tunnel",
          },
          {
            id: "rc-6",
            src: "/events/event-31.png",
            title: "Royal Wedding Pavilion Stage",
            caption: "Colonnade pillars with warm halo lighting and elevated couple dais.",
            tag: "Royal Dais",
          },
        ],
      },
      {
        id: "stage-setup",
        slug: "stage-setup",
        title: "Stage Setup & Decoration",
        hindiTitle: "रॉयल वेडिंग स्टेज व मंडप",
        tagline: "The Focal Point of Your Wedding — Crafted for Perfection",
        description:
          "Custom-fabricated stage risers, carved fiberglass pillars, imported floral walls, and tailored couple seating that capture timeless wedding memories.",
        coverImage: "/events/event-7.png",
        features: [
          "Reinforced heavy-duty stage platform with carpet finish",
          "Carved pillars, Roman arches or modern geometric frames",
          "Fresh exotic floral installations (hydrangeas, carnations, roses)",
          "Bespoke Maharaj/Maharani throne sofa with matching bolsters",
          "Theatrical focus spotlighting to illuminate bride & groom",
          "Cold pyro safety sparklers for grand arrival moment",
        ],
        customOptions: [
          "Dimensions: 16x12 ft to 40x24 ft",
          "Floral wall vs. Draped fabric backdrop",
          "Mirrored or white acrylic stage flooring",
        ],
        gallery: [
          {
            id: "st-1",
            src: "/events/event-7.png",
            title: "Crystal Chandelier Wedding Stage",
            caption: "Sophisticated stage setup with warm lights and floral crowns.",
            tag: "Chandelier Stage",
          },
          {
            id: "st-2",
            src: "/events/event-13.png",
            title: "Pastel Blossom Stage Wall",
            caption: "Intricate floral arrangement with warm cove lighting.",
            tag: "Floral Wall",
          },
          {
            id: "st-3",
            src: "/events/event-15.png",
            title: "Modern Geometric Floral Stage",
            caption: "Sleek geometric framework accented with fresh cascading roses.",
            tag: "Modern Geometric",
          },
          {
            id: "st-4",
            src: "/events/event-31.png",
            title: "Grand Imperial Wedding Stage",
            caption: "Palatial arch stage with grand floral columns.",
            tag: "Imperial Arch",
          },
          {
            id: "st-5",
            src: "/events/event-28.png",
            title: "Orchid & Hydrangea Stage Dais",
            caption: "Elevated dais with fresh flower halo and plush velvet seating.",
            tag: "Floral Halo",
          },
        ],
      },
      {
        id: "sound-lighting",
        slug: "sound-lighting",
        title: "Sound, Lighting, Orchestra & LED Screens",
        hindiTitle: "हाई-बेस डीजे, ऑर्केस्ट्रा व एलईडी स्क्रीन",
        tagline: "Concert-Grade Sound, Moving Head Beams & High-Definition Visuals",
        description:
          "Aluminum truss cage rigging, moving sharpy beam lights, crystal-clear line-array sound systems, live orchestra/castera staging, and high-definition P3 LED video walls engineered for energetic Indian celebrations.",
        coverImage: "/events/event-3.png",
        features: [
          "Heavy line-array sound systems & dual 18-inch subwoofers",
          "Four-pillar aluminum truss cage with safety outriggers",
          "Moving head Sharpy beam lights, wash lights & strobe effects",
          "P3 high-definition LED video wall for live camera relay & graphics",
          "Interactive RGB LED dance floor with sound sync",
          "Complete orchestra/castera staging with wired & cordless mics",
        ],
        customOptions: [
          "Live Punjabi Dhol troupe coordination",
          "CO2 cryogenic jets & confetti cannons",
          "Custom bride & groom entrance visual loop",
        ],
        gallery: [
          {
            id: "sl-1",
            src: "/events/event-3.png",
            title: "Concert Truss & Moving Beam DJ Stage",
            caption: "Heavy aluminum truss cage with beam lighting and line array sound.",
            tag: "DJ Truss",
          },
          {
            id: "sl-2",
            src: "/events/event-5.png",
            title: "LED Screen & Moving Beam Dance Floor",
            caption: "P3 LED screen wall and illuminated dance floor for Sangeet night.",
            tag: "LED Dance Floor",
          },
          {
            id: "sl-3",
            src: "/events/event-19.png",
            title: "Outdoor Sangeet High-Bass Sound Setup",
            caption: "Open lawn sound system tuned for clear vocals and heavy bass.",
            tag: "Lawn Sound",
          },
          {
            id: "sl-4",
            src: "/events/event-30.png",
            title: "Grand Sangeet Production Staging",
            caption: "Full concert truss with synchronized laser shows.",
            tag: "Concert Stage",
          },
        ],
      },
      {
        id: "haldi",
        slug: "haldi",
        title: "Haldi Decoration",
        hindiTitle: "हल्दी उत्सव की जीवंत सजावट",
        tagline: "Sunlit Yellows, Fragrant Kolkata Marigolds & Festive Traditions",
        description:
          "Dense marigold backdrops, traditional brass urlis for the ceremonial bath, handcrafted Rajasthani umbrellas, wooden jhula swings, and playful photo corners bursting with festive joy.",
        coverImage: "/events/event-21.png",
        features: [
          "Dense yellow & orange marigold backdrops and hangings",
          "Traditional carved brass urlis for floral bath ceremony",
          "Handmade embroidered Rajasthani umbrellas & tassels",
          "Custom 'Haldi' flower calligraphy signage",
          "Comfortable floor seating with yellow bolsters & cushions",
          "Floral swing (jhula) with fresh marigold garland ropes",
        ],
        customOptions: [
          "Yellow & white Mogra theme",
          "Bohemian pampas grass accents",
          "Bride & groom floral sunglasses & jewelry corner",
        ],
        gallery: [
          {
            id: "hld-1",
            src: "/events/event-21.png",
            title: "Sunlit Marigold Canopy & Backdrop",
            caption: "Pure yellow marigold strings with floral backdrop and brass accents.",
            tag: "Marigold Wall",
          },
          {
            id: "hld-2",
            src: "/events/event-35.png",
            title: "Marigold Umbrella Haldi Vibe & Brass Urli",
            caption: "Ceremonial urli bath surrounded by umbrellas and petal showers.",
            tag: "Urli Setup",
          },
          {
            id: "hld-3",
            src: "/events/event-20.png",
            title: "Floral Swing & Dholak Corner",
            caption: "Decorated wooden swing with fresh yellow garlands.",
            tag: "Floral Jhula",
          },
          {
            id: "hld-4",
            src: "/events/event-32.png",
            title: "Festive Draped Haldi Lounge",
            caption: "Vibrant fabric drapes with cushioned floor seating.",
            tag: "Haldi Lounge",
          },
        ],
      },
      {
        id: "mehndi",
        slug: "mehndi",
        title: "Mehndi Decoration",
        hindiTitle: "मेहंदी उत्सव की मनमोहक सजावट",
        tagline: "Intricate Henna Vibe, Boho Drapes & Vibrant Seating Lounges",
        description:
          "Boho-chic fabric canopies, floor seating with royal gaddas and bolsters, dedicated henna artist stations, floral swings, and Instagram-worthy photo backdrops.",
        coverImage: "/events/event-32.png",
        features: [
          "Bohemian fabric canopy in teal, fuchsia and marigold shades",
          "Dedicated bride henna seating with footrest & arm bolsters",
          "Hand-embroidered Rajasthani umbrella accents & tassels",
          "Custom 'Mehndi Hai Rachnewali' photo booth backdrop",
          "Comfortable low floor seating with silk brocade cushions",
          "Ambient warm lighting & fairy light backdrop strings",
        ],
        customOptions: [
          "Moroccan lantern lounge",
          "Pampas grass & pastel flowers",
          "Live bangle & parrot fortune teller stall",
        ],
        gallery: [
          {
            id: "mh-1",
            src: "/events/event-32.png",
            title: "Mehndi Henna Lounge with Colorful Drapes",
            caption: "Colorful bohemian fabric canopies with plush floor cushions.",
            tag: "Henna Lounge",
          },
          {
            id: "mh-2",
            src: "/events/event-20.png",
            title: "Festive Sangeet & Mehndi Corner",
            caption: "Authentic dholak corner with colorful tassels and floral backdrop.",
            tag: "Sangeet Corner",
          },
          {
            id: "mh-3",
            src: "/events/event-21.png",
            title: "Vibrant Floral Wall Photo Booth",
            caption: "Fresh marigold and green backdrop for guest photographs.",
            tag: "Photo Booth",
          },
          {
            id: "mh-4",
            src: "/events/event-35.png",
            title: "Rajasthani Umbrellas & Henna Corner",
            caption: "Traditional handcrafted umbrellas creating festive photo moments.",
            tag: "Umbrella Art",
          },
        ],
      },
      {
        id: "jago",
        slug: "jago",
        title: "Jago Night Setup",
        hindiTitle: "पंजाबी जागो नाइट व लोक सजावट",
        tagline: "Authentic Punjabi Folk Culture, Illuminated Pots & Dholak Beats",
        description:
          "Celebrate the ancestral Punjabi Jago tradition with authentic Phulkari drapes, illuminated brass Jago pots (gaagar), rustic village charpai setups, and energetic courtyard lighting.",
        coverImage: "/events/event-29.png",
        features: [
          "Authentic Phulkari fabric draping & traditional canopies",
          "Illuminated brass Jago pots (chhaj & gaagar) with safe battery lights",
          "Traditional Punjabi dholak stage & folk instrument props",
          "Rustic village charpai & brass lantern seating corner",
          "Courtyard illumination with fairy light nets & festoon bulbs",
          "Dedicated selfie corner with Punjabi boliyan signage",
        ],
        customOptions: [
          "Live Punjabi folk singer & dhol group",
          "Traditional earthen pots & wheat stalk accents",
          "Custom family surname LED neon sign",
        ],
        gallery: [
          {
            id: "jg-1",
            src: "/events/event-29.png",
            title: "Punjabi Jago Night Phulkari & Folk Canopy",
            caption: "Authentic Phulkari fabric backdrop with traditional brass pots.",
            tag: "Folk Canopy",
          },
          {
            id: "jg-2",
            src: "/events/event-24.png",
            title: "Jago Night Festive Lighting & Props",
            caption: "Vibrant courtyard lighting and Punjabi folk decor setup.",
            tag: "Jago Night",
          },
          {
            id: "jg-3",
            src: "/events/event-2.png",
            title: "Festive Courtyard Canopy",
            caption: "Spacious family gathering area decorated with traditional drapes.",
            tag: "Family Courtyard",
          },
          {
            id: "jg-4",
            src: "/events/event-20.png",
            title: "Dholak Stage & Festive Punjabi Decor",
            caption: "Dedicated musical platform for family Jago singing and boliyan.",
            tag: "Dholak Dais",
          },
        ],
      },
      {
        id: "room-decoration",
        slug: "room-decoration",
        title: "Room Decoration",
        hindiTitle: "सुहागरात व कमरे की रोमांटिक सजावट",
        tagline: "Romantic Crimson Rose Petals, Sheer Canopies & Warm Candlelight",
        description:
          "Transform honeymoon suites and master bedrooms into dreamy romantic sanctuaries with fresh red rose petal bed lettering, micro fairy-light canopies, scented candles, and metallic balloon art.",
        coverImage: "/events/event-10.png",
        features: [
          "Fresh Dutch red rose petal bed spread & floral heart art",
          "Custom 'Welcome / Just Married' rose petal floor lettering",
          "Dreamy sheer canopy draped over the bed with fairy lights",
          "Warm scented tealights, glass pillar lanterns & flameless candles",
          "Heart-shaped metallic helium foil balloon clusters",
          "Fresh flower bouquet on vanity table & room fragrance spray",
        ],
        customOptions: [
          "Swan towel art with red rose petals",
          "Champagne bucket & chocolate pastry presentation",
          "Custom illuminated neon nameplate",
        ],
        gallery: [
          {
            id: "rm-1",
            src: "/events/event-10.png",
            title: "Romantic Rose Petal Bed Decor",
            caption: "Fresh crimson roses and intricate bed petal designs.",
            tag: "Rose Petal Bed",
          },
          {
            id: "rm-2",
            src: "/events/event-11.png",
            title: "Fairy Light Canopy & Scented Room Ambience",
            caption: "Micro fairy lights woven through sheer bed canopies.",
            tag: "Light Canopy",
          },
          {
            id: "rm-3",
            src: "/events/event-16.png",
            title: "First Night Suite Monogram & Candles",
            caption: "Floor lettering and romantic lantern pathway.",
            tag: "Floor Monogram",
          },
          {
            id: "rm-4",
            src: "/events/event-22.png",
            title: "Romantic Swan Towel Art & Crimson Rose Petals",
            caption: "Handcrafted swan towel sculptures with fresh red rose petals.",
            tag: "Swan Art",
          },
        ],
      },
    ],
  },
  {
    id: "sports",
    slug: "sports",
    name: "Sports Events",
    hindiName: "स्पोर्ट्स टूर्नामेंट व ग्राउंड मैनेजमेंट",
    tagline: "Professional Ground Setup, Tournament Arenas & High-Energy Execution",
    description:
      "Full tournament infrastructure for cricket leagues, kabaddi cups, football championships, volleyball matches, and school sports days. Complete with victory stages, PA commentary sound, player dugouts, and spectator seating.",
    heroImage: "/events/sports-local-matchground.jpg",
    accentColor: "#10b981",
    badgeText: "Arena & Ground Management",
    sports: [
      {
        id: "cricket",
        name: "Cricket",
        hindiName: "क्रिकेट",
        icon: "🏏",
        description: "Pitch preparation, boundary ropes, sight screens, player dugouts & commentary sound.",
      },
      {
        id: "kabaddi",
        name: "Kabaddi",
        hindiName: "कबड्डी",
        icon: "🤼",
        description: "Arena matting, referee stands, countdown scoreboards & high-intensity floodlighting.",
      },
      {
        id: "football",
        name: "Football",
        hindiName: "फुटबॉल",
        icon: "⚽",
        description: "Goalpost nets, corner flags, spectator grandstands & technical area enclosures.",
      },
      {
        id: "volleyball",
        name: "Volleyball",
        hindiName: "वॉलीबॉल",
        icon: "🏐",
        description: "Court nets, umpire high-chairs, boundary line marking & player shade tents.",
      },
      {
        id: "other",
        name: "Other Sports",
        hindiName: "अन्य खेल / एथलेटिक्स",
        icon: "🏆",
        description: "Track events, school sports days, tug-of-war, badminton & multi-sport meets.",
      },
    ],
    services: [
      {
        id: "stage-setup",
        slug: "stage-setup",
        title: "Stage Setup & Decoration",
        hindiTitle: "विजेता स्टेज व मंच व्यवस्था",
        tagline: "Grand Presentation Victory Dais, Podiums & Dignitary Shamianas",
        description:
          "Heavy-duty winner podiums (1st, 2nd, 3rd), dignitary dais with VIP sofa seating, printed tournament sponsor backdrops, trophy and medal ceremonial tables, and red carpet walkway.",
        coverImage: "/events/event-33.png",
        features: [
          "Reinforced 3-tier winner victory podium with gold/silver/bronze finish",
          "Custom printed tournament flex backdrop with sponsor logos",
          "VIP dignitary stage with padded sofas & ceremonial table skirts",
          "Trophy & medal display ceremonial tables with velvet covers",
          "Red carpet walkway from playing field to victory dais",
          "Weather-proof canopy shamiana to protect dignitaries from sun/rain",
        ],
        customOptions: [
          "Stage sizes: 16x10 ft to 32x16 ft",
          "Opening ceremony cold pyro sparklers & confetti blasts",
          "Custom player of the match oversized dummy cheque boards",
        ],
        gallery: [
          {
            id: "s-stg-1",
            src: "/events/event-33.png",
            title: "Tournament Presentation Stage & Backdrop",
            caption: "Professional presentation dais for trophy handover and award ceremony.",
            tag: "Victory Stage",
          },
          {
            id: "s-stg-2",
            src: "/events/event-17.png",
            title: "VIP Dignitary Shamiana & Trophy Presentation",
            caption: "Covered grandstand for chief guests, trophies and medals.",
            tag: "Dignitary Stage",
          },
          {
            id: "s-stg-3",
            src: "/events/sports-local-cricket-pavilion.jpg",
            title: "Match Pavilion & Ceremonial Area",
            caption: "Pavilion stage integrated with match ground perimeter.",
            tag: "Match Pavilion",
          },
          {
            id: "s-stg-4",
            src: "/events/sports-local-trackgrandstand.jpg",
            title: "Athletic Grandstand Covered Stage",
            caption: "Elevated dais with clear sightlines across the running tracks.",
            tag: "Track Grandstand",
          },
        ],
      },
      {
        id: "sound-lighting-led",
        slug: "sound-lighting-led",
        title: "Sound, Lighting & LED Screens",
        hindiTitle: "आउटडोर साउंड, लाइटिंग व लाइव एलईडी",
        tagline: "High-Clarity Commentary PA, Floodlights & Live Scoreboard LED Walls",
        description:
          "Long-throw outdoor commentary sound systems with zero echo feedback, cordless mics for live commentary and umpires, P3 high-definition LED video scoreboards, and tournament floodlighting.",
        coverImage: "/events/event-30.png",
        features: [
          "Long-throw outdoor line-array horn speakers covering full ground perimeter",
          "Wireless UHF cordless microphones for commentators and pitch reporters",
          "P3 high-definition outdoor LED screen for live scorecard & match replay",
          "Heavy-duty aluminum truss structure for floodlights and video screens",
          "Night match high-mast LED floodlighting towers with silent generator backup",
          "Instant sound effects and fanfare cues for boundaries and wickets",
        ],
        customOptions: [
          "Live multi-camera streaming setup to YouTube/Facebook",
          "Dual commentary station with noise-canceling headsets",
          "High-mast mobile generator towers",
        ],
        gallery: [
          {
            id: "s-snd-1",
            src: "/events/event-30.png",
            title: "Concert Truss Rigging & High-Clarity Sound",
            caption: "Rigged speaker stacks and floodlight truss for evening matches.",
            tag: "Truss Rigging",
          },
          {
            id: "s-snd-2",
            src: "/events/sports-local-matchground.jpg",
            title: "Commentary PA Sound & Ground Boundary",
            caption: "Peripheral speaker arrangement for uniform ground coverage.",
            tag: "Ground Audio",
          },
          {
            id: "s-snd-3",
            src: "/events/sports-cwg-arena.jpg",
            title: "Arena Sound & Floodlighting Setup",
            caption: "Uniform floodlighting and sound for large spectator venues.",
            tag: "Arena Lights",
          },
          {
            id: "s-snd-4",
            src: "/events/event-34.png",
            title: "Cricket Match Commentary Sound & Screen",
            caption: "Live match commentary booth with score display monitors.",
            tag: "Commentary Desk",
          },
        ],
      },
      {
        id: "seating-arrangement",
        slug: "seating-arrangement",
        title: "Seating Arrangement",
        hindiTitle: "खिलाड़ी डगआउट व दर्शक बैठक व्यवस्था",
        tagline: "Weather-Protected Player Dugouts, VIP Lounges & Spectator Stands",
        description:
          "Comfortable shaded player dugouts for both competing squads, VIP upholstered sofa seating under canopies, tiered spectator chairs, and shaded dining shamianas.",
        coverImage: "/events/local-sports-2.jpg",
        features: [
          "Two dedicated team player dugouts with sunshade canopies & padded benches",
          "VIP guest section with luxury 2-seater sofas & carpeted flooring",
          "Modular spectator chairs (50 to 2,000+ capacity) arranged with proper aisles",
          "Water-station tents and cooler fan setups for player comfort",
          "Team equipment storage racks & kit bag enclosures",
          "Barricading ropes to separate audience from playing boundaries",
        ],
        customOptions: [
          "Tiered bleacher scaffolding seating",
          "Misting fans for peak summer tournaments",
          "Separate corporate / family viewing enclosures",
        ],
        gallery: [
          {
            id: "s-seat-1",
            src: "/events/local-sports-2.jpg",
            title: "Player Dugouts & Spectator Stands",
            caption: "Shaded team dugouts and organized seating rows for spectators.",
            tag: "Team Dugouts",
          },
          {
            id: "s-seat-2",
            src: "/events/sports-local-trackgrandstand.jpg",
            title: "Track Grandstand Covered Seating",
            caption: "Tiered covered grandstand overlooking the entire athletic turf.",
            tag: "Grandstand",
          },
          {
            id: "s-seat-3",
            src: "/events/sports-local-cricket-pavilion.jpg",
            title: "VIP Pavilion Seating",
            caption: "Covered pavilion with VIP lounge chairs and dining area.",
            tag: "VIP Pavilion",
          },
          {
            id: "s-seat-4",
            src: "/events/local-volleyball-court.jpg",
            title: "Court Side Player & Audience Seating",
            caption: "Neatly organized court boundaries with spectator seating.",
            tag: "Court Seating",
          },
        ],
      },
      {
        id: "booth-setup",
        slug: "booth-setup",
        title: "Booth Setup & Registration Stalls",
        hindiTitle: "रजिस्ट्रेशन बूथ व स्पॉन्सर कियोस्क",
        tagline: "Team Check-In Kiosks, Medical First Aid & Sponsor Enclosures",
        description:
          "Branded registration booths with counters and queue managers, official umpire match desk, medical first-aid recovery station, and sponsor promotional kiosks.",
        coverImage: "/events/local-sports-4.jpg",
        features: [
          "Custom printed entry gate archway with tournament branding",
          "Player registration counters with team badge issuing tables",
          "Dedicated medical & physiotherapist first-aid recovery canopy",
          "Sponsor promotional kiosks with power supply & banner frames",
          "Hydration station canopies with insulated water dispensers",
          "Merchandise and souvenir retail stall framework",
        ],
        customOptions: [
          "Custom fabricated wooden kiosk booths with lockable counters",
          "Branded backdrop photo walls for player profile pictures",
          "Security bag-check & metal detector entrance canopies",
        ],
        gallery: [
          {
            id: "s-bth-1",
            src: "/events/local-sports-4.jpg",
            title: "Ground Entrance & Registration Booth",
            caption: "Entryway registration kiosks for teams and officials.",
            tag: "Check-in Booth",
          },
          {
            id: "s-bth-2",
            src: "/events/local-sports-3.jpg",
            title: "Sponsor Enclosure & Boundary Perimeter",
            caption: "Sponsor flex perimeter boards and branded team stations.",
            tag: "Sponsor Stall",
          },
          {
            id: "s-bth-3",
            src: "/events/sports-local-turf.jpg",
            title: "Turf Entry Counter & Team Enclosure",
            caption: "Clean organized entry gates for sports grounds.",
            tag: "Turf Kiosk",
          },
          {
            id: "s-bth-4",
            src: "/events/event-17.png",
            title: "Official Tournament Helpdesk Canopy",
            caption: "Covered administration booth for coordinators and referees.",
            tag: "Admin Canopy",
          },
        ],
      },
      {
        id: "anchoring-umpiring",
        slug: "anchoring-umpiring",
        title: "Anchoring & Umpiring Setup",
        hindiTitle: "कमेंट्री बॉक्स व अंपायरिंग व्यवस्था",
        tagline: "Elevated Commentary Box, Scorer Tables & Match Official Stands",
        description:
          "Weather-shielded commentary enclosures with high-angle field view, official scoring tables, umpire stands, match timer countdown clocks, and professional wireless PA connectivity.",
        coverImage: "/events/local-sports-1.jpg",
        features: [
          "Elevated commentary booth with sunshade & 360-degree pitch visibility",
          "Official scorer desks with power outlets for digital scoring laptops & tablets",
          "Wireless umpire headsets / microphones for instant ground decisions",
          "Umpire stands / high-chairs for volleyball, cricket & tennis matches",
          "Manual and digital match scoreboard stands with quick-flip number tiles",
          "Official match ball, stump & whistle ceremonial handoff trays",
        ],
        customOptions: [
          "Professional Hindi & English sports anchors on request",
          "Digital electronic countdown LED timer display",
          "Walkie-talkie communication network for 10+ match ground officials",
        ],
        gallery: [
          {
            id: "s-anc-1",
            src: "/events/local-sports-1.jpg",
            title: "Cricket Commentary & Umpire Pitch Setup",
            caption: "Boundary roping, wicket marking, and commentary station.",
            tag: "Commentary",
          },
          {
            id: "s-anc-2",
            src: "/events/sports-cricket-1.jpg",
            title: "Match Center & Official Scorer Desk",
            caption: "Center ground visibility with dedicated scorer setup.",
            tag: "Scorer Desk",
          },
          {
            id: "s-anc-3",
            src: "/events/sports-local-wicketground.jpg",
            title: "Pitch Marking & Umpire Stands",
            caption: "White chalk line marking, boundary flags and umpire station.",
            tag: "Umpire Post",
          },
          {
            id: "s-anc-4",
            src: "/events/sports-pitch-wicket.jpg",
            title: "Tournament Pitch & Boundary Perimeter",
            caption: "Match boundary rope, flag posts, and 30-yard circle markers.",
            tag: "Pitch Setup",
          },
        ],
      },
    ],
  },
  {
    id: "kirtan-jagran",
    slug: "kirtan-jagran",
    name: "Kirtan & Jagran Events",
    hindiName: "गुरु कीर्तन, जागरण व भक्ति समागम",
    tagline: "Sacred Floral Darbars, Serene Acoustics & Auspicious Elegance",
    description:
      "Holy devotional setups for Guru Kirtan Samagams, Akhand Paath, Mata Ki Chowki, and Jagran nights. Designed with utmost spiritual reverence, fragrant flower shringars, pure acoustic sound, and spotless seating pandals.",
    heroImage: "/events/event-6.png",
    accentColor: "#ea580c",
    badgeText: "Devotional Samagam Collection",
    services: [
      {
        id: "darbar-decoration",
        slug: "darbar-decoration",
        title: "Darbar Decoration",
        hindiTitle: "श्री गुरु ग्रंथ साहिब / भगवती पुष्प दरबार",
        tagline: "Alaukik Flower Darbars, Palki Sahib Shringar & Holy Chandoa Canopies",
        description:
          "Divine floral shringar using fresh white lilies, carnations, Dutch roses, and mogra. Custom sacred Palki Sahib seva, Pavittar Chandoa floral ceilings, pushp varsha petal showers, and respectful warm ambient halos.",
        coverImage: "/events/event-6.png",
        features: [
          "Custom sacred flower darbar with multi-tiered floral pillars & steps",
          "Palki Sahib floral shringar with fresh garlands & fragrant mogra malas",
          "Pavitra Chandoa Sahib floral canopy and backdrop tapestry",
          "Auspicious Pushp Varsha (flower shower) mechanism for opening ardas",
          "Warm ambient stage lighting tuned for calm, peaceful devotion",
          "Clean spotless white chandni and velvet fabric draping",
        ],
        customOptions: [
          "Exotic orchid & lotus floral darbar",
          "Fragrant natural rose petal carpets for Prakash seva pathway",
          "Aromatherapy organic camphor & sandalwood mist",
        ],
        gallery: [
          {
            id: "kj-d-1",
            src: "/events/event-6.png",
            title: "Sacred Guru Kirtan Samagam Floral Darbar",
            caption: "Exquisite white and orange flower darbar for Guru Kirtan Samagam.",
            tag: "Floral Darbar",
          },
          {
            id: "kj-d-2",
            src: "/events/event-25.png",
            title: "Divine Floral Chandoa & Palki Sahib Shringar",
            caption: "Pavitra Palki Sahib decorated with fresh garlands and golden accents.",
            tag: "Palki Sahib",
          },
          {
            id: "kj-d-3",
            src: "/events/event-26.png",
            title: "Akhand Paath & Sukhmani Sahib Floral Stage",
            caption: "Peaceful floral backdrop and carpeted diwan stage.",
            tag: "Diwan Stage",
          },
          {
            id: "kj-d-4",
            src: "/events/event-7.png",
            title: "Divine Stage Arch & Warm Lighting",
            caption: "Illuminated floral archway with serene gold ambient glow.",
            tag: "Ambient Arch",
          },
        ],
      },
      {
        id: "tent-decoration",
        slug: "tent-decoration",
        title: "Tent & Decoration",
        hindiTitle: "पंडाल, शामियाना व वाटरप्रूफ टेंट",
        tagline: "Weatherproof Pandals, White Chandni & Sacred Floral Toran Gates",
        description:
          "Weather-resistant waterproof German hanger tents and traditional fabric shamianas. Pure white ceilings, auspicious entrance toran gates, and warm lantern-lit walkways for devotee comfort in all seasons.",
        coverImage: "/events/event-4.png",
        features: [
          "Waterproof heavy-duty pandal structures protecting from sun and rain",
          "Pristine white ceiling fabric draping with golden satin borders",
          "Grand welcoming entrance arch with fresh marigold & lily malas",
          "Decorative illuminated pathway lanterns and floor carpeting",
          "Well-ventilated sidewall mesh with cooling fan provisions",
          "Langar hall and prasad distribution canopy setups",
        ],
        customOptions: [
          "German hanger aluminum structures for 1,000 to 10,000 devotees",
          "Air-conditioned spiritual dome setup",
          "Custom entrance welcome gate replica designs",
        ],
        gallery: [
          {
            id: "kj-t-1",
            src: "/events/event-4.png",
            title: "Divine Floral Entrance Archway & Pandal",
            caption: "Sacred entrance gate welcoming devotees with marigold and rose garlands.",
            tag: "Welcome Arch",
          },
          {
            id: "kj-t-2",
            src: "/events/event-14.png",
            title: "Sacred Walkway with Brass Lamps & Marigolds",
            caption: "Illuminated pathway lined with warm lamps and floral rangolis.",
            tag: "Sacred Walkway",
          },
          {
            id: "kj-t-3",
            src: "/events/event-2.png",
            title: "Traditional Fabric Canopy Pandal",
            caption: "Weather-safe shamiana with traditional fabric roof canopies.",
            tag: "Fabric Pandal",
          },
          {
            id: "kj-t-4",
            src: "/events/event-12.png",
            title: "Grand Illuminated Entrance Gate",
            caption: "Illuminated entryway with warm fairy lights and fresh torans.",
            tag: "Entrance Gate",
          },
        ],
      },
      {
        id: "sound-lighting",
        slug: "sound-lighting",
        title: "Sound, Lighting & LED Screens",
        hindiTitle: "मधुर कीर्तन साउंड व भक्तिमय लाइटिंग",
        tagline: "Crystal-Clear Acoustic Sound Tuned for Raag, Harmonium & Tabla",
        description:
          "Acoustically tuned sound systems calibrated specifically for Gurbani kirtan, bhajans, harmonium, and tabla without harshness or feedback echo. Plus live camera relay LED screens so every devotee feels close.",
        coverImage: "/events/event-30.png",
        features: [
          "High-clarity acoustic speakers calibrated specifically for classical Raag kirtan",
          "Studio-grade Shure vocal & instrument condenser microphones for Raagi Jathas",
          "Zero-feedback digital sound mixing consoles with dedicated sound engineer",
          "High-definition LED video display screens for live Gurbani / bhajan relay",
          "Warm spiritual amber stage uplighting without harsh glare into eyes",
          "Silent generator electrical backup ensuring uninterrupted samagam",
        ],
        customOptions: [
          "Live satellite / YouTube worldwide telecast transmission",
          "Gurbani translation & subtitles relay monitor",
          "Wireless audio delay towers for distant tents & langar hall",
        ],
        gallery: [
          {
            id: "kj-s-1",
            src: "/events/event-30.png",
            title: "Acoustic Sound Production & Display Screens",
            caption: "Clarity-first sound system and large screens for devotee viewing.",
            tag: "Acoustic Sound",
          },
          {
            id: "kj-s-2",
            src: "/events/event-6.png",
            title: "Stage Audio & Devotional Ambience",
            caption: "Specialized vocal mics for harmonium and tabla artists.",
            tag: "Devotional Audio",
          },
          {
            id: "kj-s-3",
            src: "/events/event-3.png",
            title: "Stage Lighting & Truss Rigging",
            caption: "Subtle warm wash lights illuminating the holy darbar.",
            tag: "Warm Wash",
          },
          {
            id: "kj-s-4",
            src: "/events/event-5.png",
            title: "Live Video Screens for Devotees",
            caption: "High-definition video screens positioned across the pandal.",
            tag: "Live Relay",
          },
        ],
      },
      {
        id: "seating-arrangement",
        slug: "seating-arrangement",
        title: "Seating Arrangement",
        hindiTitle: "संगत बैठक व्यवस्था व कालीन",
        tagline: "Pristine White Chandni Mats, Foam Underlays & Organized Aisles",
        description:
          "Thoroughly sanitized and spotless white chandni floor matting with comfortable high-density foam underlays for long hours of spiritual meditation. Organized central aisles, elder chair enclosures, and shoe counter facilities.",
        coverImage: "/events/event-14.png",
        features: [
          "Spotless double-washed white chandni bedsheets covering entire diwan hall",
          "High-density foam mattress underlay for maximum knee & back comfort",
          "Wide central and perimeter aisles for respectful movement of devotees",
          "Dedicated elder & disabled seating chairs with cushioned armrests",
          "Organized wooden shoe-rack counter setups at all entry points",
          "Separate dignified seating arrangement for ladies and gents sangats",
        ],
        customOptions: [
          "Full wall-to-wall red or royal blue carpet covering",
          "Head-covering rumal & scarf distribution stalls",
          "Water seva mobile trolley service setup",
        ],
        gallery: [
          {
            id: "kj-st-1",
            src: "/events/event-14.png",
            title: "Clean Carpeted Entry & Seating Hall",
            caption: "Spotless carpeted flooring and welcoming lanterns for devotees.",
            tag: "Carpeted Diwan",
          },
          {
            id: "kj-st-2",
            src: "/events/event-6.png",
            title: "Sangat Carpeted Flooring & Stage Setup",
            caption: "Spacious seating floor directly in front of the holy darbar.",
            tag: "Diwan Seating",
          },
          {
            id: "kj-st-3",
            src: "/events/event-26.png",
            title: "Devotional Stage Floor Matting",
            caption: "Clean white fabric cushions and comfortable paath seating.",
            tag: "Paath Seating",
          },
          {
            id: "kj-st-4",
            src: "/events/event-4.png",
            title: "Covered Pandal Seating Arrangement",
            caption: "Spacious shaded environment for large devotional gatherings.",
            tag: "Pandal Hall",
          },
        ],
      },
    ],
  },
];

// Helper queries
export function getAllEventCategories(): EventCategoryDefinition[] {
  return EVENT_CATEGORIES;
}

export function getEventCategory(slug: string): EventCategoryDefinition | undefined {
  return EVENT_CATEGORIES.find((cat) => cat.slug === slug);
}

export function getService(categorySlug: string, serviceSlug: string): ServiceDefinition | undefined {
  const category = getEventCategory(categorySlug);
  if (!category) return undefined;
  return category.services.find((s) => s.slug === serviceSlug);
}

export function getFeaturedWorkByCategory(categorySlug: string): GalleryItem[] {
  const category = getEventCategory(categorySlug);
  if (!category) return [];
  // Return the first 2-3 items from each service to provide a rich, curated preview
  const items: GalleryItem[] = [];
  category.services.forEach((service) => {
    if (service.gallery.length > 0) {
      items.push(service.gallery[0]);
      if (service.gallery.length > 1) {
        items.push(service.gallery[1]);
      }
    }
  });
  return items.slice(0, 8);
}
