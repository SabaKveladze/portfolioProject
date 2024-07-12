import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsModalComponent } from './posts-modal.component';

describe('PostsModalComponent', () => {
  let component: PostsModalComponent;
  let fixture: ComponentFixture<PostsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
