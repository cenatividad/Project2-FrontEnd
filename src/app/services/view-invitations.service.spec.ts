import { TestBed } from '@angular/core/testing';

import { ViewInvitationsService } from './view-invitations.service';

describe('ViewInvitationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewInvitationsService = TestBed.get(ViewInvitationsService);
    expect(service).toBeTruthy();
  });
});
