import Flight from "@/types/Flight.type"
import Destination from "@/types/Destination.type";
import Airline from "@/types/Airline.type";

export const USE_MOCK_DATA = true

type MockDestinationsObject = {
  [city: string]: Destination
}

const AmericanDestinations: MockDestinationsObject = {
  sf: {
    id: "sanfran-uuid",
    city: "San Francisco",
    state: "California",
    country: "United States of America",
    airportCode: "SFO",
    airportName: "San Francisco International Airport"
  },
  sea: {
    id: "seattle-uuid",
    city: "Seattle",
    state: "Washington",
    country: "United States of America",
    airportCode: "SEA",
    airportName: "Seattle-Tacoma International Airport"
  },
  la: {
    id: "la-uuid",
    city: "Los Angeles",
    state: "California",
    country: "United States of America",
    airportCode: "LAX",
    airportName: "Los Angeles International Airport"
  },
  jfk: {
    id: "jfk-uuid",
    city: "New York City",
    state: "New York",
    country: "United States of America",
    airportCode: "JFK",
    airportName: "John F. Kennedy International Airport"
  },
  pdx: {
    id: "pdx-uuid",
    city: "Portland",
    state: "Oregon",
    country: "United States of America",
    airportCode: "PDX",
    airportName: "Portland International Airport"
  }
}

const JapaneseDestinations: MockDestinationsObject = {
  hnd: {
    id: "hnd-uuid",
    city: "Tokyo",
    state: "Tokyo",
    country: "Japan",
    airportCode: "HND",
    airportName: "Tokyo International Airport (Haneda Airport)"
  },
  osaka: {
    id: "kansai-osaka-uuid",
    city: "Osaka",
    state: "Osaka",
    country: "Japan",
    airportCode: "KIX",
    airportName: "Kansai International Airport"
  },
  kyoto: {
    id: "kansai-kyoto-uuid",
    city: "Kyoto",
    state: "Kyoto",
    country: "Japan",
    airportCode: "KIX",
    airportName: "Kansai International Airport",
  },
  cts: {
    id: "sapporo-uuid",
    city: "Sapporo",
    state: "Hokkaido",
    country: "Japan",
    airportCode: "CTS",
    airportName: "New Chitose Airport"
  }
}

const HongKongDestinations: MockDestinationsObject = {
  hk: {
    id: "hk-uuid",
    city: "Hong Kong",
    state: null,
    country: "Hong Kong",
    airportCode: "HKG",
    airportName: "Hong Kong International Airport"
  }
}

const SingaporeDestinations: MockDestinationsObject = {
  sin: {
    id: "sin-uuid",
    city: "Singapore",
    state: null,
    country: "Singapore",
    airportCode: "SIN",
    airportName: "Singapore Changi Airport"
  }
}

export const MOCK_DESTINATIONS: Destination[] = [
  ...Object.values(AmericanDestinations),
  ...Object.values(JapaneseDestinations),
  ...Object.values(HongKongDestinations),
  ...Object.values(SingaporeDestinations)
]

const airlines: { [shorname: string]: Airline } = {
  ana: {
    id: "ana-uuid",
    name: "ANA",
    alliance: "Star Alliance"
  },
  delta: {
    id: "delta-uuid",
    name: "Delta",
    alliance: "SkyTeam"
  },
  aa: {
    id: "aa-uuid",
    name: "American Airlines",
    alliance: "Oneworld Alliance"
  },
}

export const MOCK_AIRLINES: Airline[] = Object.values(airlines)

export const MOCK_FLIGHTS: Flight[] = [
  {
    id: "sf-to-hnd-uuid",
    airline: airlines.ana,
    destination: {
      from: AmericanDestinations.sf,
      to: JapaneseDestinations.hnd
    }
  },
  {
    id: "sea-to-hnd-uuid",
    airline: airlines.delta,
    destination: {
      from: AmericanDestinations.sea,
      to: JapaneseDestinations.hnd
    },
  },
  {
    id: "pdx-to-sea-uuid",
    airline: airlines.delta,
    destination: {
      from: AmericanDestinations.pdx,
      to: AmericanDestinations.sea
    }
  },
  {
    id: "sea-to-hk-uuid",
    airline: airlines.aa,
    destination: {
      from: AmericanDestinations.sea,
      to: HongKongDestinations.hk
    }
  },
  {
    id: "hk-to-hnd-uuid",
    airline: airlines.ana,
    destination: {
      from: HongKongDestinations.hk,
      to: JapaneseDestinations.hnd
    }
  },
  {
    id: "sf-to-sin-uuid",
    airline: airlines.aa,
    destination: {
      from: AmericanDestinations.sf,
      to: SingaporeDestinations.sin
    }
  },
  {
    id: "sin-to-hnd-uuid",
    airline: airlines.ana,
    destination: {
      from: SingaporeDestinations.sin,
      to: JapaneseDestinations.hnd
    }
  },
  {
    id: "sf-to-sea-uuid",
    airline: airlines.delta,
    destination: {
      from: AmericanDestinations.sf,
      to: AmericanDestinations.sea
    }
  },
  {
    id: "sea-to-sf-uuid",
    airline: airlines.delta,
    destination: {
      from: AmericanDestinations.sea,
      to: AmericanDestinations.sf
    }
  }
]
