import { format } from "date-fns";
const patternPaxType = /^([A-Za-z]+):(\d+)$/;
export const formatDateWithDateFns = (date: string, formated?: string) => {
  return format(new Date(date), formated ? formated : "yyyy-MM-dd");
};

export const LIST_VARIABLES = {
  CLIENT_TYPE: [
    {
      value: "B2B",
      label: "Business-to-Business (B2B)",
    },
    {
      value: "DIRECT",
      label: "Direct Client",
    },
  ],
  ROOM_TYPE: [
    {
      value: "1 Person",
      label: "SINGLE ROOM",
    },
    {
      value: "2 peoples, 1 bed",
      label: "DOUBLE ROOM",
    },
    {
      value: "2 peoples, 2 separate beds",
      label: "TWIN ROOM",
    },
    {
      value: "3 peoples, 1 or 2 beds",
      label: "TRIPLE ROOM",
    },
    {
      value: "4 or more people, multiple beds",
      label: "FAMILY ROOM",
    },
  ],
  TRIP_INTEREST: [
    {
      value: "Must see attractions",
      label: "MUST SEE ATTRACTIONS",
    },
    {
      value: "Beach",
      label: "BEACH",
    },
    {
      value: "Local culture",
      label: "LOCAL CULTURE",
    },
    {
      value: "Wellness and spa",
      label: "WELLNESS & SPA",
    },
    {
      value: "Bird Watching",
      label: "BIRD WATCHING",
    },
    {
      value: "Biking",
      label: "BIKING",
    },
    {
      value: "Scuba diving",
      label: "SCUBA DIVING",
    },
    {
      value: "Snorkeling",
      label: "SNORKELING",
    },
    {
      value: "Trekking",
      label: "TREKKING",
    },
    {
      value: "Surf",
      label: "SURF",
    },
    {
      value: "Kite-surf",
      label: "KITE-SURF",
    },
    {
      value: "History",
      label: "HISTORY",
    },
  ],
  TRIP_REASON: [
    {
      value: "Friend trip",
      label: "FRIEND",
    },
    {
      value: "Road trip",
      label: "ROAD",
    },
    {
      value: "Solo trip",
      label: "SOLO",
    },
    {
      value: "Reunion",
      label: "REUNION",
    },
    {
      value: "Anniversary",
      label: "ANNIVERSARY",
    },
    {
      value: "Honeymoon",
      label: "HONEYMOON",
    },
    {
      value: "Family vacation",
      label: "FAMILY",
    },
  ],
  GENDER: [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ],
  PAX_TYPE: [
    {
      value: "ADT",
      label: "Adulte",
    },
    {
      value: "INF",
      label: "Enfant",
    },
    {
      value: "CNN",
      label: "Bébé",
    },
  ],
  ORDER_STATUS: [
    {
      value: "New",
      label: "New",
    },
    {
      value: "Confirmed",
      label: "Confirmed",
    },

    {
      value: "In Progress",
      label: "In Progress",
    },
    {
      value: "Pending",
      label: "Pending",
    },
    {
      value: "Blocked",
      label: "Blocked",
    },
  ],
};

export const clearPaxType = (pax_type: string) => {
  const countByPaxType = {
    adt: 0,
    cnn: 0,
    inf: 0,
    total: 0,
  };
  const spliter = pax_type.split(",");

  for (const item of spliter) {
    const result = patternPaxType.exec(item) as RegExpExecArray;
    const word = result[1].toLowerCase() as keyof typeof countByPaxType;
    const number = parseInt(result[2], 10);
    countByPaxType[word] = number;
    countByPaxType.total = countByPaxType.total + number;
  }

  return countByPaxType;
};
