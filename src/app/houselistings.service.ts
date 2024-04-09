import { Injectable } from '@angular/core';
import { HouseListings } from './houselistings';


@Injectable({
  providedIn: 'root',
})
export class HouselistingsService {
  getHouses(): HouseListings[] {
    return [
      {
        title: 'Cozy Loft in Downtown Manhattan',
        favorite: true,
        views: 'Amazing Views',
        houseId: '1',
        propertyType: 'house',
        location: 'New York City, NY - SoHo neighborhood',
        description:
          'This charming loft offers stunning views of the city skyline and is located within walking distance of top restaurants and attractions.',
        accommodation: {
          bedrooms: 2,
          bathrooms: 2,
          guests: 4,
        },
        size: '1,000 square feet',
        layout: 'Open-plan living area with kitchen, dining, and lounge areas',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating', 'Air conditioning'],
          outdoor: ['Private balcony with seating area'],
        },
        photos: [
          '../assets/images/az1.jpg',
          '../assets/images/az2.jfif',
          '../assets/images/az3.jfif',
          '../assets/images/az4.jfif',
          '../assets/images/az5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2024-04-04', '2024-04-05', '2024-04-06', '2024-04-07', '2024-04-08'],
        },
        pricing: {
          priceAfterTax: '$116',
          priceBeforeTax: '$100',
          cleaningFee: '$50',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Quiet hours after 10 PM',
        ],
        reviews: {
          starRating: 4.8,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 5,
              comment: 'Great location, clean and comfortable space.',
            },
            {
              username: 'Guest2',
              rating: 4.5,
              comment: 'Lovely loft with amazing views!',
            },
          ],
          hostResponse:
            'Thank you for your kind words! We look forward to hosting you again.',
        },
        host: {
          name: 'John Smith',
           profilePicture: '../assets/images/avatar.png',
          description: 'Experienced host with a passion for hospitality.',
          responseRate: 'Responds within an hour',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Instant book available',
          contactInfo: {
            phone: '123-456-7890',
            email: 'john@example.com',
          },
          checkInOut: 'Self-check-in with lockbox',
        },
        additionalInfo:
          'Conveniently located near subway stations, grocery stores, and popular attractions such as Central Park and Times Square.',
      },
      //////////////////////////////
      {
        title: 'Modern Apartment in Downtown LA',
        favorite: true,
        views: 'Surfing',
        houseId: '2',
        propertyType: 'apartment',
        location: 'Los Angeles, CA - Downtown district',
        description:
          'This modern apartment offers stunning views of the city skyline and is located within walking distance of top restaurants and attractions.',
        accommodation: {
          bedrooms: 2,
          bathrooms: 1,
          guests: 4,
        },
        size: '1,200 square feet',
        layout: 'Open-plan living area with kitchen, dining, and lounge areas',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating', 'Air conditioning'],
          outdoor: ['Smart TV', 'Netflix', 'Board games'],
        },
        photos: [
          '../assets/images/surf3.jpg',
          '../assets/images/surf1.jfif',
          '../assets/images/surf2.jfif',
          '../assets/images/surf4.jfif',
          '../assets/images/surf5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2024-04-03', '2024-04-04', '2024-04-05'],
        },
        pricing: {
          priceAfterTax: '$1,568',
          priceBeforeTax: '$1,450',
          cleaningFee: '$50',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Quiet hours after 10 PM',
        ],
        reviews: {
          starRating: 4.9,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 5,
              comment: 'Beautiful apartment with great amenities!',
            },
            {
              username: 'Guest2',
              rating: 4.5,
              comment: 'Perfect location and very clean space.',
            },
          ],
          hostResponse:
            'Thank you for your kind words! We strive to provide an exceptional stay for our guests.',
        },
        host: {
          name: 'Jane Doe',
           profilePicture: '../assets/images/avatar.png',
          description: 'Experienced host with a passion for hospitality.',
          responseRate: 'Responds within a few hours',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Instant book available',
          contactInfo: {
            phone: '123-456-7890',
            email: 'jane@example.com',
          },
          checkInOut: 'Self-check-in with lockbox',
        },
        additionalInfo:
          'Conveniently located near public transportation and major attractions.',
      },
      ////////////////////////////////
      {
        title: 'Spacious Family Home in Suburban Neighborhood',
        favorite: false,
        views: 'Trending',
        houseId: '3',
        propertyType: 'house',
        location: 'Seattle, WA - Suburban neighborhood',
        description:
          'This spacious family home is perfect for large groups or families. It features a backyard with a BBQ grill and is located in a quiet suburban neighborhood.',
        accommodation: {
          bedrooms: 4,
          bathrooms: 2.5,
          guests: 8,
        },
        size: '2,500 square feet',
        layout:
          'Multiple living areas with a fully equipped kitchen, dining room, and cozy bedrooms',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating', 'Air conditioning'],
          outdoor: ['Backyard', 'BBQ grill', 'Patio furniture'],
        },
        photos: [
          '../assets/images/trend1.jfif',
          '../assets/images/trend2.jfif',
          '../assets/images/trend3.jfif',
          '../assets/images/trend4.jfif',
          '../assets/images/trend5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2024-05-10', '2024-05-11', '2024-05-12', '2024-05-15'],
        },
        pricing: {
          priceAfterTax: '$282',
          priceBeforeTax: '$252',
          cleaningFee: '$100',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No parties or events',
          'Quiet hours after 10 PM',
        ],
        reviews: {
          starRating: 4.7,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 4.5,
              comment: 'Great house with plenty of space for everyone!',
            },
            {
              username: 'Guest2',
              rating: 5,
              comment: 'Beautiful neighborhood and comfortable accommodations.',
            },
          ],
          hostResponse:
            "Thank you for your feedback! We're glad you enjoyed your stay.",
        },
        host: {
          name: 'John Smith',
           profilePicture: '../assets/images/avatar.png',
          description: 'Friendly host who loves sharing our home with guests.',
          responseRate: 'Responds within a day',
          superhostStatus: false,
        },
        bookingInfo: {
          bookingOptions: 'Request to book',
          contactInfo: {
            phone: '123-456-7890',
            email: 'john@example.com',
          },
          checkInOut: 'Check-in: 3 PM, Check-out: 11 AM',
        },
        additionalInfo:
          'Close to parks, shops, and restaurants. Easy access to downtown Seattle.',
      },
      ///////////////////////////
      {
        title: 'Cozy Bara in the Heart of Tokyo',
        favorite: false,
        views: 'New',
        houseId: '4',
        propertyType: 'bara',
        location: 'Tokyo, Japan - City center',
        description:
          'Experience traditional Japanese hospitality in this cozy bara located in the heart of Tokyo. Close to shopping, dining, and entertainment.',
        accommodation: {
          bedrooms: 1,
          bathrooms: 1,
          guests: 2,
        },
        size: '300 square feet',
        layout: 'Intimate seating area with a bar counter and a small stage',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating'],
          outdoor: [],
        },
        photos: [
          '../assets/images/new1.jfif',
          '../assets/images/new2.jfif',
          '../assets/images/new3.jfif',
          '../assets/images/new4.jfif',
          '../assets/images/new5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2024-06-01', '2024-06-02', '2024-06-03'],
        },
        pricing: {
          priceAfterTax: '$114',
          priceBeforeTax: '$110',
          cleaningFee: '$20',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No outside food or drinks',
          'Enjoy the entertainment responsibly',
        ],
        reviews: {
          starRating: 4.5,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 4,
              comment: 'Unique experience, great drinks!',
            },
            {
              username: 'Guest2',
              rating: 5,
              comment: 'Fantastic atmosphere and friendly staff.',
            },
          ],
          hostResponse:
            "Thank you for your visit! We're glad you enjoyed your time at our bara.",
        },
        host: {
          name: 'Yuki Tanaka',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Passionate bartender with years of experience in mixology.',
          responseRate: 'Responds within a few hours',
          superhostStatus: false,
        },
        bookingInfo: {
          bookingOptions: 'Instant book available',
          contactInfo: {
            phone: '123-456-7890',
            email: 'yuki@example.com',
          },
          checkInOut: 'Check-in: 6 PM, Check-out: 11 PM',
        },
        additionalInfo:
          'Live music performances every Friday and Saturday night.',
      },
      //////////////////////////////////////
      {
        title: 'Cozy Mountain Cabin with Stunning Views',
        favorite: true,
        views: 'Earth Homes',
        houseId: '5',
        propertyType: 'cabin',
        location: 'Banff, Alberta - Canadian Rockies',
        description:
          'Escape to this cozy mountain cabin nestled in the breathtaking Canadian Rockies. Enjoy panoramic views, serene surroundings, and access to outdoor adventures year-round.',
        accommodation: {
          bedrooms: 2,
          bathrooms: 1,
          guests: 4,
        },
        size: '800 square feet',
        layout:
          'Rustic cabin with a spacious living area, fireplace, fully equipped kitchen, and outdoor deck',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating', 'Fireplace'],
          outdoor: [
            'Deck with mountain views',
            'Fire pit',
            'Hiking trails nearby',
          ],
        },
        photos: [
          '../assets/images/earth1.jfif',
          '../assets/images/earth2.jfif',
          '../assets/images/earth3.jfif',
          '../assets/images/earth4.jfif',
          '../assets/images/earth5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2025-05-01', '2025-05-02', '2025-05-03'],
        },
        pricing: {
          priceAfterTax: '$271',
          priceBeforeTax: '$252',
          cleaningFee: '$50',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Quiet hours after 10 PM',
        ],
        reviews: {
          starRating: 4.8,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 4.5,
              comment:
                'A perfect mountain retreat! The cabin was cozy and the views were spectacular.',
            },
            {
              username: 'Guest2',
              rating: 5,
              comment:
                'Absolutely stunning! The cabin exceeded all expectations and the surroundings were breathtaking.',
            },
          ],
          hostResponse:
            "Thank you for your wonderful review! We're thrilled that you enjoyed your stay at our mountain cabin.",
        },
        host: {
          name: 'Sophie Anderson',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Nature lover and outdoor enthusiast dedicated to providing memorable experiences for guests.',
          responseRate: 'Responds within a day',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Instant book available',
          contactInfo: {
            phone: '123-456-7890',
            email: 'sophie@example.com',
          },
          checkInOut: 'Check-in: 3 PM, Check-out: 11 AM',
        },
        additionalInfo:
          'Explore nearby national parks, lakes, and scenic drives in the Canadian Rockies.',
      },
      ////////////////////////////
      {
        title: 'Luxury Yacht on the French Riviera',
        favorite: true,
        views: 'Farms',
        houseId: '7',
        propertyType: 'boat',
        location: 'Nice, France - Port area',
        description:
          'Experience the ultimate luxury on this beautiful yacht docked in the scenic port of Nice. Perfect for a romantic getaway or a memorable vacation with friends.',
        accommodation: {
          bedrooms: 3,
          bathrooms: 2,
          guests: 6,
        },
        size: '1,500 square feet',
        layout:
          'Spacious deck area, elegant living quarters, and modern amenities throughout',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating', 'Air conditioning'],

          outdoor: ['Smart TV', 'DVD player', 'Sound system'],
        },
        photos: [
          '../assets/images/farm1.jfif',
          '../assets/images/farm2.jfif',
          '../assets/images/farm3.jfif',
          '../assets/images/farm4.jfif',
          '../assets/images/farm5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2024-07-01', '2024-07-02', '2024-07-03'],
        },
        pricing: {
          priceAfterTax: '$452',
          priceBeforeTax: '$445',
          cleaningFee: '$100',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Respect the yacht and its belongings',
        ],
        reviews: {
          starRating: 4.8,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 5,
              comment:
                'Unforgettable experience! The yacht exceeded all expectations.',
            },
            {
              username: 'Guest2',
              rating: 4.5,
              comment:
                'Stunning views and impeccable service. Highly recommend!',
            },
          ],
          hostResponse:
            'Thank you for your kind words! It was a pleasure having you aboard.',
        },
        host: {
          name: 'Sophie Martin',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Experienced sailor and passionate host dedicated to providing exceptional experiences.',
          responseRate: 'Responds within a day',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Request to book',
          contactInfo: {
            phone: '123-456-7890',
            email: 'sophie@example.com',
          },
          checkInOut: 'Check-in: 3 PM, Check-out: 11 AM',
        },
        additionalInfo:
          'Take advantage of optional sailing trips along the French Riviera.',
      },
      ////////////////////////
      {
        title: 'Charming B&B in the English Countryside',
        favorite: false,
        views: 'Islands',
        houseId: '8',
        propertyType: 'Bed and breakfast',
        location: 'Cotswolds, UK - Rural setting',
        description:
          'Escape to the idyllic English countryside and experience warm hospitality at this charming bed and breakfast. Surrounded by picturesque landscapes and quaint villages.',
        accommodation: {
          bedrooms: 4,
          bathrooms: 4,
          guests: 8,
        },
        size: '3,000 square feet',
        layout:
          'Comfortable guest rooms with ensuite bathrooms, cozy common areas, and a beautiful garden',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating'],
          outdoor: ['Garden', 'Patio', 'Outdoor seating'],
        },
        photos: [
          '../assets/images/island2.jfif',
          '../assets/images/island1.jfif',
          '../assets/images/island3.jfif',
          '../assets/images/island4.jfif',
          '../assets/images/island5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2024-08-01', '2024-08-02', '2024-08-03'],
        },
        pricing: {
          priceAfterTax: '$141',
          priceBeforeTax: '$111',
          cleaningFee: '$30',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Quiet hours after 10 PM',
        ],
        reviews: {
          starRating: 4.9,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 5,
              comment:
                'Absolutely delightful! Wonderful hosts and a beautiful property.',
            },
            {
              username: 'Guest2',
              rating: 5,
              comment:
                'A perfect retreat in the countryside. Highly recommend!',
            },
          ],
          hostResponse:
            "Thank you for your lovely review! We're delighted that you enjoyed your stay.",
        },
        host: {
          name: 'Emma Wilson',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Passionate innkeeper dedicated to providing a memorable stay for guests.',
          responseRate: 'Responds within a few hours',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Instant book available',
          contactInfo: {
            phone: '123-456-7890',
            email: 'emma@example.com',
          },
          checkInOut: 'Check-in: 3 PM, Check-out: 11 AM',
        },
        additionalInfo:
          'Explore nearby hiking trails, historic landmarks, and charming villages.',
      },
      //////////////////////////
      {
        title: 'Unique Dome Retreat in the Desert',
        favorite: true,
        views: 'Beachfront',
        houseId: '9',
        propertyType: 'dome',
        location: 'Joshua Tree, CA - Desert landscape',
        description:
          'Escape to this unique dome retreat nestled in the scenic desert landscape of Joshua Tree. Perfect for stargazing and experiencing the beauty of nature.',
        accommodation: {
          bedrooms: 1,
          bathrooms: 1,
          guests: 2,
        },
        size: '400 square feet',
        layout:
          'Cozy living space with a comfortable bed, kitchenette, and panoramic views',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating', 'Air conditioning'],
          outdoor: ['Private patio', 'Outdoor seating', 'Fire pit'],
        },
        photos: [
          '../assets/images/beach1.jfif',
          '../assets/images/beach2.jfif',
          '../assets/images/beach3.jfif',
          '../assets/images/beach4.jfif',
          '../assets/images/beach5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2024-09-01', '2024-09-02', '2024-09-03'],
        },
        pricing: {
          priceAfterTax: '$263',
          priceBeforeTax: '$255',
          cleaningFee: '$25',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Respect the desert environment',
        ],
        reviews: {
          starRating: 4.6,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 4.5,
              comment:
                'Incredible experience! The dome is truly unique and the views are breathtaking.',
            },
            {
              username: 'Guest2',
              rating: 5,
              comment:
                'A magical retreat in the desert. Highly recommend for a peaceful getaway.',
            },
          ],
          hostResponse:
            "Thank you for your wonderful review! We're thrilled that you enjoyed your stay.",
        },
        host: {
          name: 'Mark Johnson',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Passionate about sustainable living and sharing the beauty of the desert with guests.',
          responseRate: 'Responds within a day',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Instant book available',
          contactInfo: {
            phone: '123-456-7890',
            email: 'mark@example.com',
          },
          checkInOut: 'Check-in: 4 PM, Check-out: 10 AM',
        },
        additionalInfo:
          'Enjoy hiking, rock climbing, and starlit nights in Joshua Tree National Park.',
      },
      /////////////////////////
      {
        title: 'Historic Tower in Tuscany',
        favorite: true,
        views: 'Design',
        houseId: '10',
        propertyType: 'tower',
        location: 'Florence, Italy - Tuscan countryside',
        description:
          'Immerse yourself in history and romance at this beautifully restored historic tower in the heart of the Tuscan countryside. Enjoy panoramic views of the surrounding vineyards and olive groves.',
        accommodation: {
          bedrooms: 2,
          bathrooms: 1,
          guests: 4,
        },
        size: '800 square feet',
        layout:
          'Three levels of living space including bedrooms, a cozy living room, and a rooftop terrace',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating'],
          outdoor: ['Rooftop terrace', 'Outdoor seating'],
        },
        photos: [
          '../assets/images/design1.jfif',
          '../assets/images/design2.jfif',
          '../assets/images/design3.jfif',
          '../assets/images/design4.jfif',
          '../assets/images/design5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2024-10-01', '2024-10-02', '2024-10-03'],
        },
        pricing: {
          priceAfterTax: '$1,126',
          priceBeforeTax: '$1,095',
          cleaningFee: '$50',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Respect the historic property',
        ],
        reviews: {
          starRating: 4.9,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 5,
              comment:
                'A truly magical experience! The tower exceeded all expectations.',
            },
            {
              username: 'Guest2',
              rating: 4.5,
              comment:
                'Stunning views and charming accommodations. Would love to visit again!',
            },
          ],
          hostResponse:
            "Thank you for your kind words! We're delighted that you enjoyed your stay at our historic tower.",
        },
        host: {
          name: 'Giulia Rossi',
           profilePicture: '../assets/images/avatar.png',
          description:
            "Passionate about preserving Italy's cultural heritage and sharing it with guests.",
          responseRate: 'Responds within a few hours',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Request to book',
          contactInfo: {
            phone: '123-456-7890',
            email: 'giulia@example.com',
          },
          checkInOut: 'Check-in: 2 PM, Check-out: 11 AM',
        },
        additionalInfo:
          'Experience wine tasting tours, cooking classes, and cultural excursions in the nearby towns of Florence and Siena.',
      },
      ////////////////////
      {
        title: 'Luxury Boutique Hotel in Manhattan',
        favorite: false,
        views: 'Cabins',
        houseId: '11',
        propertyType: 'Hotel',
        location: 'New York City, NY - Manhattan',
        description:
          'Indulge in luxury and sophistication at this boutique hotel located in the heart of Manhattan. Experience impeccable service, stylish accommodations, and unparalleled views of the city skyline.',
        accommodation: {
          bedrooms: 50,
          bathrooms: 50,
          guests: 100,
        },
        size: 'Varies by room type',
        layout: 'Elegant guest rooms with modern amenities and chic decor',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating', 'Air conditioning'],
          outdoor: ['Room service', 'Concierge', 'Valet parking'],
        },
        photos: [
          '../assets/images/cabin1.jfif',
          '../assets/images/cabin2.jfif',
          '../assets/images/cabin3.jfif',
          '../assets/images/cabin4.jfif',
          '../assets/images/cabin5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2024-11-01', '2024-11-02', '2024-11-03'],
        },
        pricing: {
          priceAfterTax: '$126',
          priceBeforeTax: '$100',
          cleaningFee: '$12',
          taxes: 'Applicable taxes and fees',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Check-in: 3 PM, Check-out: 12 PM',
        ],
        reviews: {
          starRating: 4.7,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 4.5,
              comment:
                'Exceptional service and elegant accommodations. Will definitely return!',
            },
            {
              username: 'Guest2',
              rating: 5,
              comment:
                'An unforgettable stay in the heart of the city. Highly recommend!',
            },
          ],
          hostResponse:
            "Thank you for choosing our hotel! We're thrilled that you enjoyed your stay and look forward to welcoming you back.",
        },
        host: {
          name: 'Erik van der Meer',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Proud Amsterdammer and passionate host dedicated to providing memorable experiences for guests.',
          responseRate: 'Responds within a day',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Request to book',
          contactInfo: {
            phone: '123-456-7890',
            email: 'erik@example.com',
          },
          checkInOut: 'Check-in: 2 PM, Check-out: 11 AM',
        },
        additionalInfo:
          'Located within walking distance of top attractions, shopping, and dining destinations.',
      },
      //////////////////////////
      {
        title: 'Charming Houseboat on Amsterdam Canals',
        favorite: false,
        views: 'Campers',
        houseId: '12',
        propertyType: 'houseboat',
        location: 'Amsterdam, Netherlands - Canal district',
        description:
          "Experience the unique charm of Amsterdam from the comfort of this cozy houseboat located on the picturesque canals. Enjoy stunning views, peaceful surroundings, and easy access to the city's attractions.",
        accommodation: {
          bedrooms: 2,
          bathrooms: 1,
          guests: 4,
        },
        size: '600 square feet',
        layout: 'Living area, kitchenette, bedrooms, and outdoor deck',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating'],
          outdoor: [],
        },
        photos: [
          '../assets/images/camp1.jfif',
          '../assets/images/camp2.jfif',
          '../assets/images/camp3.jfif',
          '../assets/images/camp4.jfif',
          '../assets/images/camp5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2024-12-01', '2024-12-02', '2024-12-03'],
        },
        pricing: {
          priceAfterTax: '$247',
          priceBeforeTax: '$240',
          cleaningFee: '$50',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Quiet hours after 10 PM',
        ],
        reviews: {
          starRating: 4.8,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 5,
              comment:
                'A truly unique experience! The houseboat was charming and comfortable.',
            },
            {
              username: 'Guest2',
              rating: 4.5,
              comment:
                'Fantastic location and cozy accommodations. Loved watching the boats go by!',
            },
          ],
          hostResponse:
            "Thank you for your kind words! We're delighted that you enjoyed your stay aboard our houseboat.",
        },
        host: {
          name: 'Erik van der Meer',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Proud Amsterdammer and passionate host dedicated to providing memorable experiences for guests.',
          responseRate: 'Responds within a day',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Request to book',
          contactInfo: {
            phone: '123-456-7890',
            email: 'erik@example.com',
          },
          checkInOut: 'Check-in: 2 PM, Check-out: 11 AM',
        },
        additionalInfo:
          "Explore Amsterdam's iconic landmarks, museums, and vibrant neighborhoods from your unique floating home.",
      },
      ///////////////////////
      {
        title: 'Secluded Glamping Tent in the Redwoods',
        favorite: true,
        views: 'Amazing Pools',
        houseId: '13',
        propertyType: 'tent',
        location: 'Big Sur, California - Redwood forest',
        description:
          'Experience the beauty of nature in comfort at this secluded glamping tent nestled in the majestic Redwood forest. Enjoy peaceful surroundings, starlit nights, and outdoor adventures.',
        accommodation: {
          bedrooms: 1,
          bathrooms: 1,
          guests: 2,
        },
        size: '200 square feet',
        layout:
          'Cozy tent with a comfortable bed, outdoor seating area, and access to shared facilities',
        amenities: {
          essential: ['Comfy bed', 'Outdoor seating'],
          outdoor: ['Shared bathroom', 'Fire pit'],
        },
        photos: [
          '../assets/images/pool1.jfif',
          '../assets/images/pool2.jfif',
          '../assets/images/pool3.jfif',
          '../assets/images/pool4.jfif',
          '../assets/images/pool5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2025-01-01', '2025-01-02', '2025-01-03'],
        },
        pricing: {
          priceAfterTax: '$381',
          priceBeforeTax: '$352',
          cleaningFee: '$20',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Quiet hours after 10 PM',
        ],
        reviews: {
          starRating: 4.7,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 4.5,
              comment:
                'A magical experience! The tent was cozy and the surroundings were breathtaking.',
            },
            {
              username: 'Guest2',
              rating: 5,
              comment:
                'Perfect getaway in the Redwoods. Highly recommend for nature lovers!',
            },
          ],
          hostResponse:
            "Thank you for your lovely review! We're delighted that you enjoyed your glamping experience.",
        },
        host: {
          name: 'Sarah Miller',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Nature enthusiast and experienced camper dedicated to providing memorable outdoor experiences.',
          responseRate: 'Responds within a day',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Instant book available',
          contactInfo: {
            phone: '123-456-7890',
            email: 'sarah@example.com',
          },
          checkInOut: 'Check-in: 3 PM, Check-out: 11 AM',
        },
        additionalInfo:
          'Explore nearby hiking trails, scenic overlooks, and wildlife spotting opportunities.',
      },
      //////////////////////
      {
        title: 'Enchanting Treehouse Retreat in the Forest',
        favorite: true,
        views: 'OMG!',
        houseId: '15',
        propertyType: 'treehouse',
        location: 'Bali, Indonesia - Ubud',
        description:
          'Escape to this enchanting treehouse retreat nestled in the lush forest of Ubud. Experience a magical stay surrounded by nature, with stunning views and tranquil surroundings.',
        accommodation: {
          bedrooms: 1,
          bathrooms: 1,
          guests: 2,
        },
        size: '300 square feet',
        layout:
          'Cozy treehouse with a comfortable bed, outdoor seating area, and access to shared facilities',
        amenities: {
          essential: ['Comfy bed', 'Outdoor seating'],
          outdoor: ['Shared bathroom', 'Balcony with forest views'],
        },
        photos: [
          '../assets/images/alien1.jfif',
          '../assets/images/alien2.jfif',
          '../assets/images/alien3.jfif',
          '../assets/images/alien4.jfif',
          '../assets/images/alien5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2025-02-01', '2025-02-02', '2025-02-03'],
        },
        pricing: {
          priceAfterTax: '$1,250',
          priceBeforeTax: '$1,100',
          cleaningFee: '$30',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Respect the forest environment',
        ],
        reviews: {
          starRating: 4.9,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 5,
              comment:
                'Absolutely magical! The treehouse was even more beautiful than in the pictures.',
            },
            {
              username: 'Guest2',
              rating: 4.5,
              comment:
                'A truly unforgettable experience. Loved waking up to the sounds of the forest.',
            },
          ],
          hostResponse:
            "Thank you for your wonderful review! We're thrilled that you enjoyed your stay at our treehouse retreat.",
        },
        host: {
          name: 'Wayan Putra',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Local host and nature lover dedicated to providing authentic experiences for guests.',
          responseRate: 'Responds within a day',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Instant book available',
          contactInfo: {
            phone: '123-456-7890',
            email: 'wayan@example.com',
          },
          checkInOut: 'Check-in: 2 PM, Check-out: 10 AM',
        },
        additionalInfo:
          'Enjoy guided forest walks, yoga sessions, and traditional Balinese cuisine during your stay.',
      },
      //////////////////////////
      {
        title: 'Serene Yurt Retreat in the Mountains',
        favorite: false,
        views: 'Arctic',
        houseId: '16',
        propertyType: 'yurt',
        location: 'Asheville, North Carolina - Blue Ridge Mountains',
        description:
          'Escape to this serene yurt retreat nestled in the picturesque Blue Ridge Mountains. Experience peace and tranquility surrounded by nature, with stunning views and outdoor adventures.',
        accommodation: {
          bedrooms: 1,
          bathrooms: 1,
          guests: 2,
        },
        size: '200 square feet',
        layout:
          'Cozy yurt with a comfortable bed, outdoor seating area, and access to shared facilities',
        amenities: {
          essential: ['Comfy bed', 'Outdoor seating'],
          outdoor: ['Shared bathroom', 'Fire pit'],
        },
        photos: [
          '../assets/images/arctic1.jfif',
          '../assets/images/arctic2.jfif',
          '../assets/images/arctic3.jfif',
          '../assets/images/arctic4.jfif',
          '../assets/images/arctic5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2025-03-01', '2025-03-02', '2025-03-03'],
        },
        pricing: {
          priceAfterTax: '$475',
          priceBeforeTax: '$420',
          cleaningFee: '$20',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Quiet hours after 10 PM',
        ],
        reviews: {
          starRating: 4.6,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 4.5,
              comment:
                'A magical experience! The yurt was cozy and the surroundings were breathtaking.',
            },
            {
              username: 'Guest2',
              rating: 4.7,
              comment:
                'Perfect retreat in the mountains. Loved the peaceful ambiance and beautiful views!',
            },
          ],
          hostResponse:
            "Thank you for your lovely review! We're delighted that you enjoyed your stay at our yurt retreat.",
        },
        host: {
          name: 'Emily Harris',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Nature lover and outdoor enthusiast dedicated to providing memorable experiences for guests.',
          responseRate: 'Responds within a day',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Instant book available',
          contactInfo: {
            phone: '123-456-7890',
            email: 'emily@example.com',
          },
          checkInOut: 'Check-in: 3 PM, Check-out: 11 AM',
        },
        additionalInfo:
          'Explore nearby hiking trails, waterfalls, and scenic overlooks in the Blue Ridge Mountains.',
      },
      ////////////////////
      {
        title: 'Enchanting Castle Stay in the Scottish Highlands',
        favorite: false,
        views: 'Caves',
        houseId: '17',
        propertyType: 'castle',
        location: 'Inverness, Scotland - Highland region',
        description:
          'Step back in time and live like royalty at this enchanting castle nestled in the stunning Scottish Highlands. Immerse yourself in history, elegance, and breathtaking landscapes.',
        accommodation: {
          bedrooms: 8,
          bathrooms: 6,
          guests: 16,
        },
        size: '10,000 square feet',
        layout:
          'Grand reception rooms, elegant bedrooms, spacious grounds, and panoramic views',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating', 'Fireplaces'],
          outdoor: ['Gardens', 'Terraces', 'Private lake'],
        },
        photos: [
          '../assets/images/cave1.jfif',
          '../assets/images/cave2.jfif',
          '../assets/images/cave3.jfif',
          '../assets/images/cave4.jfif',
          '../assets/images/cave5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2025-04-01', '2025-04-02', '2025-04-03'],
        },
        pricing: {
          priceAfterTax: '$1,126',
          priceBeforeTax: '$1,100',
          cleaningFee: '$200',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Respect the historic property',
        ],
        reviews: {
          starRating: 4.9,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 5,
              comment:
                'A truly unforgettable experience! The castle exceeded all expectations.',
            },
            {
              username: 'Guest2',
              rating: 5,
              comment:
                'Absolutely magical! Every detail of the castle is exquisite.',
            },
          ],
          hostResponse:
            "Thank you for your wonderful review! We're delighted that you enjoyed your stay at our castle.",
        },
        host: {
          name: 'William MacLeod',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Proud owner of the castle and dedicated to preserving its history and heritage.',
          responseRate: 'Responds within a day',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Request to book',
          contactInfo: {
            phone: '123-456-7890',
            email: 'william@example.com',
          },
          checkInOut: 'Check-in: 4 PM, Check-out: 10 AM',
        },
        additionalInfo:
          'Enjoy guided tours of the castle, explore nearby hiking trails, and visit historic landmarks.',
      },
      /////////////////////
      {
        title: 'Cozy Mountain Cabin with Stunning Views',
        favorite: false,
        views: 'Tropical',
        houseId: '18',
        propertyType: 'cabin',
        location: 'Banff, Alberta - Canadian Rockies',
        description:
          'Escape to this cozy mountain cabin nestled in the breathtaking Canadian Rockies. Enjoy panoramic views, serene surroundings, and access to outdoor adventures year-round.',
        accommodation: {
          bedrooms: 2,
          bathrooms: 1,
          guests: 4,
        },
        size: '800 square feet',
        layout:
          'Rustic cabin with a spacious living area, fireplace, fully equipped kitchen, and outdoor deck',
        amenities: {
          essential: ['Free Wi-Fi', 'Heating', 'Fireplace'],
          outdoor: [
            'Deck with mountain views',
            'Fire pit',
            'Hiking trails nearby',
          ],
        },
        photos: [
          '../assets/images/tropic1.jfif',
          '../assets/images/tropic2.jfif',
          '../assets/images/tropic3.jfif',
          '../assets/images/tropic4.jfif',
          '../assets/images/tropic5.jfif',
        ],
        availability: {
          calendar: 'Available dates for booking',
          bookedDates: ['2025-05-01', '2025-05-02', '2025-05-03'],
        },
        pricing: {
          priceAfterTax: '$570',
          priceBeforeTax: '$520',
          cleaningFee: '$50',
          taxes: 'Applicable taxes',
        },
        houseRules: [
          'No smoking',
          'No pets allowed',
          'Quiet hours after 10 PM',
        ],
        reviews: {
          starRating: 4.8,
          guestReviews: [
            {
              username: 'Guest1',
              rating: 4.5,
              comment:
                'A perfect mountain retreat! The cabin was cozy and the views were spectacular.',
            },
            {
              username: 'Guest2',
              rating: 5,
              comment:
                'Absolutely stunning! The cabin exceeded all expectations and the surroundings were breathtaking.',
            },
          ],
          hostResponse:
            "Thank you for your wonderful review! We're thrilled that you enjoyed your stay at our mountain cabin.",
        },
        host: {
          name: 'Sophie Anderson',
           profilePicture: '../assets/images/avatar.png',
          description:
            'Nature lover and outdoor enthusiast dedicated to providing memorable experiences for guests.',
          responseRate: 'Responds within a day',
          superhostStatus: true,
        },
        bookingInfo: {
          bookingOptions: 'Instant book available',
          contactInfo: {
            phone: '123-456-7890',
            email: 'sophie@example.com',
          },
          checkInOut: 'Check-in: 3 PM, Check-out: 11 AM',
        },
        additionalInfo:
          'Explore nearby national parks, lakes, and scenic drives in the Canadian Rockies.',
      },
    ];
  }
}
