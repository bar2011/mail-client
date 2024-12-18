/**
 * Declares global types for the project.
 * Declare here only types which are used in at least two different pages
 * or types which will be moved eventually to the server
 */

type Message = {
  author: string;
  sentDate: Date;
  title: string;
  message: string;
  // attachments?: string[]; // TODO: allow attachments
};

type Conversation = {
  summary: string;
  isFinished: boolean;
  uuid: string;
  text: [Message, ...Message[]];
};

interface GeneralFilter {
  filter:
    | { type: "latest-author"; searchedAuthors: string[] }
    | { type: "from-date"; date: Date }
    | { type: "is-finished"; searchedState: boolean }
    | { type: "title"; searchedKeywords: string[] };
  // icon?: string; // TODO: allow icons
  color: string;
}

interface FilterWithChild extends GeneralFilter {
  childFilterGroup: FilterGroup;
  title?: never;
}

interface FilterWithoutChild extends GeneralFilter {
  childFilterGroup?: never;
  title: string;
}

type Filter = FilterWithChild | FilterWithoutChild;

type FilterGroup = {
  name: string;
  filters: Filter[];
  includesOther: boolean;
};

export type { FilterGroup, Conversation };
