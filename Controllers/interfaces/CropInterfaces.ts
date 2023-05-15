import { Request } from 'express';

export interface Response {
  status: (arg0: number) => {
    (): any;
    new (): any;
    json: { (arg0: any): void; new (): any };
  };
  json: (arg0: any) => void;
}

export interface Crop {
  cropName: string;
  cropType: string;
  cropVariety: string;
  plantingDate: string;
  harvestingDate: string;
  description?: string;
  selectare?: boolean;
  imageUrl?: string;
  soilType?: string;
  climate?: string;
  ItShouldNotBeRepeatedForXYears: number;
  _id: string;
  pests?: string[];
  diseases?: string[];
  doNotRepeatForXYears: number;
  fertilizers?: string[];
  nitrogenSupply: number;
  nitrogenDemand: number;
  soilResidualNitrogen: number;
  id: number;
  name: string;
  fieldSize: number;
  numberOfDivisions: number;
  rotationName: string;
  crops: Crop[];
  division: number;
  maxYears: number;
}

export interface CropRotationInput {
  rotationName: string;
  crops: Crop[];
  fieldSize: number;
  numberOfDivisions: number;
  maxYears: number;
  ResidualNitrogenSupply?: number;
 
}

export interface Rotation {
  user: string;
  fieldSize: number;
  numberOfDivisions: number;
  rotationName: string;
  crops: Crop[];
  _id: string;
}

export interface CropRotationItem {
  division: number;
  crop: string | string[] | undefined | any;
  
  plantingDate: string;
  harvestingDate: string;
  divisionSize: number;
  nitrogenBalance?: number;
}

export interface CustomRequest extends Request {
  user: {
    id: number;
    rol: string;
  };
  body: Crop;
  params: {
    id: string;
    cropName: string;
  };
}