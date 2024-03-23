export interface HouseListings {
  title: string;
  favorite: boolean;
  views: string;
  houseId: string;
  propertyType: string;
  location: string;
  description: string;
  accommodation: {
    bedrooms: number;
    bathrooms: number;
    guests: number;
  };
  size: string;
  layout: string;
  amenities: {
    essential: string[];
    outdoor: string[];
  };
  photos: string[];
  availability: {
    calendar: string;
    bookedDates: string[];
  };
  pricing: {
    priceAfterTax: string;
    priceBeforeTax: string;
    cleaningFee: string;
    taxes: string;
  };
  houseRules: string[];
  reviews: {
    starRating: number;
    guestReviews: [
      {
        username: string;
        rating: number;
        comment: string;
      },
      {
        username: string;
        rating: number;
        comment: string;
      }
    ];
    hostResponse: string;
  };
  host: {
    name: string;
    profilePicture: string;
    description: string;
    responseRate: string;
    superhostStatus: boolean;
  };
  bookingInfo: {
    bookingOptions: string;
    contactInfo: {
      phone: string;
      email: string;
    };
    checkInOut: string;
  };
  additionalInfo: string;
}
