export interface testsSelectorConstructorInterface {
  tempDataPath?: string;
  selectedTestsFileName?: string;
  specsPath?: string;
  specIdentifiers?: string[];
  maxFilesInDir?: number;
  testChoiceNumberFileName?: string;
  featureChoiceNumberFileName?: string;
}


export interface configInterface {
  tempDataPath: string;
  testChoiceNumberPath: string;
  featureChoiceNumberPath: string;
  specsPath: string;
  specIdentifiers: string[];
  selectedTestsFilePath: string;
  maxFilesInDir: number;
}
