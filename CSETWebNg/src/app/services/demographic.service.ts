////////////////////////////////
//
//   Copyright 2019 Battelle Energy Alliance, LLC
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.
//
////////////////////////////////
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



import { ConfigService } from './config.service';
import { Demographic } from '../models/assessment-info.model';

const headers = {
  headers: new HttpHeaders()
  .set('Content-Type', 'application/json'),
  params: new HttpParams()
};

@Injectable()
export class DemographicService {
  apiUrl: string;
  id: number;

  constructor(private http: HttpClient, private configSvc: ConfigService) {
    this.apiUrl = this.configSvc.apiUrl + 'Demographics/';
  }

  // calls to retrieve static data
  getAllSectors() {
    return this.http.get(this.apiUrl + 'Sectors');
  }

  getAllAssetValues() {
    return this.http.get(this.apiUrl + 'AssetValues');
  }

  getSizeValues() {
    return this.http.get(this.apiUrl + 'Size');
  }

  // calls to dependent data
  getIndustry(sectorId: number) {
    return this.http.get(this.apiUrl + 'Sectors_Industry/' + sectorId);
  }

  /**
   * GETs the screen data for this assessment.
   */
  getDemographic() {
    return this.http.get(this.apiUrl + '?id=' + this.id);
  }

  /**
   * POSTs the screen data to the API.
   * @param demographic
   */
  updateDemographic(demographic: Demographic) {
    this.http.post(this.apiUrl, JSON.stringify(demographic), headers)
    .subscribe();
  }
}