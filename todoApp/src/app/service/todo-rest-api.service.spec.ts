import { TestBed } from '@angular/core/testing';

import { TodoRestApiService } from './todo-rest-api.service';

describe('TodoRestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoRestApiService = TestBed.get(TodoRestApiService);
    expect(service).toBeTruthy();
  });
});
