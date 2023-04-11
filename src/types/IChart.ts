export interface IChart {
  isUrl?: boolean;
  url?: string;
  NoShortcuts?: {
    subject: string;
    introduce: string;
    explane: {
      explaneContext: string;
      url: string | null;
    };
    GitHub: string;
  };
}
