import { IProjectContentsValue } from "./IProjectContents";

export interface IProjectValue {
  index: number;
  title: string;
  contents: IProjectContentsValue[];
}
