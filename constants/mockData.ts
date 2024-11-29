import Flight from "@/types/Flight.type"
import Destination from "@/types/Destination.type";
import Airline from "@/types/Airline.type";
import Ticket from "@/types/Ticket.type";

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

export const MOCK_AIRLINES: { [shortname: string]: Airline } = airlines

export const MOCK_FLIGHTS: { [id: string]: Flight } = {
  sfToHnd: {
    id: "sf-to-hnd-uuid",
    airline: airlines.ana,
    destination: {
      from: AmericanDestinations.sf,
      to: JapaneseDestinations.hnd
    }
  },
  seaToHnd: {
    id: "sea-to-hnd-uuid",
    airline: airlines.delta,
    destination: {
      from: AmericanDestinations.sea,
      to: JapaneseDestinations.hnd
    },
  },
  pdxToSea: {
    id: "pdx-to-sea-uuid",
    airline: airlines.delta,
    destination: {
      from: AmericanDestinations.pdx,
      to: AmericanDestinations.sea
    }
  },
  seaToHk: {
    id: "sea-to-hk-uuid",
    airline: airlines.aa,
    destination: {
      from: AmericanDestinations.sea,
      to: HongKongDestinations.hk
    }
  },
  hkToHnd: {
    id: "hk-to-hnd-uuid",
    airline: airlines.ana,
    destination: {
      from: HongKongDestinations.hk,
      to: JapaneseDestinations.hnd
    }
  },
  sfToSin: {
    id: "sf-to-sin-uuid",
    airline: airlines.aa,
    destination: {
      from: AmericanDestinations.sf,
      to: SingaporeDestinations.sin
    }
  },
  sfToHk: {
    id: "sf-to-hk-uuid",
    airline: airlines.aa,
    destination: {
      from: AmericanDestinations.sf,
      to: HongKongDestinations.hk
    }
  },
  sinToHnd: {
    id: "sin-to-hnd-uuid",
    airline: airlines.ana,
    destination: {
      from: SingaporeDestinations.sin,
      to: JapaneseDestinations.hnd
    }
  },
  sfToSea: {
    id: "sf-to-sea-uuid",
    airline: airlines.delta,
    destination: {
      from: AmericanDestinations.sf,
      to: AmericanDestinations.sea
    }
  },
  seaToSf: {
    id: "sea-to-sf-uuid",
    airline: airlines.delta,
    destination: {
      from: AmericanDestinations.sea,
      to: AmericanDestinations.sf
    }
  }
}


export const MOCK_TICKETS: Ticket[] = [
  {
    id: "sf.sea.hnd",
    flights: {
      0: MOCK_FLIGHTS.sfToSea,
    }
  },
  {
    id: "sf.sea.hnd",
    flights: {
      0: MOCK_FLIGHTS.sfToSea,
      1: MOCK_FLIGHTS.seaToHnd
    }
  },
  {
    id: "sf.hnd",
    flights: {
      0: MOCK_FLIGHTS.sfToHnd
    }
  },
  {
    id: "sf.hk",
    flights: {
      0: MOCK_FLIGHTS.sfToHk
    }
  },
  {
    id: "sf.hk.hnd",
    flights: {
      0: MOCK_FLIGHTS.sfToHk,
      1: MOCK_FLIGHTS.hkToHnd
    }
  },
  {
    id: "sf.sin",
    flights: {
      0: MOCK_FLIGHTS.sfToSin
    }
  },
  {
    id: "sf.sin.hnd",
    flights: {
      0: MOCK_FLIGHTS.sfToSin,
      1: MOCK_FLIGHTS.sinToHnd
    }
  },
  {
    id: "sea.sf",
    flights: {
      0: MOCK_FLIGHTS.seaToSf,
    }
  },
  {
    id: "sea.sf.hnd",
    flights: {
      0: MOCK_FLIGHTS.seaToSf,
      1: MOCK_FLIGHTS.seaToHnd
    }
  },
  {
    id: "sea.hk",
    flights: {
      0: MOCK_FLIGHTS.seaToHk,
    }
  },
  {
    id: "sea.hk.hnd",
    flights: {
      0: MOCK_FLIGHTS.seaToHk,
      1: MOCK_FLIGHTS.hkToHnd
    }
  },
  {
    id: "pdx.sea",
    flights: {
      0: MOCK_FLIGHTS.pdxToSea,
    }
  },
  {
    id: "pdx.sea.hnd",
    flights: {
      0: MOCK_FLIGHTS.pdxToSea,
      1: MOCK_FLIGHTS.seaToHnd
    }
  },
  {
    id: "pdx.sea.hk",
    flights: {
      0: MOCK_FLIGHTS.pdxToSea,
      1: MOCK_FLIGHTS.seaToHk
    }
  },
  {
    id: "pdx.sea.hk.hnd",
    flights: {
      0: MOCK_FLIGHTS.pdxToSea,
      1: MOCK_FLIGHTS.seaToHk,
      2: MOCK_FLIGHTS.hkToHnd
    }
  },
  {
    id: "pdx.sea.sf",
    flights: {
      0: MOCK_FLIGHTS.pdxToSea,
      1: MOCK_FLIGHTS.seaToSf,
    }
  },
  {
    id: "pdx.sea.sf.hk",
    flights: {
      0: MOCK_FLIGHTS.pdxToSea,
      1: MOCK_FLIGHTS.seaToSf,
      2: MOCK_FLIGHTS.sfToHk,
    }
  },
  {
    id: "pdx.sea.sf.hk.hnd",
    flights: {
      0: MOCK_FLIGHTS.pdxToSea,
      1: MOCK_FLIGHTS.seaToSf,
      2: MOCK_FLIGHTS.sfToHk,
      3: MOCK_FLIGHTS.hkToHnd
    }
  },
  {
    id: "pdx.sea.sf.sin",
    flights: {
      0: MOCK_FLIGHTS.pdxToSea,
      1: MOCK_FLIGHTS.seaToSf,
      2: MOCK_FLIGHTS.sfToSin,
    }
  },
  {
    id: "pdx.sea.sf.sin.hnd",
    flights: {
      0: MOCK_FLIGHTS.pdxToSea,
      1: MOCK_FLIGHTS.seaToSf,
      2: MOCK_FLIGHTS.sfToSin,
      3: MOCK_FLIGHTS.sinToHnd
    }
  },
  {
    id: "hk.hnd",
    flights: {
      0: MOCK_FLIGHTS.hkToHnd
    }
  }
]
