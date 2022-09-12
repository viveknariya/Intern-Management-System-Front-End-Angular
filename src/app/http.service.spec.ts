import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService, http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(HttpService);
    http = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {

    service.login({ userName: "test", password: "test" });

    expect(service.login)
    const req = http.expectOne("https://localhost:44316/api/InternRecord/login");
    expect(req.request.method).toEqual('POST');

  });
});
