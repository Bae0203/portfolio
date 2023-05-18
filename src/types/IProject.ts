import { IProjectContentsValue } from "./IProjectContents";

export interface IProjectValue {
  index: number;
  title: string;
  url?: string;
  isLink: boolean;
  contents?: IProjectContentsValue[];
}
